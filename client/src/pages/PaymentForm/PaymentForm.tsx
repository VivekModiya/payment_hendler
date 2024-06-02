import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';
import { toPng, toJpeg } from 'html-to-image';

import { ChevronLeftRounded, MailOutlineRounded } from '@mui/icons-material';
import { useRef } from 'react';

export const PaymentForm = () => {
    const elementRef = useRef<HTMLElement>(null);

    const htmlToImageConvert = () => {
        if (elementRef.current)
            toJpeg(elementRef.current, { cacheBust: false })
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = 'my-image-name.png';
                    link.href = dataUrl;
                    link.click();
                })
                .catch((err) => {
                    console.log(err);
                });
    };

    return (
        <Box
            height={'100%'}
            overflow={'hidden'}
            display={'flex'}
            flexDirection={'column'}
            ref={elementRef}
            bgcolor={'#ffffff'}
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
                    onClick={htmlToImageConvert}
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
