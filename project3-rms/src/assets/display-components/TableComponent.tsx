import React from "react";
import MaterialTable, { Column } from "material-table";
import IBatch from "../../batch-service/model/IBatch";
import axiosConfig from "../../utility/axiosConfig";
import { addBatch, deleteBatch } from "../../utility/api";

interface Row {
  batchId?: number;
  batchName: string;
  startDate: Date;
  endDate: Date;
  trainerId?: number;
  coTrainerId?: number;
  associates?: any;
  curriculum?: any;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function MaterialTableDemo() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: "Batch ID", field: "batchId", type: "numeric" },
      { title: "Batch Name", field: "batchName" },
      { title: "Start Date", field: "startDate", type: "date" },
      { title: "End Date", field: "endDate", type: "date" },
      { title: "Trainer ID", field: "trainerId", type: "numeric" },
      { title: "CoTrainer ID", field: "coTrainerId", type: "numeric" },
      { title: "Associates", field: "associates", type: "numeric" },
      {
        title: "Curriculum",
        field: "curriculum",
        lookup: {
          0: "JAVA_MSA",
          1: "CSHARP",
          2: "PEGA",
          3: "REACT",
          4: "AI",
          5: "MOBILE"
        }
      }
    ],
    data: [
      // API call here(?) To get entries from the database.
    ]
  });

  return (
    <MaterialTable
      title="Batch Table"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              // if (oldData) {
              //   setState(prevState => {
              //     const data = [...prevState.data];
              //     data[data.indexOf(oldData)] = newData;
              //     return { ...prevState, data };
              //   });
              // }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
