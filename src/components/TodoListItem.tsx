import { TouchableOpacity, View, Text, Switch } from 'react-native';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

const TodoListItem = (props: {
  id: number;
  titulo: string;
  horario: string;
  text?: string;
  aoEditar?: (id: number) => void;
  aoClicar?: (id: number) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.aoClicar?.(props.id);
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          gap: 6,
          alignItems: 'flex-start',
          padding: 12,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <Switch />
        <View style={{ gap: 8, marginRight: 'auto' }}>
          <Text style={{ fontWeight: 600 }}>{props.titulo}</Text>
          <Text style={{ opacity: 0.5, fontSize: 12 }}>{props.horario}</Text>
          {/**<Text style={{ fontWeight: 300 }}>{props.text}</Text>*/}
        </View>
        <TouchableOpacity
          onPress={() => props.aoEditar?.(props.id)}
          style={{ marginTop: 5 }}
        >
          <FontAwesome6 style={{ opacity: 0.5 }} name="pen" iconStyle="solid" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default TodoListItem;
