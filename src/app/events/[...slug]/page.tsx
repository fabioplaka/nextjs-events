"use client";

import { getFilteredEvents } from "@/utils/helpers";
import { useParams } from "next/navigation";
import React from "react";
import { EventList } from "../components";
import { ResultsTitle } from "./components";
import { ErrorAlert, UIButton } from "@/app/components";

const FilteredEventsPage: React.FC = ({}) => {
  const { slug } = useParams();

  const numYear = +slug[0];
  const numMonth = +slug[1];

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  const date = new Date(numYear, numMonth - 1);

  if (!slug) {
    return <p className="center">Loading</p>;
  }

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <UIButton link="/events">Show all events</UIButton>
        </div>
      </>
    );
  }

  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <UIButton link="/events">Show all events</UIButton>
        </div>
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </>
  );
};

export default FilteredEventsPage;
