import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(0 0% 90%)',
				input: 'hsl(0 0% 90%)',
				ring: 'hsl(0 0% 20%)',
				background: 'hsl(0 0% 100%)',
				foreground: 'hsl(0 0% 10%)',
				primary: {
					DEFAULT: 'hsl(0 0% 10%)',
					foreground: 'hsl(0 0% 98%)'
				},
				secondary: {
					DEFAULT: 'hsl(30 20% 96%)',
					foreground: 'hsl(0 0% 10%)'
				},
				destructive: {
					DEFAULT: 'hsl(0 84.2% 60.2%)',
					foreground: 'hsl(0 0% 98%)'
				},
				muted: {
					DEFAULT: 'hsl(30 15% 95%)',
					foreground: 'hsl(0 0% 40%)'
				},
				accent: {
					DEFAULT: 'hsl(340 50% 95%)',
					foreground: 'hsl(340 80% 40%)'
				},
				popover: {
					DEFAULT: 'hsl(0 0% 100%)',
					foreground: 'hsl(0 0% 10%)'
				},
				card: {
					DEFAULT: 'hsl(0 0% 100%)',
					foreground: 'hsl(0 0% 10%)'
				},
				sidebar: {
					DEFAULT: 'hsl(0 0% 98%)',
					foreground: 'hsl(0 0% 20%)',
					primary: 'hsl(0 0% 10%)',
					'primary-foreground': 'hsl(0 0% 98%)',
					accent: 'hsl(30 20% 96%)',
					'accent-foreground': 'hsl(0 0% 10%)',
					border: 'hsl(0 0% 90%)',
					ring: 'hsl(0 0% 20%)'
				},
				cream: 'hsl(30 20% 96%)',
				'rose-gold': 'hsl(340 50% 75%)'
			},
			borderRadius: {
				lg: '0.5rem',
				md: '0.375rem',
				sm: '0.25rem'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				serif: ['Playfair Display', 'Georgia', 'serif']
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;