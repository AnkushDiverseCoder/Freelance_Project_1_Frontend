import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import IndividualReport from './pages/IndividualReport';
import CustomerHead from './pages/CustomerHead';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import AccountingEntry from './pages/AccountingEntry';
import DashboardAppPage from './pages/DashboardAppPage';
import DailyReport from './pages/DailyReport';
import HistoricalReport from './pages/HistoricalReport';
import CustomerHeadReport from './pages/CustomerHeadReport';
import BankingEntry from './pages/BankingEntry';
import EmployeeEnrollment from './pages/EmployeeEnrollment';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'customerHead', element: <CustomerHead /> },
        { path: 'accountingEntry', element: <AccountingEntry /> },
        { path: 'individualReport', element: <IndividualReport /> },
        { path: 'dailyReport', element: <DailyReport /> },
        { path: 'historicalReport', element: <HistoricalReport /> },
        { path: 'CustomerHeadReport', element: <CustomerHeadReport/> },
        { path: 'BankingEntry', element: <BankingEntry/> },
        { path: 'EmployeeEnrollment', element: <EmployeeEnrollment/> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/login" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/login" replace />,
    },
  ]);

  return routes;
}
