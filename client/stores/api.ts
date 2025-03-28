import { defineStore } from 'pinia';
import { Http } from '@/utils/http';
import { Share } from '~/share';
import router from '@/router';
import type { ApiResponse } from '~/apiresponse';

// this is a simple app, we'll just manage most our state globally for simplicity
export const useApiStore = defineStore('api', {
	state: () => ({
		isAuthed: document.cookie.includes('auth_expire'),

		// global load spiny!
		isPageLoaded: false,

		// options sidebar
		isOptionsActive: false,
		activeShare: undefined as Share | undefined,

		// todo: use these for an error popup
		error: false,
		errorMessage: '',
	}),
	actions:
	{
		// apis
		async getShares()
		{
			const result: ApiResponse = await Http.get('list')

			// error checking here!

			return result.data;
		},

		async auth(apiKey: string)
		{
			const result: ApiResponse = await Http.post('auth', {
				headers: {
					API_KEY: apiKey
				}
			})

			if (result.error == null)
			{
				this.isAuthed = true;
				router.push('/')
			}

			// error checking here!
		},
		async unAuth()
		{
			const result: ApiResponse = await Http.post('unauth')

			if (result.error == null)
			{
				this.isAuthed = false;

				location.reload(); // eligant as always
			}

			// error checking here!
		},

		async getShare(urlSlug: string)
		{
			const result = await Http.get('get/' + urlSlug);

			if (result.error == null)
			{
				this.activeShare = Share.fromShareable(result.data);
			}
			else
			{
				this.activeShare = undefined;

				// error checking here!
			}
		},

		async uploadFile(file: File): Promise<any>
		{
			const result = await Http.post('upload', {
				headers: {
					FILE_NAME: file.name
				},
				body: file
			});


			// error checking here!

			return result.data;
		},

		async shortenUrl(url: string): Promise<any>
		{
			const result = await Http.post('shorten', {
				headers: {
					URL: url
				}
			});

			// error checking here!

			return result.data;
		},


		async downloadShareXConfig(uploader: boolean = true) // dumb
		{
			const result = await Http.get('export/' + (uploader ? 'upload' : 'shorten'));

			if (result.error == null)
			{
				const json = JSON.stringify(result.data, null, 4);
				const urlObject = window.URL.createObjectURL(new Blob([json], {type: 'application/json'}));

				this.downloadFile(result.data.Name + '.sxcu', urlObject)

				window.URL.revokeObjectURL(urlObject);
			}

			// error checking here!
		},

		// really dumb
		downloadFile(fileName: string, fileUrl: string)
		{
			const link = document.createElement('a');
			link.download = fileName;
			link.href = fileUrl;
			link.click();
			link.remove();
		},
	}
});