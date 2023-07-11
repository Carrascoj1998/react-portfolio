import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import ContactResume from './pages/Contact&Resume';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <Container>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/contact" element={<ContactResume />} />
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
