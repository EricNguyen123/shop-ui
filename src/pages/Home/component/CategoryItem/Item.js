import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Item({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <div className={cx('icon')}>
                    <Image
                        className={cx('icon-img')}
                        src="https://shopdunk.com/images/uploaded/icon/chao-tan-sv.png"
                        alt="ctsv"
                    />
                </div>
                <div className={cx('item-img')}>
                    <Image className={cx('product')} src={data.color.popular} alt="product" />
                </div>
                <div className={cx('item-title')}>
                    <Link className={cx('title')}>{data.name}</Link>
                </div>
                <div className={cx('price')}>
                    <span className={cx('actual-price')}>{data.actualPrice}</span>
                    <span className={cx('old-price')}>{data.oldPrice}</span>
                </div>
            </div>
        </div>
    );
}

Item.propTyles = {
    data: PropTypes.object.isRequired,
};

export default Item;
