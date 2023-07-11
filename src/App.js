import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import ContactResume from './pages/Contact&Resume';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();


    const redirectToHome = () => {
        navigate('/');
    };

    return (
        <Container>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/contact" element={<ContactResume />} />
                    <Route path="*" element={redirectToHome} />
                </Routes>
            </Layout>
        </Container>
    );
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
export default App;
