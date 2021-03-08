import React from 'react'

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

import type { Perfume } from '@src/constants/perfumes'
import useStyles from './useStyles'

const PerfumeCard: React.FC<{ perfume: Perfume }> = ({ perfume }) => {
    const classes = useStyles();

    const handleClickImage = () => { window.open(perfume.img_url, "_blank") }

    return (
        <Card className={ classes.root }>
            <CardActionArea onClick={ handleClickImage }>
                <CardMedia
                    className={ classes.media }
                    image={ perfume.img_url }
                    title={ perfume.title }
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                    { perfume.source }
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                    { perfume.title }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    { perfume._id }
                </Typography>
            </CardContent>
        </Card>)
}

export default PerfumeCard