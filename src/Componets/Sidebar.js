import React from 'react'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className='sidebar-title'>
            <h1>Staff area 2023 </h1>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item active' ><a href="">my account</a></li>
            <li className='sidebar-list-item' ><a href="">activities</a></li>
            <li className='sidebar-list-item' ><a href="">oders</a></li>
            <li className='sidebar-list-item' ><a href="">customers</a></li>
            <li className='sidebar-list-item' ><a href="">analytics</a></li>
            <li className='sidebar-list-item' ><a href="">finance</a></li>
            <li className='sidebar-list-item' ><a href="">products</a></li>
            <li className='sidebar-list-item' ><a href="">voucher and discount  </a></li>
        </ul>
    </aside>
  )
}

export default Sidebar
