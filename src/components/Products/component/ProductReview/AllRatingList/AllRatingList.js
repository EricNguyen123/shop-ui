import classNames from 'classnames/bind';
import styles from './AllRatingList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AllRatingList() {
    const [stars, setStars] = useState([true, true, true, true, true]);
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
                        <input className={cx('input')} type="text" />
                        <span className={cx('check-input')}>*</span>
                    </div>
                </div>
                <div className={cx('input-name')}>
                    <label>Đánh giá danh mục</label>
                    <div className={cx('inner-input-name')}>
                        <textarea className={cx('input')} />
                        <span className={cx('check-input')}>*</span>
                    </div>
                </div>
                <div className={cx('button-sub')}>
                    <span className={cx('sub')}>Gửi</span>
                </div>
            </div>
        </div>
    );
}

export default AllRatingList;
