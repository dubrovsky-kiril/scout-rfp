import React, { memo } from "react";
import PropTypes from "prop-types";

const TableCell = memo(({ cell }) => {
  return <td>{cell}</td>;
});

TableCell.propTypes = {
  cell: PropTypes.string.isRequired
};

export default TableCell;
