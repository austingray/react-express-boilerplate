const typeDefs = `
    type Query { books: [Book] }
    type Book { title: String, author: String }
`;

export default typeDefs;
