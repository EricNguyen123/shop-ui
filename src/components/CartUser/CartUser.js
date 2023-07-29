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
    const [dataItems, setDataItems] = useState(localStorage.getItem('dataItems'));
    const [totalAll, setTotalAll] = useState(0);

    useEffect(() => {
        if (dataItems !== null) {
            const JSONData = JSON.parse(dataItems);
            setData(JSONData);

            let total = 0;
            JSONData.forEach((element) => {
                total += element.totalItem;
            });
            setTotalAll(total);
        }
    }, [dataItems]);

    const handleView = (e) => {
        setDataItems(e);
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
                                <CartDetail dataItems={data} handleView={handleView} />
                                <CheckBilling />
                            </div>
                            <div className={cx('row')}>
                                <CartFooter totalAll={totalAll} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartUser;
