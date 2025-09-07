import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import ContactUS from '../pages/ContactUs';
import NotFound from '../pages/NotFound';
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
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default router;
