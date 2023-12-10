import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";

export function Person({
  firstName,
  lastName,
  initialGrades,
  id,
  subjectIndex,
  weekIndex,
}) {
  const [grades, setGrades] = useState(initialGrades);
  const [editScoreIndex, setEditScoreIndex] = useState(-1);
  const [newScore, setNewScore] = useState("");
  const inputRef = useRef();
  function handleUpdate(score, i) {
    const updatedGrades = [...grades];
    updatedGrades[subjectIndex][weekIndex][i] = score;
    setGrades(updatedGrades);
    setNewScore("");
  }

  function focusInput(i) {
    setEditScoreIndex(i);
    setTimeout(() => inputRef.current.focus(), 0);
  }
  return (
    <div className="flex    gap-[550px]">
      <div className="student-name flex p-[12px] border-[#495057] border-[1px] mb-[5px] w-[700px]">
        <Link to={`${id}`} className=" mr-[5px] font-semibold text-[20px]">
          {firstName}
        </Link>
        <p className="font-semibold text-[20px]">{lastName}</p>
      </div>
      <div className="grades flex justify-center items-center p-[12px] border-[#495057] border-[1px] mb-[5px]">
        {grades[subjectIndex][weekIndex].map((grade, i) => (
          <button
            key={uuidv4()}
            onClick={() => {
              setEditScoreIndex(i);
              focusInput(i);
            }}
            className=" w-[50px] border-[#ced4da] border-2 mr-2"
          >
            {editScoreIndex === i ? (
              <input
                value={newScore}
                onChange={(e) => {
                  setNewScore(e.target.value);
                  focusInput(i);
                }}
                className=" w-[30px] border-[2px] focus:outline-none outline-none bg-transparent focus:ring-0 border-transparent flex"
                ref={inputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUpdate(newScore, i);
                    setEditScoreIndex(-1);
                  }
                }}
                onBlur={() => {
                  handleUpdate(newScore, i);
                  setEditScoreIndex(-1);
                }}
              />
            ) : (
              grade
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
