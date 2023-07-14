import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Banner from './component/Banner';
import BannerSmall from './component/BannerSmall';
import CategoryItem from './component/CategoryItem';
import * as IphoneService from '~/services/IphoneService';
import config from '~/config';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner className={cx('banner-large')} />
            <div className={cx('inner')}>
                <BannerSmall className={cx('banner-small')} />
                <div className={cx('item-list')}>
                    <CategoryItem nameService={IphoneService} title="iPhone" path={config.routes.iphone} />
                </div>
            </div>
        </div>
    );
}

export default Home;
