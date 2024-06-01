import { Box, Button, Typography } from '@mui/material';

export const Template = () => {
    return (
        <>
            <Box
                bgcolor={'#FAEBD9'}
                height={'1000px'}
                marginLeft={-100}
                width={'1500px'}
                boxSizing={'border-box'}
                border={16}
                borderColor={'#DEDEDE'}
                display={'flex'}
                fontFamily={'TimesNewRoman'}
            >
                <Box
                    bgcolor={'#FAEBD9'}
                    boxSizing={'border-box'}
                    border={4}
                    width={'100%'}
                    display={'flex'}
                    flexDirection={'column'}
                    borderColor={'#826696'}
                >
                    <Box
                        bgcolor={'#FAEBD9'}
                        boxSizing={'border-box'}
                        border={4}
                        display={'flex'}
                        width={'100%'}
                        borderColor={'#FFFFFF'}
                    >
                        <Box
                            width={'100%'}
                            height={120}
                            bgcolor={'#D13232'}
                            display={'flex'}
                        >
                            <Box
                                height={180}
                                width={180}
                                border={2}
                                marginLeft={1.5}
                                borderColor={'#D13232'}
                                borderRadius={100}
                                marginTop={1.5}
                                marginRight={3}
                                bgcolor={'#ffffff'}
                            ></Box>
                            <Typography
                                fontSize={80}
                                component={'span'}
                                color={'#FFFFFF'}
                                fontFamily={'serif'}
                                fontWeight={'bold'}
                            >
                                ADARSHWADI PARTY
                            </Typography>
                            <Typography
                                fontSize={50}
                                variant='h2'
                                component={'span'}
                                color={'#FFFFFF'}
                                fontFamily={'serif'}
                                fontWeight={'bold'}
                                marginTop={'auto'}
                                marginBottom={3}
                                sx={{ fontFamily: 'serif' }}
                            >
                                (LOKTANTRIK)
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        width={'100%'}
                        px={4}
                        display={'flex'}
                        flexDirection={'column'}
                        gap={4}
                    >
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            flexDirection={'column'}
                            marginBottom={2}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                }}
                                fontSize={32}
                                marginBottom={3}
                            >
                                Reg. No. : 56/06/2016-2017/PPS-I
                            </Typography>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                Shop No.113, Sai Laxmi Tower, Opp. Sanjivani
                                Hospital, Dist. Sirohi, Rajasthan-307001.
                            </Typography>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                (M) 9313510051 E-mail :
                                adarshwadiparty110@gmail.com
                            </Typography>
                        </Box>

                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                Receipt No. :
                            </Typography>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                Date : ___________________
                            </Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                Received with thanks from Mr./Mrs./Ms.
                                ___________________________________________________
                            </Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                PAN : _______________________ Address
                                _________________________________________________
                            </Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                _____________________________________________________________________________________
                            </Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                }}
                                fontSize={32}
                            >
                                the sum of Rupees
                                _____________________________________________________________________
                            </Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                    letterSpacing: '-1px',
                                }}
                                fontSize={32}
                            >
                                Towards ELECTION FUND by Cash / Cheque /
                                Transfer No.
                                _________________________________________
                            </Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'serif',
                                    fontStyle: 'italic',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                    letterSpacing: '-1px',
                                }}
                                fontSize={32}
                            >
                                Drawn on
                                ____________________________________________________________________________________
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={'end'}
                        >
                            <Box>
                                <Box
                                    height={70}
                                    width={350}
                                    border={3}
                                    borderColor={'#D13232'}
                                    bgcolor={'#ffffff'}
                                    display={'flex'}
                                >
                                    <Box
                                        width={50}
                                        bgcolor={'#D13232'}
                                        height={'68px'}
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        fontFamily={'sarif'}
                                    >
                                        <Typography
                                            fontSize={60}
                                            lineHeight={'60px'}
                                            color={'#FFFFFF'}
                                        >
                                            ₹
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography fontSize={24} color={'#19018c'}>
                                    *Subjet to realization of cheque.
                                </Typography>
                            </Box>
                            <Typography
                                fontSize={32}
                                color={'#D13232'}
                                fontWeight={'bold'}
                                fontFamily={'arial'}
                            >
                                For, Adarshwadi Party (Loktantrik)
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            marginTop={-3}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'arial',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                    letterSpacing: '-1px',
                                }}
                                fontSize={26}
                            >
                                PAN : AAFAA1669R
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            marginTop={-3}
                        >
                            <Typography
                                color={'#19018c'}
                                sx={{
                                    fontFamily: 'arial',
                                    fontWeight: '600',
                                    lineHeight: '32px',
                                    letterSpacing: '-1px',
                                }}
                                fontSize={26}
                            >
                                This Fund is Eligible for exception under Income
                                Tax Act 1961 u/s 80 GGC / 80 GGB
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Button>Click</Button>
        </>
    );
};
