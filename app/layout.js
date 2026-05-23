import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import PageLoader from "@/components/PageLoader";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

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
  metadataBase: new URL("https://vizipa.com"),

  title: {
    default:
      "Vizipa | Premium Plotted Developments & Apartments in Bangalore",
    template: "%s | Vizipa",
  },

  description:
    "Explore premium plotted developments and apartments in Bangalore with Vizipa. Discover DTCP & RERA-approved plots, luxury apartments, interactive layout maps, modern infrastructure, and investment-focused communities in prime growth locations.",

  keywords: [
  "Vizipa",
  "Vizipa Bangalore",
  "Premium real estate Bangalore",
  "Premium plots Bangalore",
  "Apartments in Bangalore",
  "Plotted developments Bangalore",
  "Residential projects Bangalore",
  "Interactive property maps",
  ],

  authors: [{ name: "Vizipa" }],
  creator: "Vizipa",
  publisher: "Vizipa",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
   title: {
  default: "Vizipa | Premium Real Estate Projects in Bangalore",
  template: "%s | Vizipa",
},
description:
  "Explore Vizipa’s premium plotted developments and apartment projects in Bangalore with modern infrastructure, clear documentation, and interactive project maps.",url: "https://vizipa.com",
    siteName: "Vizipa",
    images: [
      {
        url: "/img5.jpg",
        width: 1200,
        height: 630,
        alt: "Vizipa Premium Real Estate Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vizipa | Premium Plotted Developments & Apartments in Bangalore",
    description:
      "Explore premium plots and apartments with interactive experiences and modern infrastructure.",
    images: ["/img7.jpg"],
  },

  alternates: {
    canonical: "https://vizipa.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />

        {/* Additional SEO */}
        <meta
          name="application-name"
          content="Vizipa Real Estate Projects"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Vizipa"
        />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="language" content="English" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateDeveloper",
              name: "Vizipa",
              url: "https://vizipa.com",
              logo: "https://vizipa.com/logo.png",
              image: "https://vizipa.com/img5.jpg",
              description:
                "Premium plotted developments and apartment projects in Bangalore with interactive experiences, transparent documentation, and future-ready infrastructure.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "India",
              },
              areaServed: {
                "@type": "City",
                name: "Bangalore",
              },
              knowsAbout: [
                "Plotted Developments",
                "Luxury Apartments",
                "Residential Projects",
                "Real Estate Development",
                "Interactive Property Mapping",
              ],
            }),
          }}
        />
      </head>

      <body className={`${cormorant.variable} ${inter.variable}`}>
        <PageLoader />
        <LeadPopup />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}