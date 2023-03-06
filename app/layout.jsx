import "@app/globals.css";
import { Icon } from "@app/icon";
import { IconSymbols } from "@app/icon-symbols";
import css from "@app/layout.module.css";
import { cn } from "@utils/classnames";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <IconSymbols />
        <header className={cn(css.header, "full_bleed")}>
          <nav className={css.primary_links}>
            <a className={css.home_link} href="/">
              <span className="visually_hidden">Home</span>
              <img src="logo.svg" alt="" />
            </a>
            <a href="/about">About</a>
            <a href="/get-involved">Get Involved</a>
            <a href="https://secure.fundhero.com/ariana-martinez-for-benicia-school-board-2023">
              Donate
            </a>
          </nav>
        </header>

        {children}

        <footer className={cn(css.footer, "full_bleed")}>
          <nav className={css.social_links}>
            <a href="" hidden={true}>
              <span className="visually_hidden">Facebook</span>
              <Icon id="ic_facebook" />
            </a>
            <a href="https://instagram.com/ariana4busd">
              <span className="visually_hidden">Instagram</span>
              <Icon id="ic_instagram" />
            </a>
            <a href="https://twitter.com/ariana4busd">
              <span className="visually_hidden">Twitter</span>
              <Icon id="ic_twitter" />
            </a>
          </nav>

          <a className={css.home_link} href="/">
            <span className="visually_hidden">Home</span>
            <img src="logo.svg" alt="" />
          </a>

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
