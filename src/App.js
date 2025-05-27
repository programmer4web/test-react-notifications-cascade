import React from 'react';
import { NotificationsProvider } from 'react-notifications-cascade';
import NotificationsDemo from './NotificationsDemo';

const App = () => {
  return (
    <div className="App">
      <NotificationsProvider>
        <header className="App-header">
          <h1>Testing react-notifications-cascade</h1>
          <NotificationsDemo />
        </header>
      </NotificationsProvider>
    </div>
  );
}

export default App;