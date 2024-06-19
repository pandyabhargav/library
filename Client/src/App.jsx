import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Collection from "./components/Collection/Collection";
import AddBook from "./components/AddBook/AddBook";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/AddBook" element={<AddBook />} />
      </Routes>
    </>
  )

}

export default App