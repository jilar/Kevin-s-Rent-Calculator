import React from 'react';
import {View,Button} from 'react-native';
import {connect} from 'react-redux';
import {deletePost,addPost} from '../actions';
import {Feather} from '@expo/vector-icons';
import { Field, FieldArray, reduxForm } from 'redux-form'

const QuestionareScreen =({handleSubmit}) =>{
  const onSubmit=()=>{

  }

  return (
    <View>
      <Text>First tell me who's living here.</Text>
      <FieldArray>

      <Button
         title="Add New Post"
         onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}

const formWrapped= reduxForm({
  form:'questionnaire'
})(QuestionareScreen);

export default connect(null,{})(formWrapped);
