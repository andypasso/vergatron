import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter } from "react-router-dom"

const App = () => {

  return (
    // <BrowserRouter>
    <>
      <NavBar />

      {/* <Routes> */}
        {/* <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} /> */}
      {/* </Routes> */}
      <ItemListContainer />
      {/* <ItemDetailContainer /> */}
    {/* </BrowserRouter> */}
      </>
  )
}

export default App
