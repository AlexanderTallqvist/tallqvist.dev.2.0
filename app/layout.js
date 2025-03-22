import "./styles/globals.scss";

/**
 * Render root layout.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}