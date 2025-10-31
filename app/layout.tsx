import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "Egg Posts",
  description: "Posts for all kinds of people",
  icons: {
    icon: "/egg-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-gray-900 font-sans">
        <Navbar /> // Redirect user to About or Posts page if clicked.
        <main className="max-w-5xl mx-auto px-5 py-10">{children}</main>
      </body>
    </html>
  );
}
