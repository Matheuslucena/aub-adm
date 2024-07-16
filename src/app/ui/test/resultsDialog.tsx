import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import clsx from "clsx";
import Image from "next/image";

export default function ResultsDialog({
  open,
  onClose,
  items,
  score,
}: {
  open: boolean;
  onClose: any;
  items: any;
  score: any;
}) {
  const correct: any = [];
  const incorrect: any = [];
  items.map((item: any) => {
    if (item.correct) {
      correct.push(
        <div key={item.product.id} className="mb-1 p-1 text-left ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 inline-block text-green-900 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          {item.product.name}
        </div>
      );
    } else {
      incorrect.push(
        <div key={item.product.id} className="mb-1 p-1 text-left ">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 inline-block text-red-900 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                {item.product.name}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">{item.product.name}</h4>
                  {item.wrongAnswers.length > 0 && (
                    <div className="text-sm capitalize font-semibold">
                      - Wrong Ingredient:{" "}
                    </div>
                  )}
                  {item.wrongAnswers.map((wrong: string) => {
                    return <p className="text-sm ml-1 italic">{wrong}</p>;
                  })}
                  {item.missingAnswers.length > 0 && (
                    <div className="text-sm capitalize font-semibold">
                      - Missing Ingredient:{" "}
                    </div>
                  )}
                  {item.missingAnswers.map((miss: string) => {
                    return <p className="text-sm ml-1 italic">{miss}</p>;
                  })}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      );
    }
  });

  return (
    <Dialog open={open}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle
            className={clsx(
              "text-center text-2xl  text-white p-2 rounded-md bg-blue-600"
            )}
          >
            Results
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center text-center">
          <div className="py-6">
            Your score: <h1 className="text-3xl font-bold">{score}%</h1>
          </div>
          <Tabs defaultValue="correct" className="">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="correct">
                Correct ({correct.length})
              </TabsTrigger>
              <TabsTrigger value="incorrect">
                Incorrect ({incorrect.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="correct">{correct}</TabsContent>
            <TabsContent value="incorrect">{incorrect}</TabsContent>
          </Tabs>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
