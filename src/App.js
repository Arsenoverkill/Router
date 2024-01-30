import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Order from "./pages/Order/Order";
import Menu from "./pages/Menu/Menu";
import { useState } from "react";

function App() {
  const [quintity, setQuintity] = useState(1);
  const [quintity2, setQuintity2] = useState(1);
  const [quintity3, setQuintity3] = useState(10);
  const [quintity4, setQuintity4] = useState(quintity3);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} key={1} />
        <Route path="/Admin" element={<Admin />} key={2} />
        <Route
          path="/Order"
          element={
            <Order
              counter={quintity}
              setCounter={setQuintity}
              counter2={quintity2}
              setCounter2={setQuintity2} counter3={quintity3}
              setCounter3={setQuintity3}
              counter4={quintity4}
              setCounter4={setQuintity4}
            />
          }
          key={3}
        />
      </Routes>
    </div>
  );
}

export default App;
