import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import "./globals.css";

// const geistSans = localFont({
// 	// src: "./fonts/GeistVF.woff",
// 	src: "  /public/fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });
// const geistMono = localFont({
// 	src: "@/public/fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} antialiased`}
			>
				<div className="pt-5" style={{ 
					backgroundImage: "url('/game-background.jpg')" ,
					backgroundRepeat: "no-repeat",
					backgroundSize: "auto 100%",
					backgroundPosition: "top",
					objectFit: "cover",
					minHeight: "100svh",
					maxHeight: "100svh",
				}}>
				{children}
				</div>
			</body>
		</html>
	);
}
