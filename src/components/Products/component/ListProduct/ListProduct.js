import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';
import CardItem from './CardItem';

const cx = classNames.bind(styles);

function ListProduct({ service }) {
    return (
        <div className={cx('list-product')}>
            <CardItem nameService={service} />
        </div>
    );
}

export default ListProduct;
