import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleModal } from "#store/actions";
import Modal from "#components/Modal/Modal";
import RatesTable from "#views/Rates/RatesTable";
import RatesButton from "#views/Rates/RatesButton";
import styles from "./Rates.scss";

const mapStateToProps = state => {
  const { data, isFetched, error } = state.ratesReducer;
  const { isModalOpen } = state.UiReducer;

  return {
    base: isFetched ? data.base : "",
    date: isFetched ? data.date : "",
    isFetched,
    error,
    isModalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(toggleModal(false))
  };
};

const Rates = ({ base, date, isFetched, error, isModalOpen, hideModal }) => {
  return (
    <div className={styles.container}>
      {isModalOpen && (
        <Modal
          isError
          title="Error!"
          msg={`Error occured during rates fetching: ${error}`}
          onClick={() => hideModal()}
        />
      )}
      <div className={styles.rates}>
        <h2>
          {`Exchange rates
          ${isFetched ? `for ${base} based on ${date}` : ""}`}
        </h2>
        <RatesTable />
        <RatesButton />
      </div>
    </div>
  );
};

Rates.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  base: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Rates));
