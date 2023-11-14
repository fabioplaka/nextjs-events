"use client";

import { getAllEvents } from "@/utils/helpers";
import React from "react";
import { EventList } from "./components";
import { EventsSearch } from "./[...slug]/components";
import { useRouter } from "next/navigation";

interface EventsProps {}

const Events: React.FC<EventsProps> = ({}) => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (
    year: string | undefined,
    month: string | undefined
  ) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default Events;
