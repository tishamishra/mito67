import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./socicon.css";
import "./mobirise-sections.css";
import "./competitor-styles.css";

export const metadata: Metadata = {
  title: "mitolyn™ Official | Metabolic Support & Weight Management",
  description: "mitolyn official site - metabolic enhancement formula. Explore benefits, reviews, and order mitolyn for weight management and vitality.",
  keywords: "mitolyn, mitolyn official, mitolyn purchase, mitolyn weight management, mitolyn testimonials, mitolyn official site supplement, mitolyn store official website, mitolyn metabolic support, mitolyn weight loss",
  openGraph: {
    title: "mitolyn™ Official | Metabolic Support & Weight Management",
    description: "mitolyn official site - metabolic enhancement formula. Explore benefits, reviews, and order mitolyn for weight management and vitality.",
    url: "https://mtolyn.store/",
    siteName: "mitolyn Official",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900",
        width: 500,
        height: 500,
        alt: "mitolyn Official Supplement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mitolyn™ Official | Metabolic Support & Weight Management",
    description: "mitolyn official site - metabolic enhancement formula. Read reviews and order mitolyn for weight management support today.",
    images: ["https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900"],
  },
  alternates: {
    canonical: "https://mtolyn.store/",
  },
  icons: {
    icon: [
      { url: "https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883", type: "image/png" },
      { url: "https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883", sizes: "32x32", type: "image/png" },
      { url: "https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" sizes="16x16" />
        <link rel="shortcut icon" type="image/png" href="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" />
        <link rel="apple-touch-icon" type="image/png" href="https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883" sizes="180x180" />
        <meta name="msvalidate.01" content="DF238DB2B8BB655EFD6CF96236274D79" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="mitolyn Official" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Arial, sans-serif' }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Script id="disable-context-menu">
          {`
            document.addEventListener('contextmenu', event => event.preventDefault());
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
