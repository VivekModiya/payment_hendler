import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    TextField,
} from '@mui/material';
import { login } from '../../api/login';
import { LoginIllustration } from './Illustration';
//@ts-ignore
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { GlobalContext } from '../../app/ContextProvider';

export const Login = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    if (pathname !== '/login') {
        navigate('/login');
    }

    const [visibility, setVisibility] = useState(false);
    const [code, setCode] = useState('');
    const [isSubmitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const { setUser } = useContext(GlobalContext);

    const handleSubmit = async () => {
        setSubmitting(true);
        const res = await login(code);
        console.log({ res });
        if (res.success === true && res?.data?.role && res?.data?.userId) {
            setUser({ role: res.data.role, userId: res.data.userId });
            navigate('/navigator');
        } else {
            setError('Some error accured !!');
        }
        setSubmitting(false);
    };

    return (
        <Box>
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
                boxSizing='border-box'
                textAlign='center'
                gap={4}
            >
                <TextField
                    fullWidth
                    size='medium'
                    label='Security code'
                    placeholder='Enter you security code'
                    sx={{ fontSize: 24 }}
                    type={visibility ? 'text' : 'password'}
                    value={code}
                    onChange={(e) => setCode(e.target.value.trim())}
                    error={Boolean(error)}
                    helperText={error}
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                onClick={() => setVisibility((prev) => !prev)}
                            >
                                {!visibility ? (
                                    <VisibilityOutlined
                                        sx={{ color: '#999999' }}
                                    />
                                ) : (
                                    <VisibilityOffOutlined
                                        sx={{ color: '#999999' }}
                                    />
                                )}
                            </IconButton>
                        ),
                    }}
                ></TextField>
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
                    disabled={isSubmitting || code.trim().length === 0}
                    onClick={handleSubmit}
                >
                    {isSubmitting ? <CircularProgress /> : 'Submit'}
                </Button>
            </Box>
        </Box>
    );
};
