// Returns the current date in the format "MM/DD/YYYY"
function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}

// Returns the number of days in a given month and year
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Returns the name of a given month (1-12)
function getMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month - 1];
}

// Function to get current time in the format of "HH:MM:SS"
function getCurrentTime() {
    const today = new Date();
    const hh = String(today.getHours()).padStart(2, '0');
    const mm = String(today.getMinutes()).padStart(2, '0');
    const ss = String(today.getSeconds()).padStart(2, '0');

    return hh + ':' + mm + ':' + ss;
}
