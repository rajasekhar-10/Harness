#Javascript

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {res.send('Hello, Harness CI/CD!);
});

app.listen(PORT, () => {
	comsole.log('Server is running on port ${PORT}');
});

