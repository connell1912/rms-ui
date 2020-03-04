import react, { Component } from "react";

export class TableMap extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      batchId: [],
      batchName: [],
      startDate: [],
      endDate: [],
      trainerId: [],
      coTrainerId: [],
      associates: [],
      curriculum: []
    };
  }
}
