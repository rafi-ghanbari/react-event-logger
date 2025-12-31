import { Search } from "lucide-react";
import { useEvent } from "../context/EventContext";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useEvent();

    return (
        <div className={styles.searchContainer}>
            <Search className={styles.icon} />
            <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.input}
            />
        </div>
    );
};

export default SearchBar;
