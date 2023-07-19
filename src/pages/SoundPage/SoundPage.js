import classNames from 'classnames/bind';
import styles from './SoundPage.module.scss';
import Product from '~/components/Products/Product';
import config from '~/config';
import * as SoundService from '~/services/SoundService';

const cx = classNames.bind(styles);

function SoundPage() {
    return (
        <div className={cx('wrapper')}>
            <Product nameService={SoundService} directive={true} title="Âm thanh" path={config.routes.soundpage} />
        </div>
    );
}

export default SoundPage;
