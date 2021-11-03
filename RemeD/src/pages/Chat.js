import { SEND_APP_ID, SENDBIRD_USER_ID } from "../utils/sendbird_const";
import { App } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

const styles = {
  fontFamily: "san-serif",
  textAlign: "center",
  height: "100vh",
};

const Chat = () => {
  return (
    <div style={styles}>
      <App appId={SEND_APP_ID} userId={SENDBIRD_USER_ID} />
    </div>
  );
};

export default Chat;
