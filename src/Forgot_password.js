
function Forgot_password() {
  return (
    <div className="container_login animate__animated animate__bounceIn" >
        <h1 className="text_center">Employment Agency Tool</h1>
        <h1 className="color_three text_center">Forgot Password</h1>
        <div className="form">
            <div className="form_group">
                <input type="email" className="form_control" name="text" placeholder="Email"/>
            </div>
            <div className="text_center mt2">
                <button type="submit"  className="btn_primary">SEND ME EMAIL</button>
            </div>
            
        </div>
    </div>
  )
}

export default Forgot_password
