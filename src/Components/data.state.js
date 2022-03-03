const initialDataState = {
  data: [],
  allDataValues: [],
  nameList: [],
  colorList: [],
  noteList: [],
  selected: '',
  searchKeyword: '',
  filteredData: [],
};

const ACTIONS = {
  SET_FILTERED_DATA: 'set_filtered_data',
  SET_ALL_DATA_VALUES: 'set_all_data_values',
  SET_NAME_LIST: 'set_name_list',
  SET_COLOR_LIST: 'set_color_list',
  SET_NOTE_LIST: 'set_note_list',
  HANDLE_SELECT_CHANGE: 'handle_select_change',
  HANDLE_SELECT_RESET: 'handle_select_reset',
  HANDLE_SET_SEARCH_KEYWORD: 'handle_set_search_keyword',
  HANDLE_SEARCH: 'handle_search',
  HANDLE_CLEAR_SEARCH: 'handle_clear_search',
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FILTERED_DATA: {
      const { data } = action.payload;
      const newData = data;
      return { state, filteredData: newData };
    }
    case ACTIONS.SET_ALL_DATA_VALUES: {
      const { data } = action.payload;
      let newData = [...data];
      let allValues = [];

      newData.map((item) => {
        return Object.values(item).forEach((val) => allValues.push(val));
      });

      return { ...state, allDataValues: allValues };
    }

    case ACTIONS.SET_NAMES_LIST: {
      const { data } = action.payload;
      let newData = data;
      let names = [];

      newData.map((data) => {
        return Object.keys(data).forEach((key) => {
          if (key === 'name') {
            data[key] !== '' ? names.push(data[key]) : names.push('empty name');
          }
        });
      });

      return {
        ...state,
        nameList: names,
      };
    }

    case ACTIONS.SET_NAME_LIST: {
      const { data } = action.payload;
      let newData = data;
      let names = [];

      newData.map((data) => {
        return Object.keys(data).forEach((key) => {
          if (key === 'name') {
            data[key] !== '' ? names.push(data[key]) : names.push('empty');
          }
        });
      });

      return { ...state, nameList: names };
    }

    case ACTIONS.SET_COLOR_LIST: {
      const { data } = action.payload;
      let newData = data;
      let colors = [];

      newData.map((data) => {
        return Object.keys(data).forEach((key) => {
          if (key === 'color') {
            data[key] !== '' ? colors.push(data[key]) : colors.push('empty');
          }
        });
      });

      return { ...state, colorList: colors };
    }

    case ACTIONS.SET_NOTE_LIST: {
      const { data } = action.payload;
      let newData = data;
      let notes = [];

      newData.map((data) => {
        return Object.keys(data).forEach((key) => {
          if (key === 'note') {
            data[key] !== '' ? notes.push(data[key]) : notes.push('empty');
          }
        });
      });

      return { ...state, noteList: notes };
    }

    case ACTIONS.HANDLE_SELECT_CHANGE: {
      const { data, value } = action.payload;
      const newData = data;
      let selectedValue = value;
      let filtered = [];

      if (selectedValue === 'empty') {
        selectedValue = '';
      }

      newData.map((item) => {
        return Object.values(item).forEach((val) => {
          if (val === value) {
            filtered.push(item);
          }
        });
      });

      return { ...state, selected: selectedValue, filteredData: filtered };
    }

    case ACTIONS.HANDLE_SELECT_RESET: {
      const { data } = action.payload;
      const newData = data;
      return { ...state, selected: '', filteredData: newData };
    }

    case ACTIONS.HANDLE_SET_SEARCH_KEYWORD: {
      const { value } = action.payload;
      return { ...state, searchKeyword: value };
    }

    case ACTIONS.HANDLE_SEARCH: {
      const { data } = action.payload;
      const newData = data;
      let filtered = [];

      newData.map((data) => {
        return Object.keys(data).forEach((key) => {
          if (typeof data[key] === 'number') {
            if (data[key] === parseInt(state.searchKeyword, 10)) {
              filtered.push(data);
            }
          }
          if (data[key] === state.searchKeyword) {
            filtered.push(data);
          }
        });
      });

      return { ...state, filteredData: filtered };
    }

    case ACTIONS.HANDLE_CLEAR_SEARCH: {
      const { data } = action.payload;
      const newData = data;
      return { ...state, searchKeyword: '', filteredData: newData };
    }

    default:
      throw new Error();
  }
};

export { initialDataState, dataReducer };
