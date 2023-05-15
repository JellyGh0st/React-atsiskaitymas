import { useState, useContext} from 'react';
import UsersContext from '../../contexts/UsersContext';
import { useNavigate } from 'react-router-dom';



const Login = () => {

   const navigate = useNavigate();

   const [formInputs, setFormInputs] =  useState({
      userName: '',
      password: ''
   });
   const [failedLogIn, setFailedLogin] = useState(false);

   const { users, setCurrentUser} = useContext(UsersContext);

   const inputHandler = e => {
      setFormInputs({
         ...formInputs,
         [e.target.name]:e.target.value
      })
   }

   const formSubmit = e => {
      e.preventDefault();
      const loggedInUser = users.find(user => user.userName ===
         formInputs.userName && user.password === formInputs.password);

         if(loggedInUser){
            setCurrentUser(loggedInUser);
            navigate('/home');
         } else {
            setFailedLogin(true);

         }
   }
   return ( 
      <main className="login-main">
         <h1>Prisijunkite</h1>
         <form onSubmit={(e) => {formSubmit(e)}}>
            <div>
               <label htmlFor="">User Name:</label>
               <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={formInputs.userName}
                  onChange={(e) => {inputHandler(e)}} />
            </div>
            <div>
               <label htmlFor="">Password:</label>
               <input 
                  type="password"
                  name="password"
                  id="password"
                  value={formInputs.password}
                  onChange={(e) => {inputHandler(e)}} />
            </div>
            <input type="submit" value="Log In" />
         </form>
         {
            failedLogIn &&
               <h2
               style={{ color:'red'}}
               >
                  Neteisingi duomenys

               </h2> 
         }
      </main>
    );
}
 
export default Login;