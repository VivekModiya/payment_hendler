import {
    Alert,
    Box,
    Button,
    Chip,
    CircularProgress,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material';

import { creteUser, CreateUserParams } from '../../api/createUser.ts';

import {
    ChevronLeftRounded,
    ContentCopyOutlined,
    CopyAll,
} from '@mui/icons-material';

import { useContext, useState } from 'react';
import { GlobalContext } from '../../app/ContextProvider';
import { useNavigate } from 'react-router-dom';

export const CreateUser = () => {
    const { user } = useContext(GlobalContext);

    const [values, setValues] = useState<CreateUserParams>({
        name: '',
        role: 'endUser',
        parentUserId: user.userId,
    });
    const [snackbar, setSnackbar] = useState<string | boolean>(false);
    const [isSubmitting, setSubmitting] = useState(false);

    const [userId, setUserId] = useState('');

    const handleSubmit = async () => {
        setSubmitting(true);
        const res = await creteUser(values);
        if (res.success === true && res?.data?.userId) {
            setUserId(res?.data?.userId);
            setSnackbar('success');
        } else {
            setSnackbar('error');
        }
        setSubmitting(false);
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await getPaymentDetails(Number(paymentId));
    //         if (res.success === true && res.data) {
    //             setValues(res.data);
    //         } else {
    //             setSnackbar('error');
    //         }
    //     };
    //     fetchData();
    // }, []);

    const navigate = useNavigate();

    return (
        <Box
            height={'100%'}
            overflow={'hidden'}
            display={'flex'}
            flexDirection={'column'}
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
                    <IconButton onClick={() => navigate('/navigator')}>
                        <ChevronLeftRounded fontSize='medium' />
                    </IconButton>
                </Box>
                <Typography variant='h5' fontWeight={700}>
                    Create User
                </Typography>
            </Box>
            <Box
                width={'100%'}
                flexGrow={1}
                overflow={'auto'}
                paddingX={4}
                paddingY={16}
                display={'flex'}
                alignItems={'center'}
                gap={3}
                flexDirection={'column'}
                boxSizing='border-box'
            >
                <TextField
                    fullWidth
                    label='Dummy Name'
                    value={values.name}
                    placeholder='Enter dummy name'
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    onChange={(e) =>
                        setValues((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                        User Role
                    </InputLabel>
                    <Select
                        value={values.role}
                        label='User Role'
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        placeholder='Select user role'
                        aria-label='Asdfdas'
                        onChange={(e) =>
                            // @ts-ignore
                            setValues((prev) => ({
                                ...prev,
                                role: e.target.value,
                            }))
                        }
                        sx={{ width: '100%' }}
                    >
                        {user.role === 'admin' && (
                            <MenuItem value={'client'}>Client</MenuItem>
                        )}
                        <MenuItem value={'endUser'}>End user</MenuItem>
                    </Select>
                </FormControl>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                    width={'100%'}
                    marginTop={8}
                >
                    <Button
                        variant='contained'
                        size='large'
                        autoCapitalize='off'
                        disabled={!values.name || !values.role || isSubmitting}
                        onClick={handleSubmit}
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
                        {isSubmitting ? <CircularProgress /> : 'Create'}
                    </Button>
                </Box>
            </Box>

            {snackbar === 'success' && (
                <Snackbar
                    open={Boolean(snackbar)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                    <Alert
                        variant='outlined'
                        sx={{
                            width: 400,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        onClose={() => setSnackbar(false)}
                    >
                        User created successfully
                        {
                            <Chip
                                label={
                                    <>
                                        {userId}
                                        <IconButton
                                            size='small'
                                            sx={{ padding: 0, marginLeft: 1 }}
                                            onClick={() => {
                                                navigator.clipboard.writeText(
                                                    userId
                                                );
                                                setTimeout(() => {
                                                    setSnackbar(false);
                                                }, 500);
                                            }}
                                        >
                                            <ContentCopyOutlined fontSize='small' />
                                        </IconButton>
                                    </>
                                }
                                sx={{ ml: 1 }}
                            ></Chip>
                        }
                    </Alert>
                </Snackbar>
            )}
            {snackbar === 'error' && (
                <Snackbar
                    open={Boolean(snackbar)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert
                        variant='filled'
                        severity='error'
                        sx={{ width: 400 }}
                        onClose={() => setSnackbar(false)}
                    >
                        There accured some error please try again !!
                    </Alert>
                </Snackbar>
            )}
        </Box>
    );
};
