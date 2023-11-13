"use client";

import { getEventById } from "@/utils/helpers";
import { useParams } from "next/navigation";

import React, { Fragment } from "react";
import { EventContent, EventLogistics, EventSummary } from "./components";

const EventDetail: React.FC = ({}) => {
  const { eventId } = useParams();

  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetail;
