import React from 'react';
import {Modal} from '../../app/index.js'
import {CategoryForm} from '../../category/index.js';
import {connect} from 'react-redux';
import {category_update, category_delete} from '../../../actions/category-actions.js'


class CategoryItem extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.category;
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDoubleClick(){
    this.setState({editing: true})
  }

  handleClose(){
    this.setState({editing: false});
  }

  handleDelete(){
    this.props.CategoryItem_category_delete(this.state.id)
  }

  render(){
    return (
      <li className="category-list-item" onDoubleClick={this.handleDoubleClick}>
        <span className="category-timestamp">{this.state.timeStamp.toDateString()}</span>
        <p>
          <span className="category-name">{this.props.category.name}</span>
        <span className="category-budget">{this.props.category.budget}</span>
        </p> 
        <button onClick={this.handleDelete} >Ixnay on the ottenray</button>
        { this.state.editing ? 
            <Modal onClose={this.handleClose}>
              <CategoryForm submit_text="Re-evaluation" 
                category={this.state}
                onComplete={this.props.CategoryItem_category_update}/>
            </Modal >
            : undefined
        }
      </li>
    );
  }
}

const mapStateToProps = state => ({categories: state});
const mapDispatchToProps = (dispatch, getState) => ({
  CategoryItem_category_update: category => dispatch(category_update(category)),
  CategoryItem_category_delete: id => dispatch(category_delete(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);