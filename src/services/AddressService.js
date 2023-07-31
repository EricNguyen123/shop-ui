import * as httpRequest from '~/util/httpRequest';

export const get = async ({ id }) => {
    try {
        const res = await httpRequest.get('address', {
            params: {
                id: id,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getAll = async () => {
    try {
        const res = await httpRequest.get('address', {
            params: {},
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
