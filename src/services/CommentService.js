import * as httpRequest from '~/util/httpRequest';

export const get = async ({ _sort, _order, _page, _limit }) => {
    try {
        const res = await httpRequest.get('comment', {
            params: {
                _sort,
                _order,
                _page,
                _limit,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const post = async ({ name, phoneNumber, commentUser, dateComment }) => {
    try {
        const res = await httpRequest.post('comment', {
            data: {
                name: name,
                phoneNumber: phoneNumber,
                commentUser: commentUser,
                dateComment: dateComment,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
