import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/app/StoreProvider";
import AppHeader from "@/components/Header/AppHeader";
import AppFooter from "@/components/Footer/AppFooter";

export const metadata: Metadata = {
  title: "wallstreetlocal | Advice from the world's biggest investors",
  description: "Thousands of filings from the world's biggest investors. Wall Street's stock portfolio, for free."
};

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <StoreProvider>
        <html lang="en">
          <body>
            <AppHeader />
              {children}
            <AppFooter />
          </body>
          </html>
      </StoreProvider>
  );
}
