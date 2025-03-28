import type { Shareable } from '~/share';
import { languages } from 'monaco-editor';

const defaultLangId = 'plaintext';
const monacoLanguages = languages.getLanguages();

export class MonacoLanguageGuesser {
	constructor(protected share: Shareable) { }

	protected guessByFileExtension(): string|null
	{
		const fileExt = ('.' + this.share.fileExtension).toLowerCase();

		for (const lang of monacoLanguages)
			if (lang.id != defaultLangId && lang.extensions?.includes(fileExt))
				return lang.id;

		return null;
	}

	protected guessByContentType(): string|null
	{
		const contentType = this.share.contentType!.toLowerCase();

		for (const lang of monacoLanguages)
			if (lang.id != defaultLangId && lang.mimetypes?.includes(contentType))
				return lang.id;

		return null;
	}

	// todo guess by file content?
	// someday!

	public guess(): string
	{
		return this.guessByFileExtension() || this.guessByContentType() || defaultLangId;
	}
}