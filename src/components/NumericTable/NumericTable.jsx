import React from "react";
import PropTypes from "prop-types";

const NumericTable = ({ caption, data }) => {
  return (
    <table>
      <caption>{caption}</caption>
      <tbody>
        {Object.entries(data).map(([key, value], index) => {
          return (
            <tr key={index}>
              <th>{key}</th>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

NumericTable.propTypes = {
  caption: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.number).isRequired
};

export default React.memo(NumericTable);
