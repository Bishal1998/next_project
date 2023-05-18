'use client';

import { AppContext } from "@/context/Context";
import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import { useState } from "react"

const Home = () => {

  const [login, setLogin] = useState(false);

  const handleChange = () => {
    setLogin((prev) => !prev)
  }

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <AppContext.Provider value={{
        login,
        handleChange,
      }}>
        <Header />
        <Form />
        <Footer />
      </AppContext.Provider>
    </div>
  )
}

export default Home