import React from 'react'
import { Link } from 'react-router-dom'
import { CardMedia, CardContent, Box, Typography } from '@mui/material'
import { CenterFocusStrong, CheckCircle } from '@mui/icons-material'
import { demoProfilePicture, demoChannelUrl, demoChannelTitle } from "../utils/constants"
const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "356px", md: "320px" },
                height: "326px",
                margin: "auto",
                marginTop: marginTop
            }}
        >
            <Link to={channelDetail?.id?.channelId ? "/channel/" + channelDetail?.id?.channelId : demoChannelUrl}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", textAlign: "center", color: "#fff" }}>
                    <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url ? channelDetail.snippet.thumbnails.high.url : demoProfilePicture} alt={channelDetail?.snippet?.title ? channelDetail?.snippet?.title : demoChannelTitle}
                        sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
                    />
                    <Typography variant='h6'>{channelDetail?.snippet?.title ? channelDetail?.snippet?.title : demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: "5px" }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount &&
                        <Typography>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}</Typography>
                    }
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard