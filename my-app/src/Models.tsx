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
  allcelebrities: Celebrityscore[];
  overallscore: number;
  topfivewords: Topfivewords;
  tweets: Tweets;
  tweetsamount: number;
  tweetstart: string;
  tweetend: string;
  userinfo: User;
  highestweekscore: WeekScores;
  lowestweekscore: WeekScores;
  weekscores: WeekScores[];
  wordsmatched: number;
  danishuserscore: Comparison;
  monthlyaverages: MonthlyAverage[];
  averagesRange: number[];
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
export type MonthlyAverage = {
  x: number;
  y: number;
  date: string;
}