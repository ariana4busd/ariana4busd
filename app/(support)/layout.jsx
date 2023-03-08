"use client";
import css from "@support/layout.module.css";
import { cn } from "@utils/classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../icon";

export default function GetInvolvedLayout({ children }) {
  const pathname = usePathname();
  const isVotePath = pathname === "/vote";
  const isRequestSignPath = pathname === "/request-sign";
  const isVolunteerPath = pathname === "/volunteer";

  return (
    <>
      <header className={css.get_involved}>
        <h1>I would like to...</h1>
        <nav className={css.get_involved_nav}>
          <Link className={cn({ active: isVotePath })} href="/vote">
            <Icon id={isVotePath ? "ic_checked" : "ic_unchecked"} />
            Vote
          </Link>
          <Link
            className={cn({ active: isRequestSignPath })}
            href="/request-sign"
          >
            <Icon id={isRequestSignPath ? "ic_checked" : "ic_unchecked"} />
            Request Yard Sign
          </Link>
          <Link className={cn({ active: isVolunteerPath })} href="/volunteer">
            <Icon id={isVolunteerPath ? "ic_checked" : "ic_unchecked"} />
            Volunteer
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
}
