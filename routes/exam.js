const express = require('express');
const router = express.Router();

let exams = [
  { id: 1, name: 'Midterm Exam', subject: 'Mathematics' },
  { id: 2, name: 'Final Exam', subject: 'History' },
  { id: 3, name: 'Quiz 1', subject: 'Science' },
  { id: 4, name: 'Project Presentation', subject: 'English' },
];

router.get('/exams', (req, res) => {
  res.json(exams);
});

router.post('/exams', (req, res) => {
  const { name, subject } = req.body;

  if (!name || !subject) {
    return res.status(400).json({ error: 'Name and subject are required' });
  }

  const newExam = {
    id: exams.length + 1,
    name,
    subject,
  };

  exams.push(newExam);
  res.status(201).json(newExam);
});

router.put('/exams/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const { name, subject } = req.body;

  const examIndex = exams.findIndex((exam) => exam.id === examId);

  if (examIndex === -1) {
    return res.status(404).json({ error: 'Exam not found' });
  }

  if (!name && !subject) {
    return res.status(400).json({ error: 'At least name or subject is required for update' });
  }

  if (name) {
    exams[examIndex].name = name;
  }
  if (subject) {
    exams[examIndex].subject = subject;
  }

  res.json(exams[examIndex]);
});

module.exports = router;

// app.js
const express = require('express');
const examGroupRoutes = require('./routes/examGroupRoutes');
const examsRoutes = require('./routes/exams');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', examGroupRoutes);
app.use('/', examsRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});