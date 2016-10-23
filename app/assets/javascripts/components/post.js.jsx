var Post = React.createClass({

  getInitialState: function(){
    edit: false
  },

  handleToggle: function(e){
    e.preventDefault();
    this.setState({
      edit: !this.state.edit
    });
  }

  handleDelete: function(e){
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/posts/' + this.props.post.id,
      dataType: 'JSON',
      success: function(){
        this.props.handleDeletePost(this.props.post);
      }.bind(this)
    });
  },

  handleEdit: function(e){
    e.preventDefault();

    var data = {
      title: React.findDOMNode(this.refs.title).value,
      date: React.findDOMNode(this.refs.date).value,
      description: React.findDOMNode(this.refs.description).value
    }

    $.ajax({
      method: 'PUT',
      url: '/posts/' + this.props.post.id,
      dataType: 'JSON',
      data: {post: data},
      success: function(data){
        this.setState({ edit: false });
        this.props.handleEditPost(this.props.post, data);
      }.bind(this)
    });
  },

  postRow: function(){
    return(
      <div className="row">
        <div className="col-md-3">{this.props.post.date}</div>
        <div className="col-md-3">{this.props.post.title}</div>
        <div className="col-md-3">{this.props.post.description}</div>
        <div className="col-md-3">
          <button className="btn btn-default" onClick={this.handleToggle}>Update</button>
          <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  },

  editPostForm: function(){
    return(
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="date">Date:</label>
          <input value={this.state.date} type="date" className="form-control" id="date" name="date" onChange={this.handleChange}></input>
        </div>
        <div className="form-group">
          <label for="title">Title:</label>
          <input value={this.state.title} type="text" className="form-control" id="title" name="title" onChange={this.handleChange}></input>
        </div>
        <div className="form-group">
          <label for="description">Description:</label>
          <input  value={this.state.description} type="text" className="form-control" id="description" name="description" onChange={this.handleChange}></input>
        </div>
        <button type="submit" className="btn btn-default" disabled={!this.valid()}>Submit</button>
      </form>
    );
  }

  // render: function(){
  //   return(
  //     <div className="row">
  //       <div className="col-md-3">{this.props.post.date}</div>
  //       <div className="col-md-3">{this.props.post.title}</div>
  //       <div className="col-md-3">{this.props.post.description}</div>
  //       <div className="col-md-3">
  //         <button className="btn btn-default" onClick={this.handleEdit}>Update</button>
  //         <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
  //       </div>
  //     </div>
  //   );
  // }
});
