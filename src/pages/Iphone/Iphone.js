import classNames from 'classnames/bind';
import styles from './Iphone.module.scss';
import Product from '~/components/Products';
import config from '~/config';
import * as IphoneService from '~/services/IphoneService';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Iphone() {
    const [data, setData] = useState({ title: 'iPhone' });
    const handleView = (newData) => {
        setData(newData);
    };
    return (
        <div className={cx('wrapper')}>
            <Product
                nameService={IphoneService}
                directive={true}
                title={data.title}
                idName="iPhone"
                path={config.routes.iphone}
                onChangeView={handleView}
            />
        </div>
    );
}

export default Iphone;
