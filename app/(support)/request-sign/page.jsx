"use client";
import css from "@request-sign/page.module.css";
import { Form } from "@support/form";
import { useState } from "react";

export default function RequestSign() {
  const [address, setAddress] = useState("");

  return (
    <section className={css.section}>
      <p>
        Show your support with a free yard sign! They really do help get the
        word out. We’ll even do the heavy lifting by placing it in your yard in
        the weeks leading up to the April 11th election, then picking it up
        shortly after the election. Submit your information below and we’ll do
        the rest.
      </p>

      <Form data={{ address, requestSign: true }}>
        <label>
          <span>Address</span>
          <input
            name="address"
            type="text"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </Form>
    </section>
  );
}
