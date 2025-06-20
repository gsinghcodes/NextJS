"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
    { name: "Forgot password", path: "/forgotpassword" },
  ];

  const pathName = usePathname();

  return (
    <>
      <nav>
        {links.map((item) => {
          const isActive = pathName === item.path;
          return (
            <Link
              style={{ color: isActive ? "blue" : "black", marginRight: "5px" }}
              key={item.name}
              href={`${item.path}`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </>
  );
}
