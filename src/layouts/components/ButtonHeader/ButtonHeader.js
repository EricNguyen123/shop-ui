import classNames from 'classnames/bind';
import styles from './ButtonHeader.module.scss';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ButtonHeader({ children, path }) {
    return (
        <Link className={cx('wrapper')} to={path}>
            {children}
        </Link>
    );
}

ButtonHeader.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
};

export default ButtonHeader;
