import React from 'react';
import {Image, Modal, TouchableOpacity, View, Dimensions} from 'react-native';

import styles from './styles';

import Button from '../Button';
import colors from '../../theme/colors';

import {Text} from 'react-native';
import TopLine from './TopLine';
import Lines from './Lines';
import CloseIcon from './CloseIcon';
import Baloon from './Baloon';
import CropImage from '../CropImage';

const dimensions = Dimensions.get('window');

const ModalPreviewImage = ({
  open,
  preview,
  isLoading,
  isSuccess,
  handleClose,
  handleConfirm,
  newTextImage,
  setCropper,
}) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      hardwareAccelerated
      onRequestClose={() => {
        handleClose();
      }}>
      <View style={styles.centeredView}>
        <View
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: 'rgba(10, 40, 84, 0.9)',
          }}>
          {isSuccess ? (
            <View
              style={{
                // padding: 10,
                width: '100%',
                height: '85%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '95%',
                  padding: 32,
                  gap: 32,
                  borderRadius: 16,
                  elevation: 2,
                }}>
                <View
                  style={{
                    transform: [
                      {
                        translateX: 16,
                      },
                    ],
                  }}>
                  <Baloon />
                </View>
                <TouchableOpacity onPress={handleClose}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      gap: 8,
                      width: '100%',
                      paddingRight: 48,
                    }}>
                    <Text
                      style={{
                        color: colors.white,
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        fontFamily: 'Archivo',
                        fontSize: 18,
                      }}>
                      Fechar
                    </Text>
                    <Text
                      style={{
                        color: colors.lightBlue,
                        fontStyle: 'italic',
                        fontFamily: 'Archivo',
                        fontSize: 18,
                      }}>
                      X
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View
              style={{
                width: '100%',
                height: '70%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  gap: 8,
                  maxHeight: '35%',
                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    paddingBottom: 48,
                    transform: [
                      {
                        translateX: -16,
                      },
                    ],
                  }}>
                  <TopLine />
                </View>
                <View
                  style={{
                    height: '100%',
                    justifyContent: 'flex-end',
                    paddingBottom: 24,
                  }}>
                  <Lines />
                </View>
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                  paddingHorizontal: 16,
                  paddingBottom: 8,
                }}>
                <TouchableOpacity onPress={handleClose}>
                  <CloseIcon />
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 16,}}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <CropImage
                    textImage={newTextImage}
                    setCropper={setCropper}
                  />
                </View>
              </View>
                </View>
                <View
                  style={{
                    backgroundColor: colors.lightBlue,
                    borderRadius: 10,
                    transform: [
                      {
                        translateX: 3,
                      },
                    ],
                  }}>
                  <View
                    style={{
                      padding: 8,
                      borderRadius: 10,
                      backgroundColor: '#fff',
                      transform: [
                        {
                          translateX: -6,
                        },
                        {
                          translateY: 6,
                        },
                      ],
                    }}>
                    <View
                      style={{
                        overflow: 'hidden',
                        width: 'auto',
                        height: 'auto',
                      }}>
                      <View
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxHeight: dimensions.height * 0.4,
                        }}>
                        <Image
                          source={{uri: preview}}
                          resizeMode="contain"
                          resizeMethod="resize"
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 32,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  height: 75,
                }}>
                <React.Fragment>
                  <Button
                    label="Cancelar"
                    disabled={isLoading}
                    fullWidth={false}
                    backButton
                    onPress={handleClose}
                  />
                  <Button
                    label="Confirmar"
                    fullWidth={false}
                    isLoading={isLoading}
                    onPress={handleConfirm}
                  />
                </React.Fragment>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalPreviewImage;