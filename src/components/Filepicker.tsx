import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNFS from 'react-native-fs';
import SizeBox from './SizeBox';
import { ThemedText } from './ThemedText';
import { ThemedTouchableView } from './ThemedTouchable';
import { ThemedView } from './ThemedView';

interface FileItem {
  name: string;
  uri: string;
  type?: string;
}

interface FilePickerProps {
  name?: string;
  label?: string;
  value?: FileItem[];
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  setFieldTouched?: (field: string, touched: boolean, shouldValidate?: boolean) => void;
  error?: string | null;
  touched?: boolean;
}

const FilePicker: React.FC<FilePickerProps> = ({
  name,
  label = 'Attach image post',
  value = [],
  setFieldValue,
  setFieldTouched,
  error,
  touched,
}) => {
  const handlePick = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: false,
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        const file = result.assets[0];

        const fileName = file.fileName || file.uri.split('/').pop() || 'Unnamed image';
        const destPath = `${RNFS.TemporaryDirectoryPath}/${fileName}`;

        try {
          await RNFS.copyFile(file.uri, destPath);
        } catch (copyErr) {
          console.warn('Copy error:', copyErr);
        }

        const newFile: FileItem = {
          name: fileName,
          uri: `file://${destPath}`,
          type: file.type || 'image',
        };

        const updatedFiles = [...(Array.isArray(value) ? value : []), newFile];

        if (name && setFieldValue) {
          setFieldValue(name, updatedFiles);
          setFieldTouched?.(name, true);
        }
      }
    } catch (err) {
      console.warn('Image pick error:', err);
    }
  };

  const handleRemove = (uri: string) => {
    const updated = value.filter(file => file.uri !== uri);
    if (name && setFieldValue) {
      setFieldValue(name, updated);
    }
  };

  return (
    <ThemedView>
      {label && <ThemedText style={{ fontSize: 13, fontWeight:'bold' }}>{label}</ThemedText>}
      <SizeBox height={6} />

      <ThemedTouchableView
        onPress={handlePick}
        darkColor="#232323"
        lightColor="#EEEEEE"
        style={styles.container}
      >
        <Ionicons name='image-outline' />
        <SizeBox height={5} />
        <ThemedText type='subtitle' style={{ textAlign: 'center', lineHeight: 18 , fontSize:14}}>
          Click to upload an image less than 10MB (JPEG, PNG)
        </ThemedText>
      </ThemedTouchableView>

      <SizeBox height={10} />

      {value?.length > 0 && (
        <View>
          {value.map(file => (
            <ThemedView
              lightColor='lightgray'
              key={file.uri}
              style={styles.fileItem}
            >
              <ThemedText style={styles.fileName}>{file.name}</ThemedText>
              <ThemedTouchableView
                lightColor='transparent'
                onPress={() => handleRemove(file.uri)}
                style={styles.removeButton}
              >
                <Ionicons name='close' />
              </ThemedTouchableView>
            </ThemedView>
          ))}
        </View>
      )}

      {error && touched && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </ThemedView>
  );
};

export default FilePicker;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 12,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  fileName: {
    flex: 1,
    fontSize: 13,
  },
  removeButton: {
    padding: 5,
    borderRadius: 20,
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
    alignSelf: 'flex-end',
  },
});
