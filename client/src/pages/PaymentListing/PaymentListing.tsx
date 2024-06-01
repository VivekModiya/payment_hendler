import {
    ChevronLeftRounded,
    CloseRounded,
    FilterAltOutlined,
    Search,
} from '@mui/icons-material';
import {
    Box,
    Button,
    Menu,
    MenuItem,
    MenuList,
    TextField,
    Typography,
} from '@mui/material';
import { List } from './List';
import { useState } from 'react';

export const PaymentListing = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [allSelected, setAllSelected] = useState(false);
    return (
        <Box
            height={'100%'}
            overflow={'hidden'}
            display={'flex'}
            flexDirection={'column'}
        >
            <Box
                width={'100%'}
                paddingX={4}
                paddingY={4}
                display={'flex'}
                alignItems={'center'}
                gap={3}
                flexShrink={0}
                boxSizing='border-box'
            >
                <Box
                    height={42}
                    width={42}
                    bgcolor='#F2F2F2'
                    borderRadius={'50%'}
                    display='flex'
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <ChevronLeftRounded fontSize='medium' />
                </Box>
                <Typography variant='h5' fontWeight={700}>
                    Previous Entries
                </Typography>
            </Box>
            <Box display={'flex'} paddingX={4} gap={2} alignItems={'center'}>
                <TextField
                    size='small'
                    fullWidth
                    placeholder='Search Name or Amount'
                    InputProps={{
                        startAdornment: <Search sx={{ color: '#999999 ' }} />,
                        endAdornment: (
                            <CloseRounded sx={{ color: '#999999 ' }} />
                        ),
                    }}
                />
                <Button
                    variant='outlined'
                    sx={{ px: 0 }}
                    //@ts-ignore
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                    <FilterAltOutlined />
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
                    <MenuItem
                        selected={!allSelected}
                        onClick={() => {
                            setAllSelected(false);
                            setAnchorEl(null);
                        }}
                    >
                        My entries
                    </MenuItem>
                    <MenuItem
                        selected={allSelected}
                        onClick={() => {
                            setAllSelected(true);
                            setAnchorEl(null);
                        }}
                    >
                        All
                    </MenuItem>
                </Menu>
            </Box>
            <Box
                width={'100%'}
                flexGrow={1}
                overflow={'auto'}
                paddingX={4}
                paddingY={4}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                boxSizing='border-box'
            >
                <List
                    data={[
                        {
                            name: 'vivek',
                            date: 23235235,
                            sumOfRupees: 2323,
                            id: 1,
                            userId: '1',
                        },
                        {
                            name: 'vivek',
                            date: 23235235,
                            sumOfRupees: 2323,
                            id: 1,
                            userId: '1',
                        },
                        {
                            name: 'vivek',
                            date: 23235235,
                            sumOfRupees: 2323,
                            id: 1,
                            userId: '1',
                        },
                        {
                            name: 'vivek',
                            date: 23235235,
                            sumOfRupees: 2323,
                            id: 1,
                            userId: '1',
                        },
                        {
                            name: 'vivek',
                            date: 23235235,
                            sumOfRupees: 2323,
                            id: 1,
                            userId: '1',
                        },
                        {
                            name: 'vivek',
                            date: 23235235,
                            sumOfRupees: 2323,
                            id: 1,
                            userId: '1',
                        },
                    ]}
                />
            </Box>
        </Box>
    );
};
