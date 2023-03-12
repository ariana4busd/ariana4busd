"use client";
import { Icon } from "@app/icon";
import css from "@support/layout.module.css";
import { cn } from "@utils/classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          <Link
            className={cn({ active: isVotePath })}
            href="/vote"
            replace={true}
          >
            <CheckIcon checked={isVotePath} />
            Vote
          </Link>
          <Link
            className={cn({ active: isRequestSignPath })}
            href="/request-sign"
            replace={true}
          >
            <CheckIcon checked={isRequestSignPath} />
            Request Yard Sign
          </Link>
          <Link
            className={cn({ active: isVolunteerPath })}
            href="/volunteer"
            replace={true}
          >
            <CheckIcon checked={isVolunteerPath} />
            Volunteer
          </Link>
        </nav>
      </header>
      {children}
    </>
  );
}

function CheckIcon({ checked }) {
  return <Icon id={checked ? "ic_checked" : "ic_unchecked"} />;
}
