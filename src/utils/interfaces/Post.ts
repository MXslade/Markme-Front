// This interface should be updated, cause here we don't have information about author except id
// here we need full info about author, at least: name, role, and image
// for now it will work

interface Post {
  id: number;
  author_id: number;
  author_role: string;
  name: string;
  content: string;
  media: string[];
  datetime: Date;
  updated_at: Date;
  created_at: Date;
}

export default Post;
