import { useState } from "react";
import { useMyContext } from "../../hooks/MyContext";
import { Person } from "../../components/Person/Person";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "../../components/Modal/Modal";

export function MainPage() {
  const { students } = useMyContext();
  const [subjectIndex, setSubjectIndex] = useState(0);
  const [weekIndex, setWeekIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" w-[1200px] h-[800px] m-auto mt-[100px] border-[1px] border-[#495057] p-[35px] relative">
      {toggle && <Modal showing={toggle} onClose={() => setToggle(false)} />}
      <div className=" flex  w-full">
        <div className="mr-[200px]">
          <p className=" mb-[20px] font-extrabold text-[#868e96]">Subjects</p>
          <div className=" flex mb-[20px]">
            <button
              className={`${
                subjectIndex === 0
                  ? "rounded border border-solid border-blue-800  px-10 py-1 text-[white] bg-blue-800"
                  : "rounded border border-solid border-blue-800  px-10 py-1 text-blue-800"
              } mr-[20px]`}
              onClick={() => {
                setSubjectIndex(0);
              }}
            >
              Back End
            </button>
            <button
              className={`${
                subjectIndex === 1
                  ? "rounded border border-solid border-blue-800  px-10 py-1 text-[white] bg-blue-800"
                  : "rounded border border-solid border-blue-800  px-10 py-1 text-blue-800"
              } mr-[20px] `}
              onClick={() => setSubjectIndex(1)}
            >
              Front End
            </button>
            <button
              className={`${
                subjectIndex === 2
                  ? "rounded border border-solid border-blue-800  px-10 py-1 text-[white] bg-blue-800"
                  : "rounded border border-solid border-blue-800  px-10 py-1 text-blue-800"
              }`}
              onClick={() => setSubjectIndex(2)}
            >
              Solidity
            </button>
          </div>
        </div>
        <div>
          <p className=" mb-[20px] font-extrabold text-[#868e96]">Filter</p>
          <div className=" flex">
            <button
              className={`${
                weekIndex === 0
                  ? "rounded border border-solid border-blue-800  px-10 py-1 text-[white] bg-blue-800"
                  : "rounded border border-solid border-blue-800  px-10 py-1 text-blue-800"
              } mr-[20px]`}
              onClick={() => {
                setWeekIndex(0);
              }}
            >
              Week One
            </button>
            <button
              className={`${
                weekIndex === 1
                  ? "rounded border border-solid border-blue-800  px-10 py-1 text-[white] bg-blue-800"
                  : "rounded border border-solid border-blue-800  px-10 py-1 text-blue-800"
              } mr-[20px] `}
              onClick={() => setWeekIndex(1)}
            >
              Week Two
            </button>
            <button
              className={`${
                weekIndex === 2
                  ? "rounded border border-solid border-blue-800  px-10 py-1 text-[white] bg-blue-800"
                  : "rounded border border-solid border-blue-800  px-10 py-1 text-blue-800"
              }`}
              onClick={() => setWeekIndex(2)}
            >
              Week Three
            </button>
          </div>
        </div>
      </div>
      <div key={uuidv4()} className=" mb-[5px] w-full flex flex-col">
        {students.map((student) => (
          <Person
            key={uuidv4()}
            firstName={student.firstName}
            lastName={student.lastName}
            initialGrades={student.grades}
            id={student.id}
            subjectIndex={subjectIndex}
            weekIndex={weekIndex}
          />
        ))}
      </div>
      {toggle ? (
        <></>
      ) : (
        <button
          className="rounded border border-solid border-blue-800  px-10 py-1 text-[white] bg-blue-800 absolute bottom-4 right-4"
          onClick={() => setToggle(true)}
        >
          Add New Student
        </button>
      )}
    </div>
  );
}
