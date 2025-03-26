const express = require('express');
const router = express.Router();

let exams = [
  { id: 1, name: 'Midterm Exam', subject: 'Mathematics' },
  { id: 2, name: 'Final Exam', subject: 'History' }
];

router.get('/', (req, res) => {
  res.json(exams);
});

router.post('/', (req, res) => {
  const { name, subject } = req.body;
  if (!name || !subject) {
    return res.status(400).json({ error: 'Name and subject are required' });
  }
  const newExam = { id: exams.length + 1, name, subject };
  exams.push(newExam);
  res.status(201).json(newExam);
});

router.put('/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const { name, subject } = req.body;
  const exam = exams.find(e => e.id === examId);

  if (!exam) return res.status(404).json({ error: 'Exam not found' });

  if (name) exam.name = name;
  if (subject) exam.subject = subject;

  res.json(exam);
});

module.exports = router;
