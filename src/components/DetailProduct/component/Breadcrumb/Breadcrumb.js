import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';

const cx = classNames.bind(styles);

function Breadcrumb() {
    return <div className={cx('wrapper')}></div>;
}

export default Breadcrumb;
