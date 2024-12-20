import { useRoutes } from 'react-router-dom'
import QRCode from './pages/QRCode'
import Home from './pages/Home'
import { path } from './constants/path.ts'

function useRouteElements() {
  return useRoutes([
    {
      path: path.home,
      element: <Home />
    },
    {
      path: path.app,
      element: <QRCode />
    }
  ])
}

export default useRouteElements
