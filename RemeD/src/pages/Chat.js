import { SEND_APP_ID } from "../utils/sendbird_const";
import { App } from "sendbird-uikit";
// import SendBird from 'sendbird'
import "sendbird-uikit/dist/index.css";
import NavBar from "../components/Sections/Navbar/NavBar";
import auth from '../services/auth'
import getCustomPaginatedQuery from './CustomUserQuery';

const styles = {
    fontFamily: "san-serif",
    textAlign: "center",
    height: "100vh",
};

// const sb = new SendBird({appId: SEND_APP_ID});
// const listQuery = sb.createApplicationUserListQuery();
// listQuery.metaDataKeyFilter = ['isDoctor'];
// listQuery.metaDataValuesFilter = ['true']

// listQuery.next(function(users, error) {
//     if (error) {
//         return console.log(error)
//     }
//     return users
// })

// interface UserListQuery {
//     hasNext: boolean;
//     next(callback): void;
// }

// const UserPaginatedQuery {
//     constructor(){
//         this.hasNext = false;
//     }

//     next(callback){
//         // fetch all the uses and filterthem
//         const [users, error] = 
//     }
// }


const Chat = () => {
    return (
        <div style={styles}>
            <NavBar />
            <App appId={SEND_APP_ID} userId={auth.isAuthenticated()._id} userListQuery={getCustomPaginatedQuery} />
        </div>
    );
};

export default Chat;
