import { NavLink } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
const Dashboard = () => {
  const navlinks = [
    {
      name: 'Dashboard',
      to: '/admin',
    },
    {
      name: 'Services',
      to: '/admin/serviced',
    },
    {
      name: 'Projects',
      to: '/admin/projectd',
    },
  ];
  return (
    <div className="flex flex-row w-full min-h-screen bg-gray-100">
      {/* Left SideBar */}
      <div className="w-64 bg-white shadow-lg p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>

        <ul className="space-y-4">
          {navlinks.map((link) => {
            return (
              <div key={link.name} className="flex flex-col space-y-5">
                <NavLink
                  to={link.to}
                  end={link.to === '/admin'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-blue-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
                ;
              </div>
            );
          })}
        </ul>
      </div>

      <div className="flex-1 p-8">
        <Outlet /> {/* This is where nested routes will render */}
      </div>
    </div>
  );
};

export default Dashboard;
