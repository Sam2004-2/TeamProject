import Image from './assets/3.jpg'
import './Card2.css'

function Card2(){
    return(
        <div className="cards">
            <div className="card">
                <div className="left-side">
                    <img src={Image} alt="image" className='image' />
                </div>
                <div className="right-side">
                    <center>
                        <h1 className="title">Title</h1> <br/>

                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum fugiat atque similique magni consequatur. <br/><br/>
                        </p>

                        <a href="#" className="goal-button">Button</a>
                    </center>
                </div>
            </div>

            <div className="card">
                <div className="left-side">
                    <img src={Image} alt="image" className='image' />
                </div>
                <div className="right-side">
                    <center>
                        <h1 className="title">Title</h1> <br/><br/>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum fugiat atque similique magni consequatur. <br/><br/>
                        </p>
                        <a href="#" className="goal-button">Button</a>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default Card2