import { Metadata } from "next";

export const metadata = {
  title: "Login"  
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer
          style={{
            backgroundColor: "black",
            textAlign: "center",
            color: "white",
          }}
        >
          c GSINGH 2025.
        </footer>
      </body>
    </html>
  );
}
