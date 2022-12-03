import { Link } from 'react-router-dom';
import './Banner.css'

function Banner() {
    return ( 
        <div className="wrapper-banner">
            <div className="banner wrapper">
                <h3 className="banner-great">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit!

                </h3>
                <p className="banner-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nemo, dicta suscipit totam explicabo nisi, autem quo recusandae nesciunt eos, non libero facere saepe consequuntur? Dignissimos laborum esse ipsam accusantium!</p>
                <Link to={'./products'}>
                <button className="btn btn-banner">Shoping now</button></Link>
            </div>
            
        </div>
     );
}

export default Banner;