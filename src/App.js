import {Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import ContactResume from "./pages/Contact&Resume";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
        <Layout>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<ContactResume />} />
            </Routes>
        </Layout>
    </Container>
  );
}

export default App;
