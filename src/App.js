import './App.css';
import BigCube from './BigCube';
import Circle from './Circle';
import Imge from './Imge';
function App() {
  return (
    <div className="App">
      <BigCube className="divs">
        <div className="red">
          <Circle color="yellowgreen" >
            <Imge link="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80" />
          </Circle>
        </div>
        <div className="aqua">
          <Circle color="#F3C265 " >
            <Imge link='https://i.pinimg.com/originals/77/69/fb/7769fba1d0642e68aaa1dc17f9aa8c85.jpg' />
          </Circle>
        </div>
        <div className="yellow">
          <Circle color="pink">
            <Imge link="https://media.istockphoto.com/photos/playful-happy-smiling-pet-dog-running-in-the-grass-picture-id1320018473?b=1&k=20&m=1320018473&s=170667a&w=0&h=Q-U9yI4JjCJYSAzXZwpnM4HuaXPzo4K-vBsgO7lanyo=" />
          </Circle>
        </div>
        <div className="purple">
          <Circle color="#6DC3C3">
            <Imge link="https://pbs.twimg.com/media/D2G_DzcW0AAYiSL.jpg:large" />
          </Circle>
        </div>
      </BigCube>

    </div >
  );
}

export default App;
