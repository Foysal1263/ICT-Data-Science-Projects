
use ("ecomarse");
// db.sales.insertMany([
// { _id: 1, item: "Apple",  price: 10, quantity: 5, category: "Fruit" },
// { _id: 2, item: "Banana", price: 5,  quantity: 10, category: "Fruit" },
// { _id: 3, item: "Carrot", price: 8,  quantity: 6, category: "Vegetable" },
// { _id: 4, item: "Tomato", price: 6,  quantity: 8, category: "Vegetable" },
// { _id: 5, item: "Mango",  price: 15, quantity: 3, category: "Fruit" }
// ]);

// db.sales.aggregate([
// { /* stage 1 */ },
// { /* stage 2 */ },
// { /* stage 3 */ }
// ]);

// db.sales.aggregate([
    // { $match: { category: "Fruit" } },
    // { $group: { _id: "$item", totalQuantity: { $sum: "$quantity" } } },
    // { $sort: { totalQuantity: -1 } }
    // { $project: { _id: 0, item:1, quantity:1}}
// ]);

// db.sales.aggregate([
//     { $match: { category: "Fruit" } },
//     { $project: { _id: 0, item: 1, price: 1 } }
// ]);

// db.sales.aggregate([
// {
//     $group: {
//       _id: "$category",
//       totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
// }
// }
// ]);

// db.sales.aggregate([
// {
//     $group: {
//       _id: "$category",
//       totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
// }
// },
// { $sort: { totalSales: -1 } }
// ]);

db.sales.aggregate([
{ $match: { category: "Fruit" } },
{
    $group: {
      _id: null,
      totalFruitSales: { $sum: { $multiply: ["$price", "$quantity"] } }
}
}
]);