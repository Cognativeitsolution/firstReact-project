import logo from './images/logo.png';
import Sidebar from './Sidebar';
import Header from './Header';

import { FaLongArrowAltRight,FaRegCalendarAlt } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

import {Link} from "react-router-dom";
import $ from 'jquery';


function Dashboard() {

    const company_form_cancel = () =>{
        $("#company_form").fadeOut();
      }
      const worker_form_cancel = () =>{
        $("#worker_form").fadeOut();
      }
    
  return (
    <>
        <Sidebar></Sidebar>
        <Header></Header>
        <div className="container_content">
            <section className='col_6 card animate__animated animate__fadeIn'>
                <div className='header'>
                    <div className='title'>Activities</div>
                    <div className='info pull_right'>20 finished, 5 remaining</div>
                </div>
                <div className='col_full'>
                    <table className='table' width="100%">
                        
                        <tbody>
                            <tr>
                                <td><span className='dot'></span></td>
                                <td><span className='color_four'>Indus Staffing Solutions</span> Assign you a task</td>
                                <td align='right'>Just Now</td>
                            </tr>
                            <tr>
                                <td><span className='dot'></span></td>
                                <td><span className='color_four'>Indus Staffing Solutions</span> Assign you a task</td>
                                <td align='right'>Just Now</td>
                            </tr>
                            <tr>
                                <td><span className='dot'></span></td>
                                <td><span className='color_four'>Indus Staffing Solutions</span> Assign you a task</td>
                                <td align='right'>Just Now</td>
                            </tr>
                            <tr>
                                <td><span className='dot'></span></td>
                                <td><span className='color_four'>Indus Staffing Solutions</span> Assign you a task</td>
                                <td align='right'>Just Now</td>
                            </tr>
                            <tr>
                                <td><span className='dot'></span></td>
                                <td><span className='color_four'>Indus Staffing Solutions</span> Assign you a task</td>
                                <td align='right'>Just Now</td>
                            </tr>
                        </tbody>
                        
                    </table>
                    <Link to="#" className="view_all">View all <span><FaLongArrowAltRight /></span></Link>
                </div>
                
            </section>
            <section className='col_6 card animate__animated animate__fadeIn'>
                <div className='header'>
                        <div className='title'>Recent Agencies</div>
                        
                </div>
                <div className='col_full'>
                    <table className='table' width="100%">
                        
                        <tbody>
                            <tr>
                                <td>Cubix Lab<p><span><FaRegCalendarAlt /></span> March 14, 2022 </p></td>
                            </tr>
                            <tr>
                                <td>Cubix Lab<p><span><FaRegCalendarAlt /></span> March 14, 2022 </p></td>
                            </tr>
                            <tr>
                                <td>Cubix Lab<p><span><FaRegCalendarAlt /></span> March 14, 2022 </p></td>
                            </tr>
                        </tbody>
                        
                    </table>
                    <Link to="#" className="view_all">View all <span><FaLongArrowAltRight /></span></Link>
                </div>
            </section>
            <section className='col_6 card animate__animated animate__fadeIn'>
                <div className='header'>
                        <input type="text" className='form_control_group'/>
                        <button className='btn_secondary btn_group'>ADD</button>
                        
                </div>
                <div className='col_full'>
                    <table className='table' width="100%" cellSpacing={0}>
                        
                        <tbody>
                            <tr>
                                <td className='bb_black'>Print Statement</td>
                                <td className='bb_black'><Link to="#" className="table_icon_right"><span><AiFillCloseCircle /></span></Link></td>
                            </tr>
                            <tr>
                                <td className='bb_black'>Create Invoice</td>
                                <td className='bb_black'><Link to="#" className="table_icon_right"><span><AiFillCloseCircle /></span></Link></td>
                            </tr>
                            <tr>
                                <td className='bb_black'>Merry Chrismas</td>
                                <td className='bb_black'><Link to="#" className="table_icon_right"><span><AiFillCloseCircle /></span></Link></td>
                            </tr>
                        </tbody>
                        
                    </table>
                    
                </div>
            </section>
        </div>

        {/* Company Form */}
        <div className="container_LB animate__animated animate__slideInDown" id="company_form">
        <div className="container_form">
      <header><center><img src={logo}  alt="logo" className="logo" width="200" /></center></header>
      <section>
        <h1 className='mb2'><center>Company Form</center></h1>
        <h1>Fill this form Carefully</h1>
        <h3>Basic Information</h3>
        <div className='col_12'>
            <div className="form_group col_4">
                    <label>Company</label>
                    <input type="text" className="form_control2" name="text" placeholder="Company Name"/>
            </div>
            <div className="form_group col_4">
                    <label>Website</label>
                    <input type="text" className="form_control2" name="text" placeholder="Website"/>
            </div>
            <div className="form_group col_4">
                    <label>Contact No</label>
                    <input type="text" className="form_control2" name="text" placeholder="Contact No"/>
            </div>
        </div>
        <div className='col_12'>
            <div className="form_group col_4">
                    <label>Mobile No</label>
                    <input type="text" className="form_control2" name="text" placeholder="Mobile No"/>
            </div>
            <div className="form_group col_4">
                    <label>Fax No</label>
                    <input type="text" className="form_control2" name="text" placeholder="Fax No"/>
            </div>
        </div>
        <div className='col_12'>
            <div className="form_group col_4">
                    <label>Select Contractor</label>
                    <select className='form_control2 form_select2'>
                        <option>Select Contractor</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
            </div>
            <div className="form_group col_4">
                    <label>Markup Rate</label>
                    <input type="text" className="form_control2" name="text" placeholder="Markup Rate"/>
            </div>
            <h3 className='mt3'>Address Information</h3>
            <div className='col_12'>
                <div className="form_group col_4">
                        <label>Street No</label>
                        <input type="text" className="form_control2" name="text" placeholder="Street No"/>
                </div>
                <div className="form_group col_4">
                        <label>Street Name</label>
                        <input type="text" className="form_control2" name="text" placeholder="Street Name"/>
                </div>
                <div className="form_group col_4">
                        <label>Unit No</label>
                        <input type="text" className="form_control2" name="text" placeholder="Unit No"/>
                </div>
            </div>
            <div className='col_12'>
                <div className="form_group col_4">
                        <label>Country</label>
                        <input type="text" className="form_control2" name="text" placeholder="Country"/>
                </div>
                <div className="form_group col_4">
                        <label>Province</label>
                        <input type="text" className="form_control2" name="text" placeholder="Province"/>
                </div>
                <div className="form_group col_4">
                        <label>City</label>
                        <input type="text" className="form_control2" name="text" placeholder="City"/>
                </div>
                <div className="form_group col_4">
                        <label>Postal Code</label>
                        <input type="text" className="form_control2" name="text" placeholder="Postal Code"/>
                </div>
            </div>
            <h3 className='mt3'>Other Details</h3>
            <div className='col_12'>
                <div className="form_group col_4">
                        <label>Contact Person Name</label>
                        <input type="text" className="form_control2" name="text" placeholder="Contact Person Name"/>
                </div>
                <div className="form_group col_4">
                        <label>Contact No</label>
                        <input type="text" className="form_control2" name="text" placeholder="Contact No"/>
                </div>
                <div className="form_group col_4">
                        <label>Extension</label>
                        <input type="text" className="form_control2" name="text" placeholder="Extension"/>
                </div>
            </div>
            <div className='col_12'>
                <div className="form_group col_4">
                        <label>Designation</label>
                        <input type="text" className="form_control2" name="text" placeholder="Designation"/>
                </div>
                <div className="form_group col_4">
                        <label>Cell No</label>
                        <input type="text" className="form_control2" name="text" placeholder="Cell No"/>
                </div>
                <div className="form_group col_4">
                        <label>Email</label>
                        <input type="email" className="form_control2" name="text" placeholder="Email"/>
                </div>
                <div className="form_group col_12">
                        <label className="checkcontainer">This is my primary contact
                        <input type="checkbox" />
                        <span className="checkmark2"></span>
                        </label>
                </div>
            </div>
            <div className='col_12'>
                <button onClick={company_form_cancel} className='btn btn_submit_form mt1'>Cancel</button>
                <button className='btn btn_submit_form2 mt1 pull_right mr3'>Save</button>
                <button onClick={company_form_cancel} className='btn btn_submit_form mt1 pull_right'>Go Back</button>
                
            </div>
        </div>
      </section>
    </div>
    </div>
    {/* end company form */}

    {/* Worker Form */}
    <div className="container_LB animate__animated animate__slideInDown" id="worker_form">
    <div className="container_form">
      <header><center><img src={logo}  alt="logo" className="logo" width="200" /></center></header>
      <section>
        <h1 className='mb2'><center>Worker Form</center></h1>
        <h1>Employee Detail</h1>
        <h3>Basic Information</h3>
        <div className='col_12'>
            <div className="form_group col_4">
                    <label>First Name</label>
                    <input type="text" className="form_control2" id="First_Name" placeholder="First Name"/>
            </div>
            <div className="form_group col_4">
                    <label>Middle Name</label>
                    <input type="text" className="form_control2" id="Middle_Name" placeholder="Middle Name"/>
            </div>
            <div className="form_group col_4">
                    <label>Last Name</label>
                    <input type="text" className="form_control2" id="Last_Name" placeholder="Last Name"/>
            </div>
        </div>
        <div className='col_12'>
            <div className="form_group col_4">
                    <label>Date of Birth</label>
                    <input type="text" className="form_control2" id="Date_of_Birth" placeholder="Date of Birth"/>
            </div>
            <div className="form_group col_4">
                    <label>Male Female</label>
                    <input type="text" className="form_control2" id="text" placeholder="Fax No"/>
            </div>
            <div className="form_group col_4">
                    <label>SIN Number</label>
                    <input type="text" className="form_control2" id="SIN_Number" placeholder="SIN Number"/>
            </div>
        </div>
        <div className='col_12'>
            <div className="form_group col_4">
                    <label>Status</label>
                    <select className='form_control2 form_select2' id="text">
                        <option>Status</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
            </div>
            <div className="form_group col_4">
                    <label>Driving License no</label>
                    <input type="text" className="form_control2" id="Driving_License_no" placeholder="Driving License no"/>
            </div>
            <div className="form_group col_4">
                    <label>Pay Rate</label>
                    <select className='form_control2 form_select2' id="Pay_Rate">
                        <option>Pay Rate</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
            </div>
            <div className="form_group col_4">
                    <label>Company Allotted to</label>
                    <select className='form_control2 form_select2' id="Company_Allotted_to">
                        <option>Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
            </div>
            <div className="form_group col_4">
                    <label>Telephone</label>
                    <input type="number" className="form_control2" id="Telephone" pattern='0-9' placeholder="Telephone"/>
            </div>
            <div className="form_group col_4">
                    <label>Cell Phone</label>
                    <input type="number" className="form_control2" id="Cell_Phone" placeholder="Cell Phone"/>
            </div>
            <div className="form_group col_4">
                    <label>Email ID</label>
                    <input type="email" className="form_control2" id="Email_ID" placeholder="Email ID"/>
            </div>
            <div className="form_group col_4">
                    <label>Avaliability</label>
                    <select className='form_control2 form_select2' id="Avaliability">
                        <option>Select Avaliability</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
            </div>
            <div className="form_group col_4">
                    <label>Days Avaliable</label>
                    <select className='form_control2 form_select2' id="Days_Avaliable">
                        <option>Days Avaliable</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
            </div>
            
            <div className='col_12'>
                <button onClick={worker_form_cancel} className='btn btn_submit_form mt1'>Cancel</button>
                <button className='btn btn_submit_form2 mt1 pull_right mr3'>Save</button>
                <button onClick={worker_form_cancel} className='btn btn_submit_form mt1 pull_right'>Go Back</button>
                
            </div>
        </div>
      </section>
    </div>
    </div>
    {/* end worker form */}
    </>
  )
}

export default Dashboard
