import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { useState } from "react";

export const Step4 = () => {
  // add a state later
  return (
    <div>
      <CardHeader className="mb-5">
        <CardTitle>Finishing up</CardTitle>
        <CardDescription>
          Double check if everything looks OK before confirming
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-5 pb-6">
        <Card className="gap-0 rounded-md bg-blue-100">
          <div className="flex flex-row justify-between px-3">
            <div className="">
              <p className="leading-2 font-bold">Arcade(Monthly)</p>
              <Button
                className="text-grey-500 m-0 inline h-0 items-start justify-start gap-0 p-0 leading-0 font-normal underline underline-offset-1"
                variant="link"
              >
                Change
              </Button>
            </div>
            <span className="text-sm font-bold">$9/mo</span>
          </div>
          <hr className="border-bottom-[0.5px] mx-auto my-3 w-9/10 border-purple-200 p-0" />
          <div className="grid gap-2">
            <div className="flex flex-row justify-between px-3">
              <p className="text-grey-500">Online service</p>
              <span className="text-sm">+$1/mo</span>
            </div>
            <div className="flex flex-row justify-between px-3">
              <p className="text-grey-500">Online service</p>
              <span className="text-sm">+$2/mo</span>
            </div>
          </div>
        </Card>
        <div className="flex flex-row justify-between px-3">
          <p className="text-grey-500">Total (per month)</p>
          <span className="font-medium text-purple-600">$12/mo</span>
        </div>
      </CardContent>
    </div>
  );
};
