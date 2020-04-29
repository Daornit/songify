const { gql } = require('apollo-server-express');

module.exports = gql`
  type Artist {
    _id: ID!
    firstName: String!
    lastName: String!
    fullName: String
    shortIntro: String
    birthDate: String
    funeralDate: String
    albums: [Album!]
    songs: [Song!]!
    copyright: Copyright!
  }

  type Album {
    _id: ID!
    name: String!
    description: String
    createdDate: String
    artist: Artist!
    songs: [Song!]
    copyright: Copyright!
  }

  type Song {
    _id: ID!
    url: String
    name: String!
    duration: Int
    lang: Language
    lyrics: Lyrics!
    artist: Artist!
    genre: [Genre!]
    albums: [Album!]
    copyright: Copyright!
  }

  type Language {
    _id: ID!
    code: String!
    name: String!
    copyright: Copyright!
  }

  type Genre {
    _id: ID!
    name: String!
    parent: Genre
    copyright: Copyright!
  }

  type Lyrics {
    _id: ID!
    track: Track
    song: Song!
    copyright: Copyright!
  }

  type Track {
    _id: ID!
    text: String!
    lyrics: Lyrics!
    copyright: Copyright!
  }

  type Copyright{
    notice: String!
    artist: String!
    text: String!
  }

  type Query {
    langs: [Language!]!
    songs: [Song!]!
    track: [Track!]!
    genres: [Genre!]!
    lyrics: [Lyrics!]!
    albums: [Album!]!
    artists: [Artist!]! 
  }

  type Mutation {
    createArtist: Artist!
    createLang: Language!
    createGenre: Genre!
    createSong: Song!
    createLyrics: Lyrics!
    createTrack: Track!
    createAlbum: Album!
  }
`;
