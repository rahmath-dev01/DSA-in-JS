const reels = [
  {
    username: "tech_with_rahul",
    likeCount: 1240,
    isLiked: false,
    commentCount: 89,
    caption: "Learning JavaScript DOM step by step 🚀",
    video: "./videos/1.mp4",
    userProfile: "https://images.unsplash.com/photo-1531891437562-43055c9e1b39", // portrait from Unsplash :contentReference[oaicite:0]{index=0}
    isFollowed: true,
    shareCount:16
  },
  {
    username: "code.daily",
    likeCount: 3421,
    isLiked: true,
    commentCount: 210,
    caption: "One project a day keeps fear away 💻",
    video: "./videos/2.mp4",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", // portrait from Unsplash :contentReference[oaicite:1]{index=1}
    isFollowed: false,
    shareCount:75
  },
  {
    username: "frontend.journey",
    likeCount: 987,
    isLiked: false,
    commentCount: 45,
    caption: "CSS animations make UI feel alive ✨",
    video: "./videos/3.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", // portrait from Unsplash :contentReference[oaicite:2]{index=2}
    isFollowed: false,
    shareCount:25
  },
  {
    username: "js.mastery",
    likeCount: 5600,
    isLiked: true,
    commentCount: 430,
    caption: "Stop memorizing JavaScript. Start building 🔥",
    video: "./videos/4.mp4",
    userProfile: "https://images.unsplash.com/photo-1502767089025-6572583495b4", // portrait from Unsplash :contentReference[oaicite:3]{index=3}
    isFollowed: true,
    shareCount:270
  },
  {
    username: "ui.ux.designs",
    likeCount: 2210,
    isLiked: false,
    commentCount: 132,
    caption: "Good design is obvious. Great design is transparent 🎨",
    video: "./videos/5.mp4",
    userProfile: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c", // portrait from Unsplash :contentReference[oaicite:4]{index=4}
    isFollowed: true,
    shareCount:28
  },
  {
    username: "coding.student",
    likeCount: 678,
    isLiked: false,
    commentCount: 28,
    caption: "Day 15 of learning JavaScript 💪",
    video: "./videos/6.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", // portrait from Unsplash :contentReference[oaicite:5]{index=5}
    isFollowed: false,
    shareCount:16
  },
  {
    username: "react.dev",
    likeCount: 8120,
    isLiked: true,
    commentCount: 560,
    caption: "React hooks simplified in 30 seconds ⚛️",
    video: "./videos/7.mp4",
    userProfile: "https://images.unsplash.com/photo-1544725176-7c40e5a2b6d5", // portrait from Unsplash :contentReference[oaicite:6]{index=6}
    isFollowed: true,
    shareCount:162
  },
  {
    username: "web.wizard",
    likeCount: 1540,
    isLiked: false,
    commentCount: 77,
    caption: "Small UI tweaks = big UX impact 🧙‍♂️",
     video: "./videos/8.mp4",
    userProfile: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce", // portrait from Unsplash :contentReference[oaicite:7]{index=7}
    isFollowed: false,
    shareCount: 33
  },
  {
    username: "learn.to.code",
    likeCount: 2990,
    isLiked: true,
    commentCount: 198,
    caption: "Consistency beats motivation every time ⏳",
    video: "./videos/9.mp4",
    userProfile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7", // portrait from Unsplash :contentReference[oaicite:8]{index=8}
    isFollowed: true,
    shareCount:98
  },
  {
    username: "dev.mindset",
    likeCount: 4300,
    isLiked: false,
    commentCount: 320,
    caption: "Think like a developer, not a tutorial follower 🧠",
    video: "./videos/10.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde", // portrait from Unsplash :contentReference[oaicite:9]{index=9}
    isFollowed: false,
    shareCount: 67
  }
];



var sum = ''
reels.forEach(function (elem) {
    sum = sum + `<div class="reel">
          <video autoplay loop muted src="${elem.video}"></video>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userProfile}"
                alt="">
              <h4>${elem.username}</h4>
              <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div class="like">
              <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
})


var allReels = document.querySelector('.all-reels')

allReels.innerHTML = sum
