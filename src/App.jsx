import { HashRouter, Route, Routes } from "react-router-dom";
import Content from "./content/Content";
import CreateUser from "./CreateUser/CreateUser";
import Header from "./header/header";
import UpdateUser from "./UpdateUser/UpdateUser";
import UserDetails from "./UserDetails/UserDetails ";

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
