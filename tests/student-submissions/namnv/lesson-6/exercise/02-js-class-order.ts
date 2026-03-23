interface Product {
  name: string;
  price: number;
  amount: number;
  discount: number; // %
}

class Order {
  orderId: string;
  customerName: string;
  items: Product[];
  totalAmount: number;

  constructor(orderId: string, customerName: string) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = [];
    this.totalAmount = 0;
  }

  addItem(product: Product): void {
    this.items.push(product);
  }

  calculateTotal(): number {
    this.totalAmount = this.items.reduce((sum, item) => {
      const itemTotal = item.price * item.amount;
      const finalPrice = itemTotal - (itemTotal * item.discount) / 100;
      return sum + finalPrice;
    }, 0);

    return this.totalAmount;
  }
}

const order = new Order("ORD-001", "Nam Nguyen");
order.addItem({ name: "Keyboard", price: 500000, amount: 1, discount: 10 });
order.addItem({ name: "Mouse", price: 300000, amount: 2, discount: 5 });
console.log("Total:", order.calculateTotal());

