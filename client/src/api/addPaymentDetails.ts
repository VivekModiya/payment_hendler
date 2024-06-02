import axios from 'axios';
type AddPaymentDetailsParams = {
    date: number;
    receiveFrom: string;
    pan: string;
    address: string;
    sumOfRupees: string;
    userId: string;
    transferNo: string;
    drawnOn: string;
};

type AddPaymentDetailsResponse = {
    success: boolean;
    data?: {
        date: number;
        receiveFrom: string;
        pan: string;
        address: string;
        sumOfRupees: string;
        paymentDetailId: string;
        userId: number;
        transferNo: string;
        drawnOn: string;
    };
};

export const addPaymentDetails = async (
    data: AddPaymentDetailsParams
): Promise<AddPaymentDetailsResponse> => {
    try {
        const res = await axios.post(
            'http://localhost:8080/payments/add-details',
            data
        );
        //@ts-ignore
        return res.data as AddPaymentDetailsResponse;
    } catch (e) {
        return { success: false } as AddPaymentDetailsResponse;
    }
};
