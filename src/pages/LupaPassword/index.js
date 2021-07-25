import React, {Component} from 'react';
import {faArrowLeft, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';

import {Modal} from '../../components';

const colorPrimary = '#1DA1F2';
const {height, width} = Dimensions.get('window');

export default class LupaPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: false,
    };
  }

  cari = () => {
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
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
              color: colorPrimary,
              marginLeft: 20,
            }}>
            Lupa Password
          </Text>
        </View>

        <View style={styles.login}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 15}}>
            Temukan akun MyVoQu anda
          </Text>

          <Text
            style={{fontFamily: 'Poppins-Light', fontSize: 11, marginTop: 25}}>
            Masukkan email, nomor ponsel, atau nama pengguna Anda
          </Text>

          <TextInput style={[styles.textInput]} keyboardType="default" />

          <TouchableOpacity style={styles.btnCari} onPress={() => this.cari()}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
              }}>
              Cari
            </Text>
          </TouchableOpacity>
        </View>

        {
          // Display the modal in screen when state object "modal" is true.
          // Hide the modal in screen when state object "modal" is false.
          this.state.content ? (
            <Modal
              visibility={true}
              message="Kode OTP berhasil dikirim"
              icon={require('../../../assets/icons/success.png')}
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
    width: '100%',
    paddingTop: 50,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  login: {
    paddingHorizontal: 15,
    position: 'absolute',
    top: 120,
    height: height / 3.5,
    width: '100%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CDCDCD',
    width: '100%',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    borderRadius: 40,
    height: 45,
    paddingHorizontal: 20,
    color: 'black',
    marginTop: 15,
    //   backgroundColor: 'red',
  },
  btnCari: {
    backgroundColor: colorPrimary,
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 35,
    paddingVertical: 8,
    borderRadius: 100,
  },
});
