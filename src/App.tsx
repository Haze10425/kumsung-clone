import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

function App() {
  const [headerVisible, setHeaderVisible] = useState(true);

  return (
    <Layout headerVisible={headerVisible}>
      <Home setHeaderVisible={setHeaderVisible} />
    </Layout>
  );
}

export default App;
