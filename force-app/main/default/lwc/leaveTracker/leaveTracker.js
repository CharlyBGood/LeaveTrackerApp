import { LightningElement } from 'lwc';

export default class LeaveTracker extends LightningElement {
  
  refreshLeaveRequestHandler() {
    this.refs.myLeavesComp.refreshGrid();
  }
}