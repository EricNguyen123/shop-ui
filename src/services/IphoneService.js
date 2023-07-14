import * as httpRequest from '~/util/httpRequest';

export const getIphone = async ({ _page, _limit }) => {
    try {
        const res = await httpRequest.get('iPhone', {
            params: {
                _page,
                _limit,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
