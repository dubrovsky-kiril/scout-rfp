import React from "react";
import Button from "#components/Button/Button";

const handleOnClick = () => {
  console.log("clicked");
};

const ExchangeRates = () => {
  return (
    <div>
      <Button onClick={handleOnClick}>Get rates</Button>
    </div>
  );
};

export default React.memo(ExchangeRates);
