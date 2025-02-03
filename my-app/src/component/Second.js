import diamond from '../images/shiva.jpeg'
function Second(){
  return(
    <div className="second">
      <div className="first-half">
        <div className="image-container">
          <img src={diamond}  className="shiva" />
        </div>
        <div class="abouts">
          <div class="name">
            Shiva Kumar
          </div>
          <div class="show">
            <span class="followers">
              3,844 Followers
            </span>
            <span class="manage">
              Manage Followers
            </span>
          </div>
        </div>
      </div>
      <div className="second-half">
        <button className="posts">Post</button>
        <button className="comments">Comments</button>
        <button className="comments">Videos</button>
        <button className="comments">Documents</button>
        <button className="comments">images</button>
      </div>
    </div>
  );
}
export default Second;