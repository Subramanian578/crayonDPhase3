import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addComment as addReduxComment } from '../../redux/store/CommentSlice';
import useCommentStore from '../../zustand/useCommentStore';
import Shareicon from '../../assets/icons/share';
import moment from 'moment';

const CommentSection = () => {
  const [text, setText] = useState('');
  
  // Redux
  const dispatch = useDispatch();
  const reduxComments = useSelector((state) => state.comments.comments);
  
  // Zustand
  const { comments: zustandComments, addComment: addZustandComment } = useCommentStore();

  const handleShare = () => {
    if (text.trim()) {
      const newComment = {
        id: Date.now(), // Ensure this is unique
        author: 'You',
        time: moment(),
        text,
      };
      dispatch(addReduxComment(newComment));       
      addZustandComment(newComment);              
      setText('');
    }
  };

  // Combine comments from both stores and filter out duplicates based on ID
  const combinedComments = [...reduxComments, ...zustandComments];
  const uniqueComments = Array.from(new Set(combinedComments.map(comment => comment.id)))
    .map(id => combinedComments.find(comment => comment.id === id));

    console.log(uniqueComments);

  return (
    <View style={styles.container}>
      <View style={{ padding: 15 }}>
        <Text style={styles.title}>Comments</Text>

        {uniqueComments.map((comment, index) => (
          <View key={comment.id} style={styles.comment}> 
            <Image
              source={{
                uri: 'https://imgs.search.brave.com/Yg7uzVhgy4dLzMi81rKCh8Y95ffeRNfkSjIF575tuxA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9idXNpbmVzcy1t/YW4tcGhvdG8tcG9y/dHJhaXQtaW4tb2Zm/aWNlLWJ1aWxkaW5n/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA',
              }}
              style={styles.avatar2}
            />
            <View style={styles.commentContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 8,
                }}
              >
                <Text style={styles.commentAuthor}>{comment.author}</Text>
                <Text style={styles.commentTime}>{comment.time.fromNow()}</Text>
              </View>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          </View>
        ))}

        <View style={styles.textinputBox}>
          <TextInput
            style={styles.input}
            placeholder="Add comments"
            placeholderTextColor={'grey'}
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity onPress={handleShare}>
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
    marginVertical: 10,
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
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '900',
    paddingBottom: 20,
  },
  textinputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 243, 246)',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginTop: 15,
  },
});

export default CommentSection;
