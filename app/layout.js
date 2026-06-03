import "./globals.css";

export const metadata = {
  title: "Happy Birthday, Cayaang!",
  description: "Hitung mundur kecil untuk hari yang ditunggu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
