import { Generated, GeneratedAlways, ColumnType } from '../../dist/cjs'

export interface Pet {
  id: Generated<string>
  name: string
  owner_id: number
  species: 'dog' | 'cat'
}

export interface Movie {
  id: Generated<string>
  stars: number
}

export interface Book {
  id: GeneratedAlways<number>
  name: string
}

export interface Database {
  person: Person
  pet: Pet
  movie: Movie
  'some_schema.movie': Movie
  book: Book
}

export interface Person {
  id: Generated<number>
  first_name: string
  last_name: string | null
  age: number
  gender: 'male' | 'female' | 'other'
  // A Column that is generated by the DB and which
  // we never want the user to be able to insert or
  // update.
  modified_at: ColumnType<Date, never, never>
}

export type Equals<T, U> = (<G>() => G extends T ? 1 : 2) extends <
  G
>() => G extends U ? 1 : 2
  ? true
  : false
