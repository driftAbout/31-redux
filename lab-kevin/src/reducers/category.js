const takeAction = {} 

takeAction['CATEGORY_CREATE'] = (state, category) => [...state, category];

takeAction['CATEGORY_UPDATE'] = (state, category) => state.map(cat => cat.id === categoty.id ? category : cat);

takeAction['CATEGORY_DELETE'] = (state, category) => state.filter(cat=> cat.id !== category.id);

takeAction['CATEGORY_DELETE'] = () => [];



const category_reducer = (state=[], action) => {
  console.log('state', state)
  let {type, payload} = action;
  takeAction[type] ? takeAction[type](state, payload) : state;
}

export {category_reducer};