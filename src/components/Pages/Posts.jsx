import { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";
import Post from "../UI/Molecules/Post";

const Posts = () => {

   const {posts} = useContext(PostsContext);
   return ( 
      <main>
         <h1>Chat</h1>
         <div>
            {
               posts.map(post =>
                  <Post
                     key={post.id}
                     data={post}
                  />
               )
            }
         </div>
      </main>
   );
}
 
export default Posts;