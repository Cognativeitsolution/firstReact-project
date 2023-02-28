import logo from './images/logo_white.png';
import avatar from './images/avatar.png';
import { BsColumnsGap,BsBuilding,BsFileEarmarkText,BsReply,BsJournalCheck,BsCalendar3 } from "react-icons/bs";
import { FaUsers,FaFileAlt,FaFileInvoiceDollar } from "react-icons/fa";
import { FiPackage,FiSettings } from "react-icons/fi";
import $ from 'jquery';



function Sidebar() {
    const company_form = () =>{
      $("#company_form").show();
    }
    const worker_form = () =>{
      $("#worker_form").show();
    }

    const check_is_agency = global.getCookie('is_agency');
    const check_is_super_admin = global.getCookie('is_super_admin');  
    const user_name = global.getCookie('name');
  return (
    
    <div className="container_leftbar animate__animated animate__slideInLeft">
            <img src={logo}  alt="logo" className="logo" />
            <img src={avatar}  alt="logo" className="avatar" />
            <h5>{user_name}</h5>
            {(() => {
                    if (Number(check_is_agency) === 1) {
                    return (
                      <p>Agency</p>
                    )
                    } else if (Number(check_is_super_admin) === 1) {
                    return (
                      <p>Super Admin</p>
                    )
                    }
                })()}
            
            <hr></hr>
            <div className='btns_content'>
                
                {(() => {
                    if (Number(check_is_agency) === 1) {
                    return (
                      <>
                      <button className='btns'><BsColumnsGap /> <span>Dashboard</span> </button>
                      <button className='btns' onClick={company_form}><BsBuilding /> <span>Companies</span> </button>
                      <button className='btns' onClick={worker_form}><FaUsers /> <span>Workers</span> </button>
                      <button className='btns'><BsFileEarmarkText /> <span>Payroll</span> </button>
                      <button className='btns'><BsReply /> <span>Receivable</span> </button>
                      <button className='btns'><BsJournalCheck /> <span>Requirements</span> </button>
                      <button className='btns'><FiPackage /> <span>Product</span> </button>
                      <button className='btns'><BsCalendar3 /> <span>Timesheet</span> </button>
                      <button className='btns'><FiSettings /> <span>Settings</span> </button>
                      </>
                    )
                    } else if (Number(check_is_super_admin) === 1) {
                    return (
                      <>
                      <button className='btns'><BsColumnsGap /> <span>Dashboard</span> </button>
                      <button className='btns'><FaUsers /> <span>Admin Users</span> </button>
                      <button className='btns'><FaFileAlt /> <span>Forms</span> </button>
                      <button className='btns'><FaFileInvoiceDollar /> <span>Payrolls</span> </button>
                      </>
                    )
                    }
                })()}
            </div>
            
    </div>
  )
}

export default Sidebar
