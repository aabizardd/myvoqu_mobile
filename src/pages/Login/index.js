import {faArrowLeft, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

import {Modal} from '../../components';

const colorPrimary = '#1DA1F2';
const {height, width} = Dimensions.get('window');

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: false,
    };
  }

  belum_dibuat = () => {
    this.setState(previousState => ({content: !previousState.content}));
    setTimeout(() => {
      this.setState(previousState => ({
        content: !previousState.content,
      }));
    }, 2000);
  };

  componentDidMount() {
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={25}
              color={colorPrimary}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: 'BalooDa2-Bold',
              fontSize: 25,
              color: colorPrimary,
            }}>
            MyVoQu
          </Text>

          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 15,
              color: colorPrimary,
            }}
            onPress={() => this.belum_dibuat()}>
            Daftar
          </Text>
        </View>

        <View style={styles.login}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 15}}>
            Masuk ke MyVoQu
          </Text>

          <TextInput
            placeholder="Telepon atau alamat email"
            placeholderTextColor="#8E8E8E"
            style={[styles.textInput, {marginTop: 30}]}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#8E8E8E"
            style={[styles.textInput, {marginTop: 15}]}
            secureTextEntry={true}
          />

          <Text
            style={{
              // marginTop: 100,
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              color: '#8E8E8E',
              // backgroundColor: 'red',
              padding: 10,
              position: 'absolute',
              alignSelf: 'center',
              bottom: 0,
            }}
            onPress={() => this.props.navigation.navigate('LupaPassword')}>
            Lupa kata sandi?
          </Text>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.buttonMasuk}
            onPress={() => this.belum_dibuat()}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 12,
                color: 'white',
              }}>
              Masuk
            </Text>
          </TouchableOpacity>
        </View>

        {
          // Display the modal in screen when state object "modal" is true.
          // Hide the modal in screen when state object "modal" is false.
          this.state.content ? (
            <Modal
              visibility={true}
              message="Halaman belum dibuat"
              icon={require('../../../assets/icons/sad.png')}
            />
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 50,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  login: {
    paddingHorizontal: 15,
    position: 'absolute',
    top: 150,
    // backgroundColor: 'red',
    height: height / 3.5,
    width: '100%',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#CDCDCD',
    width: '100%',
    color: '#333',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    //   backgroundColor: 'red',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    // backgroundColor: 'red',
    borderTopWidth: 1,
    borderTopColor: '#F2F2F2',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttonMasuk: {
    marginRight: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: colorPrimary,
    borderRadius: 40,
  },
});
