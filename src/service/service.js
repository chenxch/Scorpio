var md5 = require('js-md5');
var axios = require('axios');
module.exports = {
  login: function(params) {
    let newParams = enryptData(params.params);
    params.params = newParams;
    return axios.get('/okayapi', params);
  }
}
const enryptData = (params) => {
  // TODO：请改成您的app_key
  const OKAYAPI_APP_KEY = "8647E27B8A5A4C0D7760E0C2300B7998";
  // TODO：请改成您的app_secrect，请勿对外暴露！！
  const OKAYAPI_APP_SECRECT = "8QVtiLl0fWcqbs1CzdMWzRNZyTX94G9YvwnfxoEATYPglAFEal7w0X77CtrpOkBD4Jt2erBZ";

  params['app_key'] = OKAYAPI_APP_KEY;

  // var sdic = Object.keys(params).sort();
  var sdic = [];
  for (var i in params) { //用javascript的for/in循环遍历对象的属性
    sdic.push(i);
  }
  sdic = sdic.sort();
  var paramsStrExceptSign = "";
  for (var ki in sdic) {
    paramsStrExceptSign += params[sdic[ki]];
  }

  var sign = md5(paramsStrExceptSign + OKAYAPI_APP_SECRECT).toUpperCase();
  params['sign'] = sign;
  console.log(params);
  return params;
}