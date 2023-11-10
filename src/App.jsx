//import { Layout } from 'antd'

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import TestimonialPage from "./Pages/TestimonialPage";
import DataPage from "./Pages/DataPage";
import NotFound from "./Pages/NotFound";
import NavbarComponent from "./Components/NavbarComponent";
import FooterComponent from "./Components/FooterComponent";
import InsertWargaPages from "./Pages/InsertWargaPages";
import FaqPages from "./Pages/FaqPages";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" Component={HomePages} />
          <Route path="/TambahDataJamaah" Component={InsertWargaPages} />
          <Route path="/testimonial" Component={TestimonialPage} />
          <Route path="/Data" Component={DataPage} />
          <Route path="/Faq" Component={FaqPages} />
          <Route path="*" Component={NotFound} />
        </Routes>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
