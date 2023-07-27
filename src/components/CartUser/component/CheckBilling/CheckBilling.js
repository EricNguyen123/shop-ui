import classNames from 'classnames/bind';
import styles from './CheckBilling.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CheckBilling() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Thông tin thanh toán</div>
            <div className={cx('content-not-login')}>
                <p>Đăng nhập ngay để nhận được “điểm thưởng” hấp dẫn khi mua hàng thành công các sản phẩm tại Shop</p>
                <Link className={cx('login-link-btn')}>Đăng nhập ngay</Link>
            </div>
            <div className={cx('all-checkout')}>
                <div className={cx('checkout-billing-load')}>
                    <div className={cx('checkout-data')}>
                        <div className={cx('enter-address')}>
                            <div className={cx('inputs', 'input-name')}>
                                <input
                                    placeholder="Tên"
                                    type="text"
                                    id="BillingNewAddress_FirstName"
                                    name="BillingNewAddress.FirstName"
                                />
                            </div>
                            <div className={cx('inputs', 'input-phone-number')}>
                                <input
                                    placeholder="Số điện thoại"
                                    type="tel"
                                    id="BillingNewAddress_PhoneNumber"
                                    name="BillingNewAddress.PhoneNumber"
                                />
                            </div>
                            <div className={cx('inputs', 'input-email')}>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    id="BillingNewAddress_Email"
                                    name="BillingNewAddress.Email"
                                />
                            </div>
                            <div className={cx('title-receive-method')}>Hình thức nhận hàng</div>
                            <div className={cx('inputs', 'receive-method')}>
                                <input type="radio" id="receive-store" name="receive" value="0" defaultChecked />
                                <label htmlFor="receive-store">Nhận tại cửa hàng</label>
                                <span className={cx('space')}></span>
                                <input type="radio" id="receive-home" name="receive" value="1" />
                                <label htmlFor="receive-home">Giao tận nơi</label>
                            </div>
                            <div className={cx('inputs', 'province')}>
                                <label htmlFor="BillingNewAddress_StateProvinceId">Tỉnh, thành phố:</label>
                                <select
                                    data-trigger="state-select"
                                    data-county="#BillingNewAddress_CountyId"
                                    data-loading="#states-loading-progress"
                                    id="BillingNewAddress_StateProvinceId"
                                    name="BillingNewAddress.StateProvinceId"
                                >
                                    <option value="0">Chọn tỉnh, thành phố</option>
                                    <option value="1755">Hà Nội</option>
                                    <option value="1756">Thành phố Hồ Chí Minh</option>
                                    <option value="1757">Đà Nẵng</option>
                                    <option value="1758">Hải Phòng</option>
                                    <option value="1759">Cần Thơ</option>
                                    <option value="1812">An Giang</option>
                                    <option value="1805">Bà Rịa - Vũng Tàu</option>
                                    <option value="1816">Bạc Liêu</option>
                                    <option value="1773">Bắc Giang</option>
                                    <option value="1762">Bắc Kạn</option>
                                    <option value="1776">Bắc Ninh</option>
                                    <option value="1808">Bến Tre</option>
                                    <option value="1803">Bình Dương</option>
                                    <option value="1791">Bình Định</option>
                                    <option value="1801">Bình Phước</option>
                                    <option value="1795">Bình Thuận</option>
                                    <option value="1817">Cà Mau</option>
                                    <option value="1761">Cao Bằng</option>
                                    <option value="1798">Đắk Lắk</option>
                                    <option value="1799">Đắk Nông</option>
                                    <option value="1765">Điện Biên</option>
                                    <option value="1804">Đồng Nai</option>
                                    <option value="1811">Đồng Tháp</option>
                                    <option value="1797">Gia Lai</option>
                                    <option value="1760">Hà Giang</option>
                                    <option value="1780">Hà Nam</option>
                                    <option value="1785">Hà Tĩnh</option>
                                    <option value="1777">Hải Dương</option>
                                    <option value="1814">Hậu Giang</option>
                                    <option value="1769">Hòa Bình</option>
                                    <option value="1778">Hưng Yên</option>
                                    <option value="1813">Kiên Giang</option>
                                    <option value="1796">Kon Tum</option>
                                    <option value="1793">Khánh Hòa</option>
                                    <option value="1766">Lai Châu</option>
                                    <option value="1771">Lạng Sơn</option>
                                    <option value="1764">Lào Cai</option>
                                    <option value="1800">Lâm Đồng</option>
                                    <option value="1806">Long An</option>
                                    <option value="1781">Nam Định</option>
                                    <option value="1782">Ninh Bình</option>
                                    <option value="1794">Ninh Thuận</option>
                                    <option value="1784">Nghệ An</option>
                                    <option value="1774">Phú Thọ</option>
                                    <option value="1792">Phú Yên</option>
                                    <option value="1786">Quảng Bình</option>
                                    <option value="1789">Quảng Nam</option>
                                    <option value="1772">Quảng Ninh</option>
                                    <option value="1790">Quảng Ngãi</option>
                                    <option value="1787">Quảng Trị</option>
                                    <option value="1815">Sóc Trăng</option>
                                    <option value="1767">Sơn La</option>
                                    <option value="1802">Tây Ninh</option>
                                    <option value="1807">Tiền Giang</option>
                                    <option value="1763">Tuyên Quang</option>
                                    <option value="1779">Thái Bình</option>
                                    <option value="1770">Thái Nguyên</option>
                                    <option value="1783">Thanh Hóa</option>
                                    <option value="1788">Thừa Thiên Huế</option>
                                    <option value="1809">Trà Vinh</option>
                                    <option value="1810">Vĩnh Long</option>
                                    <option value="1775">Vĩnh Phúc</option>
                                    <option value="1768">Yên Bái</option>
                                </select>
                                <span
                                    id="states-loading-progress"
                                    style={{ display: 'none' }}
                                    className={cx('please-wait')}
                                >
                                    Chờ đợi...
                                </span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('checkout-payment-load')}></div>
            </div>
        </div>
    );
}

export default CheckBilling;
