var Post = React.createClass({

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

  render: function(){
    return(
      <div className="row">
        <div className="col-md-3">{this.props.post.date}</div>
        <div className="col-md-3">{this.props.post.title}</div>
        <div className="col-md-3">{this.props.post.description}</div>
        <div className="col-md-3">
          <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
});
