import React from 'react';
import ChoreBox from './ChoreBox';
import './ChoreList.css';

const chores = [
    { name: 'Kitchen Sink', frequency: '2 weeks' },
    { name: 'Clean Toilet', frequency: '2 weeks' },
    { name: 'Clean Shower', frequency: '2 weeks' },
    { name: 'Clean Sink', frequency: '2 weeks' },
    { name: 'Wash Bedding', frequency: '3 weeks' },
    { name: 'Change Pillowcase', frequency: '5 days' },
];

const ChoreList = () => {
    return (
        <div>
            <h1>Chore List</h1>
            <p>Click a card to create an event for the next date.</p>
            <div className="chore-list">
                {chores.map((chore, index) => (
                    <ChoreBox key={index} chore={chore} />
                ))}
            </div>
        </div>
    );
};

export default ChoreList;
