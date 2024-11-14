let post = null;

fetch('https://jsonplaceholder.typicode.com/posts') 
//jsonplaceholder : 가짜 서버, 데이터가 명확하지 않을때 테스트용으로 사용

//ajax를 콜백사용 - 데이터 합치는 경우
.then(res => res.json())
.then(postList =>{


  let postId = postList[0].userId;
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(res => res.json())
  .then(postInfo => {

    post = postInfo;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res => res.json())
    .then(commentList => {
      post.comments = commentList;
      console.log(post);
    })
    .catch(err => console.log(err));


  })
  .catch(err => console.log(err));


})
.catch(err => console.log(err));

