import * as httpRequest from '~/util/httpRequest';

export const getSeries = async ({ name }) => {
    try {
        const res = await httpRequest.get('series', {
            params: {
                name,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
