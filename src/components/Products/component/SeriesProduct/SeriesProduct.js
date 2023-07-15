import classNames from 'classnames/bind';
import styles from './SeriesProduct.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SeriesProduct({ service, name }) {
    const [data, setData] = useState([]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('series-menu')}></div>
        </div>
    );
}

export default SeriesProduct;
