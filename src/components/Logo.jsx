import "./Logo.css";
function Logo() {
  
  const logo ='./public/Logo.svg'
  return (
    <div>
       <img src={logo} alt="Logo" className="logos" />
    </div>
  )
}

export default Logo
