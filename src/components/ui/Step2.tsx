import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Arcade from "@/assets/images/icon-arcade.svg";
import Advanced from "@/assets/images/icon-advanced.svg";
import Pro from "@/assets/images/icon-pro.svg";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface PlanSelectionCardProps {
  imgPath: string;
  planName: string;
  price: string;
  discount: null | string;
}

function PlanSelectionCard({
  imgPath,
  planName,
  price,
  discount = null,
}: PlanSelectionCardProps) {
  return (
    <Card className="border-grey-500 flex-row rounded-sm p-2 shadow-none">
      <img src={imgPath} alt="" />
      <div className="">
        <p className="text-lg font-bold">{planName}</p>
        <p className="text-grey-500 text-sm">{price}</p>
        <p className="text-sm">{discount}</p>
      </div>
    </Card>
  );
}

export const Step2 = () => {
  // add a state later
  const [monthly, setMonthly] = useState(true);

  function handleSwitch() {
    setMonthly(!monthly);
  }
  const plans = [
    {
      planName: "Arcade",
      imgPath: Arcade,
      monthlyPrice: "$9",
      yearlyPrice: "$90",
      yearlyDiscount: "2 months free",
    },
    {
      planName: "Advanced",
      imgPath: Advanced,
      monthlyPrice: "$12",
      yearlyPrice: "$120",
      yearlyDiscount: "2 months free",
    },
    {
      planName: "Pro",
      imgPath: Pro,
      monthlyPrice: "$15",
      yearlyPrice: "$150",
      yearlyDiscount: "2 months free",
    },
  ];

  return (
    <div>
      <CardHeader className="mb-5">
        <CardTitle>Select your plan</CardTitle>
        <CardDescription>
          You have the option of monthly or yearly billing
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-5 pb-6">
        {plans.map((plan) => (
          <PlanSelectionCard
            planName={plan.planName}
            price={
              monthly ? `${plan.monthlyPrice}/mo` : `${plan.yearlyPrice}/yr`
            }
            imgPath={plan.imgPath}
            discount={monthly ? null : plan.yearlyDiscount}
          />
        ))}
        {/*  Add the monthly-yearly selector */}
        <div className="flex justify-center rounded-md bg-blue-50 p-2">
          <Label htmlFor="yearlySwitch" className="text-grey-500">
            <span className={monthly ? "text-blue-950" : ""}>Monthly</span>
            <Switch
              className=""
              checked={!monthly}
              onCheckedChange={handleSwitch}
            />
            <span className={!monthly ? "text-blue-950" : ""}>Yearly</span>
          </Label>
        </div>
      </CardContent>
    </div>
  );
};
