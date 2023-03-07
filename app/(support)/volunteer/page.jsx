"use client";
import cssf from "@support/form.module.css";
import css from "@volunteer/page.module.css";

export default function Volunteer() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const response = await fetch("/api/get-involved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        share_info: form.share_info.checked,
        host_meet_greet: form.host_meet_greet.checked,
        help_unsure: form.help_unsure.checked,
        help_other: form.help_other.value,
      }),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <section className={css.section}>
      <h1>Volunteer</h1>
      <p>
        Sign up today to help elect Ariana. We{"'"}re in this together. Every
        bit of help, no matter the time or amount makes a difference. Thank you
        for showing your support for our students{"'"} future. Complete the
        fields below and we{"'"}ll share further details and/or specific
        opportunities based on your selection(s).
      </p>

      <form className={cssf.form} onSubmit={handleSubmit}>
        <label className={cssf.name}>
          <span>Name</span>
          <input name="name" type="text" />
        </label>

        <label>
          <span>Email</span>
          <input name="email" type="email" />
        </label>

        <label>
          <span>Phone</span>
          <input name="phone" type="tel" />
        </label>

        <fieldset name="help">
          <legend>I want to help by...</legend>
          <label>
            <input name="share_info" type="checkbox" />
            <span>Sharing information with friends and neighbors</span>
          </label>

          <label>
            <input name="host_meet_greet" type="checkbox" />
            <span>Hosting a meet-and-greet</span>
          </label>

          <label>
            <input name="help_unsure" type="checkbox" />
            <span>
              I{"'"}m not sure, but I{"'"}m still interested in helping
            </span>
          </label>

          <label>
            <input type="checkbox" />
            <div>
              <input name="help_other" type="text" placeholder="Other" />
            </div>
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}