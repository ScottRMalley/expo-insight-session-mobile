import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Madoka } from 'react-native-textinput-effects';
import { setName as setNameAction } from '../store/actions/name.action';
import { colors } from '../config/theme';

export default function SetNameInput(){
  const dispatch = useDispatch();
  const setNameRedux = inputName => dispatch(setNameAction(inputName));
  return (
      <Madoka
        label="Name"
        // this is used as active and passive border color
        borderColor={'#aee2c9'}
        inputPadding={16}
        labelHeight={24}
        labelStyle={{ color: colors.highlight }}
        inputStyle={{ color: colors.secondary }}
        onChangeText={text => setNameRedux(text)}
      />
  );
}