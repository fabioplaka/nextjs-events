"use client";

import { getAllEvents } from "@/utils/helpers";
import React from "react";
import { EventList } from "./components";

interface EventsProps {}

const Events: React.FC<EventsProps> = ({}) => {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default Events;
