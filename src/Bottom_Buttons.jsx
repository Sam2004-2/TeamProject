import './Bottom_Buttons.css'

function Bottom_Buttons(){
    return(
        <div className="buttons">
            <div className="back">
                {/* <FontAwesomeIcon icon="fa-solid fa-backward" /> */}
                <a href="#">Back Button</a>
            </div>
            
            <div className="forward">
                {/* <FontAwesomeIcon icon="fa-solid fa-forward" /> */}
                <a href="#">Forward Button</a>
            </div>
        </div>
    );
}

export default Bottom_Buttons