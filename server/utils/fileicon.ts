const svgTemplate = `
<svg viewBox="4 4 56 56"
	xmlns="http://www.w3.org/2000/svg">
	<g id="Outline">
		<path d="m0 0h64v64h-64z" fill="none"/>
		<path d="m13 56-5.01-5h5.01z" fill="#6a4e7c"/>
		<path d="m51 56 5.01-5h-5.01z" fill="#6a4e7c"/>
		<path d="m51 13h-7.99v-7.99z" fill="#b2b2b2"/>
		<path d="m43 5h-28.41a1.59 1.59 0 0 0 -1.59 1.59v51a1.6 1.6 0 0 0 1.59 1.6h34.82a1.6 1.6 0 0 0 1.59-1.65v-44.54h-8z" fill="#f1f1f1"/>
		<path d="m43 5h-28.41a1.59 1.59 0 0 0 -1.59 1.59v51a1.6 1.6 0 0 0 1.59 1.6h34.82a1.6 1.6 0 0 0 1.59-1.65v-44.54h-8z" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
		<path d="m51 13h-7.99v-7.99z" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
		<path d="m13 56-5.01-5h5.01z" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
		<path d="m51 56 5.01-5h-5.01z" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
		<path d="m9 33h46a1 1 0 0 1 1 1v17a0 0 0 0 1 0 0h-48a0 0 0 0 1 0 0v-17a1 1 0 0 1 1-1z" fill="#9679a6"/>
		<path d="m9 33h46a1 1 0 0 1 1 1v17a0 0 0 0 1 0 0h-48a0 0 0 0 1 0 0v-17a1 1 0 0 1 1-1z" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>


		<text font-family="Arial, Helvetica, sans-serif" text-anchor="middle" font-weight="bold" x="56%" y="82%" fill="#fff" font-size="12">FILE</text>

		<g fill="#9679a6">
			<path d="m27.87 22.92h1.13a.45.45 0 0 1 .45.45v1.09a.45.45 0 0 1 -.45.45h-1.13a.45.45 0 0 1 -.45-.45v-1.09a.45.45 0 0 1 .45-.45z"/>
			<path d="m31.43 22.92h1.14a.44.44 0 0 1 .44.44v1.11a.44.44 0 0 1 -.44.44h-1.14a.44.44 0 0 1 -.44-.44v-1.11a.44.44 0 0 1 .44-.44z"/>
			<path d="m35 22.92h1.13a.44.44 0 0 1 .44.44v1.11a.44.44 0 0 1 -.44.44h-1.13a.44.44 0 0 1 -.44-.44v-1.1a.45.45 0 0 1 .44-.45z"/>
			<path d="m23.39 21.42a2.61 2.61 0 0 1 .81.72 2.38 2.38 0 0 1 .41 1 8.53 8.53 0 0 1 .12 1.58v1.06a1.45 1.45 0 0 0 .13.52.48.48 0 0 0 .24.23 1.91 1.91 0 0 0 .47.11.64.64 0 0 1 .46.27 1 1 0 0 1 .18.61c0 .59-.35.88-1.07.88a2.53 2.53 0 0 1 -1.14-.26 2 2 0 0 1 -.81-.79 2.4 2.4 0 0 1 -.29-1.16c0-.74 0-1.33 0-1.78a6.57 6.57 0 0 0 -.07-.86 1.7 1.7 0 0 0 -.32-.74 2.38 2.38 0 0 0 -.56-.46 2 2 0 0 1 -.49-.39.79.79 0 0 1 -.15-.54.9.9 0 0 1 .42-.81 4.49 4.49 0 0 0 .75-.56 1.24 1.24 0 0 0 .31-.59 3.76 3.76 0 0 0 .11-.79c0-.28 0-1 0-2.05a2.22 2.22 0 0 1 .64-1.6 2.25 2.25 0 0 1 1.64-.6c.72 0 1.07.28 1.07.86a1 1 0 0 1 -.17.62.68.68 0 0 1 -.47.26 1.41 1.41 0 0 0 -.59.18.68.68 0 0 0 -.22.45c0 .22-.05.66-.06 1.3a12 12 0 0 1 -.11 1.54 2.59 2.59 0 0 1 -.39 1 2.75 2.75 0 0 1 -.85.79z"/>
			<path d="m39.77 20.65a2.59 2.59 0 0 1 -.39-1 12 12 0 0 1 -.11-1.54c0-.64 0-1.08-.06-1.3a.68.68 0 0 0 -.22-.45 1.41 1.41 0 0 0 -.59-.18.68.68 0 0 1 -.47-.26 1 1 0 0 1 -.17-.62c0-.58.35-.86 1.07-.86a2.25 2.25 0 0 1 1.64.6 2.22 2.22 0 0 1 .64 1.6v2.05a3.76 3.76 0 0 0 .11.79 1.24 1.24 0 0 0 .31.59 4.49 4.49 0 0 0 .75.56.9.9 0 0 1 .42.81.79.79 0 0 1 -.15.54 2 2 0 0 1 -.49.39 2.38 2.38 0 0 0 -.56.46 1.7 1.7 0 0 0 -.32.74 6.57 6.57 0 0 0 -.07.86v1.78a2.4 2.4 0 0 1 -.29 1.16 2 2 0 0 1 -.81.79 2.53 2.53 0 0 1 -1.18.27c-.72 0-1.07-.29-1.07-.88a1 1 0 0 1 .18-.61.64.64 0 0 1 .46-.27 1.91 1.91 0 0 0 .47-.11.48.48 0 0 0 .24-.23 1.45 1.45 0 0 0 .13-.52c0-.23 0-.58 0-1.06a8.53 8.53 0 0 1 .12-1.58 2.38 2.38 0 0 1 .41-1 2.61 2.61 0 0 1 .81-.72 2.75 2.75 0 0 1 -.81-.8z"/>
		</g>
	</g>
</svg>
`;

class FileIcon {
	public static create(fileExtension: string): Response
	{
		let faviconSvg = svgTemplate;

		if (fileExtension.length >= 1 && fileExtension.length <= 6)
			faviconSvg = faviconSvg.replace('FILE', fileExtension.toUpperCase());

		return new Response(faviconSvg, {
			headers: {
				'content-type': 'image/svg+xml'
			}
		});
	}
}

export { FileIcon }