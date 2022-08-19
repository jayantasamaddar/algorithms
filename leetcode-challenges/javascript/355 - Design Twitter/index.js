/**
 * 355 - Design Twitter (https://leetcode.com/problems/design-twitter)
 * -------------------------------------------------------------------
 * Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.
 * Implement the Twitter class:
 *
 * - Twitter() Initializes your twitter object.
 * - void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
 * - List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
 * - void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
 * - void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.
 *
 */

var User = function (tweets = [], followers = []) {
  this.tweets = tweets;
  this.followers = followers;
  this.newsfeed = [...tweets];
};
var Twitter = function () {
  this.users = {};
  this.tweets = {};
  this.count = 0;
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (this.users.hasOwnProperty(userId)) {
    this.users[userId] = {
      ...this.users[userId],
      tweets: [tweetId, ...this.users[userId].tweets],
      newsfeed: [tweetId, ...this.users[userId].newsfeed.splice(0, 9)],
    };
    const followers = this.users[userId].followers;
    for (let i = 0; i < followers.length; i++) {
      this.users[followers[i]].newsfeed = [
        tweetId,
        ...this.users[followers[i]].newsfeed.splice(0, 9),
      ];
    }
  } else this.users[userId] = new User([tweetId], []);
  this.count++;
  this.tweets[tweetId] = {
    userId,
    tweetId,
    tweetNumber: this.count,
  };
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  return this.users[userId]?.newsfeed;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.users.hasOwnProperty(followeeId)) {
    this.users[followeeId] = new User();
  }
  if (!this.users.hasOwnProperty(followerId)) {
    this.users[followerId] = new User();
  }

  if (this.users[followeeId].followers.includes(followerId)) return;

  // Add to list of followers
  this.users[followeeId].followers.unshift(followerId);

  // Update Newsfeed
  const followerFeed = this.users[followerId].newsfeed;
  if (followerFeed.length === 0)
    this.users[followerId].newsfeed.push(
      ...this.users[followeeId].tweets.slice(0, 10)
    );
  else {
    /** Merge with latest in front */
    const followeeTweets = this.users[followeeId].tweets
      .map(tweetID => this.tweets[tweetID])
      .splice(0, 10);

    let j = followeeTweets.length - 1;
    while (followerFeed.length <= 10 && j >= 0) {
      for (let k = 0; k < followerFeed.length; k++) {
        if (
          followeeTweets[j].tweetNumber >
          this.tweets[followerFeed[k]].tweetNumber
        ) {
          // Insert at Index k
          followerFeed.splice(k, 0, followeeTweets[j].tweetId);

          // Check if size exceeds 10
          if (followerFeed.length > 10) {
            followerFeed.pop();
          }
          j--;
          break;
        }
      }
    }
  }
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (
    this.users.hasOwnProperty(followerId) &&
    this.users.hasOwnProperty(followeeId) &&
    this.users[followeeId].followers.includes(followerId)
  ) {
    const followerTweets = this.users[followeeId].newsfeed.filter(
      tweetId => !this.users[followerId].tweets.includes(tweetId)
    );

    // Remove followee's tweets from follower's newsfeed.
    for (let i = 0; i < followerTweets.length; i++) {
      this.users[followerId].newsfeed.splice(
        this.users[followerId].newsfeed.indexOf(followerTweets[i]),
        1
      );
    }

    // Remove from list of followers
    this.users[followeeId].followers.splice(
      this.users[followeeId].followers.indexOf(followerId),
      1
    );
  }
};

/** Testing */

// const twitter = new Twitter();
// twitter.postTweet('userID_1', 'tweetID_1');
// twitter.postTweet('userID_2', 'tweetID_2');
// twitter.follow('userID_2', 'userID_1');
// twitter.postTweet('userID_2', 'tweetID_3');
// console.log(JSON.stringify(twitter));
// console.log(twitter.getNewsFeed('userID_1'));
// twitter.unfollow('userID_2', 'userID_1');
// console.log(JSON.stringify(twitter));

/**
 * Example 1
 * ---------
 *
 * Input
 * -----
 * ["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]
 * [[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]
 *
 * Output: [null,null,[5], ]
 * Expected: [null,null,[5],null,null,[6,5],null,[5]]
 */

// const twitter = new Twitter();
// twitter.postTweet(1, 5);
// console.log(JSON.stringify(twitter));
// console.log(twitter.getNewsFeed(1)); // [5]
// twitter.follow(1, 2);
// console.log({ afterFollow: JSON.stringify(twitter) });
// twitter.postTweet(2, 6);
// console.log(JSON.stringify(twitter));
// console.log(twitter.getNewsFeed(1)); // [6, 5]
// twitter.unfollow(1, 2);
// console.log(twitter.getNewsFeed(1)); // [5]

/*************************************************************************************************/

/**
 * Example 2
 * ---------
 *
 * Input
 * -----
 * ["Twitter","postTweet","getNewsFeed","follow","getNewsFeed","unfollow","getNewsFeed"]
 * [[],[1,1],[1],[2,1],[2],[2,1],[2]]
 *
 * Output: [null,null,[1],null,[],null,[]]
 * Expected: [null,null,[1],null,[1],null,[]]
 */

// const twit = new Twitter();
// twit.postTweet(1, 1);
// console.log(twit.getNewsFeed(1)); // [1]
// twit.follow(2, 1);
// console.log(twit.getNewsFeed(2)); // [1]
// console.log(JSON.stringify(twit)); // {"users":{"1":{"tweets":[1],"followers":[2],"newsfeed":[1]},"2":{"tweets":[],"followers":[],"newsfeed":[1]}},"tweets":{"1":1}}
// twit.unfollow(2, 1);
// console.log(JSON.stringify(twit)); // {"users":{"1":{"tweets":[1],"followers":[],"newsfeed":[1]},"2":{"tweets":[],"followers":[],"newsfeed":[]}},"tweets":{"1":1}}
// console.log(twit.getNewsFeed(2)); // []

/*************************************************************************************************/

/**
 * Example 3
 * ---------
 *
 * Input
 * -----
 * ["Twitter","postTweet","postTweet","unfollow","getNewsFeed"]
 * [[],[1,4],[2,5],[1,2],[1]]
 *
 * Output: [null,null,null,null,[]]
 * Expected: [null,null,null,null,[4]]
 */

// const twitt = new Twitter();
// twitt.postTweet(1, 4);
// twitt.postTweet(2, 5);
// console.log(JSON.stringify(twitt));
// twitt.unfollow(1, 2);
// console.log(JSON.stringify(twitt));
// console.log(twitt.getNewsFeed(1));

/*************************************************************************************************/

/**
 * Example 4
 * ---------
 *
 * Input
 * -----
 * ["Twitter","postTweet","postTweet","unfollow","follow","getNewsFeed"]
 * [[],[1,4],[2,5],[1,2],[1,2],[1]]
 *
 * Output: [null,null,null,null,null,[4]]
 * Expected: [null,null,null,null,null,[5,4]]
 */

// const twit4 = new Twitter();
// twit4.postTweet(1, 4);
// twit4.postTweet(2, 5);
// twit4.unfollow(1, 2);
// twit4.follow(1, 2);
// console.log(twit4.getNewsFeed(1)); // [5, 4]

/*************************************************************************************************/

/**
 * Example 5
 * ---------
 *
 * Input
 * -----
 * ["Twitter","postTweet","follow","follow","getNewsFeed"]
 * [[],[2,5],[1,2],[1,2],[1]]
 *
 * Output: [null,null,null,null,[5,5]]
 * Expected: [null,null,null,null,[5]]
 */

// const twit5 = new Twitter();
// twit5.postTweet(2, 5);
// twit5.follow(1, 2);
// console.log(JSON.stringify(twit5));
// twit5.follow(1, 2);
// console.log(twit5.getNewsFeed(1)); // [ 5 ]

/*************************************************************************************************/

/**
 * Example 6
 * ---------
 *
 * Input
 * -----
 * ["Twitter","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","getNewsFeed","follow","getNewsFeed"]
 * [[],[2,5],[1,3],[1,101],[2,13],[2,10],[1,2],[2,94],[2,505],[1,333],[1,22],[2],[2,1],[2]]
 *
 * Output: [null,null,null,null,null,null,null,null,null,null,null,[505,94,10,13,5],null,[3,101,2,333,22,505,94,10,13,5]]
 * Expected: [null,null,null,null,null,null,null,null,null,null,null,[505,94,10,13,5],null,[22,333,505,94,2,10,13,101,3,5]]
 */

const twit6 = new Twitter();
twit6.postTweet(2, 5);
twit6.postTweet(1, 3);
twit6.postTweet(1, 101);
twit6.postTweet(2, 13);
twit6.postTweet(2, 10);
twit6.postTweet(1, 2);
twit6.postTweet(2, 94);
twit6.postTweet(2, 505);
twit6.postTweet(1, 333);
twit6.postTweet(1, 22);

twit6.follow(2, 1);
console.log(twit6.getNewsFeed(2)); // [ 22, 333, 505, 94, 2, 10, 13, 101, 3, 5 ]
console.log(
  JSON.stringify({
    ...twit6.users[2],
    expected: [22, 333, 505, 94, 2, 10, 13, 101, 3, 5],
  })
);

/**
 * {
  '2': { userId: 1, created_at: 1659441228027 },
  '3': { userId: 1, created_at: 1659441228027 },
  '5': { userId: 2, created_at: 1659441228027 },
  '10': { userId: 2, created_at: 1659441228027 },
  '13': { userId: 2, created_at: 1659441228027 },
  '22': { userId: 1, created_at: 1659441228027 },
  '94': { userId: 2, created_at: 1659441228027 },
  '101': { userId: 1, created_at: 1659441228027 },
  '333': { userId: 1, created_at: 1659441228027 },
  '505': { userId: 2, created_at: 1659441228027 }
}
 */
