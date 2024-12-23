import {
  Poppins,
  Open_Sans,
  DM_Sans,
  IBM_Plex_Sans,
  Inter,
  Manrope,
} from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700","800","900"], // Specify the desired weights
  variable: "--font-poppins",
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["400", "500", "600", "700","800","900"],
  variable: "--font-inter",
  subsets: ["latin"],
});
const manrope = Manrope({
  weight: ["400", "500", "600", "700","800"], // Specify the desired weights
  variable: "--font-manrope", // Update the variable name to reflect Manrope
  subsets: ["latin"], // Specify subsets as needed
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700","800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700","800","900"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500,400&display=swap"
        />
      </head>
      <body
        className={` ${poppins.variable} ${inter.variable} ${manrope.variable} ${ibmPlexSans.variable} ${openSans.variable} ${dmSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
