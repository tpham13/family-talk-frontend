import React from 'react';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// PostCard is expect post as a props so we need to pass post as a props in App.js route
const PostCard = ({post}) => {

    return (
        <div className="PostCard">
       { post ? (
            <Card> 
                <CardMedia style={{height: 0, paddingTop: '10.25%'}}
                    
                    />
                <CardContent> 
                    <Typography gutterBottom variant="headline" component="h2">
                        <p>{post.attributes.content} shared by {post.attributes.user.name} </p>
                        
                    </Typography>
                </CardContent>

                <CardActions> 
                    <Button size="small" color="primary">
                        <Link to={`/posts/${post.id}/edit`}>Edit this post</Link>
                    </Button>
                </CardActions>
               
       
            </Card>
        )  :<p>This is the post card</p> }

        </div>
    )
}

export default PostCard