import { Routes, Route } from "react-router-dom";
import { MainPage } from "../src/folders/pages/Main/MainPage";
import { StudentProfile } from "../src/folders/pages/StudentProfile/StudentProfile";
import { ErrorPage } from "../src/folders/pages/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<StudentProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
