import classes from "./event-content.module.css";

interface EventContent {
  children: React.ReactNode;
}

const EventContent: React.FC<EventContent> = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default EventContent;
