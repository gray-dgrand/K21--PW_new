class Customer {
  id: number;
  name: string;
  email: string;
  phone: string;

  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  displayInfo(): string {
    return `Customer #${this.id} - ${this.name} | ${this.email} | ${this.phone}`;
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
  }
}

const customer = new Customer(1, "Nam", "nam.old@example.com", "0900000001");
console.log(customer.displayInfo());
customer.updateEmail("nam.new@example.com");
console.log(customer.displayInfo());

