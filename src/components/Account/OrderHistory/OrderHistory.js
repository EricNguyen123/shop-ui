import classNames from 'classnames/bind';
import styles from './OrderHistory.module.scss';

const cx = classNames.bind(styles);

function OrderHistory() {
    return <div className={cx('wrapper')}>order history</div>;
}

export default OrderHistory;
