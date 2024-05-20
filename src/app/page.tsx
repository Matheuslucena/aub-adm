import Image from "next/image";
import Link from "next/link";
import { ingredients } from "@/data/ingredients";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MainNav from "./ui/mainNav";

export default function Home() {
  return (
    <div className="h-full min-h-full">
      <div className="flex flex-col h-full min-h-full">
        <div className="border-b">
          <MainNav></MainNav>
        </div>
        <div className="bg-gray-300 flex-1">
          <div className="grid lg:grid-cols-5 min-h-full">
            <div className="flex flex-col">
              <h2 className="border-b p-4">Ticket</h2>
              <div className="bg-white h-full m-3 flex flex-col">
                <div className="w-full py-4 px-4 font-semibold">#34</div>
                <div className="text-center border-gray-300 border-y p-1">
                  To Go
                </div>
                <div className="pl-2 mt-4 flex flex-col">
                  <div className="ml-4"></div>
                  <div className="ml-4 font-semibold">2 x Rio Bowl</div>
                  <div className="ml-4 font-semibold">1 x Rio Bowl</div>
                </div>
              </div>
            </div>
            <div className="col-span-3 border-l">
              <div className="">
                <h2 className="border-b p-4">Ingredients</h2>
              </div>
              <ScrollArea className="h-[calc(100vh-116px)]">
                <div className="flex flex-row flex-wrap gap-2 p-4 pt-0 mt-4"></div>
              </ScrollArea>
            </div>
            <div className="px-4 border-l">Ready</div>
          </div>
        </div>
      </div>
    </div>
  );
}
