import React, { memo } from "react";
import PropTypes from "prop-types";

const TableCell = ({ cell }) => {
  return <td>{cell}</td>;
};

TableCell.propTypes = {
  cell: PropTypes.string.isRequired
};

export default memo(TableCell);
