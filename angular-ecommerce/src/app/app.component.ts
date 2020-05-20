import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {LoginComponent} from './components/login/login.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-ecommerce';

    constructor(public dialog: MatDialog) {
    }

    openLoginDialog() {
        const dialogConfig = new MatDialogConfig();
        // dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.dialog.open(LoginComponent, dialogConfig);
    }

}
