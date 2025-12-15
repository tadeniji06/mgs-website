import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
	title: "MGS Agency",
	icons: {
		icon: "/mgs.svg",
	},
	keywords: [
		"Sports Agency",
		"Athlete Representation",
		"Sports Management",
		"Contract Negotiation",
		"Endorsements",
		"Sports Marketing",
		"Talent Scouting",
		"Professional Athletes",
		"Sports Industry",
		"Sports Consulting",
	],
	description: "Professional representation for athletes worldwide.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
