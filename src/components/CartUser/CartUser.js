import classNames from 'classnames/bind';
import styles from './CartUser.module.scss';
import Breadcrumb from './component/Breadcrumb';
import CartDetail from './component/CartDetail';
import CheckBilling from './component/CheckBilling';

const cx = classNames.bind(styles);

function CartUser() {
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb directive={true} title="Giỏ hàng" />
            <div className={cx('inner')}>
                {/* <div className={cx('no-data')}>Giỏ hàng của bạn đang trống!</div> */}
                <div className={cx('order-content')}>
                    <div className={cx('form')}>
                        <div className={cx('shoping-cart-inf')}>
                            <CartDetail />
                            <CheckBilling />
                        </div>
                        <div className={cx('row')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartUser;
