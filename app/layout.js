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
          <nav className="navbar flex flex-row w-full justify-between mb-5">
            <a
              className="text-2xl font-bold p-3 cursor-pointer self-center font-mono"
              href="/"
            >
              Helpdesk Dashboard
            </a>
            <ul className="flex flex-row gap-5 font-mono">
              <li className="self-center">
                <a href="/">Tickets</a>
              </li>
              <li className="self-center">
                <a href="/analytics">Analytics</a>
              </li>
              <li className="self-center">
                <a href="/myaccount">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <UserRound />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          {children}
          <footer className="footer footer-horizontal footer-center p-10">
            <aside>
              <p className="font-bold italic">
                Helpdesk Dashboard Demo © {new Date().getFullYear()}
              </p>
            </aside>
          </footer>
        </div>
      </body>
    </html>
  );
}
