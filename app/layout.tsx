import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";

import {
	Pathway_Extreme,
	Bungee,
	Inter,
	Bungee_Inline,
	Bungee_Shade,
	Phudu,
	League_Gothic,
	Faster_One
  } from "next/font/google";
  
  const pathwayExtreme = Pathway_Extreme({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-pathwayExtreme",
	display: "swap",
	adjustFontFallback: false,
  });
  
  const interFont = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
  });
  
  const bungee = Bungee({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-bungee",
  });
  
  const bungeeInline = Bungee_Inline({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-bungeeInline",
  });
  
  const bungeeShade = Bungee_Shade({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-bungeeShade",
  });
  
  const phudu = Phudu({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-phudu",
  });
  
  const leagueGothic = League_Gothic({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-leagueGothic",
  });
  
  const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
  });
  
  const fasterOne = Faster_One({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-fasterOne",
  });
  

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
				className={`${pathwayExtreme.variable} ${bungee.variable} ${bungeeShade.variable} ${interFont.variable} ${bungeeInline.variable} ${phudu.variable} ${leagueGothic.variable} ${calSans.variable} ${fasterOne.variable}`}
			>
				<div className="pt-10 p-5 md:p-0 md:pt-5 " style={{ 
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
