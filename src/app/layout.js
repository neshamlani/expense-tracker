import { Ubuntu_Mono } from "next/font/google";
import RootLayoutClient from "./RootLayoutClient";
import "./globals.css";

const ubuntuMono = Ubuntu_Mono({
  variable: "ubuntu-mono",
  subsets: ["greek"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Expense Tracker",
  description: "Track your expenses smartly",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntuMono.variable}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
