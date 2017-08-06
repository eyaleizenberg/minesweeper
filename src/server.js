import express from 'express';
import ejs from 'ejs';
import Promise from 'bluebird';
import 'babel-polyfill';

module.exports = () => {
  const app = express();

  app.get('/', async (req, res) => {
    const templatePath = './src/index.ejs';
    const data = {
      title: 'DOOM Demon Sweeper',
      staticsBaseUrl: 'http://localhost:3200/',
      baseurl: 'http://localhost:3000/',
      locale: 'en'
    };

    const renderFile = await Promise.promisify(ejs.renderFile, {context: ejs});

    const htmlData = await renderFile(templatePath, data);

    res.send(htmlData);
  });

  app.use(express.static('./public'));

  return app;
};
