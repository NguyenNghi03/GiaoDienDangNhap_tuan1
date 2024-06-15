import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import ViewShot from 'react-native-view-shot';
import Toast from 'react-native-toast-message';
import * as Notifications from 'expo-notifications';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker from expo-image-picker

// Import your custom logo image
import CustomLogo from '../img/Alper-Seguros.png'; // Adjust path to your image based on your project structure

export default function Signature() {
  const [paths, setPaths] = useState([]); // State to store all paths
  const [successMessage, setSuccessMessage] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const viewShotRef = useRef();

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  }, []);

  const handleTouchStart = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const newPath = `M${locationX},${locationY}`;
    setPaths([...paths, newPath]); // Add new path to paths array
    setSuccessMessage(''); // Clear success message when starting a new signature
  };

  const handleTouchMove = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    const lastPath = paths[paths.length - 1]; // Get the last path in paths array
    const updatedPath = `${lastPath} L${locationX},${locationY}`;
    const updatedPaths = [...paths.slice(0, -1), updatedPath]; // Update paths array
    setPaths(updatedPaths);
  };

  const handleSave = async () => {
    try {
      // Capture the SVG content and convert it to an image URI
      const uri = await viewShotRef.current.capture();
      setImageUri(uri);
      showToast('Chữ ký đã được lưu thành công!');

      // Save the image to device's media library
      await saveToMediaLibrary(uri);

      // Generate notification with the saved signature image
      generateNotification(uri);
    } catch (error) {
      console.error('Failed to save signature:', error);
    }
  };

  const saveToMediaLibrary = async (uri) => {
    try {
      if (Platform.OS === 'ios') {
        // Request permission to access media library on iOS
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          throw new Error('Permission not granted to save to media library');
        }
      }

      // Save to media library
      const asset = await MediaLibrary.createAssetAsync(uri);
      const album = await MediaLibrary.getAlbumAsync('AlperSignatures');

      if (album == null) {
        await MediaLibrary.createAlbumAsync('AlperSignatures', asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false);
      }

      console.log('Image saved to media library');
    } catch (error) {
      console.error('Failed to save image to media library:', error);
    }
  };

  const generateNotification = async (imageUri) => {
    const logoAttachment = {
      url: `file://${CustomLogo}`,
      type: 'image/png', // or 'image/jpeg' based on your image format
    };

    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Chữ ký đã được lưu!',
          body: 'Bạn đã lưu thành công chữ ký của mình.',
          attachments: [logoAttachment, { uri: imageUri, type: 'image/png' }],
        },
        trigger: null,
      });
      console.log('Notification scheduled successfully');
    } catch (error) {
      console.log('Error scheduling notification:', error);
    }
  };

  const handleClear = () => {
    // Clear all paths
    setPaths([]);
    setSuccessMessage(''); // Clear success message when clearing the signature
    setImageUri(null); // Clear the image URI when clearing the signature
  };

  const showToast = (message) => {
    Toast.show({
      text1: message,
      type: 'success',
      position: 'bottom',
      visibilityTime: 2000,
    });
  };

  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <View
        style={{ borderWidth: 1, borderColor: 'black', margin: 10 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1.0 }}>
          <Svg
            height="300px"
            width="100%"
            style={{ backgroundColor: 'white' }}
          >
            {paths.map((path, index) => (
              <Path key={index} d={path} stroke="black" strokeWidth={2} fill="none" />
            ))}
          </Svg>
        </ViewShot>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={handleClear}
          style={{
            alignItems: 'center',
            marginTop: 10,
            width: 100,
            height: 35,
            borderWidth: 1,
            justifyContent: 'center',
            backgroundColor: 'red',
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Xóa chữ ký</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSave}
          style={{
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 20,
            width: 100,
            height: 35,
            borderWidth: 1,
            justifyContent: 'center',
            backgroundColor: 'blue',
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Lưu chữ ký</Text>
        </TouchableOpacity>
      </View>
      {imageUri ? (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text>Chữ ký đã lưu:</Text>
          <Image
            source={{ uri: imageUri }}
            style={{ width: 370, height: 300, marginTop: 10 }}
          />
        </View>
      ) : null}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}
