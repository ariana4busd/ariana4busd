import css from "@vote/page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Vote() {
  return (
    <section id="vote" className={css.section}>
      <h1>Vote</h1>
      <div className={css.guide}>
        <p>
          March 27th is is the last day to register or update your voter
          registration in this special election
        </p>

        <p>
          Only those who live in Trustee Area 5 are able to vote in this special
          election
        </p>

        <p>Please see the map for Trustee Area 5 and the polling location</p>
      </div>

      <Link
        className={css.register}
        href="https://registertovote.ca.gov/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/vote.png" alt="" width={64} height={64} />
        Register to Vote
      </Link>

      <picture className={css.district_map}>
        <Image src="/district_area_5.png" alt="Trustee Area 5" fill />
      </picture>
    </section>
  );
}
