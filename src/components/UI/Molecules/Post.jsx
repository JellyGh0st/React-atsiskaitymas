const Post = ({data}) => {
   return ( 
   <div className="postCard">
      <div>
         <h4>{data.userName}</h4>
      </div>
      <div>
         <p>{data.title}</p>
      </div>
   </div>  );
}
 
export default Post;