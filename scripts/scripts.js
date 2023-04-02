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