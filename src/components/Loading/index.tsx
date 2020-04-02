import React from 'react';
import cxbind from 'classnames/bind';
import styles from './loading.module.scss';

const cx = cxbind.bind(styles);

interface LoadingProps {
  isVisible: boolean;
}

const Loading: React.FunctionComponent<LoadingProps> = ({
  isVisible
}: LoadingProps) => (
  <div
    className={cx({
      'loading-container': true,
      visible: isVisible
    })}
  >
    <p>Loading...</p>
  </div>
);

export default Loading;
