import classNames from 'classnames/bind';
import styles from './Watch.module.scss';
import Product from '~/components/Products/Product';
import config from '~/config';
import * as WatchService from '~/services/WatchService';

const cx = classNames.bind(styles);

function Watch() {
    return (
        <div className={cx('wrapper')}>
            <Product nameService={WatchService} directive={true} title="Watch" path={config.routes.watch} />
        </div>
    );
}

export default Watch;
