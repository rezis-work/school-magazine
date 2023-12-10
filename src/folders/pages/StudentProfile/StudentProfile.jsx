import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMyContext } from "../../hooks/MyContext";
import { v4 as uuidv4 } from "uuid";
import { SubjectGrades } from "../../components/subjectGrades/subjectGrades";

export function StudentProfile() {
  const { id } = useParams();
  const { students } = useMyContext();
  const [gotStudent, setGotStudent] = useState({
    firstName: "",
    lastName: "",
    grades: [],
  });

  function getStudent(identy) {
    const filteredStudent = students.filter((single) => single.id === identy);
    console.log(filteredStudent);
    setGotStudent(filteredStudent[0]);
  }

  useEffect(() => {
    getStudent(id);
  }, []);

  return (
    <div className="flex items-center">
      <div className="person">
        <h1 className="person-name">
          <span>{gotStudent.firstName}</span>
          <span>{gotStudent.lastName}</span>
        </h1>
        <div className="person-grades">
          {gotStudent.grades?.map((week, i) => (
            <div key={uuidv4()} className="grades-week">
              <h1>Week {i + 1}</h1>
              <SubjectGrades
                subject={"Beck End"}
                i={0}
                week={gotStudent.grades[i]}
              />
              <SubjectGrades
                subject={"Front End"}
                i={1}
                week={gotStudent.grades[i]}
              />
              <SubjectGrades
                subject={"Solidity"}
                i={2}
                week={gotStudent.grades[i]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
