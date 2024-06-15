import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import ViewShot from 'react-native-view-shot';

export default function Signature() {
  const [path, setPath] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const viewShotRef = useRef();

  const handleTouchStart = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setPath(`M${locationX},${locationY}`);
    setSuccessMessage(''); // Clear success message when starting a new signature
  };

  const handleTouchMove = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setPath((prevPath) => `${prevPath} L${locationX},${locationY}`);
  };

  const handleSave = () => {
    // Capture the SVG content and convert it to an image URI
    viewShotRef.current.capture().then(uri => {
      setImageUri(uri);
      setSuccessMessage('Chữ ký đã được lưu thành công!'); // Show success message
      console.log('Signature saved:', uri);
    });
  };

  const handleClear = () => {
    // Clear the signature
    setPath('');
    setSuccessMessage(''); // Clear success message when clearing the signature
    setImageUri(null); // Clear the image URI when clearing the signature
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={handleSave} style={{ alignItems: 'center', marginTop: 40 }}>
        <Text>Lưu chữ ký</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClear} style={{ alignItems: 'center', marginTop: 10 }}>
        <Text>Xóa chữ ký</Text>
      </TouchableOpacity>
      {successMessage ? (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ color: 'green' }}>{successMessage}</Text>
        </View>
      ) : null}
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
            <Path d={path} stroke="black" strokeWidth={2} fill="none" />
          </Svg>
        </ViewShot>
      </View>
      {imageUri ? (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text>Chữ ký đã lưu:</Text>
          <Image source={{ uri: imageUri }} style={{ width: 300, height: 300, marginTop: 10 }} />
        </View>
      ) : null}
    </View>
  );
}
