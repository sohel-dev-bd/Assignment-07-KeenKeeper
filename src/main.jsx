import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Roots from './roots/Roots'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/shared/Navbar'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Footer from './components/shared/Footer'
import FriendDetail from './pages/friendDetails/FriendDetail'
import Stats from './components/stats/Stats'
import TimeLineHistory from './components/timeLineHistory/TimeLineHistory'
import CallFriendProvider from './context/CallFriendContext'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'friend/:id',
        element: <FriendDetail />
      },
      {
        path: 'stats',
        element: <Stats />
      },
      {
        path: 'timeLineHistory',
        element: <TimeLineHistory />
      }

    ],
    errorElement: <div>
      <Navbar />
      <PageNotFound />
      <Footer />
    </div>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallFriendProvider>
      <RouterProvider router={router}></RouterProvider>
    </CallFriendProvider>
  </StrictMode>,
)
