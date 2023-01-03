/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%': { transform: 'translateY(-25px)', opacity: '0%' },
					'100%': { transform: 'translateY(0px)', opacity: '100%' },
				}
			},
			animation: {
				wiggle: 'wiggle 600ms ease-in-out',
			}
		},
	},
	plugins: [],
}
