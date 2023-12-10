import { useState } from "react";
import { useRef } from "react";
import { studentsGrades } from "../../../Data";
import { useMyContext } from "../../hooks/MyContext";
import { v4 as uuidv4 } from "uuid";
import { OnOut } from "../../hooks/OnOut";

export function Modal({ showing, onClose }) {
  const modalRef = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { students, setStudents } = useMyContext();

  function validIn() {
    if (firstName !== "" && lastName !== "") return true;
  }

  OnOut(modalRef, () => onClose());

  function createStudent() {
    const id = uuidv4();

    const student = {
      firstName: firstName,
      lastName: lastName,
      grades: studentsGrades,
      id: id,
    };

    setStudents([...students, student]);
    setFirstName("");
    setLastName("");
    onClose(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validIn()) {
      createStudent();
    }

    if (!showing) {
      return <></>;
    }
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-[rgba(223,227,231,0.85)] absolute left-0 top-0">
      <form className="flex flex-col text-center" onSubmit={handleSubmit}>
        <p className="text-[25px] font-bold mb-[10px]">New Student</p>
        <input
          className=" p-[8px] mb-[8px] rounded-lg outline-none"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className=" p-[8px] mb-[8px] rounded-lg outline-none"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className=" mb-52 rounded border border-solid border-blue-800  px-10 py-1 text-[white] bg-blue-800">
          Add Student
        </button>
        <button
          className="w-[]45px h-[45px] bg-[#f1f3f5] font-extrabold text-[#343a40] rounded-2xl"
          onClick={() => onClose()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
