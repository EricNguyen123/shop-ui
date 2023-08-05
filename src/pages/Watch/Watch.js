import classNames from 'classnames/bind';
import styles from './Watch.module.scss';
import Product from '~/components/Products';
import config from '~/config';
import * as WatchService from '~/services/WatchService';
import { useState } from 'react';
import TitleTab from '~/components/TitleTab';

const cx = classNames.bind(styles);

function Watch() {
    const [data, setData] = useState({ title: 'Watch' });
    const handleView = (newData) => {
        setData(newData);
    };
    return (
        <div className={cx('wrapper')}>
            <TitleTab title={data.title} />
            <Product
                nameService={WatchService}
                directive={true}
                title={data.title}
                idName="Watch"
                path={config.routes.watch}
                onChangeView={handleView}
            />
        </div>
    );
}

export default Watch;
