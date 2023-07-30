import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Image from '~/components/Image';
import config from '~/config';
import ButtonHeader from '~/layouts/components/ButtonHeader';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '~/hook';

const cx = classNames.bind(styles);

function Header() {
    const [badge, setBadge] = useState(0);
    // const [JSONQuantity, setSONQuantity] = useState(localStorage.getItem('quantity'));

    // useEffect(() => {
    //     if (JSONQuantity !== null) {
    //         setBadge(JSON.parse(JSONQuantity));
    //     }
    //     window.addEventListener('storage', handleLocalStorageChange);
    //     return () => {
    //         window.removeEventListener('storage', handleLocalStorageChange);
    //     };
    // }, [JSONQuantity]);

    // const handleLocalStorageChange = (event) => {
    //     if (event.key === 'quantity') {
    //         setSONQuantity(localStorage.getItem('quantity'));
    //     }
    // };

    const [storedValue, setStoredValue] = useLocalStorage('quantity', 0);

    useEffect(() => {
        setBadge(storedValue);
        setStoredValue(JSON.parse(localStorage.getItem('quantity')));
    }, [setStoredValue, storedValue]);

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
                    <Tippy
                        interactive
                        offset={[0, 0]}
                        placement="bottom-start"
                        render={(props) => (
                            <div className={cx('menu-sevice')} tabIndex="-1" {...props}>
                                <div className={cx('menu-box')}>
                                    <div className={cx('menu-item')}>
                                        <span>Bảo hành uỷ quyền Apple (Shop Care)</span>
                                    </div>
                                    <div className={cx('menu-item')}>
                                        <span>Trả góp</span>
                                    </div>
                                    <div className={cx('menu-item')}>
                                        <span>Thu cũ đổi mới</span>
                                    </div>
                                    <div className={cx('menu-item')}>
                                        <span>WorkShop</span>
                                    </div>
                                    <div className={cx('menu-item')}>
                                        <span>MBTI</span>
                                    </div>
                                    <div className={cx('menu-item')}>
                                        <span>Sim thẻ</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    >
                        <ButtonHeader path={config.routes.servicepage}>Dịch vụ</ButtonHeader>
                    </Tippy>
                </div>
                <div className={cx('button-user')}>
                    <div className={cx('search-icon')}></div>
                    <Link className={cx('cart')} to={config.routes.cart}>
                        <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                        <span className={cx('badge')}>{badge}</span>
                    </Link>
                    <FontAwesomeIcon className={cx('user-icon')} icon={faUser} />
                </div>
            </div>
        </header>
    );
}

export default Header;
