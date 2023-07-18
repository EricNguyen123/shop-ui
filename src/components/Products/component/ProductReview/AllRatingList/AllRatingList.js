import classNames from 'classnames/bind';
import styles from './AllRatingList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import * as RatingService from '~/services/RatingService';

const cx = classNames.bind(styles);

function AllRatingList() {
    const [stars, setStars] = useState([true, true, true, true, true]);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [data, setData] = useState({ name: name, stars: stars, review: review, dateReview: '' });

    useEffect(() => {
        if (data.name.trim() !== '' && data.review.trim() !== '') {
            const date = new Date();
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();

            if (mm < 10) {
                mm = '0' + mm;
            }

            const dateReview = `${dd}/${mm}/${yyyy}`;

            RatingService.post({ name: data.name, stars: data.stars, review: data.review, dateReview: dateReview });
        }
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('rating-list')}>
                <div className={cx('rating-product')}>
                    <p className={cx('rating-review')}>5</p>
                    <div className={cx('reivews')}>
                        <span className={cx('re-content')}>5 đánh giá</span>
                    </div>
                </div>

                <div className={cx('progress-review')}>
                    <div className={cx('progress')}>
                        <p className={cx('title')}>
                            <span className={cx('number-rating')}>5</span> <span className={cx('color-start')}></span>
                        </p>
                        <div className={cx('progress-bar')}>
                            <div
                                className={cx('bar')}
                                role="progressbar"
                                style={{ width: '100%' }}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                    <div className={cx('progress')}>
                        <p className={cx('title')}>
                            <span className={cx('number-rating')}>4</span> <span className={cx('color-start')}></span>
                        </p>
                        <div className={cx('progress-bar')}>
                            <div
                                className={cx('bar')}
                                role="progressbar"
                                style={{ width: '0%' }}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                    <div className={cx('progress')}>
                        <p className={cx('title')}>
                            <span className={cx('number-rating')}>3</span> <span className={cx('color-start')}></span>
                        </p>
                        <div className={cx('progress-bar')}>
                            <div
                                className={cx('bar')}
                                role="progressbar"
                                style={{ width: '0%' }}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                    <div className={cx('progress')}>
                        <p className={cx('title')}>
                            <span className={cx('number-rating')}>2</span> <span className={cx('color-start')}></span>
                        </p>
                        <div className={cx('progress-bar')}>
                            <div
                                className={cx('bar')}
                                role="progressbar"
                                style={{ width: '0%' }}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                    <div className={cx('progress')}>
                        <p className={cx('title')}>
                            <span className={cx('number-rating')}>1 </span> <span className={cx('color-start')}></span>
                        </p>
                        <div className={cx('progress-bar')}>
                            <div
                                className={cx('bar')}
                                role="progressbar"
                                style={{ width: '0%' }}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('review-page')}>
                <div className={cx('title-review')}>
                    <strong className={cx('str-title')}>Viết đánh giá của riêng bạn</strong>
                </div>
                <div className={cx('review-rating')}>
                    <div className={cx('name-description')}>
                        <span className={cx('name')}>Chất lượng*:</span>
                    </div>
                    <div className={cx('star-btn')}>
                        {stars.map((star, index) => (
                            <div
                                key={index}
                                className={cx('star')}
                                onClick={() => {
                                    const tmp = [];
                                    for (var i = 1; i < index + 1; i++) {
                                        tmp.push(false);
                                    }
                                    // eslint-disable-next-line no-redeclare
                                    for (var i = index + 1; i <= 5; i++) {
                                        tmp.push(true);
                                    }
                                    setStars(tmp);
                                }}
                            >
                                {star ? (
                                    <FontAwesomeIcon className={cx('active')} icon={faStar} />
                                ) : (
                                    <FontAwesomeIcon className={cx('no-active')} icon={faStar} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('input-name')}>
                    <label>Tên của bạn</label>
                    <div className={cx('inner-input-name')}>
                        <input
                            className={cx('input')}
                            type="text"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <span className={cx('check-input')}>*</span>
                    </div>
                </div>
                <div className={cx('input-name')}>
                    <label>Đánh giá danh mục</label>
                    <div className={cx('inner-input-name')}>
                        <textarea
                            className={cx('input')}
                            onChange={(e) => {
                                setReview(e.target.value);
                            }}
                        />
                        <span className={cx('check-input')}>*</span>
                    </div>
                </div>
                <div
                    className={cx('button-sub')}
                    onClick={() => {
                        setData({ name: name, stars: stars, review: review });
                    }}
                >
                    <span className={cx('sub')}>Gửi</span>
                </div>
            </div>
        </div>
    );
}

export default AllRatingList;
