import * as httpRequest from '~/util/httpRequest';

export const post = async ({ dataUser }) => {
    try {
        const res = await httpRequest.post('dataUsers', {
            dataUser: dataUser,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getLogin = async ({ userName, password }) => {
    try {
        const res = await httpRequest.get('dataUsers', {
            params: {
                userName: userName,
                password: password,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
