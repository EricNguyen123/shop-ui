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
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ProductDetail({ directive, title, item }) {
    const [imgs, setImgs] = useState([]);
    useEffect(() => {
        const dataImgs = item.color.listColor.find((data) => data.colorName === 'space-black');
        setImgs(dataImgs.img);
    }, [item.color.listColor]);

    return (
        <div className={cx('wrapper')}>
            <Breadcrumb directive={directive} title={title} />
            <div className={cx('inner')}>
                <div className={cx('assential')}>
                    <ProductAssential className={cx('review-img')} dataImg={imgs} />
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
