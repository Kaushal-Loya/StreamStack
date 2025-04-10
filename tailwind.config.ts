
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
			fontFamily: {
				'cyber': ['"Rajdhani"', 'sans-serif'],
				'display': ['"Orbitron"', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk colors
				cyber: {
					neon: {
						DEFAULT: '#00F0FF',
						pink: '#FF00F5',
						yellow: '#FFE600',
						green: '#00FF66',
						blue: '#00A3FF',
						purple: '#9b87f5',
					},
					dark: {
						DEFAULT: '#0F0E17',
						blue: '#1A1F2C',
						purple: '#221F26',
					},
					accent: {
						DEFAULT: '#F97316',
						blue: '#1EAEDB',
						pink: '#FF2E6C',
					},
					gray: {
						DEFAULT: '#8E9196',
						dark: '#222222',
						light: '#F1F1F1',
					},
				},
				stream: {
					purple: {
						DEFAULT: '#9b87f5',
						dark: '#7E69AB',
						darker: '#6E59A5',
						light: '#E5DEFF',
					},
					accent: {
						blue: '#0EA5E9',
						orange: '#F97316',
						violet: '#8B5CF6',
					},
					gray: {
						DEFAULT: '#8E9196',
						dark: '#222222',
						light: '#F1F1F1',
					},
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'glitch': {
					'0%': {
						transform: 'translate(0)',
						textShadow: '0 0 0 #00F0FF'
					},
					'2%': {
						transform: 'translate(-2px, 2px)',
						textShadow: '0 0 5px #00F0FF'
					},
					'4%': {
						transform: 'translate(2px, -2px)',
						textShadow: '0 0 5px #FF00F5'
					},
					'6%': {
						transform: 'translate(0)',
						textShadow: '0 0 0 transparent'
					},
					'8%': {
						transform: 'translate(0)',
						textShadow: '0 0 0 transparent'
					},
					'10%': {
						transform: 'translate(-2px, 2px)',
						textShadow: '0 0 5px #FFE600'
					},
					'12%': {
						transform: 'translate(0)',
						textShadow: '0 0 0 transparent'
					},
					'100%': {
						transform: 'translate(0)',
						textShadow: '0 0 0 transparent'
					}
				},
				'data-stream': {
					'0%': {
						backgroundPosition: '0% 50%',
						opacity: '0.8'
					},
					'50%': {
						backgroundPosition: '100% 50%',
						opacity: '1'
					},
					'100%': {
						backgroundPosition: '0% 50%',
						opacity: '0.8'
					}
				},
				'flicker': {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
						opacity: '1'
					},
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
						opacity: '0.33'
					}
				},
				'scan-line': {
					'0%': {
						transform: 'translateY(0)'
					},
					'100%': {
						transform: 'translateY(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out',
				'glitch': 'glitch 3s infinite',
				'data-stream': 'data-stream 5s ease infinite',
				'flicker': 'flicker 5s linear infinite',
				'scan-line': 'scan-line 4s linear infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
				'neon-glow': 'linear-gradient(90deg, rgba(0, 240, 255, 0.0) 0%, rgba(0, 240, 255, 0.1) 50%, rgba(0, 240, 255, 0.0) 100%)',
				'data-flow': 'linear-gradient(180deg, rgba(0, 240, 255, 0.2) 0%, rgba(255, 0, 245, 0.2) 50%, rgba(255, 230, 0, 0.2) 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
