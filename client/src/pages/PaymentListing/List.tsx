import { ArrowForwardRounded } from '@mui/icons-material';
import { Box, MenuItem, MenuList, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GetPaymentListResponse } from '../../api/getPaymentList';

export interface ListProps {
    data: GetPaymentListResponse['data'];
}

export const List = (props: ListProps) => {
    const { data = [] } = props;

    const navigate = useNavigate();
    return (
        <MenuList sx={{ width: '100%' }}>
            {data?.map?.((obj, i) => {
                const ruppe = new Intl.NumberFormat().format(
                    Number(obj.sumOfRupees)
                );
                return (
                    <MenuItem
                        sx={{ width: '100%', p: 0 }}
                        key={i}
                        onClick={() =>
                            navigate(`/payment-details/${obj.paymentDetailId}`)
                        }
                    >
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            borderTop={i === 0 ? 1 : 0}
                            borderBottom={1}
                            width={'100%'}
                            paddingY={1}
                            borderColor={'#E6E6E6'}
                            px={1}
                        >
                            <Box gap={1} maxWidth={250}>
                                <Typography
                                    fontSize={18}
                                    sx={{ maxWidth: '100%' }}
                                    noWrap={true}
                                >
                                    {obj.receiveFrom}
                                </Typography>
                                <Typography variant='body2' color='#A2A2A7'>
                                    {new Date(obj.date).toLocaleDateString()}
                                </Typography>
                            </Box>
                            <Box
                                display='flex'
                                alignItems={'center'}
                                flexShrink={0}
                            >
                                <Typography
                                    variant='h6'
                                    marginRight={2}
                                    fontSize={18}
                                    maxWidth={150}
                                    noWrap={true}
                                >
                                    ₹ {ruppe}
                                </Typography>
                                <ArrowForwardRounded
                                    sx={{ color: '#A2A2A7' }}
                                />
                            </Box>
                        </Box>
                    </MenuItem>
                );
            })}
        </MenuList>
    );
};
