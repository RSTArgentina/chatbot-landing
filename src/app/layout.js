/** @format */

import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
	title: "Chatbot Landing",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={lexend.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
