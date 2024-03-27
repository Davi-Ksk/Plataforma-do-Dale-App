import { Routes, Route } from 'react-router-dom';

import { Profile } from '../pages/Profile';

import { Students } from '../pages/Students';

export function AppRoutes() {
    return (
        <Routes>

            <Route path="students/profile/:studentId" element={<Profile />} />

            <Route path="students/" element={<Students />} />
            {/* <Route path="/profile/:id" element={<Profile />} /> */}

        </Routes>
    )
}