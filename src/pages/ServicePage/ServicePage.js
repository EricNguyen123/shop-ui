import classNames from 'classnames/bind';
import styles from './ServicePage.module.scss';
import ServicePageContent from '~/components/ServicePageContent';

const cx = classNames.bind(styles);

function ServicePage() {
    return (
        <div className={cx('wrapper')}>
            <ServicePageContent title="Dịch vụ" />
        </div>
    );
}

export default ServicePage;
