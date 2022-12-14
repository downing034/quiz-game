import { rest } from 'msw';

import apiData from '../../db.json';
import { CATEGORIES_URL, QUESTIONS_URL } from 'models/api';

const handlers = [
	rest.get(
    CATEGORIES_URL,
    (req, res, ctx) => {
      return res(ctx.json(apiData.categories));
    }
  ),

  rest.get(
    QUESTIONS_URL,
    (req, res, ctx) => {
      return res(ctx.json(apiData.questions));
    }
  ),
];

export default handlers;