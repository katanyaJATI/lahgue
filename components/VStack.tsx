import React, { Children, Fragment } from 'react';
import { View, ViewProps, ViewStyle, StyleSheet } from 'react-native';

type VStackProps = ViewProps & {
  spacing?: number;
  children?: React.ReactNode;
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  flex?: boolean;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

function VStack({
  children,
  spacing = 0,
  align,
  justify,
  style,
  flex,
  mt,
  mb,
  ml,
  mr,
  ...props
}: VStackProps) {
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
          <View style={{ height: spacing }} />
        )}
      </Fragment>
    );
  });
  return (
    <View
      style={[
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

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default VStack;
