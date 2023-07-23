import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

import Breadcrumb from './component/Breadcrumb';
import ProductReview from './component/ProductReview';
import Comments from './component/Comments';
import ProductAssential from './component/ProductAssential';
import OverView from './component/OverView';
import CrossSells from './component/CrossSells';

const cx = classNames.bind(styles);

function ProductDetail({ directive, title }) {
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb directive={directive} title={title} />
            <div className={cx('inner')}>
                <div className={cx('assential')}>
                    <ProductAssential className={cx('review-img')} />
                    <OverView className={cx('review-content')} />
                </div>
                <CrossSells />
                <ProductReview title={title} />
                <Comments title={title} />
            </div>
        </div>
    );
}

export default ProductDetail;
