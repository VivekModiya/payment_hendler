import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
    MenuItem,
} from '@mui/material';
import Menu from '@mui/material/Menu';
import {
    ChevronLeft,
    ChevronRightRounded,
    MailOutlineRounded,
} from '@mui/icons-material';
import React from 'react';

export const PaymentForm = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEll, setAnchorEll] = React.useState<null | HTMLElement>(null);
    const openn = Boolean(anchorEll);
    const handleClickk = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEll(event.currentTarget);
    };
    const handleClosee = () => {
        setTimeout(() => {
            setAnchorEll(null);
        }, 200);
    };

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
                    <ChevronLeft fontSize='medium' />
                </Box>
                <Typography variant='h5' fontWeight={700}>
                    Fill the Form
                </Typography>
            </Box>
            <Box
                width={'100%'}
                flexGrow={1}
                overflow={'auto'}
                paddingX={4}
                paddingY={4}
                display={'flex'}
                alignItems={'center'}
                gap={3}
                flexDirection={'column'}
                boxSizing='border-box'
            >
                <Button
                    id='basic-button'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Dashboard
                </Button>
                <Menu
                    id='basic-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClickk}>Click</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
                <Menu
                    anchorEl={anchorEll}
                    open={openn}
                    onClose={handleClosee}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                    <MenuItem>
                        <Button
                            startIcon={<ChevronRightRounded />}
                            variant='text'
                        >
                            Click
                        </Button>
                    </MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
                <TextField
                    variant='standard'
                    fullWidth
                    label='Date'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <MailOutlineRounded sx={{ color: '#cccccc' }} />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    variant='standard'
                    fullWidth
                    label='Received From'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <MailOutlineRounded sx={{ color: '#cccccc' }} />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    variant='standard'
                    fullWidth
                    label='PAN Number'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <MailOutlineRounded sx={{ color: '#cccccc' }} />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    variant='standard'
                    fullWidth
                    label='Address'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <MailOutlineRounded sx={{ color: '#cccccc' }} />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    variant='standard'
                    fullWidth
                    label='Sum of Rupees ( In Number )'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <MailOutlineRounded sx={{ color: '#cccccc' }} />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    variant='standard'
                    fullWidth
                    label='Cash/ Cheque/ Transfer No.'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <MailOutlineRounded sx={{ color: '#cccccc' }} />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    variant='standard'
                    fullWidth
                    label='Drawn On'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <MailOutlineRounded sx={{ color: '#cccccc' }} />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
            </Box>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-around'}
                px={4}
                py={4}
            >
                <Button
                    variant='contained'
                    size='large'
                    autoCapitalize='off'
                    sx={{
                        borderRadius: 4,
                        py: 2,
                        px: 4,
                        fontSize: 16,
                        fontWeight: 700,
                        bgcolor: '#346EEC',
                        flexGrow: 1,
                    }}
                >
                    Save and Share
                </Button>
            </Box>
        </Box>
    );
};
