import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import io from 'socket.io-client';
import {BACKEND_URL} from 'react-native-dotenv';
import AppButton from '../components/AppButton';
import {colors} from '../config/theme';
import SetNameInput from '../components/SetNameInput';
import { useSelector } from 'react-redux';

const socket = io.connect(BACKEND_URL);

export default function HomeScreen(){
  const [bugCount, setBugCount] = React.useState(0);
  const name = useSelector(state => state.name);

  React.useEffect(() => {
    if(bugCount > 0){
      socket.emit('bug', name);
    }
  }, [bugCount]);
  
  return (
    <View style={[styles.container, {height: Dimensions.get('window').height}]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Welcome
        </Text>
        <View style={{width: '80%'}}>
          <SetNameInput/>
        </View>
      </View>
      <View style={styles.bugCountContainer}>
        <Text style={styles.bugCountText}>{bugCount}</Text>
        <Text style={styles.bugCountDescription}>Number of times you've bugged Scott</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="BUG SCOTT"
          onPress={() => setBugCount(bugCount + 1)}
          disabled={!name.length}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 5,
    paddingTop: '10%',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  bugCountContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flex: 3,
  },
  titleText: {
    fontSize: 70,
    color: colors.bright,
  },
  nameText: {
    fontSize: 40,
    color: colors.pale,
  },
  bugCountText: {
    fontSize: 80,
    color: colors.highlight
  },
  bugCountDescription: {
    fontSize: 16,
    color: colors.highlight,
  }
});
