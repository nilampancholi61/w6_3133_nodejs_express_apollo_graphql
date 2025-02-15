const Movie = require('./models/Movie');

const resolver = {
    Query: {
        movies: async (parent, args, contextValue, info) => {
            return await Movie.find()
        },
        movie: async (_, { id }) => {
            return await Movie.findById(id)
        }
    },
    Mutation: {
        addMovie: async (_, args) => {
            // const newMovie = new Movie({
            //     ...args
            // })

            const newMovie = new Movie({
                name: args.name,
                director_name: args.director_name,
                production_house: args.production_house,
                release_date: args.release_date,
                rating: args.rating
            })

            const movie = await newMovie.save()
            return movie
        }
    }
}

module.exports = resolver