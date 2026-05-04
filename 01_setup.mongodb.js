use('ecomarse')

db.products.insertMany([
{
 name: "Wireless Mouse",
 price: 799,
 category: "Electronics",
 stock: 120,
 ratings: 4.5,
 tags: ["computer", "accessory", "wireless"],
 createdAt: new Date()
},
{
 name: "Mechanical Keyboard",
 price: 2499,
 category: "Electronics",
 stock: 80,
 ratings: 4.8,
 tags: ["keyboard", "mechanical"],
 createdAt: new Date()
},
{
 name: "Gaming Laptop",
 price: 85999,
 category: "Computers",
 stock: 30,
 ratings: 4.6,
 tags: ["gaming", "laptop"],
 createdAt: new Date()
}
])


db.contacts.insertMany([
{ name: "Alice", message: "Loved your website!", phone: "9876543210", createdAt:
new Date() },
{ name: "Bob", message: "Do you have discounts on laptops?", phone: "9123456789",
createdAt: new Date() },
{ name: "Carol", message: "I want to cancel my order.", phone: "9988776655",
createdAt: new Date() }
])

db.users.insertMany([
{
 username: "john_doe",
 email: "john_doe@example.com",
 password: "hashed_password_123",
 role: "customer",
    createdAt: new Date() 
},
{
 username: "admin_user",
 email: "admin_user@example.com",
    password: "hashed_admin_password",
 role: "admin",
    createdAt: new Date() 
}
])

db.orders.insertMany([
{
 orderId: "ORD001",
 user: "John Doe",
 products: [
{ name: "Wireless Mouse", quantity: 1, price: 799 },
{ name: "Mechanical Keyboard", quantity: 1, price: 2499 }
],
 total: 3298,
 status: "Delivered",
 createdAt: new Date()
},
{
 orderId: "ORD002",
 user: "Jane Smith",
 products: [
{ name: "Gaming Laptop", quantity: 1, price: 85999 }
],
 total: 85999,
 status: "Pending",
 createdAt: new Date()
}
])

db.products.insertMany([
{
 name: "Smartphone",
    price: 19999,
    category: "Electronics",
    stock: 150,
    ratings: 4.7,
    tags: ["mobile", "android", "smartphone"],
    createdAt: new Date()
},
{
 name: "Bluetooth Speaker",
    price: 2999,
    category: "Audio",
    stock: 200,
    ratings: 4.4,
    tags: ["speaker", "bluetooth", "audio"],
    createdAt: new Date()
}
])

db.products.insertMany([
{
 name: "4K Monitor",
    price: 34999,
    category: "Electronics",
    stock: 60,
    ratings: 4.6,
    tags: ["monitor", "4k", "electronics"],
    createdAt: new Date()
},
{
 name: "External Hard Drive",
    price: 5999,
    category: "Storage",
    stock: 100,
    ratings: 4.5,
    tags: ["hard drive", "external", "storage"],
    createdAt: new Date()
}
])

db.products.find()
db.products.find().pretty()
db.products.countDocuments()
db.products.findOne({ name: "Gaming Laptop" })
db.products.find().count()
