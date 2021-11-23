import {ADD_ARTICLE} from '../constants'

const initialState = {
    articles: []
  };
  
  function rootReducer(state = initialState, action) {
      if(action.type === ADD_ARTICLE){
          Object.assign({},state,
            {article : state.articles.concat(action.payload)
        })
      }
    return state;
  };
  
  export default rootReducer;
