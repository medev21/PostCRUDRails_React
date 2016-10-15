var Post = React.createClass({

  render: function(){
    return(
      <div className="row">
        <div className="col-md-4">{this.props.post.date}</div>
        <div className="col-md-4">{this.props.post.title}</div>
        <div className="col-md-4">{this.props.post.description}</div>
      </div>
    );
  }
});
