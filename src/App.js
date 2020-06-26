import React from 'react';
import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
      <Contact name="Dora Hill" avatar="https://randomuser.me/api/portraits/women/8.jpg" online status="online" />
      <Contact name="Alma Bradley" avatar="https://randomuser.me/api/portraits/women/90.jpg" offline status="offline" />
      <Contact name="Mike Palmer" avatar="https://randomuser.me/api/portraits/men/81.jpg" online status="online" />
    </div>
  );
}

export default App;
