import classNames from 'classnames/bind';
import styles from './OverView.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCircleCheck, faGift, faRepeat } from '@fortawesome/free-solid-svg-icons';

import Gift from './Gift';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function OverView({ className, data }) {
    const [attributes, setAttributes] = useState([]);
    const [colorChoose, setColorChoose] = useState('space-black');

    useEffect(() => {
        setAttributes(data.attributes);
    }, [data]);
    let colorBoard, itemBoard;

    if (attributes.length >= 1) {
        colorBoard = attributes.find((e) => e.name === 'Màu sắc');
        if (!colorBoard) {
            itemBoard = attributes;
        } else {
            if (attributes.length === 1) {
                itemBoard = false;
            } else {
                itemBoard = attributes.slice(0, attributes.length - 1);
            }
        }
    }

    console.log(colorChoose);
    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('over-rivew')}>
                <div className={cx('inner')}>
                    <div className={cx('info')}>
                        <div className={cx('product-name')}>
                            <h1 className={cx('name')}>{data.name}</h1>
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
                            <span className={cx('low-prices')}>{data.actualPrice}</span>
                        </div>
                        <div className={cx('old-product-prices')}>
                            <span className={cx('old-prices')}>{data.oldPrice}</span>
                        </div>
                    </div>
                    {attributes.length >= 1 && (
                        <div className={cx('attributes')}>
                            {itemBoard
                                ? itemBoard.map((item, index) => (
                                      <div key={index} className={cx('attributes-item')}>
                                          <div className={cx('name-attributes')}>
                                              <span className={cx('label')}>{item.name}</span>
                                          </div>

                                          <div className={cx('value-attributes')}>
                                              {item.value.map((e, index) => (
                                                  <div key={index} className={cx('value-item')}>
                                                      <Link to="/iphone14series">
                                                          <span className={cx('check-attr')}>{e}</span>
                                                      </Link>
                                                  </div>
                                              ))}
                                          </div>
                                      </div>
                                  ))
                                : undefined}

                            {colorBoard && (
                                <div className={cx('attributes-item')}>
                                    <div className={cx('name-attributes')}>
                                        <span className={cx('label')}>{colorBoard.name}</span>
                                    </div>

                                    <div className={cx('value-attributes')}>
                                        {colorBoard.value.map((color, index) => (
                                            <div key={index} className={cx('value-item-color')}>
                                                <label htmlFor={`color-${color}`}>
                                                    <span className={cx('attribute-square-container')} title={color}>
                                                        <span
                                                            className={cx('attribute-square')}
                                                            style={{ backgroundColor: `var(--${color})` }}
                                                        >
                                                            &nbsp;
                                                        </span>
                                                    </span>
                                                    <input
                                                        className={cx('input-color')}
                                                        id={`color-${color}`}
                                                        type="radio"
                                                        name="color"
                                                        value={color}
                                                        onChange={() => {
                                                            setColorChoose(color);
                                                        }}
                                                    />
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className={cx('short-des')}>
                        <div className={cx('p-title')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGift} />
                            <p className={cx('title')}>Khuyến mại</p>
                        </div>
                        <div className={cx('inf-promotions')}>
                            <ul className={cx('option-list')}>
                                <li className={cx('option-item')}>
                                    <input
                                        className={cx('input-option')}
                                        id="buy-product"
                                        type="radio"
                                        name="buy"
                                        value="buy"
                                        // checked="checked"
                                    />
                                    <label className={cx('label-option')} htmlFor="buy-product">
                                        Mua thẳng
                                    </label>
                                </li>
                                <li className={cx('option-item')}>
                                    <input
                                        className={cx('input-option')}
                                        id="buy-product-buy-0"
                                        type="radio"
                                        name="buy"
                                        value="buy-0"
                                    />
                                    <label className={cx('label-option')} htmlFor="buy-product-buy-9">
                                        Trả góp 0%
                                    </label>
                                </li>
                                <li className={cx('option-item')}>
                                    <input
                                        className={cx('input-option')}
                                        id="buy-product-buy-vip"
                                        type="radio"
                                        name="buy"
                                        value="buy-vip"
                                    />
                                    <label className={cx('label-option')} htmlFor="buy-product-buy-vip">
                                        Giá ưu đãi mua kèm bảo hành kim cương, VIP
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('p-title', 'ud_mo')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGift} />
                            <p className={cx('title')}>Ưu đãi</p>
                        </div>
                        <Gift maxLength={126} />
                    </div>
                    <Link className={cx('popup-store')}>
                        <FontAwesomeIcon className={cx('popup-icon')} icon={faBuilding} />
                        Xem của hàng có sẵn sản phẩm
                    </Link>
                    <div className={cx('add-cart-button')}>
                        <div className={cx('add-to-cart')}>
                            <button className={cx('add-click')}>Mua ngay</button>
                        </div>
                        <div className={cx('button-bottom')}>
                            <Link className={cx('choose-btn')}>Trả góp</Link>
                            <Link className={cx('choose-btn')}>
                                <FontAwesomeIcon icon={faRepeat} />
                                Thu cũ đổi mới
                            </Link>
                        </div>
                    </div>
                    <div className={cx('product-policy')}>
                        <ul className={cx('list-item')}>
                            <li className={cx('item')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faCircleCheck} />
                                <span>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C</span>
                            </li>
                            <li className={cx('item')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faCircleCheck} />
                                <span>Bảo hành chính hãng 1 năm</span>
                                <Link className={cx('item-link')}>
                                    <strong>(Chi tiết)</strong>
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faCircleCheck} />
                                <span>Giao hàng nhanh toàn quốc</span>
                                <Link className={cx('item-link')}>
                                    <strong>(Chi tiết)</strong>
                                </Link>
                            </li>
                            <li className={cx('item')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faCircleCheck} />
                                <span>Gọi đặt mua </span>
                                <Link className={cx('item-link')}>1900.6626</Link>
                                <span>(7:30 - 22:00)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverView;
