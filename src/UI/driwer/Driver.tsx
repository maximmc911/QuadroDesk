import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Icons from '../icons/Icons';
import ThemeToggle from '../../utils/theme/ThemeToggle';

/* import InboxIcon from '@mui/icons-material/MoveToInbox'; */
/* import MailIcon from '@mui/icons-material/Mail'; */

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 350, backgroundColor: 'var(--color-raised-surface)', height: '100vh'

         }} role="presentation" onClick={toggleDrawer(false)} >

            <List>
                <h1 className='text-2xl text-secondary-text font-medium text-center italic'>Настройки:</h1>
                
                    <ListItem disablePadding>
                        <ListItemButton>
                            <div className="flex items-center gap-2"> 
< ThemeToggle />
<p className='text-lg'>Сменить цветовую схему</p>
                            </div>
                            {/* <ListItemText primary={text}  /> */}
                        </ListItemButton>
                    </ListItem>
             
            </List>
            {/* <Divider /> */}
        </Box>

    );

    return (
        <div>
            <div className="animate-[spin_20s_linear_infinite] ">
                <Button onClick={toggleDrawer(true)}>

                    <Icons name='settings' />

                </Button>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor='right' className='bg-color-overlay-darkening'>
                {DrawerList}
            </Drawer>
        </div>
    );
}
