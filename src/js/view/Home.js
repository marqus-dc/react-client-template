import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '../component/Table';
import { readAllStudents } from '../store/StudentAction';

export default class Home extends React.Component {
  static propTypes = {
    students: PropTypes.array.isRequired,
    readAllStudents: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.props.readAllStudents();
  }

  render() {
    const { students } = this.props;
    return (
      <Table header={['Ime']} content={students} />
    );
  }
}

const mapStateToProps = state => ({
  students: state.studentReducer.students,
});

const mapDispatchToProps = dispatch => ({
  readAllStudents: () => {
    dispatch(readAllStudents());
  },
});

Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
