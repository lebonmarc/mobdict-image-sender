import './App.css';
import "cropperjs/dist/cropper.css";
import { useRef, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import Lines from './components/Lines';
import GaleryButton from './components/GalleryButton';
import MiniLogo from './components/MiniLogo';
import ModalPreviewImage from './components/ModalPreviewPage';
import uploadImage from './services/uploadImage';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [newTextImage, setNewTextImage] = useState("");
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [isSuccess, setSuccess] = useState(false);
  const [cropper, setCropper] = useState(null);

  const launchNativeGallery = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64String = reader.result;
        setNewTextImage(base64String);
        saveImageSelected(base64String);
        e.target.value = '';
      };
  
      reader.readAsDataURL(file);
    }
  };

  const saveImageSelected = (img) => {
    setPreview(img);
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  const handleSubmitForm = async () => {
    setIsLoading(true);
    try {
      if (cropper) {
        const base64Image = cropper.getCroppedCanvas().toDataURL("image/png");
        const image = base64Image.split(',')[1];
        
        const params = new URLSearchParams(window.location.search)
        const id = params.get('id')
        const auth_token = params.get('token')

        if (!id || !auth_token) {
          throw new Error('Você não tem permissão para enviar imagens');
        }

        const payload = {
          'imagem': image,
        }
        
        const result = await uploadImage(id, auth_token, payload);

        if (!result?.data?.message || typeof result?.data?.message !== 'string') {
          throw new Error(result?.data?.error || 'Não foi possível enviar o arquivo. Por favor, tente novamente!');
        }

        setTimeout(() => {
          setSuccess(true);
          setIsLoading(false);
        }, 500);
      }
    } catch (erro) {
      setIsLoading(false);
      setPreview(null);
      const message =
      erro?.response?.data?.message ||
      erro.message ||
      'Não foi possível enviar o arquivo. Por favor, tente novamente!';
      toast.error(message);
    }
  };

  return (
    <div className="App">
      <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.contentScrollView}>
          <ScrollView
            style={styles.contentScrollView}
            contentContainerStyle={styles.scrollView}>
            <View style={styles.contentNotFound}>
              <View style={styles.contentButtons}>
                <TouchableOpacity onPress={openFilePicker}>
                    <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={launchNativeGallery}
                  />
                  <View style={styles.contentButton}>
                    <View
                      style={{
                        height: 150,
                        justifyContent: 'flex-end',
                      }}>
                      <GaleryButton />
                    </View>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                      }}>
                      Galeria
                    </Text>
                    <Lines />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.contentTextFooter}>
              <Text style={styles.textFooter}>Enviar texto</Text>
              <MiniLogo />
            </View>
            <View style={styles.footer} />
          </ScrollView>
        </View>
      </View>
      </SafeAreaView>
      <ModalPreviewImage
        open={!!preview}
        preview={preview?.path || ''}
        isLoading={isLoading}
        isSuccess={isSuccess}
        handleClose={() => {
          setPreview(null);
          setSuccess(false);
        }}
        handleConfirm={handleSubmitForm}
        newTextImage={newTextImage}
        setCropper={setCropper}
      />
      {/* <Modal
        visible={editMode}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEditMode(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <UploadAvatar
              cancelEdit={() => setEditMode(false)}
              avatarUrl={newAvatarUrl}
            />
          </View>
        </View>
      </Modal> */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
      />
    </div>
  );
}

export default App;
