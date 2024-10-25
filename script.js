// Announcements
const announcements = [
    { title: 'On account of Independence Day, August 15th will be a holiday.' },
    { title: 'Reminder: Finish your assignments and submit them by Monday.' },
];

const announcementsList = document.getElementById('announcements');
announcements.forEach((announcement) => {
    const listItem = document.createElement('li');
    listItem.className = 'mb-2';
    const paragraph = document.createElement('p');
    paragraph.textContent = announcement.title;
    listItem.appendChild(paragraph);
    announcementsList.appendChild(listItem);
});

// Quick Links
const quickLinks = [
    { title: 'Canvas LMS', url: '/lms' },
];

const quickLinksList = document.getElementById('quick-links');
quickLinks.forEach((link) => {
    const listItem = document.createElement('li');
    listItem.className = 'mb-2';
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.textContent = link.title;
    linkElement.className = 'text-blue-600 hover:text-blue-800 transition duration-300';
    listItem.appendChild(linkElement);
    quickLinksList.appendChild(listItem);
});

// Class Recordings
const classRecordings = [
    { title: 'Class 7 Math Algebraic Equations', time: 'This week' },
    { title: 'Class 7 Science | Live Class', time: 'Tuesday, 5:00-5:50 }