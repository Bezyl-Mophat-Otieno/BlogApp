import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import './AddText'


function Add() {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

  }


  return (
    <form onSubmit={handleSubmit}>
      <textarea rows={5} name='comment' onChange={(e) => setComment(e.target.value)} ></textarea>
    </form>

  )
}
export default Add