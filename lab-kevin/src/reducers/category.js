const takeAction = {} 

takeAction['CATEGORY_CREATE'] = () => [...state, category];

takeAction['CATEGORY_UPDATE'] = () => state.map(cat => cat.id === category.id ? category : cat);

takeAction['CATEGORY_DELETE'] = () => state.filter(cat => cat.id !== category.id);

takeAction['CATEGORY_DELETE'] = () => [];



const category = (state=[], action) => {
  let {type, category} = action;
  takeAction[type] ? takeAction[type]() : state;
}

export default category;