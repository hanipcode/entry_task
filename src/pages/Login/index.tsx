import React, { useState } from 'react';
import PageLayout from '../../containers/PageLayout';
import classnames from 'classnames/bind';
import { ReactComponent as CatLogo } from '../../assets/icons/logo-cat.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as PasswordIcon } from '../../assets/icons/password.svg';
import styles from './login.module.scss';
import { useHistory } from 'react-router-dom';
import useLoginService from '../../hooks/useLoginService';
import Loading from '../../components/Loading';

const cx = classnames.bind(styles);

const Login: React.FunctionComponent<{}> = () => {
  const history = useHistory();
  const {
    actionWithParam: initLogin,
    loading: isLoginLoading
  } = useLoginService();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
            <input
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.currentTarget.value)}
            />
          </div>
          <div className={cx('field')}>
            <PasswordIcon className={cx('icon')} />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
            />
          </div>
        </section>

        <section className={cx('footer')}>
          <button
            onClick={() => {
              initLogin({ email: username, password }, () => {
                history.push('/home');
              });
            }}
          >
            SIGN IN
          </button>
        </section>
      </div>
      <Loading isVisible={isLoginLoading} />
    </PageLayout>
  );
};

export default Login;
