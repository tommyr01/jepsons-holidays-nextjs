// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { generateMeta } from "@/lib/seo/meta";
import { generateLocalBusinessSchema } from "@/lib/seo/schema";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = generateMeta({
  title: "Motorhome Hire Lancashire | Luxury Campervan Rental",
  description: "Jepson's Holidays - Family-owned motorhome hire in Clitheroe, Lancashire. Luxury motorhomes from 2-7 berth. Pet-friendly options. Call 01200 442244 for best prices.",
  path: "/"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  
  return (
    <html lang="en-GB">
      <head>
        <SchemaMarkup schema={localBusinessSchema} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
