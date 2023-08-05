import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Breadcrumb({ directive, title }) {
    // const location = useLocation();
    // const pathSegments = location.pathname.split('/').filter((item) => item !== '');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-path')}>
                {directive && (
                    <div className={cx('item')}>
                        <span className={cx('deLimiter')}></span>
                        <Link to={config.routes.home} className={cx('itemName')}>
                            Trang chủ
                        </Link>
                    </div>
                )}
                {/* {pathSegments.map((segment, index) => {
                    const link = `/${pathSegments.slice(0, index + 1).join('/')}`;
                    return (
                        <div key={index} className={cx('item')}>
                            <span className={cx('deLimiter')}>{'>'}</span>
                            <Link className={cx('itemName')} to={link}>
                                {segment}
                            </Link>
                        </div>
                    );
                })} */}
                <div className={cx('item')}>
                    <span className={cx('deLimiter')}>{'>'}</span>
                    <Link className={cx('itemName')}>{title}</Link>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;
