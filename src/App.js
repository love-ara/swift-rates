import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import SingleConverter from "./pages/SingleConverter";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
              <Route path="/convert-currency" element={<SingleConverter/>}/>
              <Route path="/multi-currency" element={<NoPage/>}/>
              <Route path="/rate-comparison" element={<NoPage/>}/>
              <Route path="/favorites" element={<NoPage/>}/>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
