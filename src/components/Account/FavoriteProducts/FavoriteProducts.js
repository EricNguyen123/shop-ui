import classNames from 'classnames/bind';
import styles from './FavoriteProducts.module.scss';

const cx = classNames.bind(styles);

function FavoriteProducts() {
    return <div className={cx('wrapper')}>FavoriteProducts</div>;
}

export default FavoriteProducts;
