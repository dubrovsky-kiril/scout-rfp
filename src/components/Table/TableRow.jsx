import React from "react";
import PropTypes from "prop-types";
import TableCell from "#components/Table/TableCell";

const TableRow = ({ row }) => {
  return (
    <tr>
      {row.map((cell, index) => {
        return <TableCell key={index} cell={cell} />;
      })}
    </tr>
  );
};

TableRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TableRow;
