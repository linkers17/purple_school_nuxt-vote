import type { PostFavorite } from '~/types/post.types';
import { PostFavoritesEnum } from '~/types/post.types';

export const useFavoritesStore = defineStore('favoritesStore', () => {
  const favorites = ref<PostFavorite[]>([])

  const likePost = (id: number) => {
    favorites.value.push({
      action: PostFavoritesEnum.LIKED,
      id,
    })
  }

  const dislikePost = (id: number) => {
    favorites.value.push({
      action: PostFavoritesEnum.DISLIKED,
      id,
    })
  }

  return {
    dislikePost,
    favorites,
    likePost,
  }
}, {
  persist: true,
})