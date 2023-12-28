import React from 'react'
import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { SideBar, Videos } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"


const Feed = () => {
    const [videos, setVideos] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("new")

    useEffect(() => {
        fetchFromAPI("search?part=snippet&q=" + selectedCategory).then((data) => {
            setVideos(data.items)
        })
    }, [selectedCategory])

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography className='copyright'
                    variant='body2' sx={{ mt: 1.5, color: "#fff" }}>Copyright Gautam Jain 2023</Typography>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography variant='h4' mb={2} fontWeight="bold" sx={{ color: "white" }}>{selectedCategory} <span style={{ color: "#f31503" }}>Videos</span></Typography>
                <Videos
                    videos={videos}
                />
            </Box>
        </Stack>
    )
}

export default Feed