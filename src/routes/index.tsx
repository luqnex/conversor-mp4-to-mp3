import { Routes, Route } from "react-router-dom";

import ConvertMP4ToMP3 from "../pages/ConvertMP4ToMP3";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<ConvertMP4ToMP3 />} />
    </Routes>
  );
};

export default RoutesComponent;
