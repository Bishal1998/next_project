import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <Header />
      <Form />
      <Footer />
    </div>
  )
}

export default Home