console.clear();

import express from 'express';
import mainController from './controllers/mainController.js';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.get('/', mainController.getIndex);
app.listen(port, () => console.log(`Server: http://localhost:${port}`));
