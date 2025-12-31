import { useState } from "react";
import EventList from "./EventList";
import SearchBar from "./SearchBar";
import AddEventModal from "./AddEventModal";
import { Plus } from "lucide-react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.headerTitleRow}>
                    <h1 className={styles.title}>
                        Event Logger
                    </h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={styles.addButton}
                        title="Add Event"
                    >
                        <Plus className={styles.icon} />
                    </button>
                </div>
                <SearchBar />
            </div>

            <div className={styles.content}>
                <EventList />
            </div>

            {isModalOpen && <AddEventModal onClose={() => setIsModalOpen(false)} />}
        </aside>
    );
};

export default Sidebar;
