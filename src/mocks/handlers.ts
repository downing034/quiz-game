import { rest } from 'msw';

import categoryOneResponse from 'mocks/data/categoryResponse/categoryOne.json';
import categoryTwoResponse from 'mocks/data/categoryResponse/categoryTwo.json';
import categoryThreeResponse from 'mocks/data/categoryResponse/categoryThree.json';
import categoryFourResponse from 'mocks/data/categoryResponse/categoryFour.json';
import categoryFiveResponse from 'mocks/data/categoryResponse/categoryFive.json';
import categorySixResponse from 'mocks/data/categoryResponse/categorySix.json';

import { CATEGORY_URL } from 'models/categories/api';

const handlers = [

  rest.get(CATEGORY_URL, (req, res, ctx) => {
    const query = req.url.searchParams;
    const count = query.get('id');
    switch (count) {
      case '1':
        return res(ctx.json(categoryOneResponse));
      case '2':
        return res(ctx.json(categoryTwoResponse));
      case '3':
        return res(ctx.json(categoryThreeResponse));
      case '4':
        return res(ctx.json(categoryFourResponse));
      case '5':
        return res(ctx.json(categoryFiveResponse));
      case '6':
        return res(ctx.json(categorySixResponse));
      default:
        return res(ctx.json(categoryOneResponse));
    }
  }),
];

export default handlers;