import { McLaren } from "next/font/google";
import "./globals.css";

const mclaren = McLaren({weight:"400", subsets: ["latin"],display:"swap"});

export const metadata = {
  title: "Keeper App",
  description: "Keep your things",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mclaren.className}>{children}</body>
    </html>
  );
}
