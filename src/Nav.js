import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
const Nav = () => {
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.setSearch)
    return (
      <nav>
          <form 
          onSubmit={e => e.preventDefault()}
          className="search-from">
            <input 
            type="text" 
            placeholder="Search Post"
            value={search}
            onChange={e => {setSearch(e.target.value)}}
            />
          </form>
          <ul className="buttons">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/post"}>Post</Link></li>
            <li><Link to={"/about"}>About</Link></li>
          </ul>
      </nav>
    )
  }
  
  export default Nav