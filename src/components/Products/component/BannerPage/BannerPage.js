import classNames from 'classnames/bind';
import styles from './BannerPage.module.scss';
import { useEffect, useState } from 'react';

import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
var timeOut;
const B_INIT = 1;

function BannerPage({ service, name }) {
    const [item, setItem] = useState(0);
    const [resItem, setResItem] = useState([]);
    const [link, setLink] = useState(
        'https://shopdunk.com/images/uploaded/LINH%20CHERRYYYYYYY/danh%20m%E1%BB%A5c%20iphone%20ipad%20t7-10.jpg',
    );
    useEffect(() => {
        service
            .getBanner({ name: name })
            .then((data) => {
                setResItem(data[0].links);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [service, name]);

    const handleViewLeft = () => {
        if (item > 0) {
            setLink(resItem[item]);
            setItem(item - 1);
        } else {
            setLink(resItem[item]);
            setItem(B_INIT);
        }
    };

    const handleViewRight = () => {
        if (item < B_INIT) {
            setLink(resItem[item]);
            setItem(item + 1);
        } else {
            setLink(resItem[item]);
            setItem(0);
        }
    };

    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
        if (item < B_INIT) {
            setLink(resItem[item]);
            setItem(item + 1);
        } else {
            setLink(resItem[item]);
            setItem(0);
        }
    }, 5000);
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('left-btn')} onClick={handleViewLeft} icon={faCircleChevronLeft} />
            <Image className={cx('image')} src={link} />
            <FontAwesomeIcon className={cx('right-btn')} onClick={handleViewRight} icon={faCircleChevronRight} />
        </div>
    );
}

export default BannerPage;
