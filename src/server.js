import express from 'express'

import { htmlTemplate } from './templates/html.js'
import { homeTemplate } from './templates/home.js'
import { api } from './routes/api.js';

// const express = require('express');
const app = express();
app.use('/api', api);

app.get('/', async (req, resp) => {
	resp.send(htmlTemplate({
		title: 'Bug Bounty Website',
		body: homeTemplate()
	}))
})

app.use('/inject.js', express.static('./inject.js'));
app.use(express.static('./public'));

app.listen(8080, () => console.log('started: http://localhost:8080'));