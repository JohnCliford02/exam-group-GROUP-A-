const express = require('express');
const router = express.Router();

// input data
let exams = [
  { id: 1, name: 'Midterm Exam', subject: 'Mathematics' },
  { id: 2, name: 'Final Exam', subject: 'History' },
  { id: 3, name: 'Quiz 1', subject: 'Science' },
  { id: 4, name: 'Project Presentation', subject: 'English' },
];

//  Get a single exam by ID
router.get('/exam/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const exam = exams.find(e => e.id === examId);

  if (!exam) {
    return res.status(404).json({ error: 'Exam not found' });
  }

  res.json(exam);
});

//  Delete an exam by ID
router.delete('/exam/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const index = exams.findIndex(e => e.id === examId);

  if (index === -1) {
    return res.status(404).json({ error: 'Exam not found' });
  }

  const deletedExam = exams.splice(index, 1);
  res.json({ message: 'Exam deleted', deletedExam });
});

module.exports = router;
