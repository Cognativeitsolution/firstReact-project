import logo from './images/logo.png';

function Company() {
  return (
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
                <button className='btn btn_submit_form mt1'>Cancel</button>
                <button className='btn btn_submit_form2 mt1 pull_right mr3'>Save</button>
                <button className='btn btn_submit_form mt1 pull_right'>Go Back</button>
                
            </div>
        </div>
      </section>
    </div>
  )
}

export default Company
