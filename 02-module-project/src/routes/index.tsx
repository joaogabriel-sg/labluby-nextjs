import { Routes, Route, Navigate } from "react-router-dom";

import { AllMeetups, Favorites, NewMeetup } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetups />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="new-meetup" element={<NewMeetup />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
