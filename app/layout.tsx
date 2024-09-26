import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { CabinIDProvider } from '@cabin-id/nextjs';
import { ToasterProvider } from "@/providers/toast-provider";
import UseQueryProviders from "@/providers/use-query-provider";

import "./globals.css";

import {
	Pathway_Extreme,
	Bungee,
	Inter,
	Bungee_Inline,
	Bungee_Shade,
	Phudu,
	League_Gothic,
	Faster_One,
	Cabin
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
	metadataBase: new URL("http://carabao.vn"),
	title: "Carabao Bật Nắp trúng ngàn quà tặng",
	description:
		"Tham gia chương trình Bật nắp trúng quà của Carabao để có cơ hội trúng 60 xe SH 125i và hàng triệu lon nước tăng lực miễn phí. Đồng thời, sáng tạo nội dung để có cơ hội nhận 5 cặp vé du lịch Thái Lan 3 ngày 2 đêm hoàn toàn miễn phí!",
	twitter: {
		card: "summary_large_image",
	},
	openGraph: {
		url: "https://carabao.vn",
		images: [
			{
				width: 1200,
				height: 630,
				url: "https://hcm03.vstorage.vngcloud.vn/v1/AUTH_003ad868e39941579ae6ca95335a7486/notionpage/kv_full.jpg",
			},
		],
	},
	icons: {
		icon: "./assets/site-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<CabinIDProvider>
				<UseQueryProviders>
					<body
						className={`${pathwayExtreme.variable} ${bungee.variable} ${bungeeShade.variable} ${interFont.variable} ${bungeeInline.variable} ${phudu.variable} ${leagueGothic.variable} ${calSans.variable} ${fasterOne.variable}`}
					>
						{children}
						<ToasterProvider />
					</body>
				</UseQueryProviders>
			</CabinIDProvider>
		</html>
	);
}
