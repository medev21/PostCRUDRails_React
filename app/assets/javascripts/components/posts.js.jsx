var Posts = React.createClass({
  getInitialState: function(){
    //this gets from the index html react data
    return { posts: this.props.data}
  },

  getDefaultProps: function(){
      return { posts: [] }
  },

  addPost: function(post){
    posts = this.state.posts.slice()
    posts.push(post)
    this.setState({ posts: posts})
  },

  render: function(){
    return(
      <div className="posts">
        <h1 className="title">Posts</h1>

        <PostForm handleNewPost={this.addPost} />

        <div className="row">
          <div className="col-md-4">Date</div>
          <div className="col-md-4">Post Name</div>
          <div className="col-md-4">Post Description</div>
        </div>

          {
            this.state.posts.map(function(post){
              return <Post key={post.id} post={post} />
            }.bind(this))
          }

      </div>
    );
  }
});
