import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';


// https://material.io/components/cards#actions


const useStyles = makeStyles({
    root: {
      maxWidth: 500, 
    },
   
  });



// PostCard is expect post as a props so we need to pass post as a props in App.js route
const PostCard = ({post}) => {
    const classes = useStyles();
    return (
        post ? (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="microphones"
                    height="330"
                    image="https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-03/generic-retro-microphones-1200x600.jpg?h=bde28bee&itok=RM2qvk9D"
                    title="Microphones"
                 
                    />
                <CardContent >
                    
                    <Typography variant="body20" color="textSecondary" component="p">
                        <p>{post.attributes.user.name} shared...</p>
                        
                    </Typography>
                    <Typography gutterBottom variant="h20" component="h3">
                        <p>{post.attributes.content}</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href="#contained-buttons">
                    <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                </Button>     
            </CardActions>
    </Card>
    ) : null );

}
        
export default PostCard