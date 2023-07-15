import classNames from 'classnames/bind';
import styles from './CardItem.module.scss';

import Item from './Item';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const PAGE_INIT = 1;
const LIMIT_INIT = 12;

function CardItem({ nameService }) {
    const [result, setResult] = useState([]);
    useEffect(() => {
        nameService
            .get({ _page: PAGE_INIT, _limit: LIMIT_INIT })
            .then((data) => {
                setResult(data);
            })
            .catch((error) => {
                return error;
            });
    }, [nameService]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('category-box')}>
                {result.map((data, index) => (
                    <div key={index} className={cx('item-box')} to="#">
                        <Item data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardItem;
