import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dshoop - أفضل سوبرماركت أونلاين في الجزائر | Supermarché en ligne",
  description:
    "Dshoop - تسوق أفضل المنتجات بأسعار رائعة في الجزائر مع توصيل سريع وآمن. استمتع بتجربة تسوق فريدة من نوعها عبر الإنترنت!",
  keywords: [
    "Dshoop",
    "سوبرماركت أونلاين",
    "التسوق في الجزائر",
    "شراء أونلاين الجزائر",
    "منتجات غذائية",
    "توصيل سريع",
    "Supermarché en ligne",
    "Achat en ligne Algérie",
    "Livraison rapide",
    "Produits alimentaires Algérie",
  ].join(", "),
  openGraph: {
    title: "Dshoop - أفضل سوبرماركت أونلاين في الجزائر",
    description:
      "Dshoop - اكتشف تجربة التسوق الحديثة في الجزائر مع مجموعة واسعة من المنتجات والتوصيل السريع!",
    url: "https://raouf-protfoloi.onrender.com/#about",
    siteName: "Dshoop",
    images: [
      {
        url: "/logo.jpg", // تأكد من وجود الصورة في `public/`
        width: 1200,
        height: 630,
        alt: "Dshoop - سوبرماركت أونلاين في الجزائر",
      },
    ],
    type: "website",
    locale: "ar_DZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dshoop - أفضل سوبرماركت أونلاين في الجزائر",
    description:
      "تسوق كل ما تحتاجه في الجزائر مع Dshoop واستمتع بأفضل العروض والتوصيل السريع!",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://dshoop.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="canonical" href="https://dshoop.com/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="mt-[120px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
