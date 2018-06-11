/* eslint-disable arrow-body-style */
import React from 'react'
import PropsTypes from 'prop-types'

// Style
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContent: {
    backgroundColor: '#aacadd',
    width: '90%',
    height: '50%',
  },
})

const ModalStandard = ({ onClose, modalVisible, trasparent }) => {
  return (
    <Modal
      animationType="slide"
      transparent={trasparent}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      <View style={style.viewContainer}>
        <View style={style.viewContent}>
          <Text>Hello World!</Text>
          <TouchableHighlight
            onPress={onClose}
          >
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

ModalStandard.propTypes = {
  onClose: PropsTypes.func.isRequired,
  modalVisible: PropsTypes.bool.isRequired,
  trasparent: PropsTypes.bool,
}

ModalStandard.defaultProps = {
  trasparent: false,
}

export default ModalStandard
