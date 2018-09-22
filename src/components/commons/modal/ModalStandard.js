/* eslint-disable arrow-body-style */
import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { Modal, Text, View, StyleSheet, Platform } from 'react-native'
import { Button, Icon } from 'native-base'

const style = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContent: {
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#e3e5e5',
    width: '90%',
    height: '50%',
  },
  viewClose: {
    width: '100%',
    height: 50,
    backgroundColor: '#e3e5e5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
  },
  itemSelfAligned: {
    alignSelf: 'flex-end',
    width: 40,
  },
})

// eslint-disable-next-line object-curly-newline
const ModalStandard = ({ onClose, modalVisible, trasparent, text }) => {
  return (
    <Modal
      animationType="slide"
      transparent={trasparent}
      visible={modalVisible}
      onRequestClose={onClose}
      text={text}
    >
      <View style={style.viewContainer}>
        <View style={style.viewContent}>
          <View>
            <Text>{text}</Text>
          </View>
          <View style={style.viewClose}>
            <Button
              style={style.itemSelfAligned}
              danger
              onPress={onClose}
              rounded
            >
              <Icon name="ios-close" style={{ alignSelf: 'center' }} />
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

ModalStandard.propTypes = {
  onClose: PropsTypes.func.isRequired,
  modalVisible: PropsTypes.bool.isRequired,
  trasparent: PropsTypes.bool,
  text: PropsTypes.string,
}

ModalStandard.defaultProps = {
  trasparent: false,
  text: 'NextGon Helper',
}

export default ModalStandard
