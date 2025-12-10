import React from 'react'
import StudentCard from './components/StudentCard'
import Counter from './components/Counter'
import UserDetails from './components/UserDetails'
import Pagination from './components/Pagination'
import { useState } from 'react'
import Footer from './components/Footer'
import { GlobalProvider } from './contexts/GlobalContext'
import LoginForm from './components/LoginForm'
import ProductList from './components/ProductList'
import AddProduct from '../../../e-commerse_react/e-commerse-react/src/components/AddProduct'
import Header from './components/Header'

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const page = sessionStorage.getItem("page");
    return page ? parseInt(page) : 1;
  })

  // let firstName ="Jai"
  // let lastName="Surya"
  // let age= 20;
  return (
    <>
      {/* <h1 className="text-4xl font-bold underline pb-2 mb-3 ml-110">Student Details</h1>
    <StudentCard fname={firstName} lname={lastName} age={age} />               {/Preferred way/}
    {/* {StudentCard({fname:firstName,lname:lastName,age:20})}  */}

      <Counter />
      <GlobalProvider>
        <UserDetails />

        <Footer />
      </GlobalProvider>
      <LoginForm />
      <ProductList />
      <AddProduct />
    </>
  )
}
export default App