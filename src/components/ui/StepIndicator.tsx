import BgSidebarMobile from "@/assets/bg-sidebar-mobile.svg";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

const StepIndicator = ({ currentStep, totalSteps = 4 }: StepIndicatorProps) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="relative">
      <img
        className="h-[172px] w-full object-cover"
        src={BgSidebarMobile}
        alt="Step navigation background"
      />
      <div className="absolute top-8 right-0 left-0 flex justify-center gap-4">
        {steps.map((step) => (
          <div
            key={step}
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
              step === currentStep
                ? "border-white bg-white text-blue-950"
                : step < currentStep
                  ? "border-white bg-transparent text-white"
                  : "border-white/50 bg-transparent text-white/50"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export { StepIndicator };
