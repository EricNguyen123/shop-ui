import classNames from 'classnames/bind';
import styles from './Iphone.module.scss';
import Product from '~/components/Products/Product';
import config from '~/config';
import * as IphoneService from '~/services/IphoneService';

const cx = classNames.bind(styles);

function Iphone() {
    return (
        <div className={cx('wrapper')}>
            <Product nameService={IphoneService} directive={true} title="iPhone" path={config.routes.iphone} />
        </div>
    );
}

export default Iphone;
