import { Routes, Route } from 'react-router-dom';

// import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Profile />} />
        </Routes>
    )
}