import {
  inputEnabled,
  setActiveDiv,
  setToken,
  enableInput,
} from './index.js'
import { showLoginRegister } from './loginRegister.js'
import { showAddEditQuiz } from './addEditQuiz.js'

let quizzesDiv = null
let quizzesTable = null
let quizzesTableHeader = null

export const handleQuizzes = () => {
  // Initialize the quizzes-related elements
  quizzesDiv = document.getElementById('quizzes')
  const logoffButton = document.getElementById('logoff')
  const addQuizButton = document.getElementById('add-quiz')
  quizzesTable = document.getElementById('quizzes-table')
  quizzesTableHeader = document.getElementById('quizzes-table-header')

  // Use event delegation on the parent div for button clicks
  quizzesDiv.addEventListener('click', (e) => {
    if (inputEnabled && e.target.nodeName === 'BUTTON') {
      if (e.target === addQuizButton) {
        showAddEditQuiz(null)
      } else if (e.target === logoffButton) {
        // user logoff logic (will be implemented later)
        showLoginRegister()
      }
    }
  })
}

// Shows the quizzes list display. Logic to fetch and display quizzes will be added later.
export const showQuizzes = async () => {
  setActiveDiv(quizzesDiv) // Make the quizzes list div visible
}
