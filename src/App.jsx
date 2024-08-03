//import PropTypes from 'prop-types'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Charts from "./components/pages/Charts";
import Checkout from "./components/pages/Checkout";
import DownloadPage from "./components/pages/Download";

import "./App.css";
import Product from "./components/pages/Product";

function App() {
  return (
    <div className="bg-main min-h-screen flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bilanz-und-er-erfassen" element={<Product />} />
        <Route path="/auswertungsbericht" element={<Charts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bericht-herunterladen" element={<DownloadPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
// App.propTypes = {
//   children: PropTypes.node
// }

export default App;
