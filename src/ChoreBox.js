import React from 'react';

// Helper function to calculate the next date based on frequency
const getNextDate = (frequency) => {
    const currentDate = new Date();
    const [amount, unit] = frequency.split(' ');
    switch (unit) {
        case 'days':
            currentDate.setDate(currentDate.getDate() + parseInt(amount));
            break;
        case 'weeks':
            currentDate.setDate(currentDate.getDate() + parseInt(amount) * 7);
            break;
        default:
            break;
    }
    return currentDate.toISOString().split('T')[0]; // Return date in YYYY-MM-DD format
};

// Helper function to generate Google Calendar link
const generateGoogleCalendarLink = (choreName, nextDate) => {
    const eventName = `Chore: ${choreName}`;
    const startDate = nextDate.replace(/-/g, '');
    const endDate = new Date(nextDate);
    endDate.setDate(endDate.getDate() + 1); // All-day event, end date should be one day later
    const endDateString = endDate.toISOString().split('T')[0].replace(/-/g, '');
    return `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(eventName)}&dates=${startDate}/${endDateString}`;
};

const ChoreBox = ({ chore }) => {
    const handleBoxClick = () => {
        const nextDate = getNextDate(chore.frequency);
        const calendarLink = generateGoogleCalendarLink(chore.name, nextDate);
        window.open(calendarLink, '_blank');
    };

    return (
        <div className="chore-box" onClick={handleBoxClick}>
            <h2>{chore.name}</h2>
            <p><strong>Frequency:</strong> {chore.frequency}</p>
        </div>
    );
};

export default ChoreBox;
