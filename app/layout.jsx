import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Webelo | Modern Web Development Services",
  description:
    "Professional web development services including responsive design, e-commerce solutions, and custom web applications.",
    
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and site identity icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a855f7" />
        <meta name="msapplication-TileColor" content="#a855f7" />
        <meta name="theme-color" content="#111827" />
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add performance optimizations to the layout */}
        {/* 1. Add preload for critical resources: */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* 2. Add DNS prefetch for external resources: */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* 3. Add meta tags for better performance: */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        {/* Structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Webelo Pro",
              url: "https://webelo.net",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://webelo.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Webelo Pro",
              image: "https://webelo.pro/logo.png",
              "@id": "https://webelo.pro",
              url: "https://webelo.pro",
              telephone: "+1-123-456-7890",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Web Street",
                addressLocality: "Digital City",
                postalCode: "10001",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.7128,
                longitude: -74.006,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.facebook.com/webelopro",
                "https://www.twitter.com/webelopro",
                "https://www.linkedin.com/company/webelopro",
                "https://www.instagram.com/webelopro",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'