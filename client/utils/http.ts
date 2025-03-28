import { type ApiResponse } from '~/apiresponse';

class Http {
	protected static async request(path: string, init?: RequestInit): Promise<ApiResponse>
	{
		try {
			const request = await fetch('/api/' + path, init);

			const result: ApiResponse = await request.json();

			return result;
		}
		catch {
			return {
				error: 'Error fetching API!'
			}
		}
	}

	public static async get(path: string, init?: RequestInit): Promise<ApiResponse>
	{
		init = init ?? {};
		init.method = 'GET';

		return await Http.request(path, init);
	}

	public static async post(path: string, init?: RequestInit): Promise<ApiResponse>
	{
		init = init ?? {};
		init.method = 'POST';

		return await Http.request(path, init);
	}
}

export { Http };