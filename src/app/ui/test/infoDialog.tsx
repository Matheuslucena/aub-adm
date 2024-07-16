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

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function InfoDialog({
  open,
  onClose,
  onStart,
}: {
  open: boolean;
  onClose: any;
  onStart: any;
}) {
  const locations = [
    "St. George",
    "Draper",
    "Orem",
    "Lehi",
    "Farmington",
    "Riverton",
    "Park City",
    "UVU",
    "American Fork",
  ];

  const [formData, setFormData] = useState({
    name: "",
    punchId: "",
    location: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <Dialog open={open}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Aubergine Training</DialogTitle>
          <DialogDescription>
            Please fill up the form with your information.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="punchId" className="text-right">
              Puch ID
            </Label>
            <Input
              id="punchId"
              className="col-span-3"
              value={formData.punchId}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <select
              id="location"
              value={formData.location}
              onChange={handleChange}
              name="location"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
            >
              {locations.sort().map((l) => {
                return (
                  <option key={l} value={l}>
                    {l}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              onStart(formData);
            }}
          >
            Start
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
