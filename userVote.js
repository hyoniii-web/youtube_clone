const likeVote = document.querySelector(".likeVote");
const dislikeVote = document.querySelector(".dislikeVote");
let likeCount = document.querySelector(".likeNumber");
let dislikeCount = document.querySelector(".dislikeNumber");

let like_vote = false;
let dislike_vote = false;

likeVote.addEventListener("click", function() {
  if (dislike_vote === true) {
    likeVote.style.color = "#065fd4";
    dislikeVote.style.color = "#909090";
    likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;
    like_vote = true;
    dislike_vote = false;
  } else if (like_vote === false) {
    likeVote.style.color = "#065fd4";
    likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;
    like_vote = true;
  } else if (like_vote === true) {
    likeVote.style.color = "#909090";
    likeCount.innerHTML = parseInt(likeCount.innerHTML) - 1;
    like_vote = false;
  }
});

dislikeVote.addEventListener("click", function() {
  if (like_vote === true) {
    likeVote.style.color = "#909090";
    dislikeVote.style.color = "#ff0000";
    dislikeCount.innerHTML = parseInt(dislikeCount.innerHTML) + 1;
    dislike_vote = true;
    like_vote = false;
  } else if (dislike_vote === false) {
    dislikeVote.style.color = "#ff0000";
    dislikeCount.innerHTML = parseInt(dislikeCount.innerHTML) + 1;
    dislike_vote = true;
  } else if (dislike_vote === true) {
    dislikeVote.style.color = "#909090";
    dislikeCount.innerHTML = parseInt(dislikeCount.innerHTML) - 1;
    dislike_vote = false;
  }
});
