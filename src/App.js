import React from 'react';
import ChoreList from './Components/ChoreList';
import ChoreCalendar from './Components/ChoreCalendar';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <div>
          <div className="text-center my-3">
            <h1>Chore Tracker</h1>
          </div>
            <ChoreList />
            <ChoreCalendar />
        </div>
    );
}

export default App;
