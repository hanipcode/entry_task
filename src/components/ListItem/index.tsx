import React from 'react';
import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import cxbind from 'classnames/bind';
import { ReactComponent as CheckOutline } from '../../assets/icons/check-outline.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import { ReactComponent as LikeOutline } from '../../assets/icons/like-outline.svg';
import { ReactComponent as Like } from '../../assets/icons/like.svg';
import { IPost } from '../../types/post.types';
import styles from './listItem.module.scss';

const cx = cxbind.bind(styles);

interface Props {
  post: IPost;
  isLiked?: boolean;
  isParticipated?: boolean;
  likePost: Function;
  participatePost: Function;
}

const ListItem: React.FunctionComponent<Props> = ({
  post,
  isLiked = false,
  isParticipated = false,
  likePost,
  participatePost
}: Props) => {
  const likeCount = isLiked ? post.likes.length + 1 : post.likes.length;
  const participateCount = isParticipated
    ? post.participants.length + 1
    : post.participants.length;

  const likeText = isLiked ? 'I Like It' : 'Likes';
  const participateText = isParticipated ? 'I am Going !' : 'Going';

  const LikeComponent = isLiked ? (
    <Like className={cx('icon', 'selected-heart')} />
  ) : (
    <LikeOutline className={cx('icon')} />
  );
  const ParticipatedComponent = isParticipated ? (
    <Check className={cx('icon', 'selected')} />
  ) : (
    <CheckOutline className={cx('icon')} />
  );

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
      <div className={cx('action-container')}>
        <div onClick={() => participatePost(post.id)}>
          {ParticipatedComponent}
          {participateCount} {participateText}
        </div>
        <div onClick={() => likePost(post.id)}>
          {LikeComponent}
          {likeCount} {likeText}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
