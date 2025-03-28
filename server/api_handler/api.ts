import { Context } from 'hono';
import { ContentfulStatusCode } from 'hono/utils/http-status';
import { type ApiResponse } from '~/apiresponse';

export class ApiHandler {
	protected url: URL;

	constructor(protected context: Context)
	{
		this.url = new URL(context.req.url);
	}

	protected responseSuccess(data: any): Response
	{
		const response: ApiResponse = {
			data: data
		};

		return this.context.json(response)
	}

	protected responseError(error: string, status?: ContentfulStatusCode): Response
	{
		const response: ApiResponse = {
			error: error
		};

		return this.context.json(response, status)
	}
}