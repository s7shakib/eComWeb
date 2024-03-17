import { Provider } from "react-redux"
import { store } from "./redux/store"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import TrandingProduct from "./components/TrandingProduct"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import { useState } from "react"
import Cart from "./components/Cart"

const App = () => {

  const [showCart, setShowCart] = useState(false)
  

  return (
    <div>

        <Provider store={store}>
          <Navbar setShowCart={setShowCart}/> 
            {showCart && <Cart setShowCart={setShowCart}/>}

          <Hero/>

          <Feature />
          <TrandingProduct />

          <Footer />
          <Toaster position="bottom-center" reverseOrder={false} />

        </Provider>

    </div>
  )
}

export default App