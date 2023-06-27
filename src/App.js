import {Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import ContactResume from "./pages/Contact&Resume";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactResume />} />
      </Routes>
    </Layout>
  );
}

export default App;
