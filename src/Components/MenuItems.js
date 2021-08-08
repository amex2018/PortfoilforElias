import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function MenuItems({menuItem}) {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    
                      return  <div data-aos="fade-up" className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="Portfolis-images"/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                    <a href={item.link2}>{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>Placeholder paragraph</p>
                    </div> 

                })
            }
        </div>
    )
}

export default MenuItems;
