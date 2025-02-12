import React from "react";
import ReusablePriorityPage from "../reusepriority";
import { Priority } from "@/state/api";

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.High} />;
};

export default Urgent;