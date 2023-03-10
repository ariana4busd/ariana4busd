"use client";
import css from "@volunteer/page.module.css";
import { useState } from "react";

export default function Volunteer() {
  const [formStatus, setFormStatus] = useState("");
  // TODO validate volunteer form

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    setFormStatus("Submitting Form...");
    const response = await fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        shareInfo: form.share_info.checked,
        hostMeetAndGreet: form.host_meet_greet.checked,
        helpUnsure: form.help_unsure.checked,
        helpOther: form.help_other.value,
      }),
    });
    setFormStatus("Form received.");
    console.log(response.status);
  };

  return (
    <section className={css.section}>
      <p>
        Sign up today to help elect Ariana. We{"'"}re in this together. Every
        bit of help, no matter the time or amount makes a difference. Thank you
        for showing your support for our students{"'"} future. Complete the
        fields below and we{"'"}ll share further details and/or specific
        opportunities based on your selection(s).
      </p>

      <form className={css.form} onSubmit={handleSubmit}>
        <label>
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

        <output>{formStatus}</output>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
