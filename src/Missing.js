import { Link } from "react-router-dom"
const Missing = () => {
    return (
      <main>
          <h1 style={{fontSize: `5rem`, textAlign: `center`, margin: `2rem`}}>404</h1>
          <h3><Link to={"/"}>Back To Home Page</Link></h3>
      </main>
    )
  }
  
  export default Missing