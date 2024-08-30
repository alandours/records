import { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { GoogleTagManager } from "@/components/GoogleTagManager";
import { BASE_URL, GTM_ID, SITE_DESCRIPTION, SITE_NAME } from "@/constants";
import StyledComponentsRegistry from "@/lib/registry";

import "./globals.css";

const inter = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
  },
  metadataBase: new URL(BASE_URL),
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
