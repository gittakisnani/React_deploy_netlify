import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize"

const Header = () => {
  const { width } = useWindowSize()
  return (
    <header>
        <h1>Header</h1>
        {width < 768 ? <FaMobileAlt />
            : width < 992 ? <FaTabletAlt />
                : <FaLaptop />}
    </header>
  )
}

export default Header