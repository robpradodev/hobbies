import BookList from '@/components/books/BookList'
import Books from '@/components/books/Books'
import Book from '@/components/books/Book'

export default {
  path: '/books',
  component: Books,
  children: [
    {
      path: '',
      component: BookList
    },
    {
      path: 'new',
      component: Book
    },
    {
      path: ':id',
      component: Book,
      props: true
    }
  ]
}
