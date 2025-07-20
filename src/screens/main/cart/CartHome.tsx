import { Input, ThemedView } from '@/src/components'
import FilePicker from '@/src/components/Filepicker'
import Spinner from '@/src/components/Spinner'
import { useCartStore } from '@/src/store/useCartStore'
import { Ionicons } from '@expo/vector-icons'
import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CreateItem } from './components/schema'
export default function CartHome() {

  const { addItem, isLoading } = useCartStore();
  return (
    <>
      <View style={styles.container}>

        <Formik
          initialValues={{
            name: '',
            price: '',
            file: [] as { name: string; uri: string; type?: string }[],
          }}
          validationSchema={CreateItem}
          onSubmit={async (values, { resetForm }) => {
            await addItem(values);
            resetForm();
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, setFieldTouched, isValid }) => {
            console.log(errors, 'ERROR')
            return (
              <ThemedView style={{ flex: 1 }}>
                <Input
                  onChangeText={handleChange('name')}
                  placeholder='enter product name'
                  error={errors.name}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  label='Name' />
                <Input
                keyboardType='number-pad'
                  onChangeText={handleChange('price')}
                  error={errors.price}
                  value={values?.price}
                  onBlur={handleBlur('price')}
                  placeholder='Enter product price'
                  label='Price' />

                <FilePicker
                  name="file"
                  value={values.file}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  error={errors.file as string}
                  touched={touched.file}
                />


                <TouchableOpacity
                  onPress={() => handleSubmit()} style={[styles.add, { backgroundColor: isValid ?  'green' :'red' }]}>
                  <Ionicons name='add' size={20} color='#fff' />
                  <Text style={{ color: '#fff' }}>Add product here</Text>
                </TouchableOpacity>
              </ThemedView>
            )
          }
          }
        </Formik>

      </View>
      {isLoading && <Spinner />}

    </>
  )
}

const styles = StyleSheet.create({
  container: { margin: 20, flex: 1 },
  add: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'green',
    borderRadius: 4,
    padding: 10
  }
})