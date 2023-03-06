"use client";
import css from "./form.module.css";

export function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      yard_sign: form.yard_sign.checked,
      interest: {
        share: form.share_info.checked,
        host: form.host_meet_greet.checked,
        unsure: form.help_unsure.checked,
        other: form.help_other.value,
      },
    };

    fetch("/api/get-involved", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((r) => console.log(r));
  };

  return (
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

      <fieldset>
        <label>
          <input name="yard_sign" type="checkbox" />
          <span>Display a yard sign</span>
        </label>

        <label>
          <span>Address</span>
          <input name="address" type="text" placeholder="Address" />
        </label>
      </fieldset>

      <fieldset>
        <legend>What Volunteer opportunities are you intereseted in?</legend>
        <label>
          <input name="share_info" type="checkbox" />
          <span>Share information with friends and neighbors</span>
        </label>

        <label>
          <input name="host_meet_greet" type="checkbox" />
          <span>Host a meet-and-greet</span>
        </label>

        <label>
          <input name="help_unsure" type="checkbox" />
          <span>I'm not sure, but I'm still interested in helping</span>
        </label>

        <label>
          <input type="checkbox" readonly />
          <span>Other</span>
          <input name="help_other" type="text" />
        </label>
      </fieldset>

      <button className={css.submit} type="submit">
        Submit
      </button>
    </form>
  );
}
