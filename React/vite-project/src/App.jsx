import StudentCard from "./components/StudentCard";
import Counter from "./components/Counter";
import UserDetails from "./components/UserDetails";
import Pagination from "./components/Pagination";
import { useState } from "react";

// import React from "react";
const App = () => {
  //JSX-Javascript XML
  //instead of class we use className in react
  const [currentPage, setCurrentPage] = useState(1);
  let firstName = "Suhail";
  let lastName = "M";
  let age = 20;

  return (<>
    <h1 className="text-4xl font-bold underline pb-2">Student Details</h1>
    < StudentCard fname={firstName} lname={lastName} age={age} />
    <Counter />
    <UserDetails currentPage={currentPage} />
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
  </>);
}
export default App
