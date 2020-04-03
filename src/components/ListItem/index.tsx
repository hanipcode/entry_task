import React from 'react';
import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import cxbind from 'classnames/bind';
import { IPost } from '../../types/post.types';
import styles from './listItem.module.scss';

const cx = cxbind.bind(styles);

interface Props {
  post: IPost;
}

const ListItem: React.FunctionComponent<Props> = ({ post }: Props) => {
  return (
    <div className={cx('listItem')}>
      <header>
        <div>
          <img src={post.avatar} className={cx('avatar')} />
          <p className={cx('username')}>{post.username} </p>
        </div>
        <div className={cx('chip')}>{post.channel_name}</div>
      </header>
      <h2 className={cx('title')}>{post.post_title}</h2>
      <div className={cx('date')}>
        <TimeIcon
          className={cx('icon')}
          stroke="#FFF"
          color="#FFF"
          fillOpacity={0.5}
        />
        <span>{`${post.start_date} - ${post.end_date}`}</span>
      </div>
      <p className={cx('content')}>{post.description.slice(0, 140)}...</p>
      <div className={cx('action-container')}></div>
    </div>
  );
};

export default ListItem;
