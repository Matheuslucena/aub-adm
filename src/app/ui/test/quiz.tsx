import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { questions as questionsData } from "@/data/questions";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Quiz({
  open,
  onSubmit,
  testType,
}: {
  open: boolean;
  onSubmit: any;
  testType: any;
}) {
  const [questions, setQuestions] = useState([...questionsData]);
  const [formData, setFormData] = useState({
    id: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const questionsList = questions
    .filter((i) => {
      return i.type === testType;
    })
    .map((q) => {
      return (
        <div key={q.id} className="mb-4">
          <Label htmlFor="punchId" className="text-right">
            {q.question}
          </Label>
          <RadioGroup>
            {q.options.map((opt) => {
              return (
                <div key={opt.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={opt.id + "-" + opt.text}
                    id={"opt" + opt.id}
                  />
                  <Label htmlFor={"opt" + opt.id}>{opt.text}</Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      );
    });

  return (
    <Dialog open={open}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Aubergine Training - Quiz</DialogTitle>
          <DialogDescription>
            Please answer the following quiz to submit your answers.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[calc(100vh-200px)] overflow-auto">
          {questionsList}
        </ScrollArea>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              onSubmit(formData);
            }}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
