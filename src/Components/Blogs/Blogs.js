import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardActions, Button, Link } from '@material-ui/core';
import Spinner from '../Spinner/Spinner';


const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
    background: '#0a192f',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: '2%',
    marginLeft: '5vw',
    marginRight: '2vw',
    [theme.breakpoints.down('sm')]: {
      margin: '5%',
      marginTop: '12%',
    },
  },
  media: {
    height: 170,
    objectFit: 'cover',
  },
});
class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts : [],
      isLoading: true,
    };
  }
  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@@shraddhagoel24')
    .then(res => res.json())
    .then(data => {
      const posts = data.items;
      const blogPosts = posts.filter(post => post.categories.length > 0);
      this.setState({ blogPosts, isLoading: false });
    });
  }

  toText = (node) => {
    let tag = document.createElement('div')
    tag.innerHTML = node
    node = tag.innerText
    return node
  }

  shortenText = (text,startingPoint ,maxLength) => {
      return text.length > maxLength?
      text.slice(startingPoint, maxLength):
      text
  }
  
  getBlogPosts = () => {
    const { classes } = this.props;
    const { blogPosts = [] } = this.state;
    return blogPosts.map(blog => {
      return (
        <Card key={blog.title} className={classes.root}>
          <CardActionArea>
            <Link target="_blank" href={blog.link}>
              <CardMedia
                className={classes.media}
                image={blog.thumbnail}
              />
            </Link>
            <CardContent>
              <Typography variant="h5" component="h3">
                {blog.title}
              </Typography>
              <div class="blog_preview">
                  <p class="blog__intro">{this.shortenText(this.toText(blog.content), 0, 300)+ '...'}</p>
              </div>
              <Typography component="p">
              </Typography>
            </CardContent>
            <CardActions>
              <Button target='_blank' href={blog.link} size="small" color="default">
                Read more
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      )
    });
  }
  render() {
    // console.log(this.state.blogPosts);
    const { isLoading } = this.state;
    return (
      <React.Fragment>
        { isLoading ? <Spinner /> : this.getBlogPosts()}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(BlogPage);