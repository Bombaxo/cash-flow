import { Component, OnInit } from "@angular/core";
import { Operation } from "./operation.class";
import { OperationsService } from "./operations.service";
import { StoreService } from "../../lib/store.service";

@Component({
  selector: "cf-operations",
  template: `
    <cf-new
      [numberOfOperations]="numberOfOperations"
      [operation]="operation"
      (edit)="editOperation($event)"
      (save)="saveOperation($event)">
    </cf-new>
    <cf-list
      [numberOfOperations]="numberOfOperations"
      [operations]="operations"
      (getOperation)="getDataById($event)"
      (delete)="deleteOperation($event)" >
    </cf-list>`,
  styles: []
})
export class OperationsComponent implements OnInit {

  public numberOfOperations = 0;
  public operation: Operation = new Operation;
  public operations: Operation[] = [];
  constructor(
    private operationsService: OperationsService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.refreshData();
  }

  public saveOperation(operation: Operation) {
    this.operationsService
      .saveOperation$(operation)
      .subscribe(data => this.refreshData());
  }

  public getDataById( operation: Operation ) {
    this.operationsService
      .getOperationById$(operation._id)
      .subscribe(data => this.operation = data);
  }

  public editOperation(operation: Operation) {
    this.operationsService
      .editOperation$(operation)
      .subscribe(data => this.refreshData());
  }

  public deleteOperation(operation: Operation) {
    this.operationsService
      .deleteOperation$(operation)
      .subscribe(data => this.refreshData());
  }

  private refreshData() {
    this.operationsService
      .getOperationsList$()
      .subscribe(data => (this.operations = data));
    this.operationsService.getNumberOfOperations$().subscribe(data => {
      this.numberOfOperations = data.count;
      this.store.emitUserMessage(`Ops: ${this.numberOfOperations}`);
    });
  }
}
