import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
import styles from '../style/PetStyles';

const checkboxFields = [
  { label: '¿Tiene alguna enfermedad?', state: 'disease' },
  { label: '¿Toma medicamentos?', state: 'medication' },
  { label: '¿Requiere cuidados especiales?', state: 'specialCare' }
];

const PetForm = () => {
  const [form, setForm] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    weight: '',
    comments: '',
    disease: false,
    medication: false,
    specialCare: false
  });

  const handleInputChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    const { name, species, breed, age, weight, comments, disease, medication, specialCare } = form;
    if (name && species && breed && age && weight && comments) {
      Alert.alert(
        'Mascota registrada',
        `Nombre: ${name}, 
        Especie: ${species}
        \nRaza: ${breed}
        \nEdad: ${age}
        \nPeso: ${weight}
        \nComentarios: ${comments}
        \nEnfermedad: ${disease ? 'Sí' : 'No'}
        \nMedicamentos: ${medication ? 'Sí' : 'No'}
        \nCuidados especiales: ${specialCare ? 'Sí' : 'No'}`
      );
    } else {
      Alert.alert('Faltan datos', 'Por favor completá todos los campos requeridos.');
    }
  };

  // Checkbox
  const Checkbox = ({ value, onValueChange, label }) => (
    <Pressable
      onPress={() => onValueChange(!value)}
      style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
    >
      <View
        style={{
          height: 20,
          width: 20,
          borderWidth: 1,
          borderColor: '#555',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: value ? '#2196F3' : '#fff',
        }}
      >
        {value ? (
          <View style={{
            width: 12,
            height: 12,
            backgroundColor: '#fff',
            borderRadius: 2,
          }} />
        ) : null}
      </View>
      <Text style={{ marginLeft: 8 }}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre de la mascota*</Text>
      <TextInput
        style={styles.input}
        value={form.name}
        onChangeText={text => handleInputChange('name', text)}
        placeholder="Ej: Luna"
      />

      <Text style={styles.label}>Especie*</Text>
      <TextInput
        style={styles.input}
        value={form.species}
        onChangeText={text => handleInputChange('species', text)}
        placeholder="Ej: Perro"
      />

      <Text style={styles.label}>Raza*</Text>
      <TextInput
        style={styles.input}
        value={form.breed}
        onChangeText={text => handleInputChange('breed', text)}
        placeholder="Ej: Labrador"
      />

      <Text style={styles.label}>Edad*</Text>
      <TextInput
        style={styles.input}
        value={form.age}
        onChangeText={text => handleInputChange('age', text)}
        placeholder="Ej: 2"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Peso (kg)*</Text>
      <TextInput
        style={styles.input}
        value={form.weight}
        onChangeText={text => handleInputChange('weight', text)}
        placeholder="Ej: 12.5"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Comentarios*</Text>
      <TextInput
        style={[styles.input, { height: 60 }]}
        value={form.comments}
        onChangeText={text => handleInputChange('comments', text)}
        placeholder="Ej: Muy juguetón, le teme a los truenos"
        multiline
      />

      {checkboxFields.map(({ label, state }) => (
        <Checkbox
          key={state}
          value={form[state]}
          onValueChange={value => handleInputChange(state, value)}
          label={label}
        />
      ))}

      <Button title="Guardar cambios" onPress={handleSave} />
    </View>
  );
};

export default PetForm;