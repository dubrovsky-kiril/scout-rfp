import React from "react";
import { withApollo } from "react-apollo";
import PropTypes from "prop-types";
import Button from "#components/Button/Button";

const handleOnClick = () => {
  console.log("clicked");
};

const ExchangeRates = ({ client }) => {
  console.log(client);
  return (
    <div>
      <Button onClick={handleOnClick}>Get rates</Button>
    </div>
  );
};

ExchangeRates.propTypes = {
  client: PropTypes.shape({ client: PropTypes.string.isRequired }).isRequired
};

export default withApollo(React.memo(ExchangeRates));
