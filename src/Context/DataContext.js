import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState(``);
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/`);
    }, [items]);

    return (
        <DataContext.Provider value={{
            items, setItems,
            search, setSearch, navigate
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;