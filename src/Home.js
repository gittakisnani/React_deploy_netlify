import CreateItem from "./CreateItem";
import { useStoreState } from "easy-peasy";

const Home = ({ fetchError, isLoading}) => {
    const items = useStoreState((state) => state.items);
    const search = useStoreState((state) => state.search)

    return (
      <main>
          <ul>
        {isLoading && <p style={{color: `green`}}>Loading Posts...</p>}
        {!isLoading && fetchError && <p style={{color: `red`}}>{fetchError}</p>}
        {!isLoading && !fetchError && (items
            .filter(item => item.title.toLowerCase().includes(search.toLowerCase())).length 
              ?
              items
              .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
              .map(item => (
                <CreateItem
                key={item.id}
                item={item}
                />
              )) 
              : <p>No Posts To Display</p>)
        }
          </ul>
      </main>
    )
  }
  
  export default Home