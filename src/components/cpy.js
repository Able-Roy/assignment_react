import React, { useState, useEffect } from "react";

import {connect} from 'react-redux';
import * as userActions from '../actions/userActions'; 

const Dtables = () => {
  const [hasError, setErrors] = useState(false);
  const [students, setStudents] = useState([]);

  const requestData = {
    app_code: "TMS-STAFF",
    staff_type: "TEACHER",
    version: "35",
    platform: "web",
    device_id: "d566e0dce6c65368",
    school_id: "3",
    academic_year_id: "1953",
    division: {
      0: "1840 ",
      1: "1841 ",
      2: "1843 ",
      3: "1844",
      4: "1845 ",
      5: "1846 ",
      6: "1847 ",
      7: "1848 ",
      8: "1849 ",
      9: "1867 ",
      10: "1868 ",
      11: "1869 ",
      12: "1896 ",
      13: "1870",
    },
    user_id: "201",
    user_type: "TMS_USER",
  };
  useEffect(() =>
    fetch(
      "https://1dlkbk98d8.execute-api.ap-south-1.amazonaws.com/Stage/question/class_list",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(requestData),
      }
    )
      .then((res) => res.json())
      .then((res) => {
       console.log(res);
        setStudents(res.result);
        console.log(students);
      })
      .catch((err) => console.log(err))
  ,[]);

  return <div>
      {console.log(students)}
      <table border="1px solid black">
          <tr>
              <td>Id</td>
              <td>Name</td>
          </tr>
          {
              students.map(stud => {
                  return(
                      <tr id={stud.id}>
                          <td>{stud.id}</td>
                          <td>{stud.name}</td>
                      </tr>
                  )
              })
          }
      </table>
  </div>;
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
      student: state.users.users,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadUsers: () => {
        dispatch(userActions.loadUser())
      }
    }
  }

//export default Dtables;

export default connect(mapStateToProps, mapDispatchToProps)(Dtables);
