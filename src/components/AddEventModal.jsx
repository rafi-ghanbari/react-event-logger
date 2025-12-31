import { useState } from "react";
import { useEvent } from "../context/EventContext";
import { X, Calendar as CalendarIcon, Type, AlignLeft } from "lucide-react";
import { cn } from "../utils/cn";
import styles from "./AddEventModal.module.css";

const AddEventModal = ({ onClose }) => {
    const { addEvent } = useEvent();
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        description: "",
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.date) newErrors.date = "Date is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        addEvent(formData);
        onClose();
    };

    return (
        <div className={styles.overlay}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.header}>
                    <h2 className={styles.title}>Add New Event</h2>
                    <button
                        onClick={onClose}
                        className={styles.closeButton}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            <Type className={styles.inputIcon} />
                            Event Title
                        </label>
                        <input
                            type="text"
                            className={cn(
                                styles.input,
                                errors.title && styles.inputError
                            )}
                            placeholder="e.g., Team Meeting"
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({ ...formData, title: e.target.value })
                            }
                            autoFocus
                        />
                        {errors.title && (
                            <p className={styles.errorText}>{errors.title}</p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            <CalendarIcon className={styles.inputIcon} />
                            Date & Time
                        </label>
                        <input
                            type="datetime-local"
                            className={cn(
                                styles.input,
                                errors.date && styles.inputError
                            )}
                            value={formData.date}
                            onChange={(e) =>
                                setFormData({ ...formData, date: e.target.value })
                            }
                        />
                        {errors.date && (
                            <p className={styles.errorText}>{errors.date}</p>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            <AlignLeft className={styles.inputIcon} />
                            Description
                        </label>
                        <textarea
                            className={styles.textarea}
                            placeholder="Add details about your event..."
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({ ...formData, description: e.target.value })
                            }
                        />
                    </div>

                    <div className={styles.footer}>
                        <button
                            type="button"
                            onClick={onClose}
                            className={styles.cancelButton}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={styles.submitButton}
                        >
                            Create Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEventModal;
