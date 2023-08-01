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
            params: {},
        });
        const data = res.filter(
            (result) => result.dataUser.userName === userName && result.dataUser.password === password,
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
