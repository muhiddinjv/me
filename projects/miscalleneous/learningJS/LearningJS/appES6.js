class Client {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    membership() {
        let name;
        if (this.balance > 1000) {
            name = 'Gold';
        } else if (this.balance > 500) {
            name = 'Platinum';
        } else {
            name = 'Normal';
        }
        return name;
    }

    clientInfo() {
        return `Name: ${this.name}, Balance: ${this.balance}, Membership: ${this.membership()}`;
    }
    getBalance() {
        return this.balance;
    }

    static welcome() {
        return 'Welcome to your bank';
    }
}

// Business class
class Business extends Client {
    constructor(name, balance, phone, category) {
        // access the parent constructor properties
        super(name, balance);
        this.phone = phone;
        this.category = category;
    }

    clientInfo() {
        return `Name: ${this.name}, Balance: ${this.balance}, Membership: ${this.membership()}, Phone: ${this.phone}, Category: ${this.category}`;
    }

    static welcome() {
        return 'Welcome to banking for business';
    }
}

// insantiate the subclass
const business = new Business('Emuallim', 1000, 1231424, 'Education')

console.log(business);
console.log(business.clientInfo());
console.log(Business.welcome());
console.log('Your balance: ' + business.getBalance());
console.log(Client.welcome());