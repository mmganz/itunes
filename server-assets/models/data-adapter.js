let uuid = require('node-uuid'),
  JsData = require('js-data'),
  FBAdapter = require('js-data-firebase'),
  DS = new JsData.DS();

let fbAdapter = new FBAdapter({
  basePath: 'https://my-musical-life.firebaseio.com/'
})

DS.registerAdapter('firebase', fbAdapter, { default: true })

module.exports = {
  DS,
  uuid
}