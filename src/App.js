import React from "react";
import { useContext } from "react";
import "./App.css";
import "./pages/Custom.css";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import MenuRouter from "./Router/Broweserrouter";
function App() {
  const credential = useContext(AuthContext);
  // console.log(credential);
  return (
    <AuthProvider>
      <MenuRouter></MenuRouter>
    </AuthProvider>
    /* Added default value: defaultValue={'DEFAULT'}  
      on select tag to remove error on 
      Alljobs, employerjoblist pages */
  );
}

export default App;
