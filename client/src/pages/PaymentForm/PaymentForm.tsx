import {
    Alert,
    Box,
    Button,
    CircularProgress,
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
import { addPaymentDetails } from '../../api/addPaymentDetails';

import { ChevronLeftRounded } from '@mui/icons-material';

import dayjs from 'dayjs';
import { useContext, useMemo, useRef, useState } from 'react';
import { GlobalContext } from '../../app/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { Template, downloadReceipt } from './RecieptTemplate';

export const PaymentForm = () => {
    const { user } = useContext(GlobalContext);

    const [errors, setErrors] = useState({
        date: '',
        receiveFrom: 'Required field',
        pan: 'Required field',
        address: 'Required field',
        sumOfRupees: 'Required field',
        transferNo: 'Required field',
        drawnOn: 'Required field',
    });
    const [values, setValues] = useState({
        date: new Date().getTime(),
        receiveFrom: '',
        pan: '',
        address: '',
        userId: user.userId,
        sumOfRupees: '',
        transferNo: '',
        drawnOn: '',
    });

    const [isTouched, setTouched] = useState(false);

    const [isSubmitting, setSubmitting] = useState(false);

    const [dialog, setDialog] = useState<boolean>(false);

    const navigate = useNavigate();

    const isAnyError = useMemo(
        () =>
            Object.keys(errors).some((key) => {
                return Boolean(errors[key as keyof typeof errors]);
            }),
        [errors]
    );

    const [snackbar, setSnackbar] = useState<string | boolean>(false);

    const handleSubmit = async () => {
        setSubmitting(true);
        const res = await addPaymentDetails(values);

        if (res.success === true && res.data) {
            setValues(res.data);
            setDialog(true);
            setSnackbar('success');
        } else {
            setSnackbar('error');
        }
        setSubmitting(false);
    };

    const templateRef = useRef(null);

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
                    <IconButton
                        onClick={() => {
                            navigate('/navigator');
                        }}
                    >
                        <ChevronLeftRounded fontSize='medium' />
                    </IconButton>
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                        label='Date'
                        sx={{ width: '100%' }}
                        value={dayjs(values.date)}
                        slotProps={{
                            textField: {
                                error: isTouched && Boolean(errors.date),
                                helperText: isTouched ? errors.date : '',
                            },
                        }}
                        onAccept={(e) => {
                            const today = new Date(
                                new Date().toDateString()
                            ).getTime();
                            const epoch =
                                e?.toDate().getTime() ?? new Date().getTime();
                            setValues((prev) => ({ ...prev, date: epoch }));
                            if (today > epoch) {
                                setErrors((prev) => ({
                                    ...prev,
                                    date: "Can't selecte previous date",
                                }));
                            } else {
                                setErrors((prev) => ({
                                    ...prev,
                                    date: '',
                                }));
                            }
                        }}
                    />
                </LocalizationProvider>
                <TextField
                    fullWidth
                    label='Received From'
                    value={values.receiveFrom}
                    error={isTouched && Boolean(errors.receiveFrom)}
                    helperText={isTouched ? errors.receiveFrom : ''}
                    onChange={(e) => {
                        const val = e.target.value;
                        setValues((prev) => ({
                            ...prev,
                            receiveFrom: val,
                        }));
                        if (val === '') {
                            setErrors((prev) => ({
                                ...prev,
                                receiveFrom: 'Required field',
                            }));
                        } else {
                            setErrors((prev) => ({
                                ...prev,
                                receiveFrom: '',
                            }));
                        }
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label='PAN Number'
                    value={values.pan}
                    error={isTouched && Boolean(errors.pan)}
                    helperText={isTouched ? errors.pan : ''}
                    onChange={(e) => {
                        const val = e.target.value.trim().toUpperCase();
                        setValues((prev) => ({
                            ...prev,
                            pan: val,
                        }));
                        const alphanumericRegex = /^[A-Z0-9]+$/;
                        if (val === '') {
                            setErrors((prev) => ({
                                ...prev,
                                pan: 'Required field',
                            }));
                        } else if (!alphanumericRegex.test(val)) {
                            setErrors((prev) => ({
                                ...prev,
                                pan: 'Only Alphanumerics allowed',
                            }));
                        } else if (val.length !== 10) {
                            setErrors((prev) => ({
                                ...prev,
                                pan: 'Must have 10 charecter only',
                            }));
                        } else {
                            setErrors((prev) => ({
                                ...prev,
                                pan: '',
                            }));
                        }
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label='Address'
                    value={values.address}
                    error={isTouched && Boolean(errors.address)}
                    helperText={isTouched ? errors.address : ''}
                    onChange={(e) => {
                        const val = e.target.value;
                        setValues((prev) => ({
                            ...prev,
                            address: val,
                        }));

                        if (val === '') {
                            setErrors((prev) => ({
                                ...prev,
                                address: 'Required field',
                            }));
                        } else {
                            setErrors((prev) => ({
                                ...prev,
                                address: '',
                            }));
                        }
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label='Sum of Rupees ( In Number )'
                    type='number'
                    value={values.sumOfRupees}
                    error={isTouched && Boolean(errors.sumOfRupees)}
                    onChange={(e) => {
                        const val = e.target.value;
                        setValues((prev) => ({
                            ...prev,
                            sumOfRupees: val,
                        }));

                        if (Number(val) <= 0) {
                            setErrors((prev) => ({
                                ...prev,
                                sumOfRupees: 'Required field',
                            }));
                        } else {
                            setErrors((prev) => ({
                                ...prev,
                                sumOfRupees: '',
                            }));
                        }
                    }}
                    helperText={isTouched ? errors.sumOfRupees : ''}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label='Cash/ Cheque/ Transfer No.'
                    value={values.transferNo}
                    error={isTouched && Boolean(errors.transferNo)}
                    helperText={isTouched ? errors.transferNo : ''}
                    onChange={(e) => {
                        const val = e.target.value;
                        setValues((prev) => ({
                            ...prev,
                            transferNo: val,
                        }));

                        if (val === '') {
                            setErrors((prev) => ({
                                ...prev,
                                transferNo: 'Required field',
                            }));
                        } else {
                            setErrors((prev) => ({
                                ...prev,
                                transferNo: '',
                            }));
                        }
                    }}
                    InputLabelProps={{ sx: { color: '#999999' } }}
                    sx={{ borderBottomColor: '#E6E6E6', marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    label='Drawn On'
                    value={values.drawnOn}
                    error={isTouched && Boolean(errors.drawnOn)}
                    helperText={isTouched ? errors.drawnOn : ''}
                    onChange={(e) => {
                        const val = e.target.value;
                        setValues((prev) => ({
                            ...prev,
                            drawnOn: val,
                        }));

                        if (val === '') {
                            setErrors((prev) => ({
                                ...prev,
                                drawnOn: 'Required field',
                            }));
                        } else {
                            setErrors((prev) => ({
                                ...prev,
                                drawnOn: '',
                            }));
                        }
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
                    disabled={isTouched && isAnyError}
                    onClick={() => {
                        if (isAnyError) {
                            setTouched(true);
                        } else {
                            handleSubmit();
                        }
                    }}
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
                    {isSubmitting ? <CircularProgress /> : 'Save and Share'}
                </Button>
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
                            Payment details added successfully !!
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
                        {/* @ts-ignore */}
                        <Template {...values} ref={templateRef} />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                setDialog(false);
                                navigate('/payment-details/list');
                            }}
                        >
                            Skip
                        </Button>
                        <Button
                            onClick={() => {
                                downloadReceipt(
                                    templateRef,
                                    //@ts-ignore
                                    values.paymentDetailId.toString()
                                );
                                setTimeout(() => {
                                    setDialog(false);
                                    navigate('/payment-details/list');
                                }, 0);
                            }}
                            variant='contained'
                        >
                            Download
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
};
