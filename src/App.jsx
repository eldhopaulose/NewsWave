import { Route, Routes } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import CreateNews from "./pages/CreateNews";
import Home from "./pages/Home";
function App() {
  return (
    <>



      <Routes>
        <Route path="/" element={<SideMenu />}>
          <Route index element={<Home />} />
          <Route path="/createnews" element={<CreateNews />}></Route>

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>

    </>
  );
}

export default App;
