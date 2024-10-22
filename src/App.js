

import "./App.css";
// import BookStoreApi from "./pages/BookStoreNav";
import GoogleApi from "./pages/GoogleApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBook from "./pages/SingleBook";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <BrowserRouter>
      <di>
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
      </di>
      <Routes>
        <Route path="/" element={<GoogleApi />} />
        <Route path="/:id" element={<SingleBook />} />
      

        {/* Render the components */}
        {/* <BookStoreApi /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

