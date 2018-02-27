import uuid from 'uuid/v4';

const categoryCreate = category => {
  category.id = uuid();
  category.timeStamp = new Date();

  return {
    type: 'CATEGORY_CREATE',
    category: category,
  }
};

const categoryUpdate = category => {
  return {
    type: 'CATEGORY_UPDATE',
    category: category,
  }
};

const categoryDelete = category => {
  return {
    type: 'CATEGORY_DELETE',
    category: category,
  }
}

const categoryReset = () => ({type: 'CATEGORY_RESET'});


export {categoryCreate, categoryUpdate, categoryDelete};