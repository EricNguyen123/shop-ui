import classNames from 'classnames/bind';
import styles from './Iphone.module.scss';
import Product from '~/components/Products/Product';

const cx = classNames.bind(styles);

function Iphone() {
    return (
        <div className={cx('wrapper')}>
            <Product directive={true} title="iPhone" />
        </div>
    );
}

export default Iphone;
