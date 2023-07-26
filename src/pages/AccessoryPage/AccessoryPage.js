import classNames from 'classnames/bind';
import styles from './AccessoryPage.module.scss';
import Product from '~/components/Products';
import config from '~/config';
import * as AccessoryService from '~/services/AccessoryService';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SoundPage() {
    const [data, setData] = useState({ title: 'Phụ kiện' });
    const handleView = (newData) => {
        setData(newData);
    };
    return (
        <div className={cx('wrapper')}>
            <Product
                nameService={AccessoryService}
                directive={true}
                title={data.title}
                idName="Phụ kiện"
                path={config.routes.accessorypage}
                onChangeView={handleView}
            />
        </div>
    );
}

export default SoundPage;
