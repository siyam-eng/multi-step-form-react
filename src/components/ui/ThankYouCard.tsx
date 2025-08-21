import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import ThankYouSVG from "@/assets/images/icon-thank-you.svg";
// import { useState } from "react";

export const ThankYouCard = () => {
  // add a state later
  return (
    <div>
      <CardContent className="my-10 grid justify-center justify-items-center gap-1 place-self-center text-center">
        <img src={ThankYouSVG} alt="" className="mb-4 max-w-15" />
        <h1 className="text-2xl font-bold">Thank You!</h1>
        <div>
          <p className="text-grey-500">
            Thanks for confirming your subscription!{" "}
          </p>
          <p className="text-grey-500">
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@siyamahmed.com
          </p>
        </div>
      </CardContent>
    </div>
  );
};
