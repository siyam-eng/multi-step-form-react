import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StepIndicator } from "@/components/ui/StepIndicator";
import { Step1 } from "@/components/ui/Step1";
import { Step2 } from "@/components/ui/Step2";
import { Step3 } from "@/components/ui/Step3";
import { Step4 } from "@/components/ui/Step4";
import { ThankYouCard } from "@/components/ui/ThankYouCard";
import { useState } from "react";
import { cursorTo } from "readline";
import { Divide } from "lucide-react";

// The base form
function Form() {
  const [currentStep, setCurrentStep] = useState(1); // TODO: This will be managed by state
  function handleNextClick() {
    //TODO: limit it to the max step count (in this case 4)
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  }

  function handleBackClick() {
    //TODO: limit it to the max step count (in this case 4)
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  }
  function handleConfirmClick() {
    setCurrentStep(5);
  }
  return (
    <div className="w-full bg-white max-sm:h-full max-sm:justify-between sm:w-7/10 sm:rounded-lg sm:p-4">
      <div className="flex flex-col max-sm:relative max-sm:h-full sm:w-full sm:flex-row">
        <StepIndicator currentStep={currentStep} />
        <div className="flex grow-1 flex-col justify-between max-sm:-mt-15 max-sm:h-full">
          <Card className="w-full bg-white max-sm:relative max-sm:mx-auto max-sm:w-9/10 sm:rounded-none sm:border-none sm:shadow-none">
            {currentStep === 1 ? (
              <Step1 />
            ) : currentStep === 2 ? (
              <Step2 />
            ) : currentStep === 3 ? (
              <Step3 />
            ) : currentStep === 4 ? (
              <Step4 />
            ) : (
              <ThankYouCard />
            )}
            {/* <Step1 /> */}
            {/* <Step2 />
            <Step3 />
            <Step4 />
            <ThankYouCard /> */}
          </Card>
          <footer className="flex w-full justify-between bg-white p-3 max-sm:mt-6 sm:rounded-none sm:border-none sm:p-8">
            {/* TODO: The back button will be conditionally rendered */}
            <Button
              onClick={handleBackClick}
              variant={"link"}
              className={`text-grey-500 ${currentStep === 1 ? "invisible" : ""}`}
            >
              Go Back
            </Button>
            {currentStep === 4 ? (
              <Button onClick={handleConfirmClick} className="bg-purple-600">
                Confirm
              </Button>
            ) : currentStep < 4 ? (
              <Button
                onClick={handleNextClick}
                className={`rounded-sm bg-blue-950`}
              >
                Next Step
              </Button>
            ) : null}
          </footer>
        </div>
      </div>
    </div>
  );
}

export { Form };
