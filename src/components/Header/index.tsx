import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo-cat.svg';
import { getUserStorage } from '../../data/storage';
import cxbind from 'classnames/bind';
import styles from './header.module.scss';

const cx = cxbind.bind(styles);

const Header: React.FunctionComponent<{}> = ({}) => {
  const user = getUserStorage();
  return (
    <header className={cx('header')}>
      <SearchIcon className={cx('icon')} />
      <Logo className={cx('icon')} />
      <img src={user.avatar} />
    </header>
  );
};

export default Header;
