import classNames from 'classnames/bind';
import styles from './OverView.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function OverView() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('info')}>
                    <div className={cx('product-name')}>
                        <h1 className={cx('name')}>Iphone 14 Pro Max 128GB</h1>
                    </div>
                    <div className={cx('rating-star')}>
                        <div className={cx('review-box')}>
                            <div className={cx('rating')}></div>
                        </div>
                        <div className={cx('review-links')}>
                            <Link className={cx('links')}>168 đánh giá</Link>
                            <span className={cx('separator')}>|</span>
                        </div>
                        <div className={cx('overview-btn')}>
                            <div className={cx('add-to-wishlist')}>
                                <button
                                    type="button"
                                    id="add-to-wishlist-button-1798"
                                    className={cx('button-2')}
                                    data-productid="1798"
                                >
                                    So sánh
                                </button>
                            </div>
                        </div>
                        <div className={cx('storelocation-all')}>
                            <select
                                className={cx('storelocation-ddl')}
                                data-attr="2256"
                                name="product_attribute_2256"
                                id="product_attribute_2256"
                                aria-invalid="false"
                                defaultValue="5962"
                            >
                                <option value="0">Vui lòng chọn</option>
                                <option data-attr-value="5962" value="5962">
                                    Khu vực miền Bắc
                                </option>
                                <option data-attr-value="5963" value="5963">
                                    Khu vực miền Nam
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={cx('prices')}>
                    <div className={cx('product-prices')}>
                        <span className={cx('low-prices')}>25.990.000₫</span>
                    </div>
                    <div className={cx('old-product-prices')}>
                        <span className={cx('old-prices')}>34.990.000₫</span>
                    </div>
                </div>
                <div className={cx('attributes')}>
                    <div className={cx('attributes-item')}>
                        <div className={cx('name-attributes')}>
                            <span className={cx('label')}>Dung lượng</span>
                        </div>
                        <div className={cx('value-attributes')}>
                            <div className={cx('value-item')}>
                                <Link to="/iphone14series">
                                    <span className={cx('check-attr')}>128GB</span>
                                </Link>
                            </div>
                            <div className={cx('value-item')}>
                                <Link to="/iphone14series">
                                    <span className={cx('check-attr')}>128GB</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('attributes-item')}>
                        <div className={cx('name-attributes')}>
                            <span className={cx('label')}>Màu sắc</span>
                        </div>
                        <div className={cx('value-attributes')}>
                            <div className={cx('value-item-color')}>
                                <label htmlFor="color-space-black">
                                    <span className={cx('attribute-square-container')} title="Space Black">
                                        <span className={cx('attribute-square')} style={{ backgroundColor: '#4C4B49' }}>
                                            &nbsp;
                                        </span>
                                    </span>
                                    <input id="color-space-black" type="radio" name="color" value="space-black" />
                                </label>
                            </div>
                            <div className={cx('value-item-color')}>
                                <label htmlFor="color-space-black">
                                    <span className={cx('attribute-square-container')} title="Space Black">
                                        <span className={cx('attribute-square')} style={{ backgroundColor: '#4C4B49' }}>
                                            &nbsp;
                                        </span>
                                    </span>
                                    <input id="color-space-black" type="radio" name="color" value="space-black" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('short-des')}>
                    <p className={cx('title')}>Khuyến mại</p>
                </div>
            </div>
        </div>
    );
}

export default OverView;
