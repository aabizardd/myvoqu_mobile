import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {Modal} from '../../components';

const {height, width} = Dimensions.get('window');
const colorPrimary = '#1DA1F2';
export default class Awal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: false,
    };
  }

  componentDidMount() {
    StatusBar.setHidden(false);
  }

  belum_dibuat = () => {
    this.setState(previousState => ({content: !previousState.content}));
    setTimeout(() => {
      this.setState(previousState => ({
        content: !previousState.content,
      }));
    }, 2000);
  };

  header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.quranKu}> MyVoQu </Text>
      </View>
    );
  };

  isi = () => {
    return (
      <View style={styles.buatAkun}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 17,
            width: '100%',
            textAlign: 'left',
          }}>
          Menghafalkan Alquran Semudah Tersenyum Dengan Gerakan Dan Video.
        </Text>
        <TouchableOpacity
          style={styles.btnBuatAkun}
          onPress={() => this.belum_dibuat()}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              textAlign: 'center',
              color: 'white',
            }}>
            Buat Akun
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  bottom = () => {
    return (
      <View style={styles.textBottom}>
        <View style={{flexDirection: 'row', position: 'absolute', bottom: 15}}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              marginRight: 5,
            }}>
            Sudah Punya Akun?
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: colorPrimary,
              fontSize: 12,
            }}
            onPress={() => this.props.navigation.navigate('Login')}>
            Masuk
          </Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.page}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="rgba(0,0,0,0)"
        />
        {this.header()}
        {this.isi()}
        {this.bottom()}

        {
          // Display the modal in screen when state object "modal" is true.
          // Hide the modal in screen when state object "modal" is false.
          this.state.content ? (
            <View style={{position: 'absolute'}}>
              <Modal
                visibility={true}
                message="Halaman belum dibuat"
                icon={require('../../../assets/icons/sad.png')}
              />
            </View>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    flexDirection: 'column',
  },
  header: {
    // backgroundColor: 'red',
    marginTop: 0,
    flex: 1,
  },
  quranKu: {
    textAlign: 'center',
    fontFamily: 'BalooDa2-Bold',
    fontSize: 30,
    color: colorPrimary,
    paddingTop: 40,

    // position: 'absolute',
  },
  buatAkun: {
    // backgroundColor: 'red',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  btnBuatAkun: {
    marginTop: 10,
    backgroundColor: colorPrimary,
    borderRadius: 40,
    padding: 10,
    width: '100%',
  },
  textBottom: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'skyblue',
  },
});
