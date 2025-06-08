import { Login } from "./login"
import { Routing } from "./routing"
import { BrowserRouter } from "react-router-dom"
import { Nav } from "./nav";
import store from "../Redux/Store.js"
import { Provider } from "react-redux"
import { useEffect } from "react";
export const Main = () => {

  useEffect(() => {
    localStorage.setItem('token', '')
  }, []

  )
  return <>
    <Provider store={store}>
      <BrowserRouter>
        <Nav></Nav>
        <Routing></Routing>
      </BrowserRouter>
    </Provider>
  </>

}