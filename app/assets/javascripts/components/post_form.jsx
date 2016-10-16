var PostForm = React.createClass({
  getInitialState: function(){
    return {
      date: '',
      title: '',
      description: ''
    }
  },

  handleChange: function(e){
    var name = e.target.name;
    var obj = {}
    obj[name] = e.target.value;

    this.setState(obj);
  },

  valid: function(){
    return(this.state.title && this.state.description && this.state.date)
  },

  handleSubmit: function(e){
    e.preventDefault();
    $.post('',
      {post: this.state},
      function(data){
        this.props.handleNewPost(data);
        this.setState(this.getInitialState());
      }.bind(this),
      'JSON'
    );
  },

  render: function(){
    return(
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="date">Date:</label>
          <input type="date" className="form-control" id="date" name="date" onChange={this.handleChange}></input>
        </div>
        <div className="form-group">
          <label for="title">Title:</label>
          <input type="text" className="form-control" id="title" name="title" onChange={this.handleChange}></input>
        </div>
        <div className="form-group">
          <label for="description">Description:</label>
          <input type="text" className="form-control" id="description" name="description" onChange={this.handleChange}></input>
        </div>
        <button type="submit" className="btn btn-default" disabled={!this.valid()}>Submit</button>
      </form>
    );
  }
});
