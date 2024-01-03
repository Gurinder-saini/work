import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Animated, {
  Extrapolation,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Accordion = props => {
  const {data} = props;
  const {title, content} = data;

  const open = useSharedValue(false);
  const contentheight = useSharedValue(0);
  const contentref = useAnimatedRef();

//   const progress = useDerivedValue(() => {
//     open.value ? withTiming(1) : withTiming(0);
//   });

  const contentanimatedheight = useAnimatedStyle(() => {
    return {
      height: contentheight.value
    };
  });
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
            if (contentheight.value === 0) {
                runOnUI(() => {
                    'worklet';
                    contentheight.value = withTiming(measure(contentref).height)
            })();
          }else {
            contentheight.value = withTiming(0);
          }
          open.value = !open.value;
        }}
        style={styles.title}>
        <Text>{title}</Text>
      </Pressable>
      <Animated.View style={contentanimatedheight}>
        <Animated.View ref={contentref} style={styles.content}>
          <Text>{content}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(90),
    borderWidth: 3,
    borderColor: 'grey',
    borderRadius: responsiveScreenWidth(3),
    justifyContent: 'center',
    paddingHorizontal:responsiveScreenWidth(2),
    overflow:"hidden"
  },
  title: {
    padding: responsiveScreenWidth(4),
  },
  content: {
    position: 'absolute',
    top: 0,
    width: responsiveScreenWidth(80),
    backgroundColor:"lightgrey",
  },
});
