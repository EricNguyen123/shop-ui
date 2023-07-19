import classNames from 'classnames/bind';
import styles from './ProductReview.module.scss';

import AllRatingList from './AllRatingList';
import AllReviewList from './AllReviewList';

const cx = classNames.bind(styles);

function ProductReview({ title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Đánh giá danh mục</p>
            <div className={cx('container')}>
                <AllRatingList title={title} />
                <AllReviewList title={title} />
            </div>
        </div>
    );
}

export default ProductReview;
