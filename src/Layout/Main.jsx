import { Outlet } from 'react-router-dom'
import Sidebar from '../Shared/Sidebar/Sidebar'

const Main = () => {
  return (
    <>
    <div className="container mx-auto flex">
      <div className='sidebar flex-none'><Sidebar/></div>
      <div className='content_area flex-1'><div><Outlet /></div></div> 
    </div>
  </>
  )
}

export default Main