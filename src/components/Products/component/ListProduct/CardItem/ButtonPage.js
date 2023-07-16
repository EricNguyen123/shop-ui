import classNames from 'classnames/bind';
import styles from './ButtonPage.module.scss';

const cx = classNames.bind(styles);

function ButtonPage({ title, link, onChangeView, activeBtn = false, noActiveBtn = false, className, checkActive }) {
    if (checkActive === title) {
        activeBtn = true;
    } else {
        noActiveBtn = true;
    }
    return (
        <div className={cx('wrapper', { [className]: className })} onClick={onChangeView}>
            <div className={cx('inner')}>
                {title && (
                    <div className={cx('page-btn', { activeBtn, noActiveBtn })}>
                        <span>{title}</span>
                    </div>
                )}
                {link && (
                    <div className={cx('page-btn', { noActiveBtn })}>
                        <img src={link} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ButtonPage;
