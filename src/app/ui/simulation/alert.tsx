import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import clsx from "clsx";

export default function Alert({
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
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle
            className={clsx(
              "text-center text-2xl  text-white p-2 rounded-md",
              correct ? "bg-green-600" : "bg-red-600"
            )}
          >
            {correct ? "Correct!" : "Mistake!"}
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col justify-center">
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
                <span className="font-semibold text-lg text-center mb-2">
                  {item.name}
                </span>
                <span className="text-center">{item.desc}</span>
              </>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>
            {correct ? "Ok" : "Try Again"}
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
