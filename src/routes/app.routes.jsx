import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
// import { Profile } from '../pages/Profile';
// import { Lists } from '../pages/Lists';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/profile/:id" element={<Profile />} /> */}
        </Routes>
    )
}