import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from "axios";

function CreatePost() {

    const initialValues = {
        title: "",
        post: "",
        username: ""
    };

    const onSubmit = (data) => {
        axios.post("http://localhost:1025/posts", data).then((response) => {
            
        });
    };    

    const schema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        postText: Yup.string(),
        username: Yup.string().min(3, "Must be at least 3 characters").max(15, "Must be less than 15 characters").required("Username is Required"),
    });


// figure out way to use differernt validation schema
  return (
    <div className="createPostPage">
        <Formik 
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit} 
         >
            <Form className="formContainer">
                <label> Title </label>
                <ErrorMessage name="title" component="span"/>
                <Field 
                    id = "inputCreatePost" 
                    name="title" 
                    placeholder ="Example: Title..."
                />
                <label> Post </label>
                <ErrorMessage name="post" component="span"/>
                <Field 
                    id = "inputCreatePost" 
                    name="postText" 
                    placeholder ="Example: Post..."
                />
                <label> Username </label>
                <ErrorMessage name="username" component="span"/>
                <Field 
                    id = "inputCreatePost" 
                    name="username" 
                    placeholder ="Example: john117..."
                />

                <button type = "submit" > Createpost </button>
            </Form>
        </Formik>
    </div>
  );
}

export default CreatePost;