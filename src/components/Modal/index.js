import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Detail = ({visibility, message}) => {
  const [visible, setVisible] = React.useState(visibility);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0.5)"
      />
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          {/* <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require('../../../assets/icons/x.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../../assets/icons/success.png')}
            style={{
              width: 50,
              height: 50,
              // backgroundColor: 'red',
              borderRadius: 1000,
            }}
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            textAlign: 'center',
            fontFamily: 'Poppins-Medium',
          }}>
          {message}
        </Text>
      </ModalPoup>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    elevation: 20,
    paddingHorizontal: 20,
    width: 250,
    height: 220,
  },
  header: {
    width: '100%',
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default Detail;
