import style from "./Header.module.css"
import {NavLink} from "react-router-dom"
const Header = () => {
  return (
    <div className={style.AllHeader}><div className={style.Header1}>
      <div className={style.headerleftOne}>
        <select className={style.Select1}>
        <option className={style.Option}>Umico Bonus tərəfdaşları</option>
        <option className={style.Option}>Super Marketlər</option>
        <option className={style.Option}>Restoran və Kafelər</option>
        <option className={style.Option}>Model və Stil</option>
        <option className={style.Option}>Gözəllik</option>
        <option className={style.Option}>Sağlamlıq</option>
       </select>
       <NavLink className={style.HeaderHed}><h4>Umico Bonus</h4></NavLink>
        <NavLink className={style.HeaderHed}><h4>Çaldırma və Ödəmə</h4></NavLink>
         <NavLink className={style.HeaderHed}><h4>Qaytarılma</h4></NavLink>
         <NavLink className={style.HeaderHed}><h4>Zəmanət </h4></NavLink>
         <NavLink className={style.HeaderHed} id={style.Umic}><h4>Umico Market-də Satın </h4></NavLink></div>
       <div className={style.HeaderRight}> <div className={style.HeaderPhone}><i id={style.PhoneIcon} className="fa-solid fa-phone"></i> <h4 className={style.PhoneNum}>915</h4></div>

        
        <select className={style.Select1}>
          <div><img src="https://i.pinimg.com/736x/94/8f/08/948f08414852cece8d17c7fa29a53bd9.jpg"/>
        <option className={style.Option}>Az</option></div>
 <div><img src="https://i.pinimg.com/736x/94/8f/08/948f08414852cece8d17c7fa29a53bd9.jpg"/>
        <option className={style.Option}>Ru</option></div>       </select>
                <div className={style.HeaderUser}>< i id={style.UserIcon} className="fa-solid fa-user"></i> <h3 className={style.User}>Qeydiyyat|Giriş</h3></div></div>

</div>
<hr/>
        <div className={style.Header2}>
         <div className={style.strrr}><div> <h1 className={style.uHed1}><img className={style.HedLogo} src="data:image/png;base64,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" alt="" /> Umico</h1>
        </div><div className={style.Locattion}><NavLink className={style.HeaderHed}><i id={style.LocaIco} className="fa-solid fa-location-dot"></i></NavLink><NavLink className={style.HeaderHed}><h3 className={style.Locaco}>Şəhər:Bakı</h3></NavLink></div>
      <select className={style.Select2}>
        <option className={style.Option}><h1>Məhsul Kataloqu</h1></option>
        <option className={style.Option}>Kondisonerlər Çatdırılma</option>
        <option className={style.Option}>Bu son endirimdir</option>
        <option className={style.Option}>Ev təmizliyi mehsullar</option>
        <option className={style.Option}>Mega Endirimlər</option>
        <option className={style.Option}>Dükan Bazarlıq</option>
       </select></div>
      <div className={style.Search}> <input type="search" placeholder="  Məhsul Axtar" className={style.SearchInput}/>
       <button className={style.ButonSearch}>Axtar</button></div>
        
        <div className={style.Heart}><i id={style.HeartIco} className="fa-solid fa-heart"></i><h3 className={style.Heartm}>Seçilmişlər</h3></div>
        <div  className={style.basket}><i id={style.BasketIco} className="fa-solid fa-cart-shopping"></i><h3 className={style.Basketm}>Səbət</h3></div>        <i id={style.Bars} className="fa-solid fa-bars"></i>
</div>
        </div>
  )
}

export default Header