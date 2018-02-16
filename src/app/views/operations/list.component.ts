import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Operation } from "./operation.class";

@Component({
  selector: "cf-list",
  template: `
  <h2>{{ title | uppercase }}</h2>
  <table *ngIf="numberOfOperations>0;else emptyList">
  <thead>
    <tr>
      <th>Id</th>
      <th>Description</th>
      <th>Kind</th>
      <th>Amount</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let operation of operations">
      <td><a [routerLink]="[operation._id]">{{ operation._id }}</a></td>
      <td>{{ operation.description }}</td>
      <td>{{ operation.kind }}</td>
      <td>{{ operation.amount | number:'7.2-2' }}</td>
      <td><button (click)="requestOperation(operation)">Edit</button> </td>
      <td><button (click)="deleteOperation(operation)">Delete</button> </td>
    </tr>
  </tbody>
</table>
<ng-template #emptyList>
  <h5>No operations yet.</h5>
</ng-template>`,
  styles: []
})
export class ListComponent implements OnInit {

  @Input() public numberOfOperations = 0;
  @Input() public operations: Operation[] = [];
  @Output() public getOperation = new EventEmitter<Operation>();
  @Output() public delete = new EventEmitter<Operation>();

  public title = "List of Operations";
  constructor() {}

  ngOnInit() {}

  public deleteOperation(operation: Operation) {
    this.delete.emit(operation);
  }

  public requestOperation(operation: Operation) {
    this.getOperation.emit(operation);
  }
}
