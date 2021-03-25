import React from "react";
import Post from "../../utils/interfaces/Post";
import CreatePostField from "../SharedComponents/CreatePostField";
import New from "./New";

const NewsThread: React.FC = () => {
  // TODO get all user posts from data
  // below are just dummy data used to create template
  const posts: Post[] = [
    {
      id: 1,
      author_id: 1,
      author_role: "Manager",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque enim neque, id efficitur dolor hendrerit at. Duis faucibus et turpis vel volutpat. Nullam velit libero, sodales ut libero vel.",
      media: [
        "https://lumiere-a.akamaihd.net/v1/images/b_frozen2_nowplaying_staticmobilebackup_640x654_18772_cf7afd3b.jpeg?region=0,0,640,654",
        "https://www.denofgeek.com/wp-content/uploads/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?fit=1200%2C761",
        "https://lumiere-a.akamaihd.net/v1/images/ct_frozen2_elsa_18466_e4325e4c.jpeg?region=0,0,600,600",
      ],
      name: "Very interesting post about Frozen II",
      datetime: new Date(Date.now()),
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    },
    {
      id: 2,
      author_id: 1,
      author_role: "Manager",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque enim neque, id efficitur dolor hendrerit at. Duis faucibus et turpis vel volutpat. Nullam velit libero, sodales ut libero vel.",
      media: [
        "https://lumiere-a.akamaihd.net/v1/images/b_frozen2_nowplaying_staticmobilebackup_640x654_18772_cf7afd3b.jpeg?region=0,0,640,654",
        "https://www.denofgeek.com/wp-content/uploads/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?fit=1200%2C761",
        "https://lumiere-a.akamaihd.net/v1/images/ct_frozen2_elsa_18466_e4325e4c.jpeg?region=0,0,600,600",
      ],
      name: "Very interesting post about Frozen II",
      datetime: new Date(Date.now()),
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
    },
  ];

  return (
    <>
      <CreatePostField />
      {posts.map((post: Post) => (
        <New post={post} />
      ))}
    </>
  );
};

export default NewsThread;
