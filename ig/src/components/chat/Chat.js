import { useEffect, useContext } from 'react';
import Header from '../common/Header';
/**import { CometChatUI } from '../../cometchat-pro-react-ui-kit/CometChatWorkspace/src';*/
import Context from '../../context';

const Chat = () => {
  const { cometChat } = useContext(Context);

  useEffect(() => {
    document.body.style = 'background: #fff';
    return () => {
      document.body.style = 'background: #fafafa';
    }
  }, []);

  return (
    <div>
      <div id="header">
        <Header />
      </div>
      
      </div>
  );
};
export default Chat;