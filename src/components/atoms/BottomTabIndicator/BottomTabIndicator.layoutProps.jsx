import { theme } from '@styles';
import AchievementTabIcon from '@svgs/achievement.svg';
import DiscoverTabIcon from '@svgs/discover.svg';
import LibraryTabIcon from '@svgs/library.svg';
import ProfileTabIcon from '@svgs/profile.svg';
import React from 'react';

export const indicatorIconByVariant = {
  achievement: {
    [false]: (
      <AchievementTabIcon stroke={theme.colors.cinder} strokeWidth={2} />
    ),
    [true]: (
      <AchievementTabIcon
        fill={theme.colors.electricViolet}
        stroke={theme.colors.electricViolet}
        strokeWidth={2}
      />
    ),
  },
  discover: {
    [false]: <DiscoverTabIcon stroke={theme.colors.cinder} strokeWidth={2} />,
    [true]: <DiscoverTabIcon fill={theme.colors.electricViolet} />,
  },
  library: {
    [false]: <LibraryTabIcon stroke={theme.colors.cinder} strokeWidth={2} />,
    [true]: (
      <LibraryTabIcon
        fill={theme.colors.electricViolet}
        stroke={theme.colors.electricViolet}
        strokeWidth={2}
      />
    ),
  },
  profile: {
    [false]: <ProfileTabIcon stroke={theme.colors.cinder} strokeWidth={2} />,
    [true]: (
      <ProfileTabIcon
        fill={theme.colors.electricViolet}
        stroke={theme.colors.electricViolet}
        strokeWidth={2}
      />
    ),
  },
};
