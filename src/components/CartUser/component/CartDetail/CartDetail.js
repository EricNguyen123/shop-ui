import classNames from 'classnames/bind';
import styles from './CartDetail.module.scss';

const cx = classNames.bind(styles);

function CartDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('table-cart')}></div>
                <div className={cx('cart-option')}></div>
            </div>
        </div>
    );
}

export default CartDetail;
