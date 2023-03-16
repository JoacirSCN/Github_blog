import { SearchInputContainer } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = zod.object({
  search: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

interface SearchInputProps {
  postsLength: number
  getPosts: (search?: string) => Promise<void>
}

export function SearchInput({ postsLength, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.search)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsLength} publicações</span>
      </header>
      <input
        type="text"
        placeholder="Buscar Conteúdo"
        {...register('search')}
      />
    </SearchInputContainer>
  )
}
