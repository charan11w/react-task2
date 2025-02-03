import details from "./details.js";
import diamond from '../images/shiva.jpeg';
import likeImage from '../images/like1.png';
import loveImage from '../images/love1.png';
import ideaImage from '../images/idea1.png';
import likeLogo from '../images/like.png';
import commentLogo from '../images/comment.png';
import repostLogo from '../images/repost.png';
import sendLogo from '../images/send.png';
import stats from '../images/stats.png'


function Post() {


  return (
    <>
      {
        details.map(sample => {
          const { about, content, time, likes, comments, reposts,
            impressions
          } = sample;
          return (
            <>
              <div className="post-details">
                <div className="top-section">
                  <div className="profile-details">
                    <div className="image-container">
                      <img src={diamond} className="shiva" />
                    </div>
                    <div className="about-section">
                      <div className="name">
                        Shiva Kumar
                        <span className="you">
                          &#46; You
                        </span>
                      </div>
                      <div className="role">
                        {about}
                      </div>
                      <div className="times">
                        {time}&#x1F310;
                      </div>
                    </div>
                  </div>
                </div>
                <div className="message">
                  &#x1F525;{content}&#x1F525;
                </div>
                <div className="more">
                  ...more
                </div>
                <div className="reactions">
                  <div className='r-images'>
                    <div className="r">
                      <img src={likeImage} className="r-i" />
                      <img src={loveImage} className="r-i-n" />
                      <img src={ideaImage} className="r-i-n" />
                      <span className="like-count">
                        {likes}
                      </span>
                    </div>
                  </div>
                  <div className="reposts">
                    {comments} comments{" . "}{reposts} reposts
                  </div>
                </div>
                <div className="send">
                  <div className="small-i">
                    <img src={diamond} className="shiva-small" />
                  </div>
                  <div className="like-logo">
                    <img src={likeLogo} className="likeg" />
                    <div className="logo-name">
                      Like
                    </div>
                  </div>
                  <div className="like-logo">
                    <img src={commentLogo} className="likeg" />
                    <div className="logo-name">
                      Comment
                    </div>
                  </div>
                  <div className="like-logo">
                    <img src={repostLogo} className="likeg" />
                    <div className="logo-name">
                      repost
                    </div>
                  </div>
                  <div className="like-logo">
                    <img src={sendLogo} className="likeg" />
                    <div className="logo-name">
                      Send
                    </div>
                  </div>
                </div>
                <div className="final">
                  <div className="stats">
                    <img src={stats} className="stats-logo" />
                  </div>
                  <div className="count-i">
                    {impressions}
                  </div>
                  <div className="ken">
                    View
                  </div>
                </div>
              </div>
            </>
          );
        })
      }
    </>

  );
}

export default Post;