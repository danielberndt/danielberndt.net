import React from "react";
import classes from "./ui.treat";
import cx from "../components/cx";

const Push = ({className, rest}) => <div className={cx(classes.push, className)} {...rest} />;

export default Push;
