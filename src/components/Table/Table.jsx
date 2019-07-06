import React from "react";
import PropTypes from "prop-types";
import TableRow from "#components/Table/TableRow";
import TableHeader from "#components/Table/TableHeader";
import styles from "./Table.scss";

const Table = ({ data }) => {
  const columnHeaders = [...data[0]];
  const rows = data.slice(1);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columnHeaders.map((header, index) => {
            return <TableHeader key={index} title={header} />;
          })}
        </tr>
      </thead>
      {rows.length > 0 && (
        <tbody>
          {rows.map((row, index) => {
            return <TableRow key={index} row={row} />;
          })}
        </tbody>
      )}
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
};

export default Table;
