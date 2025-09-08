import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import ContactUS from '../pages/ContactUs';
import NotFound from '../pages/NotFound';

import Dashboard from '../pages/backend pages/Dashboard';
import ProjectsD from '../pages/backend pages/ProjectsD';
import ServicesD from '../pages/backend pages/ServicesD';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,

    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: 'services',
        element: <Services></Services>,
      },
      {
        path: 'projects',
        element: <Projects></Projects>,
      },
      {
        path: 'contact',
        element: <ContactUS></ContactUS>,
      },
      {
        path: 'admin',
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true, // This will match /admin exactly
            element: <div>Welcome to Admin Dashboard</div>, // or some dashboard content component
          },
          {
            path: 'serviced',
            element: <ServicesD></ServicesD>,
          },
          {
            path: 'projectd',
            element: <ProjectsD></ProjectsD>,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default router;
