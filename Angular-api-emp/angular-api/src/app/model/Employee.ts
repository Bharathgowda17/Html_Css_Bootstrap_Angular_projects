export class EmployeeModel {
    empid: number;
    name: string;
    city: string;
    state: string;
    emailid: string;
    contactno: string;
    address: string;
    pincode: string;

    constructor() {
        this.address = '';
        this.city = '';
        this.contactno = '';
        this.emailid = '';
        this.empid = 0;
        this.name = '';
        this.state = '';
        this.pincode = '';
    }

}