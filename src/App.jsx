import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Intro from './pages/Intro'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Resume from './pages/Resume'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Intro />} />
                    <Route path="work" element={<Work />} />
                    <Route path="work/:id" element={<WorkDetail />} />
                    <Route path="resume" element={<Resume />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
