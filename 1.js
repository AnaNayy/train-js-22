// Одиночка (Singleton) — це патерн програмування, який забезпечує,
// що клас має тільки один екземпляр і надає глобальну точку доступу до цього екземпляра.

// Клас OrderTracker відповідає за відстеження замовлень
class OrderTracker {
  // Приватне статичне instance поле для збереження єдиного екземпляра класу початкове значення null
  // Приватне статичне orders поле для збереження списку замовлень початкове значення []
  /**
   * Статичний метод create використовується для створення єдиного екземпляра класу
   */
  // Перевіряємо, чи є вже створений екземпляр класу
  // Якщо немає, створюємо новий екземпляр
  // Інакше повертаємо єдиний екземпляр класу
  /**
   * Статичний метод add використовується для додавання замовлення до списку
   * Отримує item та додає його до масиву замовлень
   */
  /**
   * Статичний метод get використовується для отримання списку замовлень
   */
  static #instance = null;
  static #orders = [];

  static create() {
    //     // Перевіряємо, чи є вже створений екземпляр класу
    // if (!this.#instance) {
    //   // Якщо немає, створюємо новий екземпляр
    //   this.#instance = new OrderTracker();
    if (!OrderTracker.#instance) {
      OrderTracker.#instance = new OrderTracker();
    }
    // return this.#instance;
    return OrderTracker.#instance;
  }

  static add(item) {
    OrderTracker.#orders.push(item);
    // this.#orders.push(item);
  }
  static get() {
    return OrderTracker.#orders;
    //  return this.#orders;
  }
}
console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо єдиний екземпляр класу OrderTracker
const tracker = OrderTracker.create();

// Додаємо замовлення до списку
OrderTracker.add("Телефон");
OrderTracker.add("Ноутбук");

// Отримуємо список замовлень
const orders = OrderTracker.get();

// Виводимо список замовлень в консоль
console.log(orders);
