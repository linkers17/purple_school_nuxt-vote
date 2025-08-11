export interface Post {
  likes: number,
  dislikes: number,
  id: number,
  title: string,
  content: string,
  author_id: number,
  rating: number,
  published_at: Date,
  updated_at: Date,
}

export interface PostsResponse {
  posts: Post[],
  total: number,
  page: number,
  page_size: number,
  total_pages: number,
}