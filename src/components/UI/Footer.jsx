import './Footer.css';

const Footer = () => {
   return ( 
      <footer>
         <div className="flex">
            <div className="aboutUs">
               <h4>about us</h4>
               <p>Who are we? It's a good question.That nobody including us haven't answered yet.</p>
            </div>
            <div>
               <h4>links</h4>
               <ul>
                  <li><a href="https://www.google.com/">Who are we?</a></li>
                  <li><a href='https://www.google.com/'>What are we?</a></li>
                  <li><a href='https://www.google.com/'>Where are we?</a></li>
                  <li><a href='https://www.google.com/'>When are we?</a></li>
               </ul>
            </div>
            <div>
               <h4>follow us</h4>
               <p>Facebook</p>
               <p>Instagram</p>
               <p>Whatever</p>
            </div>
         </div>
         <div className="copy">
            <small>&copy; Copyright 2018, Example Corporation</small>
         </div>
      </footer>
   );
}
 
export default Footer;