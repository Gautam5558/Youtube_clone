import React from 'react'
import { Stack, } from "@mui/material"
import { categories } from "../utils/constants"

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    const categoriesNew = categories.map((category) => {
        return (
            <button className='category-btn'
                onClick={() => {
                    setSelectedCategory(category.name)
                }}
                key={category.name}
                style={{ backgroundColor: selectedCategory === category.name && "#fc1503", color: "white" }}
            >
                <span style={{ color: selectedCategory === category.name ? "white" : "red", marginRight: 15 }}>{category.icon}</span>
                <span style={{ opacity: selectedCategory === category.anme ? 1 : 0.8 }}>{category.name}</span>
            </button>
        )
    })

    return (
        <Stack direction="row" sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }} >
            {categoriesNew}
        </Stack>
    )
}

export default SideBar