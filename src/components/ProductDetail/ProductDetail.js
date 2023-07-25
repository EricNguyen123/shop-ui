import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

import Breadcrumb from './component/Breadcrumb';
import ProductReview from './component/ProductReview';
import Comments from './component/Comments';
import ProductAssential from './component/ProductAssential';
import OverView from './component/OverView';
import CrossSells from './component/CrossSells';
import TabDetail from './component/TabDetail';
import Description from './component/Description';
// import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductDetail({ directive, title, item }) {
    // const [imgs, setImgs] = useState([]);
    // for (var i = 0; i < item.color.listColor.length; i++) {
    //     if (item.color.listColor[i].colorName === 'space-black') {
    //         return setImgs(item.color.listColor[i].img);
    //     }
    // }

    return (
        <div className={cx('wrapper')}>
            <Breadcrumb directive={directive} title={title} />
            <div className={cx('inner')}>
                <div className={cx('assential')}>
                    <ProductAssential className={cx('review-img')} dataImg={item.color.listColor[0].img} />
                    <OverView className={cx('review-content')} />
                </div>
                <CrossSells />
                <TabDetail />
                <Description name={item.nameBlog} />
                <ProductReview title={title} />
                <Comments title={title} />
            </div>
        </div>
    );
}

export default ProductDetail;
