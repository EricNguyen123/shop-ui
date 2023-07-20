import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';
import CardItem from './CardItem';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ListProduct({ service }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        service
            .get({ _page: 1, _limit: 10000 })
            .then((res) => {
                setData(res);
            })
            .catch((error) => {
                return error;
            });
    }, [service]);

    const total = data.length;

    return (
        <div className={cx('list-product')}>
            <CardItem nameService={service} total={total} />
        </div>
    );
}

ListProduct.propTypes = {
    path: PropTypes.node.isRequired,
};

export default ListProduct;
