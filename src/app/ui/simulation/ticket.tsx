"use client";

import clsx from "clsx";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Ticket({
  items,
  type,
  onNextTicket,
}: {
  items: any;
  type: string;
  onNextTicket: any;
}) {
  const [ticketNumber, setTicketNumber] = useState(1);

  const itemsList = items.map((item: any) => {
    return <div key={item.id}>1x {item.name}</div>;
  });

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b h-16">
        <h1 className="text-2xl font-semibold text-gray-900">Ticket</h1>
      </div>
      <div className="flex-1">
        <div className={clsx("h-full flex flex-col bg-white p-4")}>
          <div className="pb-2 font-semibold text-sm">#{ticketNumber}</div>
          <div className="border-y border-gray-400 p-1 text-center text-sm">
            {type}
          </div>
          <div className="pt-4 flex-1">{itemsList}</div>
          <div className="flex justify-center">
            <Button onClick={onNextTicket}>Next Ticket</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
