import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Card, CardActions, FlatButton} from "material-ui";
import {setCreateMarkDialogVisibility} from "../store/GlobalAction";
import {readAllMarks, saveMark} from "../store/StudentAction";
import Table from "../component/Table";
import CreateMarkDialog from "./dialog/CreateMarkDialog";

class Home extends React.Component {

  componentDidMount() {
    this.props.readAllMarks();
  }

  render() {
    const {marks, createMarkDialogVisible, setCreateMarkDialogVisibility, saveMark} = this.props;
    return (
        <Card>
          <CardActions>
            <FlatButton label="Create new mark"
                        onClick={() => {
                          setCreateMarkDialogVisibility(true);
                        }}/>
          </CardActions>
          <Table header={['Mark']} content={marks}/>
          <CreateMarkDialog visible={createMarkDialogVisible}
                            setVisibility={setCreateMarkDialogVisibility}
                            onSubmit={saveMark}/>
        </Card>
    );
  }
}

Home.propTypes = {
  marks: PropTypes.array.isRequired,
  createMarkDialogVisible: PropTypes.bool.isRequired,
  readAllStudents: PropTypes.func.isRequired,
  setCreateMarkDialogVisibility: PropTypes.func.isRequired,
  saveMark: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  marks: state.studentReducer.marks,
  createMarkDialogVisible: state.globalReducer.createMarkDialogVisible
});

const mapDispatchToProps = dispatch => ({
  readAllMarks: () => {
    dispatch(readAllMarks());
  },
  setCreateMarkDialogVisibility: (visibility) => {
    dispatch(setCreateMarkDialogVisibility(visibility));
  },
  saveMark: () => {
    dispatch(saveMark());
  },
});

Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default Home;