// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
  constructor(name, id, email, officeNumber, role) {
    super(name, id, email)
    this.officeNumber = '1'
    this.role = 'Manager'
  }
}