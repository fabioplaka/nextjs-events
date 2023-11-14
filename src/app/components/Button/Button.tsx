import Link from "next/link";
import React from "react";

import classes from "./button.module.css";

interface UIButtonProps {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
}

const UIButton: React.FC<UIButtonProps> = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link href={link} legacyBehavior>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
};

export default UIButton;
