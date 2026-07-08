import "./globals.css";

export const metadata = {
  title: "Untuk Wanita yang Aku Sayang",
  description: "Hitung mundur kecil untuk hari yang ditunggu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
