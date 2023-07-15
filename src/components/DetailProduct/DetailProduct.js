import classNames from 'classnames/bind';
import styles from './DetailProduct.module.scss';

const cx = classNames.bind(styles);

function DetailProduct() {
    return <div className={cx('wrapper')}></div>;
}

export default DetailProduct;
