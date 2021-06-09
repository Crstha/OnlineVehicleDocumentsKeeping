import { Departments } from "../models/branch.model";

export class BranchService{
    private departments : Departments[] =[
        new Departments('Transport Department', 'Transport', 'https://www.collegenp.com/uploads/2020/09/Department-of-Transport-Management.png'),
        new Departments('Citizenship Department', 'Citizenship', 'https://mofa.gov.np/wp-content/uploads/2016/01/dop-1.jpg'), 
    ];
getDepartments(){
    return this.departments.slice();
}
}
