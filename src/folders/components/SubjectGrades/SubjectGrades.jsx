import { v4 as uuidv4 } from "uuid";
export function SubjectGrades({ subject, i, week }) {
  return (
    <div>
      <p>{subject}</p>
      <div>
        {week[i].map((grade) => (
          <p key={uuidv4()}>{grade}</p>
        ))}
      </div>
    </div>
  );
}
