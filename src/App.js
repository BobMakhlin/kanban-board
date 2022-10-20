import logo from './logo.svg';
import './App.css';
import Ticket from './components/Tickets/Ticket';

// Here we can manage all existing tickets.
// Ticket has a status.
// In the Board component we filter tickets by status and place them in appropriate columns.
// When a ticket is moved, its status changes. So, the ticket should automatically be moved into another column.
// On the top of the Board we can have a filter. We can filter, for instance, by label or something similar.
// We also can think about our custom SQL-like language (like Jira has).
// Firstly, allow the ticket to be moved via bar that appears on right mouse button click (change the status).
// Then, implement drag & drop.
// There should be a way to add a ticket and to remove an existing one (but alert should be shown!).

function App() {
  return (
    <div className="App">
      <Ticket />
    </div>
  );
}

export default App;
