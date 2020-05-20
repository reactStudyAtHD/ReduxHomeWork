import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increment, decrement } from '../store/modules/counter';

const CounterContainer = prop => {
  return <Counter number={prop.number} onIncrease={prop.increment} onDecrease={prop.decrement} />;
};

const mapStateToProps = ({ counter }) => ({
  number: counter.number
});

const mapDispatchToProps = { increment, decrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
