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

export type TopFive = {
  bottom: string[]
  top: string[]
}

export type TweetData = {
  alltweets: Tweet[]
  overallscore: number
  topfivewords: TopFive
}



export type HappyAndSaddest = {
  happiest: SkinnyTweet
  saddest: SkinnyTweet
}

export type SkinnyTweet = {
  id: string
  score: number
}

export type Tweet = {
  id: number
  create: Date
  score: number
}




/*alltweets: {1: {…}, 2: {…}, 3: {…}, 4: {…}, 5: {…}, 6: {…}, 7: {…}, 8: {…}, 9: {…}, 10: {…}, 11: {…}, 12: {…}, 13: {…}, 14: {…}, 15: {…}, 16: {…}, 17: {…}, 18: {…}, 19: {…}, 20: {…}, 21: {…}, 22: {…}, 23: {…}, 24: {…}, 25: {…}, 26: {…}, 27: {…}, 28: {…}, 29: {…}, 30: {…}, 31: {…}, 32: {…}, 33: {…}, 34: {…}, 35: {…}, 36: {…}, 37: {…}, 38: {…}, 39: {…}}
overallscore: 5.76
topfivewords:
bottom: (5) ["evil", "racist", "hate", "shit", "ruined"]
top: (5) ["healthy", "fun", "lucky", "cute", "life"]
__proto__: Object
tweets:
happiest: {id: "1363600450507984896", score: 7.52}
saddest: {id: "1364398438473998339", score: 7.52}
__proto__: Object
tweetsamount: 50
tweetstart: "2021-02-21 16:57:58"
userinfo:
followers_count: "4508"
friends_count: "1223"
geo_enabled: "False"
location: "Denmark"
name: "STANN.co"
profile_image_url: "https://pbs.twimg.com/profile_images/1350726312114212864/g5m9IPiZ.jpg"
profile_location: "None"
statuses_count: 41044
username: "STANN_co"
verified: "False"
__proto__: Object
weekscores: Array(7)
0: 5.648780114065827
1: 5.981111111111111
2: 5.160384615384616
3: 0
4: 0
5: 0
6: 6.535999999999999
length: 7
__proto__: Array(0)
wordsmatched:
matchedwords: 92*/