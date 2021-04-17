import { Departments } from "../models/branch.model";

export class BranchService{
    private departments : Departments[] =[
        new Departments('Transport Department', 'Transport', 'https://www.collegenp.com/uploads/2020/09/Department-of-Transport-Management.png'),
        new Departments('Citizenship Department', 'Citizenship', 'https://lh3.googleusercontent.com/proxy/56n-98H_gZhf86PxLPzB7y_LS4Scszg7of3GX25rZVKbqK-eXMJA4qHcHTUpURfUxLST8NiAKM9Tbr9rYFcyke3p3EzUv62zaLNpCTFWU8EM4A7fpT0Y6WbhYkwR20RJYceTWQdk'),
        new Departments('Transport Department', 'Transport', 'https://mofa.gov.np/wp-content/uploads/2016/01/dop-1.jpg'), 
    ];
getDepartments(){
    return this.departments.slice();
}
}
