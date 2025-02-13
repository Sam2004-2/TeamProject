import Image from './assets/3.jpg'
import './Card.css'

function Card(){
    return(
        <div className="content">
            <div className="block">
                <center>
                    <img src={Image} alt="image" class="image" />

                    <h1 className="title">Blog Title</h1><br />

                    <div className="themes">
                        <h3>Blog Theme</h3>
                        <h3>Blog Theme</h3>
                        <h3>Blog Theme</h3>
                    </div><br />

                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Libero repellat illo fuga suscipit natus laboriosam soluta maiores porro. <br /><br />
                    </p>
                    
                    <a href="#" id="button">Read Blog</a>
                </center>
            </div>
        </div>
    );
}

export default Card