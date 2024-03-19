import { Routes, Route } from 'react-router-dom';


import { Profile } from '../pages/Profile';

import { Home } from '../pages/Home';

export function AppRoutes() {
    return (
        <Routes>

            <Route path="/:studentId" element={<Profile />} />

            <Route path="/" element={<Home />} />
            {/* <Route path="/profile/:id" element={<Profile />} /> */}

        </Routes>
    )
}