import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/ui/StepIndicator";
import { Step1 } from "@/components/ui/Step1";
import { Step2 } from "@/components/ui/Step2";
import { Step3 } from "@/components/ui/Step3";
import { Step4 } from "@/components/ui/Step4";
import { ThankYouCard } from "@/components/ui/ThankYouCard";

// The base form
function Form() {
  const currentStep = 1; // TODO: This will be managed by state

  return (
    <div className="flex min-h-screen flex-col justify-between bg-blue-100">
      <div className="relative">
        <StepIndicator currentStep={currentStep} />
        <Card className="relative mx-auto -mt-15 w-9/10 bg-white">
          {/* <Step1 /> */}
          {/* <Step2 /> */}
          {/* <Step3 /> */}
          {/* <Step4 /> */}
          <ThankYouCard />
        </Card>
      </div>
      <footer className="mt-6 flex w-full justify-between bg-white p-3">
        {/* TODO: The back button will be conditionally rendered */}
        <Button variant={"link"} className="text-grey-500">
          Go Back
        </Button>
        <Button className="rounded-sm bg-blue-950">Next Step</Button>
      </footer>
    </div>
  );
}

export { Form };
