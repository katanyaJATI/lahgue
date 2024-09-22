import React, { memo, useMemo, useRef } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../Text";

type CardPostProps = {};

function CardPost({}: CardPostProps) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <Text>Janaka Jati Lasmana</Text>
    </TouchableOpacity>
  );
}

export default memo(CardPost);
