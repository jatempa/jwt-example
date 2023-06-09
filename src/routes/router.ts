import { Router } from 'express';
const router = Router();

router.get('/items', (req, res) => {
  const items = [
    {
      id: 'ef7b0734-911b-46bd-86f9-11cfe3610ced',
      title: 'libero tenetur blanditiis',
      done: false,
    },
    {
      id: '06b66e47-c5ca-42c4-a3dc-18f8c8210f69',
      title: 'ratione quo quaerat',
      done: false,
    },
    {
      id: 'e52d8c54-31a8-455e-8871-b2364f73d6c1',
      title: 'aut eum molestias',
      done: false,
    },
    {
      id: 'c14d162a-cb6e-49d9-b4ba-d1135211dcfe',
      title: 'autem repellat omnis',
      done: false,
    },
    {
      id: '61487c4e-990c-4b8b-bef8-87f5ca9c2bcf',
      title: 'ut voluptatem voluptatum',
      done: false,
    },
    {
      id: 'd56192e3-57d2-432e-8f65-7c517b91f466',
      title: 'velit quod maiores',
      done: false,
    },
    {
      id: 'd7fd0104-89bd-4746-8457-3ab9068e2f9a',
      title: 'et dolorem necessitatibus',
      done: false,
    },
  ];
  const rawDataToStringAsJson = JSON.stringify(items);
  const stringAsJsonToJSON = JSON.parse(rawDataToStringAsJson);
  res.json(stringAsJsonToJSON);
});

export default router;
