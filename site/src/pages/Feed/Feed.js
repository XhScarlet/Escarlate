import { Link, useNavigate } from "react-router-dom";
import './feed.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Storage from 'local-storage'

export default function Feed(){

    const navigate  = useNavigate();

    function sairClick(){
        Storage.remove('cliente-logado');
        navigate('/login')
    }

return(
<main> 
<header className='header'>
             <div className='sub-header-1'>
             <img src={'../../../../assets/images/Group 1.png'} className='logo-header-conf' onClick={sairClick}/>
             <h2 className='nome-page'>Início</h2>
             </div>   
             <div>
            
             </div>
             <div className='sub-header-2'>
                <Link to='/MinhaConta'>
                <img src={'../../../../assets/images/user.png'} className='conf-img-header'/>
                </Link>
                
                <Link to='/Carrinho'>
                <img src={'../../../../assets/images/cart.png'} className='conf-img-header'/>
                </Link>
             </div>
        </header> <div className="feed">

    <section className="sec-top-hits">
    <h1 className="tit">TOP HITS</h1>    
    <div className="div-top-hits">
        <div className="sub-div-top-hits">
            <img src={'../../assets/images/Screenshot_20220806-195359-947 3.png'} className='conf-img-feed-music'/>
            <h2 className="tit-musica">HAYLOFT II</h2>
            <p className="tit-musica">MOTHER MOTHER</p>
        </div>
        <div className="sub-div-top-hits">
        <img src={'../../assets/images/Screenshot_20220806-195839-596 1.png'}  className='conf-img-feed-music'/>
            <h2 className="tit-musica">MASTER OF PUPPETS</h2>
            <p className="tit-musica">METALLICA</p>
        </div>
        <div className="sub-div-top-hits">
        <img src={'../../assets/images/Screenshot_20220806-195653 1.png'}  className='conf-img-feed-music'/>
            <h2 className="tit-musica">MEMORIES</h2>
            <p className="tit-musica">YUNGBLUB, WILLOW</p>
        </div>
    </div>
   
    </section>
     
    <section className="sec-top-hits">
    <Link to='/NossosArtistas'>
    <h1 className="tit">NOSSOS ARTISTAS</h1>   
    </Link>     
    <div className="div-top-hits">
       <img src={'../../assets/images/Ellipse 4.png'} className='conf-img-feed-music'/> 
       <img src={'../../assets/images/Ellipse 5.png'} className='conf-img-feed-music'/> 
       <img src={'../../assets/images/Ellipse 6.png'} className='conf-img-feed-music'/> 
    </div>
    </section>

    <section className="sec-top-hits">
    <Link to='/TodosProdutos' className="tit">  
    <h1>NOSSOS PRODUTOS</h1>   
    </Link>   
    <div className="div-top-hits">
       
       <img src={'../../assets/images/CANECA-removebg-preview 1.png'} className='conf-img-feed-produto'/> 
       <img src={'../../assets/images/BLUSA-removebg-preview 1.png'} className='conf-img-feed-produto'/> 
       <img src={'../../assets/images/metalica poster.png'} className='conf-img-feed-produto'/> 
    </div>
    </section>
 </div>
 </main>   
)
}