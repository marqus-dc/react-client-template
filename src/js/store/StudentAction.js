import RestService from "../service/RestService";
import StoreAction from "../constant/StoreAction";

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