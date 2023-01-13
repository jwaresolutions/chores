import React from 'react';

const Child = ({ name, chores, onChoreCompleted }) => {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {chores.map(chore => (
                    <li key={chore.id}>
                        <span>{chore.name}</span>
                        <input
                            type="checkbox"
                            checked={chore.completed}
                            onChange={() => onChoreCompleted(name, chore.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Child;
