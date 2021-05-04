import RESTSerializer from '@ember-data/serializer/rest';

export default class RecipeSerializer extends RESTSerializer {
  normalizeResponse(store,primaryModelClass,payload,id,requestType){
    // arguments[2]={
    //   "recipes":payload
    // }
    // let response = super.normalizeResponse(...arguments);
    // payload.data =
    // payload = {
    //   "recipes":payload
    // }

    // console.log(payload);
    // console.log(response);
    // return response;
  }
}
