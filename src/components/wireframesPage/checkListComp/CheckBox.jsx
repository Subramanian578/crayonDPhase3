import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CheckboxFill from '../../../assets/icons/checkBoxFill';
import CheckboxOutline from '../../../assets/icons/checkboxOutline';

export default function Checkbox() {
  const [tasks, setTasks] = useState([
    {id: 1, label: 'Creating IA for project management', completed: false},
    {id: 2, label: 'Flow chart ideation', completed: true},
    {id: 3, label: 'UI layout setup', completed: false},
    {id: 4, label: 'Basic UI components', completed: false},
  ]);

  const toggleTask = id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <View key={task.id}>
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => toggleTask(task.id)}>
            <View style={styles.checkbox}>
              {task.completed ? <CheckboxFill /> : <CheckboxOutline />}
            </View>
            <Text style={styles.taskLabel}>{task.label}</Text>
          </TouchableOpacity>
          {index !== tasks.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  taskLabel: {
    fontSize: 14,
    color: '#333',
  },
  taskLabelCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 2,
  },
});
