import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { InputWithLabel } from "@/components/ui/InputWithLabel";

function Step1() {
  return (
    <>
      <CardHeader>
        <CardTitle>Personal Info</CardTitle>
        <CardDescription>
          Please provide your name, email address, and phone number.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-5 pb-6">
        <InputWithLabel
          label="Name"
          id="name"
          type="text"
          placeholder="e.g. Stephen King"
        />
        <InputWithLabel
          label="Email Address"
          id="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <InputWithLabel
          label="Phone Number"
          id="phone"
          type="phone"
          placeholder="e.g. +880 123 4567 890"
        />
      </CardContent>
    </>
  );
}

export { Step1 };
