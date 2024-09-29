import Box from '@mui/material/Box'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'

interface SidebarProps {
    isOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyledSidebar = styled(Box)(({
    position: 'fixed',
    left: 0,
    width: '15vw',
    height: "100%",
    backgroundColor: 'black',
    borderRight: 'solid',
    borderColor: '#18ad55'
}));

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setSidebarOpen }) => {
    return (
        <Drawer open={isOpen} onClose={() => setSidebarOpen(false)}>
            <StyledSidebar>
                <Box width="100%">
                    <Typography color="#18ad55" display="flex" justifyContent="center" fontFamily="monospace" mt={1}>
                        Table of Contents
                    </Typography>
                </Box>
            </StyledSidebar>
        </Drawer>
    )
}

export default Sidebar;