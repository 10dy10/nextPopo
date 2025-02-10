"use client";

import { sendEmail } from "../lib/action";
import { useActionState } from "react";

export default function EmailSend() {
  const [actionState, formAction] = useActionState(sendEmail, null);

  return (
    <form action={formAction} className="sendForm">
      <div>
        <div>
          <label htmlFor="name">NAME</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="subject">SUBJECT</label>
          <textarea name="subject" id="subject"></textarea>
        </div>
      </div>
      <button type="submit">SEND</button>
    </form>
  );
}
