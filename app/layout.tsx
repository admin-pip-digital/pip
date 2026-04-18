import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const GTM_ID = 'GTM-MPR5BJMC'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['opsz'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Pip — Eric Moore, Product & Systems Designer',
    template: '%s | Pip',
  },
  description:
    'Eric Moore is a product & systems designer with 8+ years building digital products for health, mortgage, and marketing technology companies.',
  openGraph: {
    title: 'Pip — Eric Moore, Product & Systems Designer',
    description:
      'Product & systems designer. 8+ years of UX, systems thinking, and design leadership.',
    url: 'https://pip.digital',
    siteName: 'Pip',
    images: [{ url: 'https://pip.digital/social-preview.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pip — Eric Moore',
    description: 'Product & systems designer based in Utah.',
    images: ['https://pip.digital/social-preview.png'],
  },
  metadataBase: new URL('https://pip.digital'),
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-neutral-50 text-neutral-950">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <ScrollToTop />
        <Nav />
        <main className="flex-1 pt-14 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
