import React from "react";

import classes from "./results-title.module.css";
import { UIButton } from "@/app/components";

interface ResultsTitleProps {
  date: Date;
}

const ResultsTitle: React.FC<ResultsTitleProps> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <UIButton link="/events">Show all events</UIButton>
    </section>
  );
};

export default ResultsTitle;
