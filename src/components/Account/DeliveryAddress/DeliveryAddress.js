import classNames from 'classnames/bind';
import styles from './DeliveryAddress.module.scss';

const cx = classNames.bind(styles);

function DeliveryAddress() {
    return <div className={cx('wrapper')}>DeliveryAddress</div>;
}

export default DeliveryAddress;
