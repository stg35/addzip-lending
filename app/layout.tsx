import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const montserrat = Montserrat({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'addZip',
	description: 'Russian streetwear marketplace 👽',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
