import React, { useState } from 'react';
import Calendar from 'react-calendar';

const ChoreCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [chores, setChores] = useState({});

    const onChange = (newDate) => {
        setDate(newDate);
    }

    const addChore = (chore) => {
        setChores({...chores, [date]: [...(chores[date] || []), chore]});
    }

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={date}
                tileContent={({ date, view }) => chores[date] ? chores[date].map(chore => <div>{chore}</div>) : null}
            />
            <form onSubmit={(e) => {
                e.preventDefault();
                addChore(e.target.chore.value);
                e.target.chore.value = '';
            }}>
                <label>
                    <input name="chore" type="text" placeholder="Add new chore for selected date" />
                </label>
                <button type="submit">Add chore</button>
            </form>
        </div>
    );
}

export default ChoreCalendar;
