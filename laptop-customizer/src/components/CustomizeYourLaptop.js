import React from "react";
import Choices from "./Choices";

export default function CustomizeYourLaptop(props) {
  const features = Object.keys(props.features).map((feature, idx) => (
    <Choices {...props} feature={feature} idx={idx} />
  ));
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
