import React from 'react';
import ReactDOM from 'react-dom';
import './Navigation.css';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      {
        title: 'Classroom',
        field: 'classroom',
        lookup: {1: 'A1', 2: 'A2',3: 'C1',4: 'C2',5: 'B3',6: 'B1',7: 'LAB',8: 'HALL'},
      },
      {
        title: 'Slot',
        field: 'slot',
        lookup: { 1: '1', 2: '2',3: '3',4: '4',5: '5',6: '6'},
      },

      {
        title: 'Group',
        field: 'group',
        lookup: {1: '1', 2: '2' },
      },

      {
        title: 'Subject',
        field: 'subject',
        lookup: {1: 'Grade 10 English', 2: 'Grade 10 Afrikaans', 2: 'Grade 10 History', 3: 'Grade 10 Mathematics', 4: 'Grade 10 Physical Science',
      5: 'Grade 10 Biology', 6: 'Grade 10 Accounting', 7:'Grade 10 Life Orientation', 8:'Grade 11 English', 9:'Grade 12 English'},
      },
    ],



    data: [
      { classroom: 1,
        subject: 1, 
      slot: 3, 
      group: 1 },

      {
        classroom: 3,
        subject: 1,
        slot: 2,
        group: 2,
      },

      {
        classroom: 1,
        subject: 8,
        slot: 1,
        group: 1,
      },

      {
        classroom: 3,
        subject: 8,
        slot: 6,
        group: 2,
      },

      {
        classroom: 1,
        subject: 9,
        slot: 4,
        group: 1,
      },
      {
        classroom: 3,
        subject: 9,
        slot: 5,
        group: 2,
      },
    ],
  });

  return (
    <MaterialTable
    icons={tableIcons}
      title="Classes"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
