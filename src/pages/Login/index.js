import {
  faArrowLeft,
  faEye,
  faEyeSlash,
  faLock,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
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
import TouchID from 'react-native-touch-id';

const colorPrimary = '#1DA1F2';
const {height, width} = Dimensions.get('window');

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: false,
      contentSidikJari: false,
      showPassword: true,
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

  _pressHandler = () => {
    TouchID.authenticate(
      'to demo this react-native component',
      optionalConfigObject,
    )
      .then(success => {
        this.setState(previousState => ({
          contentSidikJari: !previousState.contentSidikJari,
        }));
        setTimeout(() => {
          this.setState(previousState => ({
            contentSidikJari: !previousState.contentSidikJari,
          }));
        }, 2000);
      })
      .catch(error => {
        AlertIOS.alert('Authentication Failed');
      });
  };

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
              marginLeft: 20,
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

          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              marginTop: 10,
            }}>
            <TextInput
              placeholder="Telepon atau alamat email"
              placeholderTextColor="#8E8E8E"
              style={[styles.textInput, {paddingLeft: 10, paddingTop: 20}]}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              marginTop: 10,
            }}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#8E8E8E"
              style={[styles.textInput, {paddingLeft: 10, paddingTop: 20}]}
              secureTextEntry={this.state.showPassword}
              onChangeText={password => this.setState({password})}
            />

            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 0,

                right: 0,
                bottom: 0,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'flex-end',
                // backgroundColor: 'red',
              }}
              onPress={() =>
                this.setState({showPassword: !this.state.showPassword})
              }>
              {this.state.showPassword == false ? (
                <FontAwesomeIcon
                  icon={faEye}
                  size={20}
                  color={colorPrimary}
                  // style={{display: 'flex'}}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  size={20}
                  color={colorPrimary}
                  // style={{display: 'flex'}}
                />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              color: '#8E8E8E',
              padding: 10,
              marginTop: 10,
              alignSelf: 'center',
              // backgroundColor: 'red',
            }}
            onPress={() => this.props.navigation.navigate('LupaPassword')}>
            Lupa kata sandi?
          </Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={this._pressHandler}>
          <Image
            source={require('../../../assets/icons/fingerPrint.png')}
            style={{
              width: 70,
              height: 70,
            }}
          />
        </TouchableOpacity>

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

        {
          // Display the modal in screen when state object "modal" is true.
          // Hide the modal in screen when state object "modal" is false.
          this.state.contentSidikJari ? (
            <Modal
              visibility={true}
              message="Sidik jari terbaca"
              icon={require('../../../assets/icons/thumb.png')}
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
    height: height,
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
