import classNames from 'classnames/bind';
import styles from './AllReviewList.module.scss';

import Image from '~/components/Image';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import * as RatingService from '~/services/RatingService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const PAGE = 1;
const LIMIT = 6;

function AllReviewList() {
    const [page, setPage] = useState(PAGE);
    const [data, setData] = useState([]);

    useEffect(() => {
        RatingService.get({ _page: page, _limit: LIMIT })
            .then((res) => {
                setData(res);
            })
            .catch((error) => {
                return error;
            });
    }, [page]);

    return (
        <div className={cx('wrapper')}>
            {data.map((res, index) => (
                <div key={index} className={cx('inner')}>
                    <div className={cx('avatar')}>
                        <Image className={cx('img-avatar')} src={images.noAvatar} alt="avatar" />
                        <div className={cx('name-avatar')}>
                            <span className={cx('name')}>{res.data.name}</span>
                        </div>
                        <div className={cx('date')}>{`- ${res.data.dateReview}`}</div>
                    </div>
                    <div className={cx('quality')}>
                        {/* error */}
                        {res.data.stars.map((e, index) => (
                            <div key={index}>
                                {e === true && <FontAwesomeIcon className={cx('active')} icon={faStar} />}
                            </div>
                        ))}
                        {res.data.stars.map((e, index) => (
                            <div key={index}>
                                {e === false && <FontAwesomeIcon className={cx('active')} icon={faStar} />}
                            </div>
                        ))}

                        {/* <FontAwesomeIcon className={cx('active')} icon={faStar} />
                        <FontAwesomeIcon className={cx('no-active')} icon={faStar} /> */}
                    </div>
                    <div className={cx('review')}>
                        <p className={cx('cmt')}>{res.data.review}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AllReviewList;
