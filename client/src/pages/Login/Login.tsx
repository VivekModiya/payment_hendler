import { Box, Button, Typography } from '@mui/material';
import { LoginIllustration } from './Illustration';
//@ts-ignore
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
    };

    return (
        <Box paddingTop={8}>
            <Box
                width='100%'
                display='flex'
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'start'}
                marginBottom={8}
            >
                <LoginIllustration />
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'start'}
                paddingX={8}
                marginBottom={8}
                boxSizing='border-box'
                textAlign='center'
            >
                <Typography
                    variant='h4'
                    fontWeight={700}
                    lineHeight={1.4}
                    marginBottom={2}
                >
                    Payment handling made easy!
                </Typography>
                <Typography variant='h6' color='#666666'>
                    Handle your payments at one place. Create and share files.
                </Typography>
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'start'}
                paddingX={8}
                boxSizing='border-box'
                textAlign='center'
                gap={4}
            >
                <Button
                    variant='contained'
                    size='large'
                    fullWidth
                    sx={{
                        py: 2,
                        borderRadius: 4,
                        fontSize: 20,
                        fontWeight: 700,
                        bgcolor: '#666666',
                    }}
                    onClick={() => handleClick('/payment-details/list')}
                >
                    View Previous Entries
                </Button>
                <Button
                    variant='contained'
                    size='large'
                    fullWidth
                    sx={{
                        py: 2,
                        borderRadius: 4,
                        fontSize: 20,
                        fontWeight: 700,
                        bgcolor: '#346EEC',
                    }}
                    onClick={() => handleClick('/payment-details/add')}
                >
                    Go to Form
                </Button>
            </Box>
        </Box>
    );
};
