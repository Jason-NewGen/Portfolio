import * as React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const Chip = styled(Box)(({
    display: 'flex',
    justifyContent: 'center',
    borderRadius: "12px",
    borderWidth: '1px',
    borderColor: "#18ad55",
    color: 'white',
    height: '10%',
    padding: '0 12px',
}))

export default Chip;