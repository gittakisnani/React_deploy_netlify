import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
const NewPost = () => {
  const items = useStoreState((state) => state.items);
  const newPostTitle = useStoreState((state) => state.newPostTitle);
  const setNewPostTitle = useStoreActions((actions) => actions.setNewPostTitle);
  const newPostBody = useStoreState((state) => state.newPostBody);
  const setNewPostBody = useStoreActions((actions) => actions.setNewPostBody);
  const savePost = useStoreActions((actions) => actions.savePost);
  const navigate = useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault();
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const newItem = {
      id, title: newPostTitle, datetime: new Date().toLocaleString(), body: newPostBody
      }
      savePost(newItem);
      navigate(`/`)
  };

    return (
      <main>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          className="newPost-Title"
          placeholder="Enter New Post Title"
          required
          value={newPostTitle}
          onChange={e => setNewPostTitle(e.target.value)}
          />
          <textarea 
          className="newPost-body"
          placeholder="Enter New Post Text"
          required
          value={newPostBody}
          onChange={e => setNewPostBody(e.target.value)}
          ></textarea>
          <button 
          className="submit"
          type="submit">Add My Post</button>
      </form>
      </main>
    )
  }
  
  export default NewPost