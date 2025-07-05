import "./globals.css";
export const metadata = {
  title: "Cognitix Development",
  description: "Official Cognitix Development Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
