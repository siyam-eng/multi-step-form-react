import BgSidebarMobile from "@/assets/bg-sidebar-mobile.svg";
import BgSideBarDesktop from "@/assets/bg-sidebar-desktop.svg";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

const StepIndicator = ({ currentStep, totalSteps = 4 }: StepIndicatorProps) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="relative">
      <img
        className="max-sm:h-[172px] max-sm:w-full max-sm:object-cover sm:invisible sm:absolute"
        src={BgSidebarMobile}
        alt="Step navigation background"
      />
      <img
        className="max-sm:invisible max-sm:absolute sm:min-h-full sm:object-cover"
        src={BgSideBarDesktop}
        alt="Step navigation background"
      />
      <div className="absolute flex gap-4 max-sm:top-8 max-sm:right-0 max-sm:left-0 max-sm:justify-center sm:top-1/10 sm:left-2/10 sm:flex-col">
        {steps.map((step) => (
          <div className="sm:flex sm:gap-2">
            <div
              key={step}
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg font-bold transition-colors ${
                step === currentStep
                  ? "border-white bg-white text-blue-950"
                  : step < currentStep
                    ? "border-white bg-transparent text-white"
                    : "border-white/50 bg-transparent text-white/50"
              }`}
            >
              {step}
            </div>
            <span className="text-sm text-white/50 max-sm:invisible max-sm:absolute">
              Step {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { StepIndicator };
