// Declare an array of notes
const notesArray = [
    {title: "note one", body: "this is my first note"},
    {title: "note two", body: "this is my second note"}
  ];
  
// Get the elements we need
const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const notetaker = document.querySelector('.notetaker');
const darkThemeButton = document.querySelector('.darkThemeButton');
const newNoteButton = document.querySelector('.newNoteButton');
const saveButton = document.querySelector('.saveButton');
const cancelButton = document.querySelector('.cancelButton');
const textarea = document.querySelector('#textarea');
const sidebarList = document.querySelector('.sidebar ul');
  
// Add event listeners
darkThemeButton.addEventListener('click', toggleDarkTheme);
newNoteButton.addEventListener('click', toggleTextArea);
saveButton.addEventListener('click', saveNote);
cancelButton.addEventListener('click', hideTextArea);
sidebarList.addEventListener('click', displayNote);

// Toggle dark theme
function toggleDarkTheme() {
  body.classList.toggle('dark-theme');
  sidebar.classList.toggle('dark-theme');
  notetaker.classList.toggle('dark-theme');
}

// Toggle textarea
function toggleTextArea() {
    const textareaContainer = document.querySelector('.notetaker .textarea-container');
    textareaContainer.classList.toggle('hidden');
    saveButton.classList.toggle('hidden');
    cancelButton.classList.toggle('hidden');
    if (!textareaContainer.classList.contains('hidden')) {
      textarea.focus();
    }
    if (newNoteButton.textContent === 'New Note') {
      textarea.value = '';
    }
    newNoteButton.textContent = (newNoteButton.textContent === 'New Note') ? 'Clear' : 'New Note';
  }

// Hide textarea
function hideTextArea() {
    const textareaContainer = document.querySelector('.notetaker .textarea-container');
    textareaContainer.classList.add('hidden');
    saveButton.classList.add('hidden');
    cancelButton.classList.add('hidden');
  }

// Save note
function saveNote() {
    const title = prompt('Please enter a title for your note:');
    if (title !== null && title !== '') {
      const note = {title: title, body: textarea.value};
      notesArray.push(note);
      const listItem = document.createElement('li');
      const textNode = document.createTextNode(note.title);
      listItem.appendChild(textNode);
      sidebarList.appendChild(listItem);
      textarea.value = '';
      toggleTextArea();
    }
  }