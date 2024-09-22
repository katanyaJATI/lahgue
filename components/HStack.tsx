import React, { Children, Fragment } from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  baseStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
});

type HStackProps = ViewProps & {
  spacing: number;
  children?: React.ReactNode;
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  flex?: boolean;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

function HStack({
  style,
  children,
  spacing,
  align,
  justify,
  flex,
  mt,
  mb,
  ml,
  mr,
  ...props
}: HStackProps) {
  const margin = {
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
  };
  const childArray = Children.toArray(children).filter(Boolean);
  const childrenWithSpacing = childArray.map((child, index) => {
    return (
      <Fragment key={index}>
        {child}
        {index !== childArray.length - 1 && (
          <View
            style={spacing !== Infinity ? { width: spacing } : styles.flex}
          />
        )}
      </Fragment>
    );
  });
  return (
    <View
      style={[
        styles.baseStyle,
        align && { alignItems: align },
        justify && { justifyContent: justify },
        flex && styles.flex,
        margin,
        style,
      ]}
      {...props}
    >
      {childrenWithSpacing}
    </View>
  );
}

export default HStack;
