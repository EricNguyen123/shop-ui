import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Breadcrumb({ directive, title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-path')}>
                {directive ?? (
                    <div className={cx('item')}>
                        <Link to={config.routes.home} className={cx('itemName')}>
                            Trang chủ
                        </Link>
                        <span className={cx('deLimiter')}>{'>'}</span>
                    </div>
                )}
                <div className={cx('item')}>
                    <Link className={cx('itemName')}>{title}</Link>
                    <span className={cx('deLimiter')}></span>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;
