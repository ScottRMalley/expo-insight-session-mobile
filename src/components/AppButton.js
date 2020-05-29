import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as PropTypes from 'prop-types';
import {colors} from '../config/theme';


export default function AppButton({title, onPress, disabled}){
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.button, disabled && styles.disabled]}>
        <Text style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

AppButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
};

AppButton.defaultProps = {
  title: '',
  onPress: () => {},
  disabled: false,
};

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 60,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    justifyContent: 'center'
  },
  disabled: {
    opacity: 0.1,
  },
  text: {
    alignSelf: 'center',
    color: colors.bright,
    fontSize: 25,
  },
});