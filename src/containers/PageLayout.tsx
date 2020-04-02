import React from 'react';
import cx from 'classnames';

interface PageLayoutProps {
  className?: string;
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({
  children,
  className
}) => (
  <div
    className={cx({
      'page-container': true,
      [className as string]: !!className
    })}
  >
    {children}
  </div>
);

export default PageLayout;
