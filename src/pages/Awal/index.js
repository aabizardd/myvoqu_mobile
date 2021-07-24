import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');
const colorPrimary = '#1DA1F2';
export default class Awal extends Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <View style={styles.page}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="rgba(0,0,0,0)"
        />
        <Text style={styles.quranKu}> MyVoQu </Text>

        <View style={styles.buatAkun}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 17,
            }}>
            Menghafalkan Alquran Semudah Tersenyum Dengan Gerakan Dan Video.
          </Text>
          <TouchableOpacity style={styles.btnBuatAkun}>
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

        {/* <FontAwesomeIcon icon={faPlus} color={'orange'} size={30} /> */}

        <View style={styles.textBottom}>
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
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  quranKu: {
    textAlign: 'center',
    fontFamily: 'BalooDa2-Bold',
    fontSize: 30,
    color: colorPrimary,
    top: 40,
    position: 'absolute',
  },
  buatAkun: {
    alignItems: 'center',

    // backgroundColor: 'red',
  },
  btnBuatAkun: {
    marginTop: 20,
    backgroundColor: colorPrimary,
    width: width - 40,
    padding: 10,
    borderRadius: 40,
  },
  textBottom: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    marginLeft: 15,
    flexDirection: 'row',
  },
});
