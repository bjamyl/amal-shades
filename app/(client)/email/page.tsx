import React from "react";
import { Button } from "@/components/ui/button";
import { sendMail } from "@/utils/mail";

export default function Email() {
  const send = async () => {
    "use server";

    await sendMail({
      to: "alhassanjamil0@gmail.com",
      name: "Jamil",
      subject: "Test",
      body: `<h1>Hello world</h1>`,
    });
  };
  return (
    <form>
      <Button formAction={send}>Test</Button>
    </form>
  );
}
