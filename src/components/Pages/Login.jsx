import { useState, useContext} from 'react';
import UsersContext from '../../contexts/UsersContext';

const Login = () => {

   const [formInputs, setFormInputs] =  useState({
      userName: '',
      password: ''
   });

   const { users, setCurrentUser} = useContext(UsersContext);

   const inputHandler = e => {
      setFormInputs({
         ...formInputs,
         [e.target.name]:e.target.value
      })
   }

   const formSubmit = e => {
      e.preventDefault();
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
      </main>
    );
}
 
export default Login;