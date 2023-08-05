import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import Sidebar from './Sidebar';
import { useState } from 'react';
import config from '~/config';
import TitleTab from '~/components/TitleTab';

const cx = classNames.bind(styles);

function Account() {
    const [View, setView] = useState({ Component: config.viewUser.account });

    const handleView = (e) => {
        setView({ Component: e });
    };

    const [data, setData] = useState({ title: 'Tài khoản của tôi' });
    const handleTitle = (newData) => {
        setData(newData);
    };

    // useEffect(() => {
    //     const pathName = window.location.pathname;
    // }, []);

    return (
        <div className={cx('wrapper')}>
            <TitleTab title={data.title} />
            <div className={cx('collumns')}>
                <Sidebar handleView={handleView} handleTitle={handleTitle} />
                <View.Component />
            </div>
        </div>
    );
}

export default Account;
