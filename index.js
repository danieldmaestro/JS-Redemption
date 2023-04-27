const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/form', (req, res) => {
  let formData = req.body;
  console.log(formData);
  res.send('Form submitted successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server started on port 3000');
});