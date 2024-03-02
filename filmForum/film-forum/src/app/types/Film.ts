

export interface Film {
     
    _id: string,
    filmName: string,
    filmCategory: string,
    filmDescription: string,
    filmImgUrl: string,
    ownerId: string,
    likes: string,
    comments: Comment[],
}

export interface Comment {
    _id: string;
    userId: string;
    username: string;
    commentText: string;
  }