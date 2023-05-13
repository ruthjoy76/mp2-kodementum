import "./Logo.css";
function Logo() {
  
  const logo ='./src/assets/images/Logo.svg'
  return (
    <div>
       <img src={logo} alt="Logo" className="logos" />
    </div>
  )
}

export default Logo
