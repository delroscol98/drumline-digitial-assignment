import express from 'express';

import { readFile } from 'fs/promises'
import { cwd } from 'process';
import { join } from 'path';
import { listCategoryFilter } from '../templates/listCategoryFilter.js';
import { jobListTemplate } from '../templates/jobListTemplate.js';

export const api = express.Router();

const database = {
	categories: readFile(join(cwd(), 'src/database/categories.json'), { encoding: 'utf-8' }).then(raw => JSON.parse(raw)),
	jobs: readFile(join(cwd(), 'src/database/jobs.json'), { encoding: 'utf-8' }).then(raw => JSON.parse(raw)),
}

api.get('/category-list', async (req, resp) => resp.send(
	(await database.categories).map(category => listCategoryFilter({ category })).join('\n')
));

api.get('/bugs-list', async (req, resp) => {
	const allJobs = await database.jobs;
	const filter = req.query['filter'] ?? 'none';

	if (filter === 'none') {
		resp.send(
			allJobs
				.map(job => jobListTemplate(job))
				.join('\n')
		)
	}

	else {
		resp.send(
			allJobs
				.filter(job => job.category.some(job => job === filter))
				.map(job => jobListTemplate(job))
				.join('\n')
		)
	}
});