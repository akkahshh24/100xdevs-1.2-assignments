/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
