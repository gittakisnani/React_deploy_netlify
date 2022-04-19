import { Link } from "react-router-dom"

const CreateItem = ({item}) => {
  return (
    <li>
        {
            <>
            <Link to={`/post/${item.id}`} >
            <h3 className="blog-title">{item.title}</h3>
            <p className="blog-date">{item.datetime}</p>
            <p className="blog-text">{item.body.length <= 25
            ? item.body
            : `${item.body.slice(0, 25)}...`}
            </p>
            </Link>
            </>
        }
    </li>
  )
}

export default CreateItem