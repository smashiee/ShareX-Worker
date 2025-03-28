import type { Shareable } from './shareable'

export class Share implements Shareable {
	get fileUrl(): string
	{
		return this.storageUrl + '/' + this.filePath;
	}

	public constructor(
		public readonly url?: string,
		public readonly fileName?: string,
		public readonly fileExtension?: string,
		public readonly filePath?: string,
		public readonly urlSlug?: string,
		public readonly storageUrl?: string,
		public readonly contentType?: string,
		public readonly contentSize?: number,
		public readonly contentMd5?: string,
		public readonly deletetionKey?: string,
		public readonly creationDate?: number,
		public readonly expirationTtl?: number
	) { }

	public static fromShareable(shareable: Shareable)
	{
		return new Share(
			shareable.url,
			shareable.fileName,
			shareable.fileExtension,
			shareable.filePath,
			shareable.urlSlug,
			shareable.storageUrl,
			shareable.contentType,
			shareable.contentSize,
			shareable.contentMd5,
			shareable.deletetionKey,
			shareable.creationDate,
			shareable.expirationTtl
		);
	}

	public isUrl(): boolean
	{
		return this.url != null;
	}

	public isVideo(): boolean
	{
		return this.contentType?.startsWith('video') || false;
	}

	public isAudio(): boolean
	{
		return this.contentType?.startsWith('audio') || false;
	}

	public isImage(): boolean
	{
		return this.contentType?.startsWith('image') || false;
	}

	public isText(): boolean
	{
		return this.contentType?.startsWith('text') || (this.contentType == 'application/json') || false;
	}

	public isFile(): boolean
	{
		return this.filePath != null && !this.isVideo() && !this.isAudio() && !this.isImage() && !this.isText();
	}
}