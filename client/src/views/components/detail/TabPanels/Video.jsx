import { getVideoUrl } from '../../../../utils/youtubeVideo';

import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root: {
        padding: 24
    },
    pos: {
        marginTop: 12,
    },
    video: {
        width: 440,
        height: 275
    },
    link:{
        padding: 4,
        justifyContent: 'center',
    }
});

export default function Video(props){

    const classes = useStyles();
    const { word, videos } = props;
    console.log(videos)
    return (
        <div className={classes.root}>
            <iframe className={classes.video}
                src={getVideoUrl(videos[0].link)} title={word}>
            </iframe>
            <Typography variant="subtitle1" component="p">
                Source: 
                <Link href='https://greverbalcourse.com/p/gre-vocab-cartoons' className={classes.link} color='secondary'>
                    GregMat / {videos[0].name}
                </Link>
            </Typography>
            
        </div>
    )
}
