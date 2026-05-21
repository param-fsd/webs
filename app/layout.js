import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import PageLoader from "@/components/PageLoader";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "Vizipa - Premium Plotted Developments in Bangalore",
  description:
    "Premium plotted developments in Bangalore with clean titles, precision engineering, and transparent execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <PageLoader />
        <LeadPopup />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}