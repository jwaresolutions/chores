import React, { useState } from 'react';
import Child from './Child';


const ChoreList = () => {
    const [children, setChildren] = useState([
        {
            id: 1,
            name: 'John',
            chores: [
                {
                    id: 1,
                    name: 'Clean bedroom',
                    completed: false
                },
                {
                    id: 2,
                    name: 'Wash dishes',
                    completed: false
                },
                {
                    id: 3,
                    name: 'Take out trash',
                    completed: false
                }
            ]
        },
        {
            id: 2,
            name: 'Jane',
            chores: [
                {
                    id: 4,
                    name: 'Vacuum living room',
                    completed: false
                },
                {
                    id: 5,
                    name: 'Wash clothes',
                    completed: false
                },
                {
                    id: 6,
                    name: 'Mow lawn',
                    completed: false
                }
            ]
        }
    ])

    const [selectedChild, setSelectedChild] = useState(children[0]);

    const handleChoreCompleted = (childId, choreId) => {
        const newChildren = [...children];
        const childIndex = newChildren.findIndex(c => c.id === childId);
        const child = newChildren[childIndex];
        const choreIndex = child.chores.findIndex(c => c.id === choreId);
        const chore = child.chores[choreIndex];
        chore.completed = !chore.completed;
        setChildren(newChildren);
    }

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-4 border border-secondary rounded p-3">
              <ul className="list-unstyled">
                {children.map(child => (
                  <li key={child.id}>
                    <button
                      className={`btn btn-primary ${child === selectedChild ? 'active' : ''}`}
                      onClick={() => setSelectedChild(child)}
                    >
                      {child.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-8 border border-secondary rounded p-3">
              <Child
                name={selectedChild.name}
                chores={selectedChild.chores}
                onChoreCompleted={handleChoreCompleted}
              />
            </div>
          </div>
        </div>
      );
}

export default ChoreList;
