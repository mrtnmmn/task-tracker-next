"use client"

import StepCard from "@/components/step-card";
import { useSteps } from "@/contexts/StepsContext";

export default function Home() {
  const { steps } = useSteps()

  return (
    <div className="w-full max-w-full flex flex-row items-center justify-center space-x-4 overflow-auto">
      {steps.length !== 0 ? 
        steps.map((step: Step) =>{
          return (
            <StepCard step={step} key={step.id} />
          )
        })
        :
        <span>There are no steps created</span>
      }
    </div>
  )
}
