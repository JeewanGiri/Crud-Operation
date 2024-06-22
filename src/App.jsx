import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./component/Create";
import Read from "./component/Read";
import Update from "./component/Update";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create/>}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
