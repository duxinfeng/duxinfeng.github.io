var posts=["posts/2019-year-end-summary","posts/blog-theme-butterfly","posts/2023-year-end-summary","posts/14199673","posts/CALayer-CALayerPrivate-ancestorSharedWithLayer","posts/d1218a85","posts//2017/08/02/DTCoreText使用总结/","posts/DOUAudioStreamer设置currentTime无效","posts/d8dd4996","posts/ERROR-ITMS-90046","posts/error-itms-90086","posts/ac1f562f","posts/error-itms-90474","posts/f592858d","posts/fmdb","posts/787b128f","posts/2efe3f81","posts/gtd","posts/git-ignore","posts/mac-book-pro-2017-maintenance","posts/ec732b0b","posts/bb086e69","posts/mantle","posts/nsurl-initialization-failed","posts/RESideMenu","posts/6639f941","posts/8a0f7021","posts/UITabBar-UINavigationBar","posts/928337f","posts/b08c2d5c","posts/9ea8e4e2","posts/WKWebView","posts/Xcode-10-Multiple-commands-produce","posts/xcode10--lstdc++.6.0.9","posts/17d88ccd","posts/app-web","posts/xcode6-delete-app","posts/error-lipo-can-not-write-to-output-file","posts/fastlane","posts/hello-world","posts/a6893028","posts/ios-17-trait-collection","posts/ios-thread","posts/ios-open-source-app","posts/ios-keyboard","posts/symbolicatecrash","posts/5c9174ab","posts/8a59ac18","posts/notes-human-weaknesses","posts/7bc93886","posts/upgrade-third-party-sdk","posts/5c47992a","posts/collect-repo","posts/befdf425","posts/no-bug","posts/fafd563b","posts/bug-and-bug","posts/fool-word-app","posts/FileZila","posts/about-blog","posts/af84bb73","posts/4a45efa9","posts/tools","posts/b93b585a","posts/13948d54","posts/wechat-lab","posts/uiviewcontroller-push-pop","posts/buy-a-bag","posts/github-pages-hexo-blog","posts/booklist","posts/alipay-wechatpay","posts/4a5ba132","posts/f13b8939","posts/app-size","posts/city-api","posts/d0eb85c8","posts/BB20151122","posts/BB20151115","posts/BB20151129","posts/BB20151107","posts/7f078e0f","posts/BB20151220","posts/BB20151231","posts/BB20151206","posts/BB20160202","posts/BB20160321","posts/BB20160327","posts/BB20180110","posts/BB20180111","posts/BB20180109","posts/BB201911","posts/BB20200311","posts/BB20210427","posts/science-and-the-internet","posts/f8949ad0","posts/apple-service","posts/get-app-info","posts/cagradientlayer","posts/url-coding-and-decoding","posts/readbook","posts/e3d073f9","posts/alipay-warning","posts/appid-verify"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };