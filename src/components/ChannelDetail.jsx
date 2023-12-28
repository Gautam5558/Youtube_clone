import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ChannelCard, Videos } from "./"
import { Box } from '@mui/material'
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { DisplaySettings } from '@mui/icons-material'


const ChannelDetail = () => {
    const { id } = useParams()
    const [videos, setVideos] = useState([])
    const [channelDetail, setChannelDetail] = useState(null)
    useEffect(() => {
        fetchFromAPI("channels?part=snippet&id=" + id).then((data) => {
            setChannelDetail(data?.items[0])
        })
        fetchFromAPI("search?part=snippet&order=date&channelId=" + id).then((data) => {
            setVideos(data?.items)
        })

    }, [id])

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    background: " linear-gradient(90deg, rgba(0,238,247,1) 0% , rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)"
                    , height: "300px", zIndex: 10
                }}></div>
                <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
            </Box>
            <Box sx={{ display: 'flex', p: 2 }} >
                <Box sx={{ mr: { sm: "100px" } }} />
                <Videos videos={videos} />
            </Box>
        </Box >
    )
}

export default ChannelDetail