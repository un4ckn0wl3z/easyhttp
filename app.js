const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
  
// });


// Get Single post
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
  
// });

// Post reuest

// Create data
const data = {
  title:'Custom Post',
  body: 'This custom post'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
  
// });

// Update
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
// });

// DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
  if(err){
    console.log(err);
  }else{
    console.log(response);
  }
  
});
















