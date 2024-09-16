'use client'

import * as React from 'react'
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import {useState} from 'react'
import { useEffect } from 'react'
import Typography from '@mui/material/Typography'

interface ImageHolderProps {
    isRotating: boolean;
    width: number | string;
    height: number | string;
    imageList: string[];
    captionList: string[];
}

const ImageHolder: React.FC<ImageHolderProps> = ({
    width,
    height,
    imageList,
    isRotating,
    captionList,
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if(isRotating && imageList.length > 0) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => prevIndex === imageList.length - 1 ? 0 : prevIndex + 1);
            }, 5000);
            return () => clearInterval(interval); // when the component unmounts (stops rendering)
        }
    }, [isRotating, imageList]);


    return (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Box
                component="img"
                sx={{
                    height,
                    width,
                    maxHeight: height,
                    maxWidth: width,
                    objectFit: 'contain',
                    borderColor: 'white',
                    borderWidth: '1px'
                }}
                src={imageList[currentImageIndex]}
            />
            <Typography>{captionList[currentImageIndex]}</Typography>
        </Box>
    )
}

export default ImageHolder;