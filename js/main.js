const contacts = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
];

function loadContacts() {
    const contactList = document.getElementById('contact-list');
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = contact.name;
        li.className = 'p-4 border-t cursor-pointer hover:bg-gray-200';
        contactList.appendChild(li);
    });
}

document.getElementById('send-btn').addEventListener('click', function() {
    const inputField = document.getElementById('chat-input');
    const messageText = inputField.value.trim();

    if (messageText !== '') {
        const chatDisplay = document.getElementById('chat-display');
        const messageElement = document.createElement('div');
        messageElement.className = 'message message-sent';
        messageElement.textContent = messageText;

        chatDisplay.appendChild(messageElement);
        
        inputField.value = '';
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
});

// Load contacts on startup
window.onload = loadContacts;