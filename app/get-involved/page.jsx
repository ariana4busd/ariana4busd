import { Form } from "./form";
import css from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Get Involved",
};

export default function GetInvolved() {
  return (
    <>
      <section className={css.vote}>
        <h1>Vote</h1>
        <p>
          March 27th is is the last day to register or update your voter
          registration in this special election
        </p>
        <Link className={css.vote_button} href="https://registertovote.ca.gov/">
          Register to Vote
        </Link>
        <div className={css.district_map}>
          <Image src="/district_area_5.png" alt="Trustee Area 5" fill />
        </div>
      </section>
      <section className={css.volunteer}>
        <h1>Volunteer</h1>
        <Form />
      </section>
    </>
  );
}
