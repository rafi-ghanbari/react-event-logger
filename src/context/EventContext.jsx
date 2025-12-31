import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const EventContext = createContext();

export const useEvent = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (eventData) => {
    const newEvent = {
        id: uuidv4(),
        ...eventData,
        createdAt: new Date().toISOString(),
    };
    setEvents((prev) => [newEvent, ...prev]);
  };

  const deleteEvent = (eventId) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
    if (selectedEventId === eventId) {
        setSelectedEventId(null);
    }
  };

  const selectEvent = (eventId) => {
    setSelectedEventId(eventId);
  };

  const selectedEvent = events.find((event) => event.id === selectedEventId);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <EventContext.Provider
      value={{
        events,
        filteredEvents,
        addEvent,
        deleteEvent,
        selectedEvent,
        selectEvent,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
