import React from 'react';
import {compose} from 'redux';
import functional from 'react-functional';
import {connect} from 'react-redux';
import {actions as fileActions} from './reducers/stats';

const UploadFile = ({onHandleFileContent}) => {
  let fileReader;

  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content);
    onHandleFileContent(content);
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return <div className='upload-expense'>
    <input type='file'
           id='file'
           className='input-file'
           accept='.csv'
           onChange={e => handleFileChosen(e.target.files[0])}
    />
  </div>;
};

const options = {
  propTypes: {}
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleFileContent: content => {
      dispatch(fileActions.importFile(content));
    }
  };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(functional(UploadFile, options));
