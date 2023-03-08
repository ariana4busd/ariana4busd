"use client";
import css from "@support/layout.module.css";
import { cn } from "@utils/classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GetInvolvedLayout({ children }) {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <>
      <header className={css.get_involved}>
        <h1>I would like to...</h1>
        <nav className={css.get_involved_nav}>
          <Link className={cn({ active: isActive("/vote") })} href="/vote">
            Vote
          </Link>
          <Link
            className={cn({ active: isActive("/request-sign") })}
            href="/request-sign"
          >
            Request Yard Sign
          </Link>
          <Link
            className={cn({ active: isActive("/volunteer") })}
            href="/volunteer"
          >
            Volunteer
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
}
