"use client";

import { getFeaturedEvents } from "@/utils/helpers";
import React from "react";
import { EventList } from "./events/components";

function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Home;
