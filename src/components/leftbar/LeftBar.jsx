import './leftBar.scss'

import SocialLink from '../subComponents/SocialLink'

import Friends from '../../assets/friends.png'
import Groups from '../../assets/groups.png'
import Gaming from '../../assets/gaming.png'
import Market from '../../assets/market-place.png'
import Watch from '../../assets/watch.png'
import Memories from '../../assets/memories.png'
import Events from '../../assets/events.png'
import Gallery from '../../assets/gallery.png'
import Videos from '../../assets/videos.png'
import Messages from '../../assets/messages.png'

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://im.rediff.com/movies/2023/oct/30chandler1.jpg?w=670&h=900"
              alt=""
            />
            <span>Chandler Bing</span>
          </div>

          {/* <div className="item"> */}
          <SocialLink src={Friends} heading="Friends" />
          <SocialLink src={Groups} heading="Groups" />
          <SocialLink src={Market} heading="Market" />
          <SocialLink src={Watch} heading="Watch" />
          <SocialLink src={Memories} heading="Memories" />
          {/* </div> */}
        </div>
        <hr />

        <div className="menu">
          <span>Your shortcuts</span>
          <SocialLink src={Events} heading="Events" />
          <SocialLink src={Gaming} heading="Gaming" />
          <SocialLink src={Gallery} heading="Gallery" />
          <SocialLink src={Videos} heading="Videos" />
          <SocialLink src={Messages} heading="Messages" />
        </div>
      </div>
    </div>
  )
}
export default LeftBar
