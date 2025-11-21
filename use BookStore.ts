use BookStore
switched to db BookStore
db.books.insertMany([
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, rating: 4.3, genre: "Fiction" },
    { title: "1984", author: "George Orwell", price: 9.99, rating: 4.8, genre: "Dystopian" },
    { title: "Pride and Prejudice", author: "Jane Austen", price: 7.99, rating: 4.6, genre: "Romance" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", price: 14.99, rating: 4.9, genre: "Fantasy" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 18.99, rating: 4.7, genre: "Non-Fiction" },
    { title: "The Da Vinci Code", author: "Dan Brown", price: 11.99, rating: 4.2, genre: "Mystery" },
    { title: "Dune", author: "Frank Herbert", price: 15.99, rating: 4.8, genre: "Science Fiction" },
    { title: "The Alchemist", author: "Paulo Coelho", price: 10.99, rating: 4.4, genre: "Fiction" },
    { title: "Educated", author: "Tara Westover", price: 13.99, rating: 4.7, genre: "Non-Fiction" },
    { title: "The Night Circus", author: "Erin Morgenstern", price: 16.99, rating: 4.5, genre: "Fantasy" }
]);
db.books.find({}, {"title": 1, "author": 1,_id:0})
db.books.find({}, {"title": 1, "author": 1,"rating":1,}).limit(5).sort({rating:-1})
{
  _id: ObjectId('691ebf342322ff0bed5248d7'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  rating: 4.9
}
{
  _id: ObjectId('691ebf342322ff0bed5248da'),
  title: 'Dune',
  author: 'Frank Herbert',
  rating: 4.8
}
{
  _id: ObjectId('691ebf342322ff0bed5248d5'),
  title: '1984',
  author: 'George Orwell',
  rating: 4.8
}
{
  _id: ObjectId('691ebf342322ff0bed5248dc'),
  title: 'Educated',
  author: 'Tara Westover',
  rating: 4.7
}
{
  _id: ObjectId('691ebf342322ff0bed5248d8'),
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  rating: 4.7
}
db.books.find({}, {"title": 1,"price":1,}).limit(4).skip(3).sort({price:-1})
{
  _id: ObjectId('691ebf342322ff0bed5248d7'),
  title: 'The Hobbit',
  price: 14.99
}
{
  _id: ObjectId('691ebf342322ff0bed5248dc'),
  title: 'Educated',
  price: 13.99
}
{
  _id: ObjectId('691ebf342322ff0bed5248d4'),
  title: 'The Great Gatsby',
  price: 12.99
}
{
  _id: ObjectId('691ebf342322ff0bed5248d9'),
  title: 'The Da Vinci Code',
  price: 11.99
}
db.books.find({}, {"title": 1,"price":1,}).limit(4).skip(3).sort({price:1})
{
  _id: ObjectId('691ebf342322ff0bed5248d9'),
  title: 'The Da Vinci Code',
  price: 11.99
}
{
  _id: ObjectId('691ebf342322ff0bed5248d4'),
  title: 'The Great Gatsby',
  price: 12.99
}
{
  _id: ObjectId('691ebf342322ff0bed5248dc'),
  title: 'Educated',
  price: 13.99
}
{
  _id: ObjectId('691ebf342322ff0bed5248d7'),
  title: 'The Hobbit',
  price: 14.99
}
BookStore


