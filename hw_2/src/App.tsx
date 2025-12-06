import Dashboard from './pages/Dashboard';
import EventLog from './components/EventLog/EventLog';
import {EventProvider} from './context/EventProvider.tsx';

const App = () => {
  return (
    <EventProvider>
      <Dashboard />
      <EventLog />
    </EventProvider>
  );
};

export default App;