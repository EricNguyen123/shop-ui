import classNames from 'classnames/bind';
import styles from './Mac.module.scss';
import Product from '~/components/Products';
import config from '~/config';
import * as MacService from '~/services/MacService';

const cx = classNames.bind(styles);

function Mac() {
    return (
        <div className={cx('wrapper')}>
            <Product nameService={MacService} directive={true} title="Mac" path={config.routes.mac} />
        </div>
    );
}

export default Mac;
