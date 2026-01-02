import { Geist, Geist_Mono } from "next/font/google";
import { UserRound } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Helpdesk Dashboard Demo",
  description: "Made using NextJS, React, Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <nav className="navbar flex flex-row w-full justify-between">
            <a
              className="text-2xl font-bold m-5 cursor-pointer self-center"
              href="/"
            >
              Helpdesk Dashboard
            </a>
            <ul className="flex flex-row m-5 gap-5">
              <li className="self-center">
                <a href="/">Tickets</a>
              </li>
              <li className="self-center">
                <a href="/analytics">Analytics</a>
              </li>
              <li className="self-center">
                {/* <a href="/myaccount">My Account</a> */}
                <a href="/myaccount">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <span className="text-md">
                        <UserRound />
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
