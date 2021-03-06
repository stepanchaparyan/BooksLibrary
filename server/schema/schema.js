const graphql = require('graphql');
const Book = require('../models/book');
const Author = require('../models/author');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        photo: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args){
                return Author.findById(parent.authorId);
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        photo: { type: GraphQLString },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({ authorId: parent.id });
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Book.findById(args.id);
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Author.findById(args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({});
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return Author.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                photo: { type: GraphQLString },
            },
            resolve(parent, args){
                let author = new Author({
                    name: args.name,
                    age: args.age,
                    photo: args.photo,
                });
                return author.save();
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                photo: { type: GraphQLString },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    photo: args.photo,
                    authorId: args.authorId
                });
                return book.save();
            }
        },

        deleteAuthor: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, { id }) {
				return Author.findByIdAndRemove(id);
			}
		},
		deleteBook: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, { id }) {
				return Book.findByIdAndRemove(id);
			}
		},
		updateAuthor: {
			type: AuthorType,
			args: {
				id: { type: GraphQLID },
				name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                photo: { type: GraphQLString },
			},
			resolve(parent, { id, name, age, photo }) {
				return Author.findByIdAndUpdate(
					id,
					{ $set: { name, age, photo } },
					{ new: true },
				);
			},
		},
		updateBook: {
			type: BookType,
			args: {
				id: { type: GraphQLID },
				name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                photo: { type: GraphQLString },
				authorId: { type: GraphQLID },
			},
			resolve(parent, { id, name, genre, photo, authorId }) {
				return Book.findByIdAndUpdate(
					id,
					{ $set: { name, genre, photo, authorId } },
					{ new: true },
				);
			},
		},
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
