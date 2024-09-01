import { USERS } from "./users";

const postImage =
  "https://th.bing.com/th/id/R.4627a84b5a090071c396f72c7b7ec075?rik=DAJW9%2fAJ34y%2bRg&pid=ImgRaw&r=0";

export const POSTS = [
  {
    imageUrl: postImage,
    user: USERS[0].user,
    likes: 77870,
    caption: "Train Ride To London",
    profilePicture: USERS[0].image,
    comments: [
      {
        user: "Rafay",
        comment: "Wow, that's amazing!",
      },
      {
        user: "Emma",
        comment: "This is so beautiful!",
      },
    ],
  },
  {
    imageUrl: postImage,
    user: USERS[1].user,
    likes: 64250,
    caption: "Exploring the city",
    profilePicture: USERS[1].image,
    comments: [
      {
        user: "Sara",
        comment: "Love this view!",
      },
    ],
  },
  {
    imageUrl: postImage,
    user: USERS[2].user,
    likes: 104780,
    caption: "Hiking with friends",
    profilePicture: USERS[2].image,
    comments: [],
  },
  {
    imageUrl: postImage,
    user: USERS[3].user,
    likes: 89700,
    caption: "Lazy Sunday afternoon",
    profilePicture: USERS[3].image,
    comments: [
      {
        user: "John",
        comment: "Wish I was there!",
      },
      {
        user: "Mary",
        comment: "Looks so relaxing!",
      },
    ],
  },
];
