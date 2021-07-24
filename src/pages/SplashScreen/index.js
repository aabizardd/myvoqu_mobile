import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';

import {StackActions} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
const colorPrimary = '#1DA1F2';

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    StatusBar.setHidden(true);

    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Awal'));
    }, 3000);
  }

  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.textMyvoqu}>MyVoQu</Text>
        <View style={styles.bottom}>
          <Text style={styles.tag}>Menghafal Semudah Tersenyum</Text>
          <Image
            source={require('../../../assets/icons/smile.png')}
            style={styles.iconSmile}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colorPrimary,
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  textMyvoqu: {
    textAlign: 'center',
    fontFamily: 'BalooDa2-Bold',
    fontSize: 50,
    color: 'white',
    top: height / 2.5,
  },
  tag: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconSmile: {
    marginTop: 5,
    width: 30,
    height: 30,
  },
});
