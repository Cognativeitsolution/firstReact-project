import logo from './images/logo_white.png';
import avatar from './images/avatar.png';
import { BsColumnsGap } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import {Link} from "react-router-dom";
//import $ from 'jquery';

function Dashboard() {
  return (
    <>
        <div className="container_leftbar animate__animated animate__slideInLeft">
            <img src={logo} width="200" alt="logo" className="logo" />
            <img src={avatar} width="60" alt="logo" className="avatar" />
            <h5>John Doe</h5>
            <p>Super Admin</p>
            <hr></hr>
            <div className='btns_content'>
                <button className='btns'><BsColumnsGap /> <span>Dashboard</span> </button>
                <button className='btns'><FaUsers /> <span>Admin Users</span> </button>
                <button className='btns'><FaFileAlt /> <span>Forms</span> </button>
                <button className='btns'><FaFileInvoiceDollar /> <span>Payrolls</span> </button>
            </div>
            
        </div>
        <header className="container_header animate__animated animate__slideInDown">
            <div className='header'>
                <Link to="/" className="color_black"> <span><BsList /></span></Link>
                <Link to="/" className="color_black"> <span className='pull_right'><BsThreeDotsVertical /></span></Link>
                <Link to="/" className="color_black"> <span className='pull_right'><BsFillBellFill /></span></Link>
                
            </div>
            <div className='heading_btn'>
                <h1>Dashboard <label className="lbl_info">Super Admin</label></h1>
                <h5>Welcome back to the Dashboard.</h5>
                <p>Scroll down to see quick links and overviews of your Server, To do list Order status or get some Help.</p>
            </div>
        </header>
        <div className="container_content">content</div>
    </>
  )
}

export default Dashboard
