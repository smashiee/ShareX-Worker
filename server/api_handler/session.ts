import { ApiHandler } from './api';

import {
	getSignedCookie,
	setSignedCookie,
	setCookie,
	deleteCookie
} from 'hono/cookie';

import { CookieOptions } from 'hono/utils/cookie';

export class SessionHandler extends ApiHandler {
	protected getSessionKey(sessionId: string): string
	{
		return 'Session:' + this.url.hostname + ':' + sessionId;
	}

	protected async getSessionId(): Promise<string|null>
	{
		const authToken = await getSignedCookie(this.context, this.context.env.SESSION_KEY, 'auth_token');

		if (authToken == false)
			return null;

		return authToken!;
	}

	public async hasValidsession(): Promise<boolean>
	{
		if (this.context.env.API_KEY === this.context.req.header('API_KEY'))
			return true;

		const sessionId = await this.getSessionId();

		if (sessionId == null)
			return false;

		return await this.context.env.KV.get(this.getSessionKey(sessionId)) != null;
	}

	protected getCookieOptions(httpOnly: boolean = false): CookieOptions
	{
		return {
			maxAge: this.context.env.SESSION_TTL,
			sameSite: 'Strict',
			httpOnly: httpOnly,
			domain: this.url.hostname,
			path: '/',
			secure: true,
		};
	}

	public async createSession() : Promise<Response>
	{
		const sessionId = crypto.randomUUID();

		this.context.header('Access-Control-Allow-Credentials', 'true');
		this.context.header('Access-Control-Allow-Methods', 'GET, POST');
		this.context.header('Access-Control-Allow-Headers', '*');
		this.context.header('Access-Control-Allow-Origin', this.url.origin);

		await setSignedCookie(this.context, 'auth_token', sessionId, this.context.env.SESSION_KEY, this.getCookieOptions(true));

		// set a second non httpOnly cookie without our auth token
		setCookie(this.context, 'auth_expire', String(Date.now() + (this.context.env.SESSION_TTL * 1000)), this.getCookieOptions(false));

		await this.context.env.KV.put(this.getSessionKey(sessionId), '', {
			expirationTtl: this.context.env.SESSION_TTL
		})

		// todo: failure response

		return this.responseSuccess(true);
	}

	public async deleteSession()
	{
		const sessionId = await this.getSessionId();

		if (sessionId != null)
			await this.context.env.KV.delete(this.getSessionKey(sessionId));

		deleteCookie(this.context, 'auth_token', this.getCookieOptions(true));
		deleteCookie(this.context, 'auth_expire', this.getCookieOptions());

		// todo: failure response

		return this.responseSuccess(true);
	}
}