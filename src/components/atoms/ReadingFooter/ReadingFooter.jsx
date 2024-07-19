import { Flex, theme } from '@styles';
import ArrowLeftTabIcon from '@svgs/arrow-left-filled.svg';
import ArrowRightTabIcon from '@svgs/arrow-right-filled.svg';
import MenuTabIcon from '@svgs/menu.svg';
import SettingsTabIcon from '@svgs/settings.svg';
import { bool, func } from 'prop-types';
import React, { useMemo } from 'react';
import { Pressable } from 'react-native';

const ReadingFooter = ({
  leftNavigationButtonDisabled,
  onLeftNavigationButtonPress,
  onRightNavigationButtonPress,
  rightNavigationButtonDisabled,
}) => {
  const tabProps = useMemo(
    () => [
      { disabled: false, icon: MenuTabIcon, onPress: () => {} },
      { disabled: false, icon: SettingsTabIcon, onPress: () => {} },
      {
        disabled: leftNavigationButtonDisabled,
        icon: ArrowLeftTabIcon,
        onPress: onLeftNavigationButtonPress,
      },
      {
        disabled: rightNavigationButtonDisabled,
        icon: ArrowRightTabIcon,
        onPress: onRightNavigationButtonPress,
      },
    ],
    [
      leftNavigationButtonDisabled,
      onLeftNavigationButtonPress,
      onRightNavigationButtonPress,
      rightNavigationButtonDisabled,
    ]
  );

  return (
    <Flex
      alignItems="flex-start"
      backgroundColor={theme.colors.white}
      borderTopColor={theme.colors.whisper}
      borderTopWidth="1px"
      flexDirection="row"
      height="90px"
      justifyContent="space-between"
      paddingX="20px"
      width="100%"
    >
      {tabProps.map((tab) => (
        <Flex
          alignItems="center"
          as={Pressable}
          disabled={tab.disabled}
          height="48px"
          justifyContent="center"
          minWidth="48px"
          onPress={tab.onPress}
        >
          <Flex as={tab.icon} />
        </Flex>
      ))}
    </Flex>
  );
};

ReadingFooter.propTypes = {
  leftNavigationButtonDisabled: bool.isRequired,
  onLeftNavigationButtonPress: func.isRequired,
  onRightNavigationButtonPress: func.isRequired,
  rightNavigationButtonDisabled: bool.isRequired,
};

export default ReadingFooter;
