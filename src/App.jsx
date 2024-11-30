import "./App.css";
import Header from "./header/header";
import Content from "./content/Content";
import { HashRouter, Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails ";
import CreateUser from "./CreateUser/CreateUser";
import UpdateUser from "./UpdateUser/UpdateUser";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
