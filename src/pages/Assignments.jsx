import React, { useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAssignmentsThunk } from "../redux/assignment/assignments.action";
import { fetchAllAssignmentsStatusThunk } from "../redux/assignmentStatus/assignmentStatus.action";
function Assignments() {
  const dispatch = useDispatch();
  const allAssignments = useSelector(
    (state) => state.assignments.allAssignments
  );
  useEffect(() => {
    //console.log("FETCH ALL ASSIGNMENTS FIRING IN USE EFFECT");

    const fetchAllAssignments = () => {
      //console.log("RUNNING DISPATCH FROM FETCHALLASSIGNMENTS");
      return dispatch(fetchAllAssignmentsThunk());
    };
    fetchAllAssignments();
  }, [dispatch]);
  //console.log("All Assignments", allAssignments);

  const allAssignmentsStatus = useSelector(
    (state) => state.assignmentsStatus.allAssignmentsStatus
  );
  useEffect(() => {
    //console.log("FETCH ALL ASSIGNMENTS STATUS REQUESTS FIRING IN USE EFFECT");

    const fetchAllAssignmentsStatus = () => {
      //console.log("RUNNING DISPATCH FROM FETCHALLASSIGNMENTSSTATUS");
      return dispatch(fetchAllAssignmentsStatusThunk());
    };
    fetchAllAssignmentsStatus();
  }, [dispatch]);
  //console.log("All Assignments Status: ", allAssignmentsStatus);

  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <h1>Assignments</h1>
      </div>
    </div>
  );
}

export default Assignments;
