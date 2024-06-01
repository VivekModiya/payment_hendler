import { ArrowForwardRounded } from '@mui/icons-material';
import { Box, MenuItem, MenuList, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface ListProps {
    data: {
        name: string;
        id: number;
        date: number;
        sumOfRupees: number;
        userId: string;
    }[];
}

export const List = (props: ListProps) => {
    const { data } = props;

    const navigate = useNavigate();
    return (
        <MenuList sx={{ width: '100%' }}>
            {data.map((obj, i) => {
                const ruppe = new Intl.NumberFormat().format(obj.sumOfRupees);
                return (
                    <MenuItem
                        sx={{ width: '100%', p: 0 }}
                        key={i}
                        onClick={() => navigate(`/payment-details/${obj.id}`)}
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
                            <Box gap={1}>
                                <Typography variant='h5'>{obj.name}</Typography>
                                <Typography variant='body2' color='#A2A2A7'>
                                    {new Date(obj.date).toLocaleDateString()}
                                </Typography>
                            </Box>
                            <Box display='flex' alignItems={'center'}>
                                <Typography variant='h6' marginRight={2}>
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
