import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
  Image,
  TextInput,
  Switch,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

import TodoListItem from '../components/TodoListItem';

import { Ionicons } from '@react-native-vector-icons/ionicons';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { useState } from 'react';

const todoList = [
  { id: 1, titulo: 'Acordar e arrumar a cama', horario: '07:00' },
  { id: 2, titulo: 'Tomar café da manhã', horario: '07:30' },
  { id: 3, titulo: 'Estudar matemática', horario: '08:00' },
  { id: 4, titulo: 'Assistir aula online', horario: '09:30' },
  { id: 5, titulo: 'Fazer pausa', horario: '10:30' },
  { id: 6, titulo: 'Responder mensagens importantes', horario: '11:00' },
  { id: 7, titulo: 'Almoçar', horario: '12:30' },
  { id: 8, titulo: 'Ler um livro', horario: '13:30' },
  { id: 9, titulo: 'Fazer exercícios físicos', horario: '15:00' },
  { id: 10, titulo: 'Tomar banho', horario: '16:00' },
  { id: 11, titulo: 'Estudar programação', horario: '16:30' },
  { id: 12, titulo: 'Lanche da tarde', horario: '18:00' },
  { id: 13, titulo: 'Organizar tarefas do dia seguinte', horario: '19:00' },
  { id: 14, titulo: 'Jantar', horario: '20:00' },
  { id: 15, titulo: 'Relaxar e ouvir música', horario: '21:00' },
];

const Home = props => {
  const [text, setText] = useState<string>();
  const aoClicar = (id: number) => {
    props.navigation.navigate({ name: 'DETAIL_SCREEN' });
  };

  const aoEditar = (id: number) => {
    props.navigation.navigate({ name: 'EDIT_SCREEN' });
  };

  return (
    <View style={{ paddingTop: 20, paddingHorizontal: 15, gap: 10 }}>
      {/* <ScrollView>
        {todoList.map((item, index) => {
          return (
            <TodoListItem
              titulo={item.titulo}
              horario={item.horario}
              key={index}
            />
          );
        })}
      </ScrollView> */}
      <FlatList
        data={todoList}
        renderItem={({ item, index }) => {
          return (
            <TodoListItem
              titulo={item.titulo}
              horario={item.horario}
              key={index}
              id={item.id}
              aoClicar={aoClicar}
              aoEditar={aoEditar}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
