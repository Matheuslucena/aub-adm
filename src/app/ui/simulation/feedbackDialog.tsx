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
import clsx from "clsx";
import Image from "next/image";

export default function FeedbackDialog({
  open,
  onClose,
  item,
  correct,
}: {
  open: boolean;
  onClose: any;
  item: any;
  correct: boolean;
}) {
  return (
    <Dialog open={open}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle
            className={clsx(
              "text-center text-2xl  text-white p-2 rounded-md",
              correct ? "bg-green-600" : "bg-red-600"
            )}
          >
            {correct ? "Correct!" : "Mistake!"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center">
          {item && (
            <>
              <AspectRatio ratio={4 / 4} className="bg-muted">
                <Image
                  className="h-auto w-auto object-cover rounded"
                  src={item.src}
                  alt={item.name}
                  fill
                ></Image>
              </AspectRatio>
              <span className="font-semibold text-2xl text-center mb-2">
                {item.name}
              </span>
              <span className="text-center text-gray-500">{item.desc}</span>
            </>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            {correct ? "Ok" : "Try Again"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
