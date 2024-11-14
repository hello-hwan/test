 // 10_async_await.js

// await는 반드시 async와 같이 사용해야됨
// await가 없으면 비동기작업으로 실행됨, 가독성이 높음

async function getPostInfo(){
    let postList = await fetch('https://jsonplaceholder.typicode.com/posts') //첫번째 fetch가 끝날때까지 기다려라.
                         .then(res => res.json()) // postList라는 배열을 가져옴
                         .catch(err => console.log(err)); //에러가 있으면 실행

    let postId = postList[0].id;
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`) // post라는 게시글을 가져옴
                     .then(res => res.json())
                     .catch(err => console.log(err));
    
    let commentList = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`) // post, postList를 합산하는 작업
                            .then(res => res.json())
                            .catch(err => console.log(err));
    post.comments = commentList;
    console.log(post);
} // 함수내부는 동기식 - 순차적으로 진행됨, 밖에서는 비동기식

getPostInfo();
console.log(`코드종료`);

//자바스크립트의 예외처리
/*
try {

    lalala; // 에러, 변수가 정의되지 않음!
    
  } catch(err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at ... (호출 스택)
  
    // 에러 전체를 보여줄 수도 있습니다. 이때, 에러 객체는 "name: message" 형태의 문자열로 변환됩니다.
    alert(err); // ReferenceError: lalala is not defined
    
  } finally {
    // 무조건 실행되는 코드
  }
  출처: https://inpa.tistory.com/entry/JS-📚-예외-처리 [Inpa Dev 👨‍💻:티스토리]
  */