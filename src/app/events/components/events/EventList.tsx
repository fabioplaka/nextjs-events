import { EventTypes } from "@/types/EventTypes";
import React from "react";
import { EventItem } from ".";

import classes from "./event-list.module.css";

type EventListProps = {
  items: EventTypes[];
};

const EventList: React.FC<EventListProps> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
