import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { StatusCodes } from 'http-status-codes';

import { registerPreprocessor } from 'tools';
import auth from 'middlewares/auth';
import { generateToken } from 'helpers';

const app = express();

app.use(cors());
app.use(express.json());
registerPreprocessor(app);

app.get('/', (_req, _res) => {
	res.status(StatusCodes.OK).json({ message: 'Ping...' });
});

app.post('/login', (req, res) => {
	const {
		body: { email, password }
	} = req;

	const token = generateToken({ role: 'user', email, password });
	res.status(StatusCodes.OK).json({ message: 'You are logged in', token });
});

app.get('/cart', auth, (_req, res) => {
	console.log('GET /200 /cart');
	res.status(StatusCodes.OK).json({ message: 'User authenticated' });
});
app.get('/checkout', auth, (_req, res) => {
	console.log('GET /200 /checkout');
	res.status(StatusCodes.OK).json({ message: 'User authenticated' });
});

app.listen(5000, () => {
	console.log('Node.js web server at port 5000 is running..');
});
