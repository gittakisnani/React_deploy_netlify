import { useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
const EditItem = () => {
  const items = useStoreState((state) => state.items);
  const navigate = useNavigate()
  const editPostTitle = useStoreState((state) => state.editPostTitle);
  const editPostBody = useStoreState((state) => state.editPostBody);
  const setEditPostTitle = useStoreActions((actions) => actions.setEditPostTitle);
  const setEditPostBody = useStoreActions((actions) => actions.setEditPostBody);
  const editPost = useStoreActions((actions) => actions.editPost)
    const { id } = useParams();
    const item = items.find(item => item.id == id);
    const handleUpdate = (e, id) => {
      e.preventDefault();
      const datetime = new Date().toLocaleString();
      const updatedPost = {id, title: editPostTitle, datetime, body: editPostBody };
      editPost(updatedPost);
      navigate(`/post/${id}`)
    }

    useEffect(() => {
        if(item) {
            setEditPostBody(item.body);
            setEditPostTitle(item.title)
        }
    }, [setEditPostBody, setEditPostTitle, item]);

  return (
    <main>
        <form onSubmit={e => handleUpdate(e, id)}>
          <input 
          type="text" 
          className="newPost-Title"
          placeholder="Edit Post Title"
          required
          onChange={e => setEditPostTitle(e.target.value)}
          value={editPostTitle}
          />
          <textarea 
          className="newPost-body"
          placeholder="Edit Post Text"
          required
          value={editPostBody}
          onChange={e => setEditPostBody(e.target.value)}
          ></textarea>
          <button 
          className="submit"
          type="submit">Update Post</button>
      </form>
      </main>
  )
}

export default EditItem