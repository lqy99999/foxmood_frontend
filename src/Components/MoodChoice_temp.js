import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useRef, useEffect} from "react";


const MoodChoice_temp = () => {
    
    return (
        <div>
            <div className="gallery-temp">
                <ul className="moods-temp">
                  <li><button>Happy</button></li>
                  <li><button>Angry</button></li>
                  <li><button>Sad</button></li>
                  <li><button>Excited</button></li>
                  <li><button>Curious</button></li>
                  <li><button>Blank</button></li>
                  <li><button>Tired</button></li>
                  <li><button>Energetic</button></li>
                  <li>
                    <Link to="/time-record">
                        <button>Fk you deadline</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/post-share">
                        <button>You R Happy</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/light-bulb">
                        <button>Wanna Sleep Anytime</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/north-sucks">
                        <button>It sucks today</button>
                    </Link>
                  </li>
                </ul>
            </div>
            
        </div>
    );
};

export default MoodChoice_temp