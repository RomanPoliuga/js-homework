// 1. Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ

// 2. Напиши сценарій керування особистим кабінетом інтернет-банку.

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],
  nextId: 1,

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.nextId++,
      type,
      amount,
    };
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Зняття неможливе: недостатньо коштів.");
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    return this.transactions.find(({ id: transId }) => transId === id);
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    return this.transactions
      .filter(({ type: transType }) => transType === type)
      .reduce((total, { amount }) => total + amount, 0);
  },
};

account.deposit(1000);
account.withdraw(400);
account.deposit(250);

console.log("Поточний баланс:", account.getBalance());
console.log("Деталі транзакції з ID=2:", account.getTransactionDetails(2));
console.log("Загальна сума депозитів:", account.getTransactionTotal(Transaction.DEPOSIT));
console.log("Загальна сума зняття:", account.getTransactionTotal(Transaction.WITHDRAW));
