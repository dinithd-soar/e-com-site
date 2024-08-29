import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//css
import "../styles/bootstrap.min.css";
import "../styles/magnific-popup.css";
import "../styles/animate.css";
import "../styles/owl.carousel.min.css";
import "../styles/themify-icons.css";
import "../styles/pe-icon-7-stroke.css";
import "../styles/meanmenu.min.css";
import "../styles/bundle.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/easyzoom.css";
import "../styles/hamburgers.min.css";
import "../styles/icofont.css";
import "../styles/jquery-ui.css";
import "../styles/slinky.min.css";
import AgeVerificationPopup from "@/Components/AgeVerificationPopup";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Com-Site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AgeVerificationPopup />
        {children}
      </body>
    </html>
  );
}
