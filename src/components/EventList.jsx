import { useEvent } from "../context/EventContext";
import EventItem from "./EventItem";
import { CalendarX2 } from "lucide-react";
import styles from "./EventList.module.css";

const EventList = () => {
    const { filteredEvents } = useEvent();

    if (filteredEvents.length === 0) {
        return (
            <div className={styles.emptyState}>
                <div className={styles.emptyIconWrapper}>
                    <CalendarX2 className={styles.emptyIcon} />
                </div>
                <p className={styles.emptyTitle}>No events found</p>
                <p className={styles.emptyText}>
                    Try adjusting your search or add a new event.
                </p>
            </div>
        );
    }

    return (
        <div className={styles.listContainer}>
            {filteredEvents.map((event) => (
                <EventItem key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList;
