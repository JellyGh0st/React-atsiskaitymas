import { Link } from 'react-router-dom';
const Header = () => {
   return (
      <header>
         <div className='logo'>
            devParadise
         </div>
         <div className="userInfo">
            <Link to="/login">
              <button>Login</button> 
            </Link>
            <Link to="/register">
               <button>Register</button>
            </Link>
            
         </div>
      </header>
   );
}
 
export default Header;