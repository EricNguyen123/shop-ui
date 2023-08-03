/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import styles from './DeliveryAddress.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DeliveryAddress() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('page-title-wrapper')}>
                <h1 className={cx('page-title')}>
                    <span className={cx('base')} data-ui-id="page-title-wrapper">
                        Địa chỉ giao hàng
                    </span>
                </h1>
                <div className={cx('des')}>Quản lý thông tin địa chỉ giao hàng</div>
            </div>
            <div className={cx('box-address-list')}>
                <div className={cx('block-title')}>
                    <strong>Thêm lối vào địa chỉ</strong>
                </div>
                <div className={cx('box-content')}>
                    <div className={cx('additional-addresses')}>
                        <table
                            className={cx('data', 'table-additional-addresses-items', 'history')}
                            id="additional-addresses-table"
                        >
                            <caption className={cx('table-caption')}>Additional addresses</caption>
                            <thead>
                                <tr>
                                    <th scope="col" className={cx('col', 'firstname')}>
                                        Tên
                                    </th>
                                    <th scope="col" className={cx('col', 'streetaddress')}>
                                        Địa chỉ
                                    </th>
                                    <th scope="col" className={cx('col', 'actions')}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-th="Tên" className={cx('col', 'firstname')}>
                                        Nguyen Huy
                                    </td>

                                    <td data-th="Địa chỉ" className={cx('col', 'streetaddress')}>
                                        155 Nguyễn Văn Trỗi, Mộ Lao, Hà Đông, Phường Mộ Lao, Quận Hà Đông, Thành phố Hà
                                        Nội
                                        <div className={cx('phone')}>0972457312</div>
                                    </td>

                                    <td data-th="Thao tác" className={cx('col', 'actions')}>
                                        <div className={cx('addresses-actions')}>
                                            <div className={cx('set-shipping')}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        className={cx('checked-default-address')}
                                                        value="13501"
                                                        style={{ display: 'block' }}
                                                    />
                                                    <span>Mặc định</span>
                                                </label>
                                            </div>
                                            <div className={cx('actions-edit')}>
                                                <a
                                                    className={cx('action', 'edit', 'open-modal-edit-address')}
                                                    data-address="13501"
                                                    data-addr-name="Nguyen"
                                                    data-addr-telephone="0972457312"
                                                    data-last-name="Huy"
                                                    data-addr-street="155 Nguyễn Văn Trỗi, Mộ Lao, Hà Đông"
                                                    data-addr-city="Thành phố Hà Nội"
                                                    data-addr-district="Quận Hà Đông"
                                                    data-addr-ward="Phường Mộ Lao"
                                                >
                                                    <span>Chỉnh sửa</span>
                                                </a>
                                                <a className={cx('action', 'delete')} href="#" data-address="13501">
                                                    <span>Xóa</span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('customer-addresses-toolbar', 'toolbar', 'bottom')}></div>
                </div>
                <div className={cx('actions-toolbar')}>
                    <div className={cx('primary')}>
                        <button
                            type="button"
                            id="open_modal_add_address"
                            title="Thêm địa chỉ mới"
                            className={cx('action', 'primary', 'add')}
                        >
                            <span>Thêm địa chỉ mới</span>
                        </button>
                    </div>
                </div>
            </div>
            <aside className={cx('modal-popup')} style={{ display: 'none' }}>
                <div className={cx('modal-inner-wrap')}>
                    <header className={cx('modal-header')}>
                        <h1 id="modal-title-93" className={cx('modal-title')} data-role="title">
                            Địa chỉ giao hàng
                        </h1>

                        <button className={cx('action-close')} data-role="closeBtn" type="button">
                            <span>Đóng</span>
                        </button>
                    </header>
                    <div className={cx('modal-content')}>
                        <form className={cx('form-address-edit')}>
                            <fieldset className={cx('fieldset')}>
                                <legend className={cx('legend')}>
                                    <span>Thông tin liên hệ</span>
                                </legend>
                                <br />
                                <input name="form_key" type="hidden" value="XH79YeNbqR4hTC9J" />
                                <input type="hidden" name="success_url" value="" />
                                <input type="hidden" name="error_url" value="" />
                                <div className={cx('field-group-name')}>
                                    <div className={cx('field', 'field-name-lastname', 'required')}>
                                        <label className={cx('label')} htmlFor="lastname">
                                            <span>Họ</span>
                                        </label>
                                        <div className={cx('control')}>
                                            <input
                                                type="text"
                                                id="lastname"
                                                name="lastname"
                                                value="Huy"
                                                title="Họ"
                                                className={cx('input-text ', 'required-entry')}
                                                data-validate="{required:true}"
                                                autoComplete="off"
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>

                                    <div className={cx('field', 'field-name-firstname', 'required')}>
                                        <label className={cx('label')} htmlFor="firstname">
                                            <span>Tên</span>
                                        </label>
                                        <div className={cx('control')}>
                                            <input
                                                type="text"
                                                id="firstname"
                                                name="firstname"
                                                value="Nguyen"
                                                title="Tên"
                                                className={cx('input-text ', 'required-entry')}
                                                data-validate="{required:true}"
                                                autoComplete="off"
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className={cx('fieldset')} id="telephone-address">
                                <div className={cx('field', 'telephone', 'required')}>
                                    <label className={cx('label')} htmlFor="telephone">
                                        <span>Số điện thoại </span>
                                    </label>
                                    <div className={cx('control')}>
                                        <input
                                            type="tel"
                                            name="telephone"
                                            id="telephone"
                                            value=""
                                            title="Số điện thoại"
                                            className={cx('input-text', 'validate-phone', 'required-entry')}
                                            data-validate="{required:true, 'validate-telephone-require': true}"
                                            aria-required="true"
                                        />
                                    </div>
                                    <div className={cx('message-wrapper')}>
                                        <span
                                            className={cx('otp-result-message')}
                                            id="otp-result-message-register"
                                        ></span>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className={cx('fieldset')}>
                                <legend className={cx('legend')}>
                                    <span>Địa chỉ</span>
                                </legend>
                                <div className={cx('field', 'street', 'required')}>
                                    <label className={cx('label')} htmlFor="street_1">
                                        <span>Địa chỉ</span>
                                    </label>
                                    <div className={cx('control')}>
                                        <input
                                            type="text"
                                            name="street[]"
                                            value=""
                                            title="Địa chỉ"
                                            placeholder=""
                                            id="street_1"
                                            data-validate="{required:true}"
                                            autoComplete="off"
                                            aria-required="true"
                                        />
                                    </div>
                                </div>
                                <div className={cx('field', 'city', 'required')}>
                                    <label className={cx('label')} htmlFor="city_id">
                                        <span>Tỉnh/Thành phố</span>
                                    </label>
                                    <div className={cx('control')}>
                                        <select
                                            id="city_id"
                                            name="city_id"
                                            title="Tỉnh/Thành phố"
                                            className={cx('validate-select', 'district_id')}
                                            required=""
                                            aria-required="true"
                                        >
                                            <option value="" hidden=""></option>
                                            <option value="Hà Nội">Hà Nội</option>
                                            <option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
                                            <option value="Đà Nẵng">Đà Nẵng</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="city"
                                            style={{ display: 'none' }}
                                            value=""
                                            title="Tỉnh/Thành phố"
                                            placeholder="Tỉnh/Thành phố"
                                            className={cx('input-text', 'required-entry')}
                                            id="city"
                                            autoComplete="off"
                                            aria-required="true"
                                        />
                                    </div>
                                </div>
                                <div className={cx('field', 'district', 'required')}>
                                    <label className={cx('label')} htmlFor="district_id">
                                        <span>Quận/Huyện</span>
                                    </label>
                                    <div className={cx('control')}>
                                        <select
                                            id="district_id"
                                            name="district_id"
                                            title="Quận/Huyện"
                                            className={cx('validate-select', 'district_id')}
                                            required=""
                                            aria-required="true"
                                        ></select>
                                        <input
                                            type="text"
                                            id="district"
                                            name="district"
                                            style={{ display: 'none' }}
                                            value=""
                                            title="Quận/Huyện"
                                            placeholder="Quận/Huyện"
                                            className={cx('input-text')}
                                            autoComplete="off"
                                            aria-required="true"
                                        />
                                    </div>
                                </div>
                            </fieldset>
                            <div className={cx('actions-toolbar')}>
                                <div className={cx('primary')}>
                                    <button
                                        type="submit"
                                        className={cx('action', 'save', 'primary')}
                                        data-action="save-address"
                                        id="save-address-my-account"
                                        data-address="13501"
                                        title="Xác nhận địa chỉ"
                                    >
                                        <span>Xác nhận địa chỉ</span>
                                    </button>
                                </div>
                                <div className={cx('secondary')} style={{ display: 'none' }}>
                                    <Link className={cx('action', 'back')}>
                                        <span>Quay lại</span>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default DeliveryAddress;
