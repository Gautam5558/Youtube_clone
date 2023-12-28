import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle } from "../utils/constants"

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card sx={{ width: { xs: "100%", sm: "320px", md: "358px" }, borderRadius: 0, boxShadow: "none" }}>
            <Link to={videoId ? "/videos/" + videoId : demoVideoUrl}>
                <CardMedia image={snippet.thumbnails.high.url ? snippet.thumbnails.high.url : demoThumbnailUrl} sx={{ width: { xs: "100%", sm: "320px", md: "358px" }, height: "180px" }} alt={snippet.title ? snippet.title : demoVideoTitle} />
            </Link>
            <CardContent sx={{ backgroundColor: "#1e1e1e", height: 106 }}>
                <Link to={videoId ? "/videos/" + videoId : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#fff">{snippet.title ? snippet.title.slice(0, 60) : demoVideoTitle.slice(0, 60)}</Typography>
                </Link>
                <Link to={snippet.channelId ? "/channel/" + snippet.channelId : demoChannelUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#fff">{snippet.channelTitle ? snippet.channelTitle : demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard