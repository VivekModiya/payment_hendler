import { Box, Button, Typography } from '@mui/material';
import { Illustration } from './Illustration';
//@ts-ignore
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../app/ContextProvider';

export const Navigator = () => {
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
    };

    const { user } = useContext(GlobalContext);
    return (
        <Box paddingTop={8}>
            <Box
                width='100%'
                display='flex'
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'start'}
                marginBottom={8}
                className={styles.illustrationContainer}
            >
                <Illustration />
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
                className={styles.illustrationContainer}
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
                gap={2}
                className={styles.illustrationContainer}
            >
                {(user.role === 'client' || user.role === 'admin') && (
                    <Button
                        variant='outlined'
                        size='large'
                        fullWidth
                        color='primary'
                        sx={{
                            py: 1.5,
                            borderRadius: 4,
                            fontSize: 20,
                            fontWeight: 700,
                        }}
                        onClick={() => handleClick('/create-user')}
                    >
                        Create User
                    </Button>
                )}
                <Button
                    variant='outlined'
                    size='large'
                    fullWidth
                    color='primary'
                    sx={{
                        py: 1.5,
                        borderRadius: 4,
                        fontSize: 20,
                        fontWeight: 700,
                    }}
                    onClick={() => handleClick('/payment-details/list')}
                >
                    View Previous Entries
                </Button>
                <Button
                    variant='contained'
                    size='large'
                    fullWidth
                    color='primary'
                    sx={{
                        py: 1.5,
                        borderRadius: 4,
                        fontSize: 20,
                        fontWeight: 700,
                        // bgcolor: '#346EEC',
                    }}
                    onClick={() => handleClick('/payment-details/add')}
                >
                    Go to Form
                </Button>
            </Box>
        </Box>
    );
};
