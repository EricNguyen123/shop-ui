import classNames from 'classnames/bind';
import styles from './AllReviewList.module.scss';

import Image from '~/components/Image';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AllReviewList() {
    const date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    if (mm < 10) {
        mm = '0' + mm;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('avatar')}>
                    <Image className={cx('img-avatar')} src={images.noAvatar} alt="avatar" />
                    <div className={cx('name-avatar')}>
                        <span className={cx('name')}>Nguyen Hoa</span>
                    </div>
                    <div className={cx('date')}>{`- ${dd}/${mm}/${yyyy}`}</div>
                </div>
                <div className={cx('quality')}>
                    <FontAwesomeIcon className={cx('active')} icon={faStar} />
                    <FontAwesomeIcon className={cx('no-active')} icon={faStar} />
                </div>
                <div className={cx('review')}>
                    <p className={cx('cmt')}>aaaa</p>
                </div>
            </div>
        </div>
    );
}

export default AllReviewList;
