import { Form } from "./form";
import css from "./page.module.css";

export const metadata = {
  title: "Get Involved",
};

export default function GetInvolved() {
  return (
    <>
      <section className={css.vote}>
        <h1>Vote</h1>
        <div className="map">
          <img src="" alt="Trustee Area 5" />
        </div>
        <p>
          March 27th is is the last day to register or update your voter
          registration in this special election
        </p>
        <a href="https://registertovote.ca.gov/">Register to Vote</a>
      </section>
      <section className={css.volunteer}>
        <h1>Volunteer</h1>
        <Form />
      </section>
    </>
  );
}
