import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bloogoo!!",
  description: "Create and read unlimited blogs here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Provider>
          <Navbar/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
