import { useEvent } from "../context/EventContext";
import { format } from "date-fns";
import { Calendar, Clock, AlignLeft } from "lucide-react";
import styles from "./EventDetails.module.css";

const EventDetails = () => {
    const { selectedEvent } = useEvent();

    if (!selectedEvent) {
        return (
            <div className={styles.placeholderContainer}>
                <div className={styles.placeholderContent}>
                    <div className={styles.placeholderIconWrapper}>
                        <Calendar className={styles.placeholderIcon} />
                    </div>
                    <h2 className={styles.placeholderTitle}>
                        No Event Selected
                    </h2>
                    <p className={styles.placeholderText}>
                        Select an event from the sidebar to view its details, or create a new
                        event to get started.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        {selectedEvent.title}
                    </h1>

                    <div className={styles.metaContainer}>
                        <div className={styles.metaItem}>
                            <Calendar className={styles.metaIcon} />
                            <span>{format(new Date(selectedEvent.date), "EEEE, MMMM do, yyyy")}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <Clock className={styles.metaIcon} />
                            <span>{format(new Date(selectedEvent.date), "h:mm a")}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.descriptionSection}>
                        <AlignLeft className={styles.sectionIcon} />
                        <div className={styles.sectionContent}>
                            <h3 className={styles.sectionTitle}>
                                Description
                            </h3>
                            <div className={styles.descriptionText}>
                                {selectedEvent.description || "No description provided."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
