import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import Layout from "./Layout";
import EditItem from "./EditItem";
import { useStoreActions } from "easy-peasy";

function App() {
  const  setItems = useStoreActions((actions) => actions.setItems)
  const {data, fetchError, isLoading} = useAxiosFetch(`http://localhost:3500/posts`);

    useEffect(() => {
      setItems(data); 
    }, [data, setItems]);
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="edit/:id" element={<EditItem />} />
        <Route index element={<Home 
        isLoading={isLoading} 
        fetchError={fetchError}
        />} />
          <Route path="post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
          </Route>
        <Route path="about"  element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
