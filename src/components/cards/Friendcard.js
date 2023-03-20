import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default class Friendcard extends Component {
    render() {
        return (
            <div className="friend-card p-3 m-2">
                <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://th.bing.com/th/id/OIP.UdYomSLbUGPN1F8J4wHxRQHaEo?pid=ImgDet&rs=1"
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}
