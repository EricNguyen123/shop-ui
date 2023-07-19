import classNames from 'classnames/bind';
import styles from './AccessoryPage.module.scss';
import Product from '~/components/Products/Product';
import config from '~/config';
import * as AccessoryService from '~/services/AccessoryService';

const cx = classNames.bind(styles);

function SoundPage() {
    return (
        <div className={cx('wrapper')}>
            <Product
                nameService={AccessoryService}
                directive={true}
                title="Phụ kiện"
                path={config.routes.accessorypage}
            />
        </div>
    );
}

export default SoundPage;
