// JavaScript to handle the bell notifications
const notificationBell = document.getElementById('notificationBell');
const notificationTab = document.getElementById('notificationTab');
const closeTab = document.getElementById('closeTab');

// Function to open the notification tab
notificationBell.addEventListener('click', () => {
    notificationTab.classList.add('active'); // Slide the tab in
});

// Function to close the notification tab
closeTab.addEventListener('click', () => {
    notificationTab.classList.remove('active'); // Slide the tab out
});

