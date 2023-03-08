"use client";
import "@app/globals.css";
import { Icon } from "@app/icon";
import { IconSymbols } from "@app/icon-symbols";
import css from "@app/layout.module.css";
import { cn } from "@utils/classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const ctaActiveCn = ["/vote", "/request-sign", "volunteer"].includes(pathname)
    ? "active"
    : undefined;

  return (
    <html lang="en">
      <body>
        <IconSymbols />
        <header className={cn(css.header, "full_bleed")}>
          <nav className={css.top_nav}>
            <Link className={cn(css.logo, css.top_nav_home)} href="/">
              <span className="visually_hidden">Home</span>
              <Image src="logo.svg" alt="" fill />
            </Link>
            <div className={css.top_nav_links}>
              <Link href="/about">About</Link>
              <Link href="https://secure.fundhero.com/ariana-martinez-for-benicia-school-board-2023">
                Donate
                <Icon id="ic_ext_link" />
              </Link>
            </div>
            <Link className={cn(css.top_nav_cta, ctaActiveCn)} href="/vote">
              Get Involved
            </Link>
          </nav>
        </header>

        {children}

        <footer className={cn(css.footer, "full_bleed")}>
          <nav className={css.social_nav}>
            <Link href="" hidden={true}>
              <span className="visually_hidden">Facebook</span>
              <Icon id="ic_facebook" />
            </Link>
            <Link href="https://instagram.com/ariana4busd">
              <span className="visually_hidden">Instagram</span>
              <Icon id="ic_instagram" />
            </Link>
            <Link href="https://twitter.com/ariana4busd">
              <span className="visually_hidden">Twitter</span>
              <Icon id="ic_twitter" />
            </Link>
          </nav>

          <Link className={cn(css.logo, css.footer_nav_home)} href="/">
            <span className="visually_hidden">Home</span>
            <Image src="logo.svg" alt="" fill />
          </Link>

          {/* <!-- https://www.fppc.ca.gov/learn/campaign-rules/campaign-advertising-requirements-restrictions.html --> */}
          <p className={css.campaign_ad_disclosure}>
            Paid for by Ariana Martinez for Benicia School Board 2023 – FPPC ID
            #1457993
          </p>
        </footer>
      </body>
    </html>
  );
}
