import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import config from '~/config';
import ButtonHeader from '~/layouts/components/ButtonHeader';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to={config.routes.home}>
                    <Image
                        className={cx('logo-item')}
                        src="https://shopdunk.com/images/thumbs/0012445_Logo_ShopDunk.png"
                        alt="Shop"
                    />
                </Link>
                <div className={cx('button-list')}>
                    <ButtonHeader path={config.routes.iphone}>iPhone</ButtonHeader>
                    <ButtonHeader path={config.routes.ipad}>iPad</ButtonHeader>
                    <ButtonHeader path={config.routes.mac}>Mac</ButtonHeader>
                    <ButtonHeader path={config.routes.watch}>Watch</ButtonHeader>
                    <ButtonHeader path={config.routes.soundpage}>Âm thanh</ButtonHeader>
                    <ButtonHeader path={config.routes.accessorypage}>Phụ kiện</ButtonHeader>
                    <ButtonHeader path={config.routes.servicepage}>Dịch vụ</ButtonHeader>
                </div>
                <div className={cx('button-user')}>
                    <div className={cx('search-icon')}></div>
                    <div className={cx('cart')}>
                        <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                        <span className={cx('badge')}>12</span>
                    </div>
                    <FontAwesomeIcon className={cx('user-icon')} icon={faUser} />
                </div>
            </div>
        </header>
    );
}

export default Header;
