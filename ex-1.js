function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length; i++) {
    for (let j = 0; j < customers.length; j++) {
      if (customers[j] > customers[j + 1]) {
        let result = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = result;
      }
    }
  }
  return customers;
}
console.log(
  sortCustomerName(["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"])
);

// ตอบคำถามตรงนี้จ้า
// Big-O ของ function นี้คือ O(n^2) => เพราะเป็นการใช้ loop มาเช็ค 2 ครั้งครับ
