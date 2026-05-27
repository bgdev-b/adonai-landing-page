import type { AstroInstance } from 'astro';
import { Instagram, Facebook } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'Adonai Diaz Photography',
	favicon: 'images/logo-background.png',
	owner: 'Adonai Diaz',
	logo: '/images/logo-black.png',
	logoLight: '/images/logo-white.png',
	logoColor: '/images/logo-background.png',
	profileImage: 'profile.webp',
	heroImage: '/images/hero.jpg',
	phone: '(809) 000-0000',
	email: 'contacto@adonaidiaz.com',
	whatsapp: '18090000000',
	address: 'Santo Domingo, República Dominicana',
	socialLinks: [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com',
			icon: Instagram,
		} as SocialLink,
		{
			name: 'Facebook',
			url: 'https://www.facebook.com',
			icon: Facebook,
		} as SocialLink,
	],
};
