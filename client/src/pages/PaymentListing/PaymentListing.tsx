import {
    ChevronLeftRounded,
    CloseRounded,
    FilterAltOutlined,
    Search,
} from '@mui/icons-material';
import {
    Box,
    IconButton,
    Menu,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import {
    getPaymentList,
    GetPaymentListResponse,
} from '../../api/getPaymentList';
import { List } from './List';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../app/ContextProvider';
import { useNavigate } from 'react-router-dom';

export const PaymentListing = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { user } = useContext(GlobalContext);

    const [values, setValues] = useState({
        searchField: '',
        userId: user.userId,
        allSelected: 0 as 0 | 1,
    });

    const [listData, setListData] = useState<GetPaymentListResponse['data']>(
        []
    );

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPaymentList(values);
            setListData(res?.data ?? []);
        };
        fetchData();
    }, [values.allSelected, values.searchField]);

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
                    <IconButton onClick={() => navigate('/navigator')}>
                        <ChevronLeftRounded fontSize='medium' />
                    </IconButton>
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
                    value={values.searchField}
                    onChange={(e) =>
                        setValues((prev) => ({
                            ...prev,
                            searchField: e.target.value.trim(),
                        }))
                    }
                    InputProps={{
                        startAdornment: <Search sx={{ color: '#999999 ' }} />,
                        endAdornment: (
                            <CloseRounded sx={{ color: '#999999 ' }} />
                        ),
                    }}
                />
                <IconButton
                    //@ts-ignore
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    sx={{ bgcolor: 'primary' }}
                >
                    <FilterAltOutlined />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    elevation={1}
                    variant='menu'
                >
                    <MenuItem
                        selected={!Boolean(values.allSelected)}
                        onClick={() => {
                            setValues((prev) => ({ ...prev, allSelected: 0 }));
                            setAnchorEl(null);
                        }}
                    >
                        My entries
                    </MenuItem>
                    <MenuItem
                        selected={Boolean(values.allSelected)}
                        onClick={() => {
                            setValues((prev) => ({ ...prev, allSelected: 1 }));
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
                <List data={listData} />
            </Box>
        </Box>
    );
};
