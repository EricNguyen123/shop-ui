import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import Breadcrumb from './component/Breadcrumb';
import BannerPage from './component/BannerPage';
import * as BannerPageService from '~/services/BannerPageService';

const cx = classNames.bind(styles);

function Product({ directive, title }) {
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb directive={directive} title={title} />
            <div className={cx('inner')}>
                <div className={cx('page-name')}>
                    <h1 className={cx('name')}>{title}</h1>
                </div>
                <BannerPage service={BannerPageService} name={title} />
            </div>
        </div>
    );
}

export default Product;
