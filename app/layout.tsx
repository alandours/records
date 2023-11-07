import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { GoogleTagManager } from "@/components/GoogleTagManager";
import { GTM_ID } from "@/constants";
import StyledComponentsRegistry from "@/lib/registry";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "alansrecords",
  description: "Vinyl record collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense>
        <GoogleTagManager />
      </Suspense>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
