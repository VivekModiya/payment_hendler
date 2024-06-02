import axios from 'axios';
type LoginResponse = {
    success: boolean;
    data?: {
        role: 'admin' | 'client' | 'end_user';
        userId: string;
    };
};

export const login = async (code: string): Promise<LoginResponse> => {
    try {
        const res = await axios.post('http://localhost:8080/users/login', {
            userId: code,
        });
        //@ts-ignore
        return res.data as LoginResponse;
    } catch (e) {
        return { success: false } as LoginResponse;
    }
};
