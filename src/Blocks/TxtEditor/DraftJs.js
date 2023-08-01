import { useRef, useState} from "react";
import { Editor, EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {useSelector} from "react-redux";

import ContentState from "draft-js/lib/ContentState";
import {stateFromHTML} from "draft-js-import-html"

export const DraftJs = (props) => {
  const {} = props;

  const config = useSelector(state => state);
  // const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText(config.txtEditorContent)));
  const [editorState, setEditorState] = useState(EditorState.createWithContent(stateFromHTML(config.txtEditorContent)));

  const onChange = editorState => setEditorState(editorState);

  return(
    <div>
      <Editor
        editorState={editorState}
        onChange={onChange}
      />
    </div>
  )
}