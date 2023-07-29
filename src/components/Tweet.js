import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  
  return (
    <div className="tweet">
      <ProfileImage 
        image={props.tweet.user.image}
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <User userData={props.tweet.user}/>
          </span>
          <span className="timestamp">
          <Timestamp timestamp={props.tweet.timestamp}/></span>
        </div>

        <p className="message">
        <Message message={props.tweet.message}/>
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions/>

        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
