var speak = require('speakeasy-nlp');
var db = require('mongoose');

var analysis = {};

analysis.tweetSentiment = function(tweetText){
  var negative = speak.sentiment.negativity(tweet).score;
  var positive = speak.sentiment.positivity(tweet).score;
  return  {positive : positive, negative: negative, date: Date.now()};
};

analysis.todaysTweets = function(tweetsArray){
  var positive = 0,
      negative = 0;
  tweetsArray.forEach(function(tweet){
    negative += speak.sentiment.negativity(tweet).score;
    positive += speak.sentiment.positivity(tweet).score;
  });
  return {positive : positive, negative: negative};
};

analysis.checkTweets = function(){

};

// console.log(analysis.tweetSentiment("i hate tacos"));
// console.log(analysis.tweetSentiment("love love love hate"));
// console.log(analysis.tweetSentiment("bad good bad bad"));
// console.log(analysis.tweetSentiment("like dislike fun bad"));
console.log(analysis.todaysTweets([
  "i hate tacos",
  "love love love hate",
  "bad good bad bad"
]));


module.exports = analysis;
