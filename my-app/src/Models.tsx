export type User = {
  followers_count: string
  friends_count: string
  geo_enabled: string
  location: string
  name: string
  profile_image_url: string
  profile_location: string
  statuses_count: number
  username: string
  verified: string
}

export type UserDetail = {
  alltweets: Alltweets[];
  celebrityscore: Celebrityscore[];
  overallscore: number;
  topfivewords: Topfivewords;
  tweets: Tweets;
  tweetsamount: number;
  tweetstart: string;
  userinfo: User;
  weekscores: WeekScores[];
  wordsmatched: number;
  danishuserscore: Comparison 
}

export type Comparison = {
  danishoverall: number,
  percent: number,
  usersamount: number,
  usersless: number
}

export type Alltweets = {
  created: string;
  id: number;
  score: number;
}

export type Celebrityscore = {
  pic: string;
  score: number;
  username: string;
}
export type Topfivewords = {
  bottom: string[];
  top: string[];
}
export type Tweets = {
  happiest: HappiestOrSaddest;
  saddest: HappiestOrSaddest;
}
export type HappiestOrSaddest = {
  id: string;
  score: number;
}
export type WeekScores = {
  Day: string;
  Score: number;
}