import RestService from "../service/RestService";
import StoreAction from "../constant/StoreAction";
import ApiLocation from "../constant/ApiLocation";
import {setCreateMarkDialogVisibility} from "../store/GlobalAction";

/**
 * Read project from database. If projectId parameter is not supplied,
 * current project will be read
 * @param [projectId]
 * @returns {function(*, *)}
 */
export function readAllStudents() {
  return (dispatch) => {
    // dispatch({type: StoreAction.READ_ALL_STUDENTS_START});
    RestService.get("students")
    .then(response => {
      dispatch({
        type: StoreAction.READ_ALL_STUDENTS,
        students: response
      });
    })
  }
}

export function saveMark() {
  return (dispatch, store) => {
    RestService.post(ApiLocation.MARKS, {
      value: store().form.createMarkDialog.values.value
    })
    .then(() => {
      dispatch(readAllMarks());
      dispatch(setCreateMarkDialogVisibility(false));
    })
  }
}

export function readAllMarks() {
  return (dispatch) => {
    RestService.get(ApiLocation.MARKS)
    .then(response => {
      dispatch({
        type: StoreAction.READ_ALL_MARKS,
        marks: response
      });
    })
  }
}