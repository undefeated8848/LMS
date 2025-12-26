import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="col1">
        <img src={assets.logo} alt="logo" />
        <div className="desc-logo">
          <p>hello k cha khabar ai aaru k gardai chas tani ajkal ko jindagi ma suna tero halkhabar ani aaru vannnmalai k garna man 
            cha talai.</p>
        </div>
      </div>
      <div className="col2">
        <h1>Company</h1>
        <ul>
          <li><a href="#">Home</a></li>
           <li><a href="#">About US</a></li>
            <li><a href="#">Companies</a></li>
             <li><a href="#">Standard</a></li>
        </ul>
      </div>
      <div className="col3">
        <h2>Hello just listen to me!</h2>
        <p>The most exciting part of the wor first laptop.</p>
        <div className="col3-search">
          <input type="text" placeholder='Enter your Gmail' />
          <button className="col3-btn">Subscribe</button>
        </div>
      </div>
    </div>
    
  )
}

export default Footer
