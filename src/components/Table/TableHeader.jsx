import React, { memo } from "react";
import PropTypes from "prop-types";

const TableHeader = memo(({ title }) => {
  return <th>{title}</th>;
});

TableHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default TableHeader;
