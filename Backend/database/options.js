const path = require('path');
module.exports =  {

    pathConfig : '../Infra/SequelizeContext',

  config: path.join(pathConfig, 'config.json'),
  'migrations-path': path.join(__dirname, 'migrations'),
  'seeders-path': path.join(__dirname, 'seeders'),
  'models-path': path.join(__dirname, 'model'),
}