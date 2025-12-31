import { format } from "date-fns";
import { useEvent } from "../context/EventContext";
import { cn } from "../utils/cn";
import styles from "./EventItem.module.css";

const EventItem = ({ event }) => {
    const { selectEvent, selectedEvent } = useEvent();
    const isSelected = selectedEvent?.id === event.id;

    return (
        <div
            onClick={() => selectEvent(event.id)}
            className={cn(styles.item, isSelected && styles.selected)}
        >
            <h3 className={cn(styles.title, isSelected && styles.titleSelected)}>
                {event.title}
            </h3>
            <p className={styles.date}>
                {format(new Date(event.date), "MMM d, yyyy • h:mm a")}
            </p>
        </div>
    );
};

export default EventItem;
