import { useStoreState } from "easy-peasy"
const Footer = () => {
  const postsCount = useStoreState((state) => state.postCount)
    return (
      <footer>
          <h1>{postsCount} list item{(postsCount.length === 0) ? `` : `s`}</h1>
      </footer>
    )
  }
  
  export default Footer