import { Outlet, useLocation } from 'react-router-dom'

const SubMenuLayout = () => {
  const location = useLocation()
  return (
    <div>
        <Outlet />
        { (location.pathname === '/sub-menu') ? <h6 className='text-center lead fw-bold text-uppercase mt-2'>Choose {location.pathname.slice(1)} from menu</h6> : (location.pathname === '/demo') ? <h6 className='text-center lead fw-bold text-uppercase mt-2'>Choose {location.pathname.slice(1)} from menu</h6> : ""}
    </div>
  )
}

export default SubMenuLayout