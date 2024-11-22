import { Card, CardContent, CardHeader } from "./ui/card";

export default function StepCard({step}: {step: Step}) {
  return (
    <Card className="w-96 min-w-96">
      <CardHeader>{step.name}</CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}