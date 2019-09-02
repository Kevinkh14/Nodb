import React,{Component} from 'react';
import './header.css';


class Header extends Component{
    render(props){
        return(
            
            <div id = 'header'>
                {/* <img className = 'menu'src="https://img.icons8.com/android/50/000000/menu.png"/> */}
                <h1 className = 'nav'>Tuner Talk</h1>
                {/* <img className ='search'
                src="https://img.icons8.com/ios/50/000000/search--v1.png"/>     */}
            {/* <input className='searchBar'type = 'text' placeholder ="Search"/> */}
            </div>
         
        
        
           
        )
    }
}

export default Header