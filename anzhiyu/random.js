var posts=["posts/2019-year-end-summary/","posts/c262e439/","posts/blog-theme-butterfly/","posts/14199673/","posts/d26a76bd/","posts/d1218a85/","posts/91ec2d73/","posts/fc9fd9b5/","posts/d8dd4996/","posts/8d9347c2/","posts/c4bac44f/","posts/8ea9fbb0/","posts/ac1f562f/","posts/9d5ee0fc/","posts/787b128f/","posts/f592858d/","posts/2efe3f81/","posts/a9ef8b30/","posts/ec732b0b/","posts/2732f46c/","posts/f2c08718/","posts/bb086e69/","posts/93fd2081/","posts/3347ffd9/","posts/6c832589/","posts/643adfaf/","posts/6639f941/","posts/8a0f7021/","posts/9a68575b/","posts/659ad47f/","posts/928337f/","posts/b08c2d5c/","posts/9ea8e4e2/","posts/a6ff50fb/","posts/74aa28e7/","posts/4e5a1d86/","posts/17d88ccd/","posts/9a11719c/","posts/bb13b76c/","posts/be716dda/","posts/1d765c0b/","posts/addcbd3c/","posts/4a17b156/","posts/a6893028/","posts/960bf736/","posts/5fa89cf9/","posts/ios-keyboard/","posts/81a9a14/","posts/4a1c9cd4/","posts/5c9174ab/","posts/8a59ac18/","posts/notes-human-weaknesses/","posts/7bc93886/","posts/3ab24765/","posts/5c47992a/","posts/fcd4ccb0/","posts/befdf425/","posts/62df99ac/","posts/fafd563b/","posts/c13ccd3/","posts/e6af51de/","posts/289b1ac0/","posts/about-blog/","posts/af84bb73/","posts/4a45efa9/","posts/23e44d04/","posts/9d8aa099/","posts/b93b585a/","posts/github-pages-hexo-blog/","posts/13948d54/","posts/b18f5bd5/","posts/431ed274/","posts/f53de7a7/","posts/fa1b3b3e/","posts/4a5ba132/","posts/ac8a4cea/","posts/f13b8939/","posts/app-size/","posts/52837b18/","posts/d0eb85c8/","posts/fe36d5af/","posts/244197c6/","posts/f34010c7/","posts/b9f36499/","posts/b7c56388/","posts/32192d5d/","posts/8fc0041f/","posts/5fc07fa3/","posts/2f8549b2/","posts/aee166e/","posts/4897031/","posts/bc351754/","posts/ef7f2c5f/","posts/174fa98/","posts/b4a1c964/","posts/7f078e0f/","posts/5c4a8eaa/","posts/6f9d5824/","posts/812d49a5/","posts/f8949ad0/","posts/cb55dc0b/","posts/72c172e3/","posts/9f2d1094/","posts/url-coding-and-decoding/","posts/201947e4/","posts/e3d073f9/","posts/8ca90312/","posts/fc4e66e3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };