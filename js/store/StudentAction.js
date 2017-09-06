import RestService from "../service/RestService";
import {StoreAction} from "../constant/StoreAction";

/**
 * Read project from database. If projectId parameter is not supplied,
 * current project will be read
 * @param [projectId]
 * @returns {function(*, *)}
 */
export function readAllStudents() {
  console.log("readAllStudents Action");
  return (dispatch) => {
    console.log("readAllStudentsStart Action");
    // dispatch({type: StoreAction.READ_ALL_STUDENTS_START});
    RestService.get("students")
    .then(response => {
      console.log("readAllStudents received result Action");
      dispatch({
        type: StoreAction.READ_ALL_STUDENTS,
        students: response
      });
    })
  }
}