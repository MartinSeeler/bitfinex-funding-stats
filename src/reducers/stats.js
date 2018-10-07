export const types = {
  IMPORT_FILE: 'STATS/IMPORT_FILE',
  IMPORT_FILE_SUCCESS: 'STATS/IMPORT_FILE_SUCCESS'
};

export const actions = {
  importFile: (content) => ({type: types.IMPORT_FILE, payload: content}),
  importFileSuccess: (entries) => ({type: types.IMPORT_FILE_SUCCESS, payload: entries}),
};

export const initialState = {
  entries: []
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.IMPORT_FILE_SUCCESS: {
      return {
        ...state,
        entries: payload
      };
    }
    default:
      return state;
  }
};
