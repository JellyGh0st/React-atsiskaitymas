import { useContext } from "react";
import UsersContext from "../../../contexts/UsersContext";


const Post = ({data}) => {

   const {users} = useContext(UsersContext);
   const user = users.find(el => el.id === data.userId);
   return ( 
   <div className="postCard">
      { users.length ?
      <div>
         <img src={user.avatarURL} alt="user photo" />
         <h5>{user.userName}:</h5>
      </div>
      :
      <p>loading user...</p>
      }
      <div>
         <p>{data.title}</p>
      </div>
   </div>  );
}
 
export default Post;