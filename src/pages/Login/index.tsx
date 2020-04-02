import React from 'react';
import PageLayout from '../../containers/PageLayout';
import classnames from 'classnames/bind';
import { ReactComponent as CatLogo } from '../../assets/icons/logo-cat.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as PasswordIcon } from '../../assets/icons/password.svg';
import styles from './login.module.scss';
import { useHistory } from 'react-router-dom';

const cx = classnames.bind(styles);

const Login: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  return (
    <PageLayout className={cx({ 'login-page': true })}>
      <div className={cx('content')}>
        <section className={cx('header')}>
          <h3>FIND THE MOST LOVED ACTIVITIES</h3>
          <h2>BLACK CAT</h2>
          <CatLogo className={cx('logo')} />
        </section>
        <section className={cx('input-container')}>
          <div className={cx('field')}>
            <UserIcon className={cx('icon')} />
            <input placeholder="Username" />
          </div>
          <div className={cx('field')}>
            <PasswordIcon className={cx('icon')} />
            <input placeholder="Username" type="password" />
          </div>
        </section>

        <section className={cx('footer')}>
          <button onClick={() => history.push('home')}>SIGN IN</button>
        </section>
      </div>
    </PageLayout>
  );
};

export default Login;
