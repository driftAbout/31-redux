import React from 'react';

class CategoryItem extends React.Component{
  render(){
    return (
      <li className="category-list-item">
        <span className="category-timestamp">{this.props.timeStamp}</span>
        <p>
          <span className="category-name">{this.props.name}</span>
        <span className="category-budget">{this.props.budget}</span>
        </p> 
      </li>
    );
  }
}

export default CategoryItem;