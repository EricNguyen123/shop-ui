import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Breadcrumb from '~/components/Breadcrumb';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb directive={true} title="Đăng nhập" />
            <div className={cx('login-page', 'page')}>
                <div className={cx('page-body')}>
                    <div className={cx('customer-blocks')}>
                        <div className={cx('new-wrapper')}>
                            <div className={cx('topic-block')}>
                                <div className={cx('topic-block-body')}>
                                    <p>
                                        <Image
                                            className={cx('img')}
                                            src="https://shopdunk.com/images/uploaded/banner/VNU_M492_08%201.jpeg"
                                            alt=""
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('returning-wrapper')}>
                            <form>
                                <div className={cx('page-title')}>
                                    <h1>Đăng nhập</h1>
                                </div>
                                <div className={cx('form-fields')}>
                                    <div className={cx('inputs')}>
                                        <label htmlFor="Username">Tên đăng nhập:</label>
                                        <input
                                            className={cx('username')}
                                            autofocus=""
                                            type="text"
                                            id="Username"
                                            name="Username"
                                        />
                                        <span
                                            className={cx('field-validation-valid')}
                                            data-valmsg-for="Username"
                                            data-valmsg-replace="true"
                                        ></span>
                                    </div>
                                    <div className={cx('inputs')}>
                                        <label htmlFor="Password">Mật khẩu:</label>
                                        <input
                                            className={cx('password')}
                                            type="password"
                                            id="Password"
                                            name="Password"
                                        />
                                        <span
                                            className={cx('field-validation-valid')}
                                            data-valmsg-for="Password"
                                            data-valmsg-replace="true"
                                        ></span>
                                    </div>
                                    <div className={cx('inputs', 'reversed')}>
                                        <input
                                            type="checkbox"
                                            data-val="true"
                                            data-val-required="The Nhớ mật khẩu field is required."
                                            id="RememberMe"
                                            name="RememberMe"
                                            value="true"
                                        />
                                        <label htmlFor="RememberMe">Nhớ mật khẩu</label>
                                        <span className={cx('forgot-password')}>
                                            <Link className={cx('link-forgot-password')}>Quên mật khẩu?</Link>
                                        </span>
                                    </div>
                                    <div className={cx('buttons')}>
                                        <button type="submit" className={cx('login-button')}>
                                            Đăng nhập
                                        </button>
                                    </div>
                                    <div className={cx('buttons-forgot')}>
                                        <label> Bạn chưa có tài khoản? </label>
                                        <button type="button" className={cx('register-button')}>
                                            Tạo tài khoản ngay
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
