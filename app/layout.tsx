import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
const inter = Orbitron({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "700"],
});
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { ThemeProvider } from "./context/ThemeProvider";

export const metadata: Metadata = {
  title: "Ziad Media Buying",
  openGraph: {
    type: "website",
    title: "Ziad Media Buying",
    description: "Performance Marketing portfolio showing campaigns, results, and expertise.",
    images: [
      {
        url: "/Hollow-Knight-Background-PNG-Image.png",
        alt: "Ziad Media Buying",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <>
            <NavBar />
            <main className=" overflow-hidden">
              {children}

              <Footer />
            </main>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
