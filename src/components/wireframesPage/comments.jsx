import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Shareicon from '../../assets/icons/share';
const CommentSection = () => {
  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <Text style={styles.title}>Comments</Text>

        <View style={styles.comment}>
          <Image
            source={{
              uri: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg',
            }}
            style={styles.avatar2}
          />
          <View style={styles.commentContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
              }}>
              <Text style={styles.commentAuthor}>Hamza</Text>
              <Text style={styles.commentTime}>1 day ago</Text>
            </View>
            <Text style={styles.commentText}>
              harum quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum nobis.
            </Text>
          </View>
        </View>

        <View style={styles.comment}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/c6/34/60/c6346030acb7a780af81803c84a06680.jpg',
            }}
            style={styles.avatar2}
          />
          <View style={styles.commentContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
              }}>
              <Text style={styles.commentAuthor}>Mohammed</Text>
              <Text style={styles.commentTime}>12 hrs ago</Text>
            </View>
            <Text style={styles.commentText}>Sure, Thanks</Text>
          </View>
        </View>
        <View style={styles.textinputBox}>
          <TextInput
            style={styles.input}
            placeholder="Add comments"
            placeholderTextColor={'grey'}
          />
          <TouchableOpacity>
            <Shareicon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    maxWidth: '100%',
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    shadowColor: 'rgb(0,0,0,0.5)',
  },
  comment: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar2: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgb(18, 32, 40)',
  },
  commentTime: {
    fontSize: 12,
    color: 'rgb(78, 88, 94)',
  },
  commentText: {
    fontSize: 14,
    color: 'rgb(78, 88, 94)',
  },
  input: {
    color: 'black',
    fontSize: 12,
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
    paddingBottom: 20,
  },
  textinputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 243, 246)',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginTop: 15,
  },
});

export default CommentSection;
