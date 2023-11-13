import { EventTypes } from "@/types/EventTypes";
import { DUMMY_EVENTS } from "./dummy-data";

export function getFeaturedEvents(): EventTypes[] {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents(): EventTypes[] {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: any) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export const getEventById = (
  id: string | string[] | undefined
): EventTypes | undefined => {
  return DUMMY_EVENTS.find((event) => event.id === id);
};
