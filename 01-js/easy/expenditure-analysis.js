/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalAmountSpentByCategory = {};

  for (const obj of transactions) {
    const { category, price } = obj;
    
    if (!totalAmountSpentByCategory.hasOwnProperty(category)) {
      totalAmountSpentByCategory[category] = price;
    } else {
      totalAmountSpentByCategory[category] += price;
    }
  }

  const result = Object.keys(totalAmountSpentByCategory).map(category => ({
    category: category,
    totalSpent: totalAmountSpentByCategory[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;

// let transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
// ];

// console.log(calculateTotalSpentByCategory(transactions));
