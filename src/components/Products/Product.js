import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import Breadcrumb from './component/Breadcrumb';
import BannerPage from './component/BannerPage';
import SeriesProduct from './component/SeriesProduct';
import ListProduct from './component/ListProduct';
import Description from './component/Description';
import ProductReview from './component/ProductReview';
import Comments from './component/Comments';
import * as BannerPageService from '~/services/BannerPageService';
import * as SeriesService from '~/services/SeriesService';

const cx = classNames.bind(styles);

function Product({ nameService, directive, title, path }) {
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb directive={directive} title={title} />
            <div className={cx('inner')}>
                <div className={cx('page-name')}>
                    <h1 className={cx('name')}>{title}</h1>
                </div>
                <BannerPage service={BannerPageService} name={title} />
                <SeriesProduct service={SeriesService} name={title} path={path} />
                <ListProduct service={nameService} path={path} />
                <Description name={title} />
                <ProductReview title={title} />
                <Comments title={title} />
            </div>
        </div>
    );
}

export default Product;
