import { ApiHandler } from './api';

// https://getsharex.com/docs/custom-uploader

interface ShareXUploaderHeaders {
	API_KEY: string,
	FILE_NAME?: string,
	URL?: string
}

interface ShareXConfig {
	Version: string;
	Name: string;
	DestinationType: string,
	RequestMethod: string;
	RequestURL: string;
	Headers: ShareXUploaderHeaders;
	Body?: string;
	URL: string;
	DeletionURL: string;
	ErrorMessage: string;
}

export class ConfigHandler extends ApiHandler {
	public exportUploader()
	{
		const uploaderCondig: ShareXConfig = {
			Version: '17.0.0',
			Name: this.url.hostname + ' - Uploader',
			DestinationType: 'ImageUploader, TextUploader, FileUploader',
			RequestMethod: 'POST',
			RequestURL: this.url.origin + '/api/upload',
			Headers: {
				API_KEY: this.context.env.API_KEY,
				FILE_NAME: '{filename}'
			},
			Body: 'Binary',
			URL: '{json:data.url}',
			DeletionURL: '{json:data.deletetionUrl}',
			ErrorMessage: '{json:error}'
		}

		return this.responseSuccess(uploaderCondig);
	}

	public exportShortener()
	{
		const uploaderCondig: ShareXConfig = {
			Version: '17.0.0',
			Name: this.url.hostname + ' - Shortener',
			DestinationType: 'URLShortener',
			RequestMethod: 'POST',
			RequestURL: this.url.origin + '/api/shorten',
			Headers: {
				API_KEY: this.context.env.API_KEY,
				URL: '{input}'
			},
			URL: '{json:data.url}',
			DeletionURL: '{json:data.deletetionUrl}',
			ErrorMessage: '{json:error}'
		}

		return this.responseSuccess(uploaderCondig);
	}
}

/*
{
  "Version": "17.0.0",
  "Name": "localhost - Shortener",
  "DestinationType": "URLShortener",
  "RequestMethod": "POST",
  "RequestURL": "http://localhost:5173/api/shorten",
  "Headers": {
    "API_KEY": "testkey",
    "URL": "{input}"
  },
  "URL": "{json:data.url}",
  "DeletionURL": "{json:data.deletetionUrl}",
  "ErrorMessage": "{json:error}"
}*/