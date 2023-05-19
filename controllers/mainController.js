import dataModel from '../models/dataModel.js';

const mainController = {
  getIndex: (req, res) => {
    dataModel
      .getData()
      .then(({ title, content }) => {
        res.render('index', { title, content });
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  },
};

export default mainController;
