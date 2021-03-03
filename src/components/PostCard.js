import React from 'react';
import {Link} from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    }
  }));

const cards = [1];

const PostCard = ({post}) => {
    const classes = useStyles();
    return (
        post ? (
            <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={0}>
              {cards.map((card) => (
                <Grid item key={card} xs={10} sm={5} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://miro.medium.com/max/1000/1*if53xXXd1K6KjI8btdTb-A.png"
                      title="dog"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p> {post.attributes.user.name} shared...</p>
                      </Typography>
                      <Typography>
                        <p>{post.attributes.content}</p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
    ) :<p>This is the post card</p> );

}
        
export default PostCard






// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345, 
//     },
   
//   });



// PostCard is expect post as a props so we need to pass post as a props in App.js route
// const PostCard = ({post}) => {
//     const classes = useStyles();
//     return (
//         post ? (
//         <Card className={classes.root}>
//             <CardActionArea>
//                 <CardMedia
//                     component="img"
//                     alt="Contemplative Reptile"
//                     height="100"
//                     image="https://lh3.googleusercontent.com/proxy/saBhOVeMuZWCDo2dDHTAbKqJAU2jxk8sX2sRjcp7Bv-R9Pw-5X2F3ZniIEYiC5Wb3c4Pq4cu4RRlanGNYM6oml_iY4IeTDSuf44IoSLiJq0Nt_Zi_LJJwqLoOYKnM8PD3zaQN6b523WYuTGEvgEUn9c9TLx5Ei-1Og4ktdA0GXeTydqIlCfLakNHs-9KHVhxZ_3gevUntNxtReteFAU_M-fouaDr"
//                     title="Contemplative Reptile"
                 
//                     />
//                 <CardContent>
                    
//                     <Typography variant="body20" color="textSecondary" component="p">
//                         <p> {post.attributes.user.name} shared...</p>
                        
//                     </Typography>
//                     <Typography gutterBottom variant="h20" component="h2">
//                         <p>{post.attributes.content}</p>
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//             {/* <CardActions> */}
//                 <Button size="small" color="primary" href="#contained-buttons">
//                     <Link to={`/posts/${post.id}/edit`}>Edit this post</Link>
//                 </Button>     
//             {/* </CardActions> */}
//     </Card>
//     ) :<p>This is the post card</p> );

// }
        
// export default PostCard