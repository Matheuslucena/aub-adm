"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { userInfoState } from "@/context/userInfoContext";

export default function Index() {
  const router = useRouter();
  const { userInfoValue, setUserInfoState } = userInfoState();
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
  const types = ["Server", "Breakfast", "Smoothie"];
  const [formData, setFormData] = useState({
    name: "",
    punchId: "",
    location: "American Fork",
    type: "Server",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleStart = (e: any) => {
    setUserInfoState(formData);
    router.push("/test");
  };
  return (
    <>
      <div className="flex justify-center">
        <Card className="w-[450px] h-fit mt-[50px]">
          <CardHeader>
            <CardTitle>Employee Information</CardTitle>
            <CardDescription>
              Before you start, please enter your information and select the
              type of training.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="punchId" className="text-right">
                  Puch ID
                </Label>
                <Input
                  id="punchId"
                  className="col-span-3"
                  value={formData.punchId}
                  autoComplete="off"
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
                  autoComplete="off"
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
                  className="block col-span-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
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
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Training Type
                </Label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  name="type"
                  className="block col-span-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {types.sort().map((l) => {
                    return (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={handleStart}
              className="w-full bg-green-800 hover:bg-green-900"
            >
              Start Training
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
