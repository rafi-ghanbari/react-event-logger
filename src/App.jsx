import { EventProvider } from "./context/EventContext";
import Sidebar from "./components/Sidebar";
import EventDetails from "./components/EventDetails";
import styles from "./App.module.css";

function App() {
  return (
    <EventProvider>
      <div className={styles.appContainer}>
        <Sidebar />
        <main className={styles.mainContent}>
          <EventDetails />
        </main>
      </div>
    </EventProvider>
  );
}

export default App;
