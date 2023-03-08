"use client";
import cssf from "@support/form.module.css";
import css from "@request-sign/page.module.css";

export default function RequestSign() {
  // TODO validate yard sign request form

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const response = await fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        address: form.address.value,
        requestSign: true,
      }),
    });

    console.log(response.status);
  };

  return (
    <section className={css.section}>
      <h1>Request Yard Sign</h1>
      <p>
        Show your support with a free yard sign! They really do help get the
        word out. We’ll even do the heavy lifting by placing it in your yard in
        the weeks leading up to the April 11th election, then picking it up
        shortly after the election. Submit your information below and we’ll do
        the rest.
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

        <label>
          <span>Address</span>
          <input name="address" type="text" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
