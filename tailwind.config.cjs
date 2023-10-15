/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            boxShadow: {
                bottom: '0px 4px 0px -1px rgba(0, 0, 0, 0.2), 0px 7px 4px -9px rgba(0, 0, 0, 0.1)'
            },
			backgroundImage: {
				'hero': "url(./hero-img.jpg)",
                'cta': "url('./images/concrete-bg.jpg')"
			}
        },
	},
	plugins: [],
}
