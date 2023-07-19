import classNames from 'classnames/bind';
import styles from './Ipad.module.scss';
import Product from '~/components/Products/Product';
import config from '~/config';
import * as IpadService from '~/services/IpadService';

const cx = classNames.bind(styles);

function Ipad() {
    return (
        <div className={cx('wrapper')}>
            <Product nameService={IpadService} directive={true} title="iPad" path={config.routes.ipad} />
        </div>
    );
}

export default Ipad;
