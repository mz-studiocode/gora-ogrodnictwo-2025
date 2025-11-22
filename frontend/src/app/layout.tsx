import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header.component";
import { Footer } from "@/components/layout/footer.component";
import { NavigationProvider } from "@/providers/navigation.provider";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Gora Ogrodnictwo - Profesjonalne usługi ogrodnicze",
	description:
		"Profesjonalne usługi projektowania ogrodów i terenów zielonych, tworzące piękne, zrównoważone przestrzenie zewnętrzne, które podnoszą wartość Twojej nieruchomości i jakość życia.",
	openGraph: {
		title: "Gora Ogrodnictwo - Profesjonalne usługi ogrodnicze",
		description:
			"Profesjonalne usługi projektowania ogrodów i terenów zielonych, tworzące piękne, zrównoważone przestrzenie zewnętrzne, które podnoszą wartość Twojej nieruchomości i jakość życia.",
		url: "https://gora-ogrodnictwo.pl",
	},
};



export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="pl">
		<NavigationProvider>
			<body className="min-h-screen">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</NavigationProvider>
	</html>
)};