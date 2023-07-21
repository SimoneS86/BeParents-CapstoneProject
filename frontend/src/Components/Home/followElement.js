import { useDispatch, useSelector } from "react-redux";
import profile from "./../../img/profile.jpg";
import { Button } from "react-bootstrap";
import { unFollowUser, unFollowUserStnd } from "../../redux/actions/followElement";

const FollowElement = ({ follow }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userData);

  const handleUnFollowClick = () => {
    if (currentUser && currentUser.profession) {
      // Se 'currentUser' esiste e ha 'profession', chiamo l'azione 'unFollowUserStnd' con 'follow.id'
      dispatch(unFollowUserStnd(follow.id));
    } else if (currentUser) {
      // Se 'currentUser' esiste ma non ha 'profession', chiamo l'azione 'unFollowUser' con 'follow.id'
      dispatch(unFollowUser(follow.id));
    } else {
      // Se 'currentUser' non esiste, puoi gestire l'eventuale caso qui, ad esempio mostrando un messaggio d'errore.
    }
  };

  return (
    <div className="row userContainer">
      <div className="left">
        <img
          className="thumbnail-image"
          style={{ width: "55px", height: "55px", borderRadius: "50%" }}
          src={follow.picture}
          alt="user pic"
        />
        <span>
          <h3>{`${follow.name} ${follow.surname}`}</h3>
          {follow.profession && <p>{follow.profession}</p>}
        </span>
      </div>
      <div className="right">
        <Button className=" bg-transparent " onClick={handleUnFollowClick}>
          UNFOLLOW
        </Button>
      </div>
    </div>
  );
};
export default FollowElement;
