const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors({
  origin: 'http://localhost:3000/findOne'
}));
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});