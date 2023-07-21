import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import ProductDetail from '~/components/ProductDetail';

const cx = classNames.bind(styles);

function ProductItem() {
    return (
        <div className={cx('wrapper')}>
            <ProductDetail directive={true} title="ProductItem" />
        </div>
    );
}

export default ProductItem;
