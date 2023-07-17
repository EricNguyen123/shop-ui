import classNames from 'classnames/bind';
import styles from './AllRatingList.module.scss';

const cx = classNames.bind(styles);

function AllRatingList() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('rating-list')}>
                <div className={cx('rating-product')}>
                    <p className={cx('rating-review')}>5</p>
                    <div className={cx('reivews')}>
                        <span>5 Lượt đánh giá</span>
                    </div>
                </div>

                <div className={cx('progress-review')}>
                    <div className={cx('progress')}>
                        <p className={cx('title')}>
                            5 <span className={cx('color-start')}></span>
                        </p>
                        <div className={cx('progress-bar')}></div>
                    </div>
                    <div className={cx('progress')}>
                        <p className={cx('title')}>
                            4 <span className={cx('color-start')}></span>
                        </p>
                        <div className={cx('progress-bar')}></div>
                    </div>
                    <div className={cx('progress')}>
                        <p className={cx('title')}>
                            3 <span className={cx('color-start')}></span>
                        </p>
                        <div className={cx('progress-bar')}></div>
                    </div>
                    <div className={cx('progress')}>
                        <p className={cx('title')}>
                            2 <span className={cx('color-start')}></span>
                        </p>
                        <div className={cx('progress-bar')}></div>
                    </div>
                    <div className={cx('progress')}>
                        <p className={cx('title')}>
                            1 <span className={cx('color-start')}></span>
                        </p>
                        <div className={cx('progress-bar')}></div>
                    </div>
                </div>
            </div>
            <div className={cx('review-page')}></div>
        </div>
    );
}

export default AllRatingList;
