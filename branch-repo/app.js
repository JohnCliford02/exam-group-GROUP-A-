const express = require('express');
const examsRoutes = require('./routes/exams');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/exam-group', (req, res) => {
  res.json({ message: 'Group YOUR_GROUP API' });
});
app.use('/exams', examsRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
