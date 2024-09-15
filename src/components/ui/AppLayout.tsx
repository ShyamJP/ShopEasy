import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main className="ml-14 pt-20 h-screen dark:bg-black">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
