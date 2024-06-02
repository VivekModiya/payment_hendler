import {
    Alert,
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
    getPaymentDetails,
    GetPaymentDetailsResponse,
} from '../../api/getPaymentDetails';

import { ChevronLeftRounded } from '@mui/icons-material';

import dayjs from 'dayjs';
import { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../../app/ContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { Template, downloadReceipt } from '../PaymentForm';

export const PaymentDetails = () => {
    const { user } = useContext(GlobalContext);

    const { pathname } = useLocation();

    const paymentId = Number(
        pathname.split('payment-details')[1].split('/')[1]
    );

    const [values, setValues] = useState<GetPaymentDetailsResponse['data']>({
        date: new Date().getTime(),
        receiveFrom: '',
        pan: '',
        address: '',
        userId: user.userId,
        sumOfRupees: '',
        transferNo: '',
        paymentDetailId: paymentId,
        drawnOn: '',
    });

    const [snackbar, setSnackbar] = useState<string | boolean>(false);
    const [dialog, setDialog] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPaymentDetails(Number(paymentId));
            if (res.success === true && res.data) {
                setValues(res.data);
            } else {
                setSnackbar('error');
            }
        };
        fetchData();
    }, []);

    const templateRef = useRef(null);

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
                    <IconButton onClick={() => navigate('/payment-details/list')}>
                        <ChevronLeftRounded fontSize='medium' />
                    </IconButton>
                </Box>
                <Typography variant='h5' fontWeight={700}>
                    Fill the Form{' '}
                    <Chip
                        label={paymentId}
                        color='primary'
                        variant='outlined'
                        sx={{ marginLeft: 0.5 }}
                    ></Chip>
                </Typography>

                <Chip label={`User Id : ${values.userId}`}></Chip>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                        label='Date'
                        sx={{ width: '100%' }}
                        value={dayjs(values?.date)}
                        readOnly
                        slotProps={{
                            textField: {},
                        }}
                    />
                </LocalizationProvider>
                <TextField
                    fullWidth
                    label='Received From'
                    value={values?.receiveFrom}
                    InputProps={{ readOnly: true }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label='PAN Number'
                    value={values?.pan}
                    InputProps={{ readOnly: true }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label='Address'
                    value={values?.address}
                    InputProps={{ readOnly: true }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label='Sum of Rupees ( In Number )'
                    type='number'
                    value={values?.sumOfRupees}
                    InputProps={{ readOnly: true }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label='Cash/ Cheque/ Transfer No.'
                    value={values?.transferNo}
                    InputProps={{ readOnly: true }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label='Drawn On'
                    value={values?.drawnOn}
                    InputProps={{ readOnly: true }}
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
                    onClick={() => setDialog(true)}
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
                    Download Receipt
                </Button>
            </Box>
            <Snackbar
                open={Boolean(snackbar)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={2000}
                message='Details added successfuly'
            >
                {snackbar === 'success' ? (
                    <Alert
                        variant='filled'
                        sx={{ width: 400 }}
                        onClose={() => setSnackbar(false)}
                    >
                        Action completed !!
                    </Alert>
                ) : (
                    <Alert
                        variant='filled'
                        severity='error'
                        sx={{ width: 400 }}
                        onClose={() => setSnackbar(false)}
                    >
                        There accured some error please try again !!
                    </Alert>
                )}
            </Snackbar>
            <Dialog open={dialog} maxWidth='xs' fullWidth>
                <DialogContent>
                    <Template {...values} ref={templateRef} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialog(false)}>Cancel</Button>
                    <Button
                        onClick={() => {
                            downloadReceipt(
                                templateRef,
                                values.paymentDetailId.toString()
                            );
                            setDialog(false);
                        }}
                        variant='contained'
                    >
                        Download
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
