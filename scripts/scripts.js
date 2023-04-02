var notesArray = [
    { title: "note one", body: "this is my first note"},
    { title: "note two", body: "this is my second note"}

];

// Get the necessary elements from the HTML
const darkThemeButton = document.querySelector("#dark-theme-button");
const textarea = document.querySelector("textarea");
const cancelButton = document.querySelector("#cancel-button");
const saveButton = document.querySelector("#save-button");
const newNoteButton = document.querySelector("#new-note-button");
const sidebar = document.querySelector("#sidebar");
const themeClass = "dark-theme";
const lightTextClass = "light-text";
const darkTextClass = "dark-text";
const defaultNote = sidebar.firstElementChild;

// Add event listeners to the buttons
darkThemeButton.addEventListener("click", toggleTheme);
cancelButton.addEventListener("click", hideTextArea);
newNoteButton.addEventListener("click", toggleTextArea);
saveButton.addEventListener("click", saveNote);
