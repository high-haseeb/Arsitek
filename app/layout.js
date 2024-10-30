import "./globals.css";

export const metadata = {
  title: "Rocket Revenue",
  description: "made by high-haseeb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
