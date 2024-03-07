import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <div className='res-card'>
      <div>
        <Card sx={{ maxWidth: 345 }} className='res-name' >
          <CardMedia
            sx={{ height: 140 }}
            image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=600&h=-1&s=1"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Monkey Street
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>



        </Card>
      </div>


      <div>
        <Card sx={{ maxWidth: 345 }} className='res-name' >
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.bitesbee.com/wp-content/uploads/2021/09/Gol-Gappe.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Delicious
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>



        </Card>
      </div>
      <div>
        <Card sx={{ maxWidth: 345 }} className='res-name' >
          <CardMedia
            sx={{ height: 140 }}
            image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=600&h=-1&s=1"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Monkey Street
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>



        </Card>
      </div>
      <div>
        <Card sx={{ maxWidth: 345 }} className='res-name'>
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.bitesbee.com/wp-content/uploads/2021/09/Gol-Gappe.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shadab
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>



        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }} className='res-name' >
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.bitesbee.com/wp-content/uploads/2021/09/Gol-Gappe.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Novotel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>



        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }} className='res-name'>
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.bitesbee.com/wp-content/uploads/2021/09/Gol-Gappe.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Radisson
            </Typography>

          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>



        </Card>
      </div>


    </div>
  );
}