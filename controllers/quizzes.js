
const Quiz = require('../models/Quiz')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')


const getAllQuizzes = async (req, res) => {
  res.send('Get all quizzes')
}

const getQuiz = async (req, res) => {
  const quizId = req.params.id
  res.send(`Get quiz with ID: ${quizId}`)
}

const createQuiz = async (req, res) => {
  console.log('Creating quiz with data:', req.body)
  req.body.createdBy = req.user.userId
  const quiz = await Quiz.create(req.body)

  res.status(StatusCodes.CREATED).json({ quiz })
}

const updateQuiz = async (req, res) => {
  const quizId = req.params.id
  res.send(`Update quiz with ID: ${quizId}`)
}

const deleteQuiz = async (req, res) => {
  const quizId = req.params.id
  res.send(`Delete quiz with ID: ${quizId}`)
}

module.exports = {
  getAllQuizzes,
  getQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
}
