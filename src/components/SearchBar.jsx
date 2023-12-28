import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () => {
    const [formData, setFormData] = useState({ searchTerm: "" })
    const navigate = useNavigate()
    function handleChange(e) {
        setFormData(function (previous) {
            return {
                ...previous,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (formData.searchTerm) {
            navigate("/search/" + formData.searchTerm)
        }
        setFormData(function (previous) {
            return {
                ...previous,
                searchTerm: ""
            }
        })
    }
    return (
        <Paper
            component="form"
            onSubmit={(e) => {
                handleSubmit(e)
            }}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
                mr: { sm: 5 }
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                value={formData.searchTerm}
                name='searchTerm'
                onChange={(e) => {
                    handleChange(e)
                }}
            />
            <IconButton type='submit' sx={{ p: 2, color: "red" }}>
                <Search />
            </IconButton>



        </Paper>
    )
}

export default SearchBar