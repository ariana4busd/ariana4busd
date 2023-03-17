import { Icon } from "~/icons/icon";
import { CheckIcon } from "@icons/check-icon";
import css from "@support/form.module.css";
import { cn } from "@utils/classnames";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const FORM = {
  READY: "ready",
  SENDING: "sending",
  RECEIVED: "received",
  ERROR: "error",
};

export function Form({ children, data = {} }) {
  const [state, setState] = useState(FORM.READY);

  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.target;

    setState(FORM.SENDING);
    fetch("/api/contact-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        ...data,
      }),
    })
      .then(() => setState(FORM.RECEIVED))
      .catch((err) => {
        console.log(err);
        setState(FORM.ERROR);
      });
  };

  const resetSubmitButton = (event) => {
    if (state === FORM.RECEIVED || state === FORM.ERROR) {
      setState(FORM.READY);
    }
  };

  return (
    <form
      className={css.layout}
      onSubmit={submitForm}
      onChange={resetSubmitButton}
    >
      <label>
        <span>Name</span>
        <input name="name" type="text" required />
      </label>

      <label>
        <span>Email</span>
        <input name="email" type="email" required />
      </label>

      <label>
        <span>Phone</span>
        <input name="phone" type="tel" minLength={7} maxLength={15} required />
      </label>

      {children}

      <AnimatePresence>
        <button
          id="submit"
          key="submit"
          className={css.submit_button}
          type="submit"
          status={state}
          disabled={state !== FORM.READY}
        >
          <span className={cn({ visually_hidden: state !== "ready" })}>
            Submit
          </span>
          {state === FORM.SENDING && <Icon id="ic_loading" />}
          {state === FORM.RECEIVED && <CheckIcon />}
        </button>
        <output htmlFor="submit" key="output">
          {/* TODO add messages after submitting form */}
          {FORM.SENDING && <p></p>}
          {FORM.RECEIVED && <p></p>}
          {FORM.ERROR && <p></p>}
        </output>
      </AnimatePresence>
    </form>
  );
}
