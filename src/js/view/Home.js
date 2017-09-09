import React from "react";
import PropTypes from "prop-types";
import Table from "../component/Table";
import {connect} from "react-redux";
import {readAllStudents} from "../store/StudentAction";

export default class Home extends React.Component {

  static propTypes = {
    students: PropTypes.array.isRequired,
    readAllStudents: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.props.readAllStudents();
  }

  render() {
    const {students} = this.props;
    return (
        <Table header={["Ime"]} content={students}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    students: state.studentReducer.students
  }
};

const mapDispatchToProps = dispatch => {
  return {
    readAllStudents: () => {
      dispatch(readAllStudents())
    },
  }
};

Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
