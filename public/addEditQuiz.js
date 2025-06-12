import {
  inputEnabled,
  enableInput,
  setActiveDiv
} from './index.js'
import { showQuizzes } from './quizzes.js'

let addEditQuizDiv = null
let quizTitleInput = null
let quizDescriptionInput = null
let quizSubjectSelect = null
let addingQuizButton = null

export const handleAddEditQuiz = () => {
  addEditQuizDiv = document.getElementById('edit-quiz')
  quizTitleInput = document.getElementById('quizTitle')
  quizDescriptionInput = document.getElementById('quizDescription')
  quizSubjectSelect = document.getElementById('quizSubject')
  addingQuizButton = document.getElementById('adding-quiz')
  const editQuizCancelButton = document.getElementById('edit-quiz-cancel')

  // Use event delegation on the parent div for button clicks
  addEditQuizDiv.addEventListener('click', (e) => {
    if (inputEnabled && e.target.nodeName === 'BUTTON') {
      if (e.target === addingQuizButton) {
        // Placeholder for adding/editing quiz logic (will be implemented later)
        // For now, it immediately shows the quizzes list after a 'save' click
        showQuizzes()
      } else if (e.target === editQuizCancelButton) {
        // When cancel button is clicked, return to quizzes list
        showQuizzes()
      }
    }
  })
}

// Shows the add/edit quiz form. 'quiz' parameter for editing a specific quiz.
export const showAddEditQuiz = (quiz) => {
  // message.textContent = '' // Clear any previous messages
  // TODO: Populate form fields if 'quiz' object is provided (for editing existing quiz)
  // This functionality will be implemented later.
  setActiveDiv(addEditQuizDiv) // Make the add/edit quiz form div visible
}

// Clears input fields and prepares the form for adding a new quiz
export const clearAddEditQuizForm = () => {
  quizTitleInput.value = ''
  quizDescriptionInput.value = ''
  quizSubjectSelect.selectedIndex = 0 // Reset to the first option
}
