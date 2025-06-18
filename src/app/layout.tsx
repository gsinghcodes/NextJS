import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next-JS Learning",
    template: "Learning | %s",
    absolute: "",
  },
  description: "Gsingh is best",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "black",
            textAlign: "center",
            color: "white",
          }}
        >
          Header
        </header>
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
