import classNames from 'classnames/bind';
import styles from './Ipad.module.scss';
import Product from '~/components/Products';
import config from '~/config';
import * as IpadService from '~/services/IpadService';
import { useState } from 'react';
import TitleTab from '~/components/TitleTab';

const cx = classNames.bind(styles);

function Ipad() {
    const [data, setData] = useState({ title: 'iPad' });
    const handleView = (newData) => {
        setData(newData);
    };
    return (
        <div className={cx('wrapper')}>
            <TitleTab title={data.title} />
            <Product
                nameService={IpadService}
                directive={true}
                title={data.title}
                idName="iPad"
                path={config.routes.ipad}
                onChangeView={handleView}
            />
        </div>
    );
}

export default Ipad;
