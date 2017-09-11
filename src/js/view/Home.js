import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '../component/Table';
import { readAllStudents } from '../store/StudentAction';

class Home extends React.Component {

  componentDidMount() {
    this.props.readAllStudents();
  }

  render() {
    const { students } = this.props;
    return (
      <Table header={['Ime']} content={students} />
    );
  }
}

Home.propTypes = {
  students: PropTypes.array.isRequired,
  readAllStudents: PropTypes.func.isRequired,
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

export default Home;