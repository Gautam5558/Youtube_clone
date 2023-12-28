import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Stack, Box, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ReactPlayer from "react-player"
import { Videos } from "./"

const VideoDetail = () => {

    const { id } = useParams();
    const [videoDetails, setVideoDetails] = useState(null)
    const [videos, setvideos] = useState([])
    useEffect(() => {
        fetchFromAPI("videos?part=snipopet&id=" + id).then((data) => {
            setVideoDetails(data.items[0])
        })
        fetchFromAPI("search?part=snipopet&relatedToVideoId=" + id).then((data) => {
            setvideos(data.items)
        })

    }, [id])


    if (!videoDetails?.snippet) return "Loading..."

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails
    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                        <ReactPlayer url={"https://www.youtube.com/watch?v=" + id}
                            className="react-player" controls
                        ></ReactPlayer>
                        <Typography variant='h5' color="#fff" p={2} fontWeight="bold">{title}</Typography>
                        <Stack direction="row" justifyContent="space-between" color="#fff" px={2} py={1}>
                            <Link to={"/channel/" + channelId}>
                                <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">{channelTitle}
                                    <CheckCircle fontSize='12px' color='gray' ml="5px" />
                                </Typography>
                            </Link>
                            <Stack direction="row" alignItems="center" gap="20px">
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>{parseInt(viewCount).toLocaleString()} views</Typography>
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>{parseInt(likeCount).toLocaleString()} likes</Typography>
                            </Stack>
                        </Stack>
                    </Box>

                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }}>
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>

        </Box>
    )
}

export default VideoDetail
