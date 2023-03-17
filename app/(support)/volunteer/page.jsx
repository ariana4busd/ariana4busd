"use client";
import css from "@volunteer/page.module.css";
import { Form } from "@support/form";
import { useState } from "react";

export default function Volunteer() {
  const [shareInfo, setShareInfo] = useState(false);
  const [hostMeetAndGreet, setHostMeetAndGreet] = useState(false);
  const [helpUnsure, setHelpUnsure] = useState(false);
  const [helpOther, setHelpOther] = useState("");

  return (
    <section className={css.section}>
      <p>
        Sign up today to help elect Ariana. We{"'"}re in this together. Every
        bit of help, no matter the time or amount makes a difference. Thank you
        for showing your support for our students{"'"} future. Complete the
        fields below and we{"'"}ll share further details and/or specific
        opportunities based on your selection(s).
      </p>

      <Form data={{ shareInfo, hostMeetAndGreet, helpUnsure, helpOther }}>
        <fieldset name="help">
          <legend>I want to help by...</legend>
          <label>
            <input
              name="share_info"
              type="checkbox"
              onChange={(e) => setShareInfo(e.target.value)}
            />
            <span>Sharing information with friends and neighbors</span>
          </label>

          <label>
            <input
              name="host_meet_greet"
              type="checkbox"
              onChange={(e) => setHostMeetAndGreet(e.target.value)}
            />
            <span>Hosting a meet-and-greet</span>
          </label>

          <label>
            <input
              name="help_unsure"
              type="checkbox"
              onChange={(e) => setHelpUnsure(e.target.value)}
            />
            <span>
              I{"'"}m not sure, but I{"'"}m still interested in helping
            </span>
          </label>

          <label>
            <input type="checkbox" />
            <div>
              <input
                name="help_other"
                type="text"
                placeholder="Other"
                onChange={(e) => setHelpOther(e.target.value)}
              />
            </div>
          </label>
        </fieldset>
      </Form>
    </section>
  );
}
