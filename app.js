const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Demo CI/CD project 🚀');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
