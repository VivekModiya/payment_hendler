import axios from 'axios';
type CreateUserResponse = {
    success: boolean;
    data: {
        role: 'admin' | 'client' | 'endUser';
        name: string;
        userId: string;
    };
};

export type CreateUserParams = {
    name: string;
    role: 'cliend' | 'endUser';
    parentUserId: string;
};

export const creteUser = async (
    params: CreateUserParams
): Promise<CreateUserResponse> => {
    try {
        const res = await axios.post('http://localhost:8080/users/add', params);
        //@ts-ignore
        return res.data as CreateUserResponse;
    } catch (e) {
        return { success: false } as CreateUserResponse;
    }
};
