import { UIButton } from "@/app/components";
import { MONTHS } from "@/utils/months";
import React, { FormEvent, useRef, useState } from "react";

import classes from "./events-search.module.css";

interface EventsSearchProps {
  onSearch: (year: string | undefined, month: string | undefined) => void;
}

const EventsSearch: React.FC<EventsSearchProps> = ({ onSearch }) => {
  const selectedYearRef = useRef<HTMLSelectElement | null>(null);
  const selectedMonthRef = useRef<HTMLSelectElement | null>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedYear = selectedYearRef.current?.value;
    const selectedMonth = selectedMonthRef.current?.value;

    onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={selectedYearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Year</label>
          <select id="month" ref={selectedMonthRef}>
            {MONTHS.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <UIButton onClick={() => {}}>Find Events</UIButton>
    </form>
  );
};

export default EventsSearch;
