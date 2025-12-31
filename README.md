# 📝 React Event Logger

> A modern, responsive event logging application built with React and Vite, featuring real-time search, local storage persistence, and a clean two-column layout.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Overview

**Event Logger** is a front-end application designed to help users manage and track events efficiently. With a focus on user experience, it allows users to add, view, search, and manage events seamlessly. The application persists data locally, ensuring your events are saved even after a page reload.

## ✨ Features

- **Local Storage Persistence**: Events are automatically saved and restored from your browser's local storage.
- **Real-time Search Filter**: Instantly find events by title as you type.
- **Two-Column Layout**: A responsive design with a sidebar for navigation and a main area for event details.
- **Dynamic "Add Event" Modal**: A smooth, form-based modal for creating new events.
- **Responsive Design**: Optimized for various screen sizes.
- **Interactive UI**: Active state highlighting and empty state placeholders.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [CSS Modules](https://github.com/css-modules/css-modules) (Scoped styling)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Date Handling**: [date-fns](https://date-fns.org/)
- **State Management**: React Context API & Hooks (`useState`, `useEffect`)

## 📂 Folder Structure

```
react-event-logger/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── AddEventModal/
│   │   ├── EventDetails/
│   │   ├── EventItem/
│   │   ├── EventList/
│   │   ├── SearchBar/
│   │   └── Sidebar/
│   ├── context/         # React Context for global state
│   ├── utils/           # Utility functions (e.g., class merger)
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore rules
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## 📦 Installation & Setup

Follow these steps to get the project running on your local machine.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/rafi-ghanbari/react-event-logger
    cd react-event-logger
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the application.

## 📖 Usage Instructions

### Adding an Event
1.  Click the **Plus (+)** button in the sidebar.
2.  Fill in the **Event Title**, **Date**, and **Description** in the modal.
3.  Click **Create Event** to save.

### Viewing Details
- Click on any event in the sidebar list to view its full details in the main workspace.

### Searching
- Use the search bar in the sidebar to filter events by their title.

## 🤝 Contribution Guidelines

Contributions are welcome! Please follow these steps:

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feat/AmazingFeature`).
3.  Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/) specification.
4.  Push to the branch (`git push origin feat/AmazingFeature`).
5.  Open a Pull Request.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
