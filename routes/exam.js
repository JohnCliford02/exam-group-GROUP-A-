const express = require('express');
const router = express.Router();

let exams = [];

routerouter.get('/exams', (req, res) => {
    const hardcodedExams = [
      { examName: 'Midterm', subject: 'Math', date: '2024-11-15' },
      { examName: 'Final', subject: 'Science', date: '2024-12-20' },
      { examName: 'Quiz 1', subject: 'History', date: '2024-10-30' },
    ];
    res.json(hardcodedExams);
  });

router.get('/exam-group', (req, res) => {
  res.json({ message: 'Group A API' });
});

router.post('/exams', (req, res) => {
  const newExam = req.body;
  exams.push(newExam);
  res.status(201).json(newExam); 
});

outer.get('/exams', (req, res) => {
  const hardcodedExams = [
    { examName: 'Midterm', subject: 'Math', date: '2024-11-15' },
    { examName: 'Final', subject: 'Science', date: '2024-12-20' },
    { examName: 'Quiz 1', subject: 'History', date: '2024-10-30' },
  ];
  res.json(hardcodedExams);
});

module.exports = router;