import React from "react";

import classes from "./event-item.module.css";
import { UIButton } from "@/app/components";
import { DateIcon } from "@/icons/date-icon";
import { AddressIcon } from "@/icons/address-icon";
import { ArrowRightIcon } from "@/icons/arrow-right-icon";

type EventItemProps = {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
};

const EventItem: React.FC<EventItemProps> = ({
  date,
  id,
  image,
  location,
  title,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <UIButton link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </UIButton>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
