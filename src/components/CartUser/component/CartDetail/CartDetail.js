import classNames from 'classnames/bind';
import styles from './CartDetail.module.scss';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function CartDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cart-detail')}>
                <div className={cx('table-wrapper')}>
                    <table className={cx('cart')}>
                        <colgroup>
                            {/* <col width="1" /> */}
                            <col width="1" />
                            <col width="1" />
                            <col />
                            <col width="1" />
                            <col width="1" />
                            <col width="1" />
                        </colgroup>
                        <thead>
                            <tr>
                                {/* <th className={cx('sku')}>SKU</th> */}
                                <th className={cx('product-picture')}>Hình ảnh</th>
                                <th className={cx('product')}>Tên sản phẩm</th>
                                <th className={cx('unit-price')}>Giá bán</th>
                                <th className={cx('quantity')}>Số lượng</th>
                                <th className={cx('subtotal')}>Toàn bộ</th>
                                <th className={cx('remove-from-cart')}></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* <td className={cx('sku')}>SKU</td> */}
                                <td className={cx('product-picture')}>
                                    <Link className={cx('link-img-item')}>
                                        <Image
                                            className={cx('item-img')}
                                            src="https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb_80.png"
                                            alt=""
                                        />
                                    </Link>
                                </td>
                                <td className={cx('product')}>
                                    <Link className={cx('item-name')}>iPhone 14 pro max 128GB</Link>
                                    <div className={cx('attributes')}>
                                        Khu vực: Khu vực miền Bắc
                                        <br />
                                        Hình thức: Mua thẳng
                                        <br />
                                        Màu sắc: Deep Purple
                                    </div>
                                    <div className={cx('edit-item')}>
                                        <Link className={cx('edit-link')}>Sửa</Link>
                                    </div>
                                </td>
                                <td className={cx('unit-price')}>
                                    <span className={cx('product-unit-price')}>25.990.000₫</span>
                                </td>
                                <td className={cx('quantity')}>
                                    <div className={cx('cart-quantity-input')}>
                                        <svg
                                            className={cx('icon-quantity')}
                                            id="cart-quantity-input-subtract"
                                            width="11"
                                            height="11"
                                            viewBox="0 0 11 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_10158_65576)">
                                                <path
                                                    d="M-0.00390625 5.90234H11.0039C11.1133 5.90234 11.207 5.86328 11.2852 5.78516C11.3633 5.70182 11.4023 5.60547 11.4023 5.49609C11.4023 5.38672 11.3633 5.29297 11.2852 5.21484C11.207 5.13672 11.1133 5.09766 11.0039 5.09766H-0.00390625C-0.0768229 5.09766 -0.144531 5.11589 -0.207031 5.15234C-0.264323 5.1888 -0.311198 5.23828 -0.347656 5.30078C-0.384115 5.35807 -0.402344 5.42318 -0.402344 5.49609C-0.402344 5.57422 -0.384115 5.64453 -0.347656 5.70703C-0.311198 5.76432 -0.264323 5.8112 -0.207031 5.84766C-0.144531 5.88411 -0.0768229 5.90234 -0.00390625 5.90234Z"
                                                    fill="#0066CC"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_10158_65576">
                                                    <rect width="11" height="11" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <input
                                            className={cx('input-quantity')}
                                            name="itemquantity"
                                            id="itemquantity"
                                            type="text"
                                            defaultValue={1}
                                            aria-label="Số lượng"
                                        />
                                        <svg
                                            className={cx('icon-quantity')}
                                            id="cart-quantity-input-add"
                                            width="12"
                                            height="13"
                                            viewBox="0 0 12 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_10158_65579)">
                                                <path
                                                    d="M-0.304688 6.5C-0.304688 6.61458 -0.265625 6.71094 -0.1875 6.78906C-0.104167 6.86719 -0.0104167 6.90625 0.09375 6.90625H5.19531V12.0078C5.19531 12.1172 5.23438 12.2109 5.3125 12.2891C5.39583 12.3672 5.49219 12.4062 5.60156 12.4062C5.71094 12.4062 5.80469 12.3672 5.88281 12.2891C5.96094 12.2109 6 12.1172 6 12.0078V6.90625H11.1016C11.2109 6.90625 11.3047 6.86719 11.3828 6.78906C11.4609 6.71094 11.5 6.61458 11.5 6.5C11.5 6.39062 11.4609 6.29688 11.3828 6.21875C11.3047 6.14062 11.2109 6.10156 11.1016 6.10156H6V1C6 0.890625 5.96094 0.796875 5.88281 0.71875C5.80469 0.635417 5.71094 0.59375 5.60156 0.59375C5.49219 0.59375 5.39583 0.635417 5.3125 0.71875C5.23438 0.796875 5.19531 0.890625 5.19531 1V6.10156H0.09375C-0.0104167 6.10156 -0.104167 6.14062 -0.1875 6.21875C-0.265625 6.29688 -0.304688 6.39062 -0.304688 6.5Z"
                                                    fill="#0066CC"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_10158_65579">
                                                    <rect
                                                        width="12"
                                                        height="12"
                                                        fill="white"
                                                        transform="translate(0 0.5)"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </td>
                                <td className={cx('subtotal')}>Toàn bộ</td>
                                <td className={cx('remove-from-cart')}>
                                    <input
                                        type="checkbox"
                                        name="removefromcart"
                                        id="removefromcart"
                                        value="111724"
                                        aria-label="Tẩy"
                                    />
                                    <button type="button" name="updatecart" className={cx('remove-btn')}></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={cx('cart-options')}>
                    <div className={cx('common-button')}>
                        <button type="submit" name="updatecart" id="updatecart" className={cx('update-cart-button')}>
                            Cập nhật giỏ hàng
                        </button>
                        <button type="submit" name="continueshopping" className={cx('continue-shopping-button')}>
                            Tiếp tục mua sắm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartDetail;
