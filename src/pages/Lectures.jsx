import React, { useEffect } from "react";
import AddLectureBtn from "../components/LecturesPageComponents/AddLectureBtn";
import LectureCard from "../components/LecturesPageComponents/LectureCard";
import SideNavBar from "../components/SideNavBar";
import { fetchAllLecturesThunk } from "../redux/lectures/lectures.action";
import { useDispatch, useSelector } from "react-redux";
import { fetchSocket } from "../redux/socket/socket.action";
function Lectures() {
  const dispatch = useDispatch();
  const allLectures = useSelector((state) => state.lectures.allLectures);
  const socket = useSelector((state) => state.socket.socket);
  useEffect(() => {
    //console.log("FETCH ALL LECTURES FIRING IN USE EFFECT");

    //dispatches the fetchAllLecturesThunk() from lectures actions which returns
    //object with the action type and payload containing the array of lectures
    //and sets all lectures state to the payload from here through the root-reducer

    const fetchAllLectures = () => {
      //console.log("RUNNING DISPATCH FROM FETCHALLLECTURES");
      return dispatch(fetchAllLecturesThunk());
    };
    if (socket.on) {
      socket.on("addNewLecture", (newLecture) => {
        dispatch(fetchSocket(newLecture));
      });

      socket.on("editLecture", (updatedlecture) => {
        dispatch(fetchSocket(updatedlecture));
      });
    }
    fetchAllLectures();
  }, [socket, dispatch]);

  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold mb-4">Lectures</h1>
        <AddLectureBtn />
        <div className="flex flex-wrap">
          {allLectures.length > 0 ? (
            allLectures.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))
          ) : (
            <p style={{ textAlign: "center" }}>
              There are no lectures in the database!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lectures;
