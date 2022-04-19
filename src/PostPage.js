import { useParams, Link, useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const PostPage = () => {
  const { id } = useParams();
  const getPostById = useStoreState((state) => state.getPostById);
  const item = getPostById(id);
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const navigate = useNavigate()
    const handleDelete = id => {
      deletePost(id);
      navigate(`/`);
    }
    return (
      <main>
          { item && <ul>
            <h3 className="blog-title">{item.title}</h3>
            <p className="blog-date">{item.datetime}</p>
            <p className="blog-text">{item.body}</p>
              <button
              className="delete"
              onClick={ e => {
                e.preventDefault()
                handleDelete(item.id)
              }}
              >
                Delete Post
              </button>
              <Link to={`/edit/${item.id}`}><button className="update">Edit Post</button></Link>
          </ul> }
          { !item 
          && <p style={{ margin: `20px`, textAlign: `center`}}>Nothing To Show</p>
          && <p style={{ margin: `20px`, textAlign: `center`}}><Link to={"/"}>Go To Home Page</Link></p>}
      </main>
    )
}
export default PostPage;