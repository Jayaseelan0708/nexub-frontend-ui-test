import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './Components/Common/ErrorHandling/Loading';

import '../src/Assets/Css/style.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = React.lazy(() => import('./Components/Home'));
const ProjectMembers = React.lazy(() => import('./Components/ProjectMembers'));
const Employee = React.lazy(() => import('./Components/Employee'));

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="members" element={<ProjectMembers />} />
            <Route path="members/employee" element={<Employee />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
