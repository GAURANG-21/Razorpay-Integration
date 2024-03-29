import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import PaymentSucess from "./PaymentSucess";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentsuccess" element={<PaymentSucess />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
