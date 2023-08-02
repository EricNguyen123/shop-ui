import classNames from 'classnames/bind';
import styles from './InfoAccount.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function InfoAccount() {
    const [checkChangePassword, setCheckChangePassword] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('page-title-wrapper')}>
                <h1 className={cx('page-title')}>
                    <span className={cx('base')} data-ui-id="page-title-wrapper">
                        Thông tin tài khoản
                    </span>
                </h1>
                <div className={cx('des')}>Bạn có thể cập nhật thông tin của mình ở trang này</div>
            </div>
            <div className={cx('box-account-information')}>
                <div className={cx('login-information')}>
                    <form className={cx('form-edit-account')}>
                        <fieldset className={cx('fieldset', 'info')}>
                            <input name="form_key" type="hidden" value="XH79YeNbqR4hTC9J" />
                            <legend className={cx('legend')}>
                                <span>Thông tin đăng nhập</span>
                            </legend>
                            <div className={cx('box-information')}>
                                <p>
                                    <span>Email:</span>
                                    <strong>huyhuhyhoa@gmail.com</strong>
                                </p>
                                <p>
                                    <span>Số điện thoại:</span>
                                    <strong>0972 457 312</strong>
                                </p>
                            </div>
                            <div className={cx('field', 'choice')}>
                                <input
                                    type="checkbox"
                                    name="change_password"
                                    id="change-password"
                                    data-role="change-password"
                                    value="1"
                                    title="Thay đổi mật khẩu"
                                    className={cx('checkbox')}
                                    style={{ display: 'block' }}
                                    onChange={(e) => {
                                        setCheckChangePassword(e.target.checked);
                                    }}
                                />
                                <label className={cx('label')} htmlFor="change-password">
                                    <span>Thay đổi mật khẩu</span>
                                </label>
                            </div>
                        </fieldset>

                        <fieldset
                            className={cx('fieldset', 'password')}
                            data-container="change-email-password"
                            style={{ display: checkChangePassword ? 'block' : 'none' }}
                        >
                            <div
                                className={cx('field', 'new', 'password', 'required')}
                                data-container="new-password"
                                style={{ display: 'block' }}
                            >
                                <label className={cx('label')} htmlFor="password2">
                                    <span>Mật khẩu mới</span>
                                </label>
                                <div className={cx('control')}>
                                    <input
                                        type="password"
                                        className={cx('input-text')}
                                        name="password"
                                        id="password2"
                                        data-password-min-length="6"
                                        data-password-min-character-sets="3"
                                        data-input="new-password"
                                        autocomplete="off"
                                        aria-required="true"
                                        data-validate="{required:true, 'validate-customer-password':true, 'password-not-equal-to-user-name':'undefined'}"
                                    />
                                    <div
                                        id="password-strength-meter-container"
                                        data-role="password-strength-meter"
                                        aria-live="polite"
                                    >
                                        <div id="password-strength-meter" className={cx('password-strength-meter')}>
                                            Độ mạnh mật khẩu:
                                            <span
                                                id="password-strength-meter-label"
                                                data-role="password-strength-meter-label"
                                            >
                                                Không có mật khẩu
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={cx('field', 'confirmation', 'password', 'required')}
                                data-container="confirm-password"
                                style={{ display: 'block' }}
                            >
                                <label className={cx('label')} htmlFor="password-confirmation2">
                                    <span>Nhập lại mật khẩu mới</span>
                                </label>
                                <div className={cx('control')}>
                                    <input
                                        type="password"
                                        className={cx('input-text')}
                                        name="password_confirmation"
                                        id="password-confirmation2"
                                        data-input="confirm-password"
                                        autocomplete="off"
                                        aria-required="true"
                                        data-validate='{required:true, equalTo:"[data-input=new-password]"}'
                                    />
                                </div>
                            </div>
                            <div className={cx('actions-toolbar')}>
                                <div className={cx('primary')}>
                                    <button type="submit" className={cx('action', 'save', 'primary')} title="Cập nhật">
                                        <span>Cập nhật</span>
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InfoAccount;
