import React from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import Button from "#components/Button/Button";

const RATES_QUERY = gql`
  query ratesQuery {
    rates @rest(type: "Rates", path: "/") {
      rates
    }
  }
`;

const handleOnClick = () => {
  console.log("clicked");
};

const ExchangeRates = ({ client }) => {
  client
    .query({
      query: RATES_QUERY
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));

  return (
    <div>
      <Button onClick={handleOnClick}>Get rates</Button>
    </div>
  );
};

ExchangeRates.propTypes = {
  client: PropTypes.object.isRequired // eslint-disable-line
};

export default withApollo(React.memo(ExchangeRates));
