import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
// import { useState } from "react";

function AddOnCard() {
  return (
    <Label className="has-[[aria-checked=true]]: flex items-center gap-3 rounded-md border-1 border-purple-200 p-3 hover:bg-white has-[[aria-checked=true]]:border-blue-950 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:bg-blue-950">
      <Checkbox
        id="toggle-2"
        defaultChecked
        className="data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white dark:data-[state=checked]:border-0"
      />
      <div className="flex w-full place-items-center justify-between">
        <div className="grid gap-1.5 font-normal">
          <p className="text-base leading-none font-medium text-blue-950">
            Online Service
          </p>
          <p className="text-muted-foreground text-xs">
            Access to multiplayer games
          </p>
        </div>
        <p className="text-xs font-light text-purple-600">+1/mo</p>
      </div>
    </Label>
  );
}

export const Step3 = () => {
  // add a state later
  return (
    <div>
      <CardHeader className="mb-5">
        <CardTitle>Pick add-ons</CardTitle>
        <CardDescription>
          Add-ons help enhance your gaming experience
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-5 pb-6">
        <AddOnCard />
        <AddOnCard />
        <AddOnCard />
      </CardContent>
    </div>
  );
};
