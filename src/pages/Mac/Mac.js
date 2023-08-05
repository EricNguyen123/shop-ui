import classNames from 'classnames/bind';
import styles from './Mac.module.scss';
import Product from '~/components/Products';
import config from '~/config';
import * as MacService from '~/services/MacService';
import { useState } from 'react';
import TitleTab from '~/components/TitleTab';

const cx = classNames.bind(styles);

function Mac() {
    const [data, setData] = useState({ title: 'Mac' });
    const handleView = (newData) => {
        setData(newData);
    };
    return (
        <div className={cx('wrapper')}>
            <TitleTab title={data.title} />
            <Product
                nameService={MacService}
                directive={true}
                title={data.title}
                idName="Mac"
                path={config.routes.mac}
                onChangeView={handleView}
            />
        </div>
    );
}

export default Mac;
