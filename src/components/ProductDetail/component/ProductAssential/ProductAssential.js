import classNames from 'classnames/bind';
import styles from './ProductAssential.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';

const cx = classNames.bind(styles);

function ProductAssential() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-review')}>
                <div className={cx('picture')}>
                    <Image src="https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg" alt="" />
                </div>
                <div className={cx('slick-img')}>
                    <FontAwesomeIcon className={cx('left-btn')} icon={faCircleChevronLeft} />
                    <FontAwesomeIcon className={cx('right-btn')} icon={faCircleChevronRight} />
                </div>
            </div>
        </div>
    );
}

export default ProductAssential;
