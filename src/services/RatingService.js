import * as httpRequest from '~/util/httpRequest';

export const get = async ({ _page, _limit }) => {
    try {
        const res = await httpRequest.get('rating', {
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

export const post = async ({ name, stars, review, dateReview }) => {
    try {
        const res = await httpRequest.post('rating', {
            data: {
                name: name,
                stars: stars,
                review: review,
                dateReview: dateReview,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
