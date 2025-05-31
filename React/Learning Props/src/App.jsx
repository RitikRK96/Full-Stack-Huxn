import "./App.css";
import UpdateUser from "./Components/UpdateUser";
// import { createContext } from "react";
// import ComponentA from "./Components/ComponentA";
// import { useContext } from "react";
import UserProfile from "./Components/UserProfile";
import { UserProvider } from "./UserContext";

// export const Data = createContext();
// export const Data1 = createContext();

function App() {
  // const name = "Ritik Kumar";
  // const age = 21;

  return (
    <>
      {/* <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider> */}
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </>
  );
}

export default App;