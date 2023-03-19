import { Icon } from "@icons/icon";
import css from "@vote/page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Vote() {
  return (
    <section id="vote" className={css.section}>
      <div className={css.vote}>
        <p>
          March 27th is is the last day to register or update your voter
          registration in this special election. Only those who live in Trustee
          Area 5 are able to vote in this special election. Please see the map
          for Trustee Area 5 and the polling location.
        </p>

        <Link
          className={css.register}
          href="https://registertovote.ca.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/vote.png" alt="" width={64} height={64} />
          Register to Vote
          <Icon id="ic_ext_link" />
        </Link>
      </div>

      {/* TODO embed interactive map */}
      <picture className={css.district_map}>
        <Image src="/district_area_5.png" alt="Trustee Area 5" fill />
      </picture>
    </section>
  );
}
