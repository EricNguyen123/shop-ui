import classNames from 'classnames/bind';
import styles from './SoundPage.module.scss';
import Product from '~/components/Products';
import config from '~/config';
import * as SoundService from '~/services/SoundService';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SoundPage() {
    const [data, setData] = useState({ title: 'Âm thanh' });
    const handleView = (newData) => {
        setData(newData);
    };
    return (
        <div className={cx('wrapper')}>
            <Product
                nameService={SoundService}
                directive={true}
                title={data.title}
                idName="Âm thanh"
                path={config.routes.soundpage}
                onChangeView={handleView}
            />
        </div>
    );
}

export default SoundPage;
