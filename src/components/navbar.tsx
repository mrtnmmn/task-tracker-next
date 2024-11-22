"use client"

import { useSteps } from "@/contexts/StepsContext";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {

  const { addNewStep } = useSteps()

  return ( 
    <div className="w-full h-16 flex flex-row items-center justify-start bg-[#fafafa] border border-l-0">
      <SidebarTrigger className="mx-2"/>
      <Button variant="secondary" onClick={ () => { addNewStep('asd') }}>+ Create new step</Button>
    </div>
  )
}