"use client";
import css from "./form.module.css";

export function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
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
          <input name="support-sign" type="checkbox" />
          <span>Display a yard sign</span>
        </label>

        <input name="address" type="text" placeholder="Address" />
      </fieldset>

      <fieldset>
        <legend>What Volunteer opportunities are you intereseted in?</legend>
        <label>
          <input name="support-share" type="checkbox" />
          <span>Share information with friends and neighbors</span>
        </label>

        <label>
          <input name="support-host" type="checkbox" />
          <span>Host a meet-and-greet</span>
        </label>

        <label>
          <input name="support-unsure" type="checkbox" />
          <span>I'm not sure, but I'm still interested in helping</span>
        </label>

        <label>
          <input type="checkbox" readonly />
          <span>Other</span>
        </label>

        <input name="support-other" type="text" />
      </fieldset>

      <button className={css.submit} type="submit">
        Submit
      </button>
    </form>
  );
}
