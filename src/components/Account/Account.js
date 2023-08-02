import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import Sidebar from './Sidebar';
import { useState } from 'react';
import config from '~/config';

const cx = classNames.bind(styles);

function Account() {
    const [View, setView] = useState({ Component: config.viewUser.account });

    const handleView = (e) => {
        setView({ Component: e });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('collumns')}>
                <Sidebar handleView={handleView} />
                <View.Component />
            </div>
        </div>
    );
}

export default Account;
