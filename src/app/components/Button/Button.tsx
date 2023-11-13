import Link from "next/link";
import React from "react";

import classes from "./button.module.css";

type UIButtonProps = {
  children: React.ReactNode;
  link: string;
};

const UIButton: React.FC<UIButtonProps> = ({ children, link }) => {
  return (
    <Link href={link} legacyBehavior>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
};

export default UIButton;
