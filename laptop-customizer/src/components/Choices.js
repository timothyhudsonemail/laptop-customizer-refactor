import React from "react";

import Choice from "./Choice";

export default function Choices(props) {
  const { feature } = props;
  const featureHash = feature + "-" + props.idx;
  const options = props.features[feature].map(item => (
    <Choice item={item} {...props} />
  ));

  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
