import classNames from 'classnames/bind';
import styles from './CartUser.module.scss';
import Breadcrumb from './component/Breadcrumb';
import CartDetail from './component/CartDetail';
import CheckBilling from './component/CheckBilling';
import CartFooter from './component/CartFooter';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function CartUser() {
    const [data, setData] = useState([]);
    // const dataItems = localStorage.getItem('dataItems');
    const [dataItems, setDataItems] = useState(localStorage.getItem('dataItems'));
    const [dataItemsChanged, setDataItemsChanged] = useState(false);

    useEffect(() => {
        if (dataItems !== null) {
            setData(JSON.parse(dataItems));
        }
        window.addEventListener('storage', handleLocalStorageChange);
        return () => {
            window.removeEventListener('storage', handleLocalStorageChange);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataItems]);

    useEffect(() => {
        if (dataItemsChanged) {
            setDataItems(localStorage.getItem('dataItems'));
            setDataItemsChanged(false);
        }
    }, [dataItemsChanged]);

    const handleLocalStorageChange = (event) => {
        if (event.key === 'dataItems') {
            setDataItemsChanged(true);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Breadcrumb directive={true} title="Giỏ hàng" />
            <div className={cx('inner')}>
                {dataItems === null ? (
                    <div className={cx('no-data')}>Giỏ hàng của bạn đang trống!</div>
                ) : (
                    <div className={cx('order-content')}>
                        <div className={cx('form')}>
                            <div className={cx('shoping-cart-inf')}>
                                <CartDetail dataItems={data} />
                                <CheckBilling />
                            </div>
                            <div className={cx('row')}>
                                <CartFooter />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartUser;
