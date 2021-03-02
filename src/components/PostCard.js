import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles({
    root: {
      maxWidth: 345, 
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
                    alt="Contemplative Reptile"
                    height="100"
                    image="https://lh3.googleusercontent.com/proxy/saBhOVeMuZWCDo2dDHTAbKqJAU2jxk8sX2sRjcp7Bv-R9Pw-5X2F3ZniIEYiC5Wb3c4Pq4cu4RRlanGNYM6oml_iY4IeTDSuf44IoSLiJq0Nt_Zi_LJJwqLoOYKnM8PD3zaQN6b523WYuTGEvgEUn9c9TLx5Ei-1Og4ktdA0GXeTydqIlCfLakNHs-9KHVhxZ_3gevUntNxtReteFAU_M-fouaDr"
                    title="Contemplative Reptile"
                 
                    />
                <CardContent>
                    
                    <Typography variant="body20" color="textSecondary" component="p">
                        <p> {post.attributes.user.name} shared...</p>
                        
                    </Typography>
                    <Typography gutterBottom variant="h20" component="h2">
                        <p>{post.attributes.content}</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions> */}
                <Button size="small" color="primary" href="#contained-buttons">
                    <Link to={`/posts/${post.id}/edit`}>Edit this post</Link>
                </Button>     
            {/* </CardActions> */}
    </Card>
    ) :<p>This is the post card</p> );

}
        
export default PostCard