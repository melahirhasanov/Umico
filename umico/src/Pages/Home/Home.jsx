import { useState } from "react";
import style from "./Home.module.css"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Grid, Navigation, Pagination, Autoplay} from "swiper/modules";
import { FaHeart, FaBalanceScale } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import CountDown from "react-countdown"

const leftMenu=["Kondisionerlər pulsuz çatdırılma ilə!",
  "Bu son endirimdir 💥",
  "Ev təmizliyi üçün məhsullar",
  "Mega endirimlər",
  "Dükan bazarlıq", // index 4
  "Telefonlar, Smart cihazlar və telefon aksesuarları",
  "Notbuk və kompüterlər",
  "Məişət texnikası",
  "TV, audio və video",
  "Ev əşyaları",
  "Gözəllik və Sağlamlıq",
  "Məişət kimyası",
  "İdman və Əyləncə",
  "Umico Gaming",]
  const categories=[{title:"Dükan bazarlıq",subcategories: [
      "Meyvə və tərəvəz",
      "Sosis və kolbasalar",
      "Yumurta, pendir və yağlar",
      "Toyuq və dəniz məhsulları",
      "Süd məhsulları",
      "Yoğurtlar və südülü desertlər",
      "Çörək məhsulları",
      "Alkoqolsuz içkilər",
      "Ev təmizliyi",
      "Gigiyena və gözəllik",
      "Makaronlar və paxlalı məhsullar",
      "Yarımafabrikatlar və donmuş qida",
      "Un, şəkər tozu və bişirmə əlavələri",
      "Duru yağlar",
      "Bal, cem və şokolad yağları",
    ],},{title:"Bu son endirimdir 💥",subcategories: [
      "Meyvə və tərəvəz",
      "Sosis və kolbasalar",
      "Yumurta, pendir və yağlar",
      "Toyuq və dəniz məhsulları",
      "Süd məhsulları",
      "Yoğurtlar və südülü desertlər",
      "Çörək məhsulları",
      "Alkoqolsuz içkilər",
      "Ev təmizliyi",
      "Gigiyena və gözəllik",
      "Makaronlar və paxlalı məhsullar",
      "Yarımafabrikatlar və donmuş qida",
      "Un, şəkər tozu və bişirmə əlavələri",
      "Duru yağlar",
      "Bal, cem və şokolad yağları",
    ],},{title:"Mega endirimlər",subcategories: [
      "Meyvə və tərəvəz",
      "Sosis və kolbasalar",
      "Yumurta, pendir və yağlar",
      "Toyuq və dəniz məhsulları",
      "Süd məhsulları",
      "Yoğurtlar və südülü desertlər",
      "Çörək məhsulları",
      "Alkoqolsuz içkilər",
      "Ev təmizliyi",
      "Gigiyena və gözəllik",
      "Makaronlar və paxlalı məhsullar",
      "Yarımafabrikatlar və donmuş qida",
      "Un, şəkər tozu və bişirmə əlavələri",
      "Duru yağlar",
      "Bal, cem və şokolad yağları",
    ],},{title:"Məişət texnikası",subcategories: [
      "Meyvə və tərəvəz",
      "Sosis və kolbasalar",
      "Yumurta, pendir və yağlar",
      "Toyuq və dəniz məhsulları",
      "Süd məhsulları",
      "Yoğurtlar və südülü desertlər",
      "Çörək məhsulları",
      "Alkoqolsuz içkilər",
      "Ev təmizliyi",
      "Gigiyena və gözəllik",
      "Makaronlar və paxlalı məhsullar",
      "Yarımafabrikatlar və donmuş qida",
      "Un, şəkər tozu və bişirmə əlavələri",
      "Duru yağlar",
      "Bal, cem və şokolad yağları",
    ],}]
    const Home=()=>{
        const [activeIndex,setActiveIndex]=useState(null)
        const activeCategory=activeIndex!==null?categories.find((cat)=>cat.title===leftMenu[activeIndex]):null;
        const showSubmenu=activeCategory&&activeCategory.subcategories.length>0
        const Competeleation=()=><span className={style.CompetationTime} style={{color:"white"}}>Ended</span>
        const renderer1=({hours,minutes,seconds,completed})=>{
          if(completed){
            return <Competeleation/>
          }
          else{
            return <div className={style.EPHours}><span className={style.SimpleEPTitle}>Kampaniyanın bitmə müddəti: </span><span className={style.Time}>{hours}:{minutes}:{seconds}</span></div>
          }
        }
        return(
            <>
            {activeIndex!==null&&<div className={style.overlay}/>}
            <div className={style.menuContainer} onMouseLeave={()=>setActiveIndex(null)}>
                            <div className={style.leftColumn} onMouseEnter={()=>setActiveIndex(activeIndex)}>
                            {leftMenu.map((item,idx)=>(<div key={idx} className={style.leftItem} onMouseEnter={()=>setActiveIndex(idx)}>{item}</div>))}
                            </div>
                           {showSubmenu&& (<div className={style.rightColumn}>
                            <div className={style.subMenu}>{activeCategory.subcategories.map((sub,i)=>(<div  key={i} className={style.subItem}>{sub}</div>))}
                            </div></div>)}

            </div>
            <Swiper className={style.Swipe} autoplay={{delay:4000,disableOnInteraction:false}} spaceBetween={50} slidesPerView={1} pagination={{clickable:true}} scrollbar={{draggable:true}} modules={[Navigation,Pagination,Autoplay]}>
                <SwiperSlide><img className={style.SwipeImg} src="https://strgimgr.umico.az/dcmimages/5893/612x384AZ_47094.webp"/></SwiperSlide>
                <SwiperSlide><img className={style.SwipeImg} src="https://strgimgr.umico.az/dcmimages/5703/612x384HONOR_46352.webp"/></SwiperSlide>
                <SwiperSlide><img className={style.SwipeImg} src="https://strgimgr.umico.az/dcmimages/5983/son612x384-AZz_47368.jpg"/></SwiperSlide>
                <SwiperSlide><img className={style.SwipeImg} src="https://strgimgr.umico.az/dcmimages/5799/612x384_47831.webp"/></SwiperSlide>
                <SwiperSlide><img className={style.SwipeImg} src="https://strgimgr.umico.az/dcmimages/6013/612x384kondi_47566.webp"/></SwiperSlide>
                <SwiperSlide><img className={style.SwipeImg} src="https://strgimgr.umico.az/dcmimages/5989/612x384AZ1_47428.webp"/></SwiperSlide>
                <SwiperSlide><img className={style.SwipeImg} src="https://strgimgr.umico.az/dcmimages/6097/612x384AZ_47846.webp"/></SwiperSlide>
                <SwiperSlide><img className={style.SwipeImg} src="https://strgimgr.umico.az/dcmimages/5986/612x384AZ2_47442.webp"/></SwiperSlide>
                <SwiperSlide><img className={style.SwipeImg} src="https://strgimgr.umico.az/dcmimages/6016/AZZinet_47593.webp"/></SwiperSlide>

            </Swiper>
            <div className={style.CatalogDiv}><img className={style.CatalogImg} src="https://strgimgr.umico.az/dcmimages/4596/280x138ru1_41130.jpg"/>
                 <img className={style.CatalogImg} src="https://strgimgr.umico.az/dcmimages/4104/28138_37236.jpg"/>
                 <img id={style.DisplayNonen} className={style.CatalogImg} src="https://strgimgr.umico.az/dcmimages/4334/280x138_38611.jpg"/></div>
                 <div className={style.CatalogCart}><div className={style.Stril}><div className={style.CatalogCartDiv}><i className="fa-solid fa-bag-shopping" id={style.BagId}></i><p className={style.BagP}>500 000-dən çox məhsul</p></div><hr/> <div className={style.CatalogCartDiv}><i className="fa-solid fa-truck" id={style.TruckId}></i><p className={style.TruckP}>50 ₼-dən başlayan sifarişlərə pulsuz çatdırılma</p> </div></div><hr/><div className={style.Stril}><div className={style.CatalogCartDiv}><i className="fa-regular fa-percent" id={style.PercentId}></i><p className={style.PercentP}>Endirimlər və aksiyalar</p> </div><hr/><div className={style.CatalogCartDiv}><i className="fa-regular fa-credit-card" id={style.CartId}></i><p className={style.CartP}>Birbank ilə 24 ayadək taksit</p> </div></div></div>
            <div className={style.AgoSeen}>
                    <h1 className={style.AgeSeenHeader}>Əvvəl Baxdıqlarınız</h1>
                           
            </div>
            <div className={style.AgeSeenCarts}><div className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/e22e2524-a98f-4490-9eab-fd000230ea8c.jpeg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i>
            <div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div>
            <p className={style.AsPercent}>-22%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div className={style.AgeSeenCart} id={style.DisplayNoneme}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/850711-003d77c78d000c1af25a109801b3da79.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div><p className={style.AsPercent}>-25%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DisplayNonen} className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/475502-93ca9e94c7dfbeefc04990c29b07725d.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div><p className={style.AsPercent}>-32%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DisplayNonenim} className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/961126-d8732fa51e5b2b93a127225e6b2da42b.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div><p className={style.AsPercent}>-12%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DisplayNonenmm} className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/43461-6bf5ba98e2a5ddf5e97de562728cd5c2.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div><p className={style.AsPercent}>-23%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div></div>
            <div className={style.EndPercent}> <h1 className={style.EpHeader}>Günün Endirimi</h1>
            <CountDown className={style.CountDown1} date={Date.now()+48000000} renderer={renderer1}/>
</div>
<div className={style.AgeSeenCartss}>           
   <Swiper 
  className={style.Swiper} 
  autoplay={{delay:4000,disableOnInteraction:false}} 
  spaceBetween={50} 
  slidesPerView={2} 
  pagination={{clickable:true}} 
  scrollbar={{draggable:true}} 
  modules={[Navigation,Pagination,Autoplay]}
  breakpoints={{1140:{slidesPerView:3,spaceBetween:10},772:{slidesPerView:2},345:{slidesPerView:1}}}
>
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/img/product/280/e22e2524-a98f-4490-9eab-fd000230ea8c.jpeg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-22%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/850711-003d77c78d000c1af25a109801b3da79.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-25%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/475502-93ca9e94c7dfbeefc04990c29b07725d.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-32%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/961126-d8732fa51e5b2b93a127225e6b2da42b.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-12%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/43461-6bf5ba98e2a5ddf5e97de562728cd5c2.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-23%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/img/product/280/e22e2524-a98f-4490-9eab-fd000230ea8c.jpeg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-22%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/850711-003d77c78d000c1af25a109801b3da79.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-25%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/475502-93ca9e94c7dfbeefc04990c29b07725d.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-32%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/961126-d8732fa51e5b2b93a127225e6b2da42b.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-12%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/43461-6bf5ba98e2a5ddf5e97de562728cd5c2.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-23%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/img/product/280/e22e2524-a98f-4490-9eab-fd000230ea8c.jpeg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-22%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/850711-003d77c78d000c1af25a109801b3da79.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-25%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/475502-93ca9e94c7dfbeefc04990c29b07725d.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-32%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/961126-d8732fa51e5b2b93a127225e6b2da42b.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-12%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImgI} src="https://strgimgr.umico.az/sized/280/43461-6bf5ba98e2a5ddf5e97de562728cd5c2.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-23%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
</Swiper><button className={style.buttonAll}>Hamısına Gör</button></div>
    <div className={style.EndCost}> <h1 className={style.EcHeader}>Bu son endirimdir💥</h1><div> <h1 className={style.uHed1}><img className={style.HedLogo} src="data:image/png;base64,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" alt="" /> Umico<span className={style.Market}>Market</span></h1>
    </div>
       </div>
  <div className={style.AllCatadiv}><div className={style.firstDiv}><div className={style.BigDiv}><img className={style.BigImg} src="https://strgimgr.umico.az/dcmimages/5997/tel_47489.jpg" alt="" /></div><div className={style.ColumCata}><div className={style.FourDiv}>
    <div className={style.Sil}><div><img className={style.FourImg} src="https://strgimgr.umico.az/dcmimages/5998/not_47492.jpg" alt="" /></div>
    <div><img className={style.FourImg} src="https://strgimgr.umico.az/dcmimages/5999/mak_47495.jpg" alt="" /></div></div>
   <div className={style.Sil}> <div><img className={style.FourImg} src="https://strgimgr.umico.az/dcmimages/6000/ho_47498.jpg" alt="" /></div>
    <div><img className={style.FourImg} src="https://strgimgr.umico.az/dcmimages/6001/met_47501.jpg" alt="" /></div></div>
    </div><div className={style.LargeSmallDiv}>
      <div><img className={style.SmallImg} src="https://strgimgr.umico.az/dcmimages/6002/soy_47504.jpg" alt="" /></div>
      <div><img className={style.LargeImg} src="https://strgimgr.umico.az/dcmimages/6003/632x200-az_47510.jpg" alt="" /></div>
      </div></div> </div><div className={style.FiveDiv}>
      <div className={style.Sill}><div><img className={style.FiveImg} src="https://strgimgr.umico.az/dcmimages/6004/qar_47516.jpg" alt="" /></div>
      <div><img className={style.FiveImg} src="https://strgimgr.umico.az/dcmimages/6005/pal_47519.jpg" alt="" /></div>
      <div><img className={style.FiveImg} src="https://strgimgr.umico.az/dcmimages/6006/qul_47522.jpg" alt="" /></div></div>
      <div className={style.Sill}><div><img className={style.FiveImg} src="https://strgimgr.umico.az/dcmimages/6007/yar_47525.jpg" alt="" /></div>
      <div><img className={style.FiveImg} src="https://strgimgr.umico.az/dcmimages/6008/kon_47528.jpg" alt="" /></div></div>
      </div></div>
           <div className={style.Brends}> 
            <h1 className={style.EbHeader}>Populyar brendlər</h1></div>
            <div className={style.PopulyarBrends}>
  <Swiper
    className={style.BrandSwiper}  breakpoints={{1300:{slidesPerView:4,spaceBetween:5},1577:{slidesPerView:5},345:{slidesPerView:1,spaceBetween:40},940:{slidesPerView:3,330:{slidesPerView:1,spaceBetween:400}}}}
    autoplay={{delay:4000,disableOnInteraction:false}} spaceBetween={50} slidesPerView={2} pagination={{clickable:true}} scrollbar={{draggable:true}} modules={[Navigation,Pagination,Autoplay]}
  >
    {/* Brand Slides */}
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Apple/apple_37776.png" alt="Apple" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Xiaomi/xiaomi_37780.jpg" alt="Xiaomi" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Samsung/samsung_37784.png" alt="Samsung" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Honor/honor_37788.png" alt="Honor" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/LG/lg_37792.png" alt="LG" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Bosch/bosch_37796.png" alt="Bosch" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Asus/asus_37800.png" alt="Asus" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Lenovo/lenovo_37804.png" alt="Lenovo" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/HP/hp_37808.png" alt="HP" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Roborock/roborock_37812.png" alt="Roborock" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Apple/apple_37776.png" alt="Apple" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Xiaomi/xiaomi_37780.jpg" alt="Xiaomi" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Samsung/samsung_37784.png" alt="Samsung" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Honor/honor_37788.png" alt="Honor" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/LG/lg_37792.png" alt="LG" />
      </div>
    </SwiperSlide>
  </Swiper>
  
  {/* Pagination Dots */}
  <div className={style.swiperPagination}></div>
</div>
<div className={style.Brendss}> 
            <h1 className={style.EbHeader}>Populyar Satıcılar</h1></div>
            <div className={style.PopulyarBrends}>
  <Swiper
  breakpoints={{1300:{slidesPerView:4,spaceBetween:10},1577:{slidesPerView:5},345:{slidesPerView:1,spaceBetween:40},940:{slidesPerView:3},330:{slidesPerView:1,spaceBetween:400}}}
    className={style.BrandSwiper}
    autoplay={{delay:4000,disableOnInteraction:false}} spaceBetween={50} slidesPerView={2} pagination={{clickable:true}} scrollbar={{draggable:true}} modules={[Navigation,Pagination,Autoplay]}
  >
    {/* Brand Slides */}
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/1715/rossmann2_36403.webp" alt="Apple" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/681/myshops_37913.png" alt="Xiaomi" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Samsung/samsung_37784.png" alt="Samsung" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/2439/texnohome_37942.png" alt="Honor" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/3849/ispace_37944.png" alt="LG" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/4756/adore_40962.png" alt="Bosch" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/2960/fil-electronics_37941.png" alt="Asus" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/2261/jysk_37922.png" alt="Lenovo" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/2557/go-sport_37940.png" alt="HP" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/3853/korendy_37937.png" alt="Roborock" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Apple/apple_37776.png" alt="Apple" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Xiaomi/xiaomi_37780.jpg" alt="Xiaomi" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Samsung/samsung_37784.png" alt="Samsung" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/Honor/honor_37788.png" alt="Honor" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={style.Brend}>
        <img className={style.BrandImg} src="https://strgimgr.umico.az/dcmimages/Brands/LG/lg_37792.png" alt="LG" />
      </div>
    </SwiperSlide>
  </Swiper>
  
  {/* Pagination Dots */}
  <div className={style.swiperPagination}></div>
</div>
<div className={style.BestSeller}>
<div className={style.EndCost}> <h1 className={style.EcHeader}>Ən çox satılanlar</h1><div> <h1 className={style.uHed1}><img className={style.HedLogo} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAxlBMVEX5Gl3////7///9AFn2EWD9+/r6GV3//v/5///2G13//P/2///8/f/5AFT7/P/zAFX5AFLyAFX/FV32AE78AFX18PL3GlnuIF3sAFf5DGDuHV/uqLz4//z0+v36F1nzjKr81N3/sMb2lrD23eD4pLn72uH9u8r+y9X6RXv86OzwgJ7sPnD+pLn5bJH4karyT4L4ssv8eJfwLmjze5n5Q3j/w9L/Mmz5zdjwz9v85PH7eKHpLWfwu8j2WYb0nbD46unwaZDpWn8iUPknAAAGZ0lEQVR4nO2bCXPaOhCAbZnIkmX54sqFOUJJoIE0J01ztP3/f6oySZPXIgK2xPD2vf3SmWbasrOftZZ2Hddx/uPwXSewddAQPmgIHzSEDxrCBw3hg4bwQUP4oCF80BA+aAgfNIQPGsIHDeGDhvBBQ/igIXzQED5oCB80hA8awgcN4YOG8EFD+KAhfNAQPmgIHzSEDxrCBw3hg4bwQUP4oCF80BA+aAgfNIQPGsIHDeGDhvBBQ/igIXzQED5oCB80hA8awgcN4YOG8EFD+KAhfNAQPmaGlHKHL9NqVQxL85b2jzOHVs7RyJC2uadlP2tXSqlFawe1ZQ4dviNDJ5NHx3vLdEQ9rxQv6YpoORzppVn1PM0M27JPXA2kXi1ePBAuWcI9iemuDHnc1wq69WpxvaHQxfskqxfpdgxdklSLJ0fE14Tr7c7QiVdU6UG1cLLHdIanFS/YAsPTIh5qBclZpYtOD8baCzaSO9tLqfesyyhkE69SuM++dg3P091VqTfRGUZsKKtEy6dCBJp4s/2dnRat/EJXVn7npPydQzmNv7Blwygkl5Wu1yuGa0ivdGsYiL270nWlDOvNKFyq0jBkZ9X6hxcM19ChTZ0iIdelb0RO8wt3WdANg86BwW1outPwuOcStlym5FSWbUNUkY5cTc2H7HvFDuk1rsmHC8M+IaFuFe/KhqbOobYeInJrchwaz4f5N0Z02x85isuWVtGUag27sUmGxoY3EdOtod+paUe9VahJ86AZ6Qw7rFr78BvjGT8eC50hU41IiSjUaSdH2nJ3WdOgoXEsGMpzoWtDfBFelNnjuXcjIu0astvS9f5nZJMPK+j+E9Md+qEg9/USmdH4JBBaQzKJjZI0XkN1TGs3CMWR3DC6OljqR8tnzgt7dzuuUkcOV+XGrjc7yGibJxPtjlwwT+iODenZitTcsDNJNkmOO0mXRJ0VUX6kZvmZV6kTf/Uj7S7oE7e/T9U5kH2cQpb2BfF1+1UgSLPOd1yltN24FJp28gVycpM4a0af5Krnaq+Q+nhEnk3migJzQ06Te+2hv0gxEP3DjzYc7tUGzNXOvYvPN2tGC+hYMOQZT7/p9/miUDuENc8fEtVXU86zLHt5KO4U36n6pTK+HhNX+/hp8XExNOrYrBgqaPpJ+3jlNUvCgscnGqeUtznPc5rnucN5m9J0/+65qRsn3giimnF2Ngy5N111JBaFRgLmiubt5KKWyDiNPc+L4ziRdz8HPcJ8snIBC2apeZFZMHRayfyDNfTDMPSZOjSb30/754PZbPA8HPW+q9VT3RBxtZvoK+OMl+rft2aYtQ7Zys2mOh32ZPL44hUrVepkcqadMIwgZGQ0+r5lZyVIFs9X7viVaW7a165Jzgbcya9U1yU+2hfLERFfPHmmZ+FLbnbg8ZSRwN4ysoDNbNSoPcOsLbtM89StKgF7rKvit5CZtTWkPP1SnN4WlpGFJGQ9jzsGPxf9R2YWYvwOJb8KP7BwK6rzk5yo/sdSWnbCFGTtg/nqKaMEJBT37dxsZnrHomGrxWuPxMYakvsHJfjvW8NiGq4PxHEUrnogsQkBC8Q8tdDL/MbuO1EZT37skeiDPnwtQk1MqdmTmT+xa8hz7j18+nBaWEs4lTw7tKdo15Dm6lcyIGokIisfnq3GDxn5+tCgtNobVXrsv7nHneRzMfj5JfccdUnUrDyTnq1j4i0f21DOvfp0zMp24r7PwsdDqaZ/G53MO1tYw4w6rXy/O2aLtDfxXPwbwuYXxeNVg5cS9PnYDfcGbbS7xTqKDebGUPUJjMx/xhbPiHe2ZVhMxel0ztTusdaw45Nm/0Z6ts74vzPZEmq/4HlyMxivnzfY/JJLdfuueTZeNZFtBH0nb9SvZr2mYMVLlC45Pg7DqLg3yTERxYkixHh0GScmb+atY8uGxc4vZW3aPT0Jikdrb2+PFq9ojnv9y5tUcsvHw98pbDP44uhwiq9YerXPPybP/dHo9vFxdDScXZ9d1aTMnVaWb3EBne0bFu8gFKjfMk/KpJEUNBoyz7LFXzqGP1paC/5vBPigIXzQED5oCB80hA8awgcN4YOG8EFD+KAhfNAQPmgIHzSEDxrCBw3hg4bwQUP4oCF80BA+aAgfNIQPGsIHDeGDhvBBQ/igIXzQED5oCB80hA8awgcN4YOG8EFD+KAhfNAQPv8Dw1/Xu1xD713N3wAAAABJRU5ErkJggg==" alt="" /> Umico<span className={style.Market}>Market</span></h1>
    </div>
       </div>
  <div className={style.AgeSeenCartsim}><div className={style.AgeSeenCarts}><div className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/1034354-fa7796ee8bfe9937463295996a4eabec.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-22%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DiplayNonene} className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/767757-3bad8a08bce73cb60d6f9e891d3d13d6.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-25%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DiplayNonen} className={style.AgeSeenCart}><div  className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/727527-7971691da030bc96f2b4776cb359bd9d.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-32%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DiplayNone} className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/fc94563f-cda1-4e9e-b847-bfa82f8a9db3.jpeg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div><p className={style.AsPercent}>-12%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DiplayNonenm} className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/43461-6bf5ba98e2a5ddf5e97de562728cd5c2.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-23%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div></div><div className={style.AgeSeenCarts}><div className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/956254-f7d02a47bae5422523007bf756530146.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-22%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DiplayNonene} className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/151192-651fd2d79a0824912c42effe495fd58d.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-25%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div className={style.AgeSeenCart} id={style.DiplayNonen}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/4449a949-c4cb-4c3f-b05b-793de036af54.jpeg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-32%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DiplayNone} className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/d563e50f-d3bb-4c17-9bf7-58bd3775de0a.jpeg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-12%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DiplayNonenm}  className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/969163-b5b3ff913ba1e95eb4066f98e4d2410a.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-23%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div></div><div className={style.AgeSeenCarts}><div className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/666314-bcf42dd53e8cb878b9bc76954b786ffd.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-22%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DiplayNonene} className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/201495-cbcd9865f4e8f0c0720710bdeb51a1b7.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-25%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div className={style.AgeSeenCart} id={style.DiplayNonen}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/914b28b1-24cd-4f9c-ae12-cc4390fadd38.jpeg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-32%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DiplayNone} className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/840/590544-c50c5637eb0365339f9df44348dd3dee.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-12%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div><div id={style.DiplayNonenm}  className={style.AgeSeenCart}><div className={style.AgeSeenImg}><img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/43461-6bf5ba98e2a5ddf5e97de562728cd5c2.jpg"/><i id={style.ASHeart} className="fa-solid fa-heart"></i><i id={style.balance} className="fa-solid fa-scale-balanced"></i><p className={style.AsPercent}>-23%</p></div><div className={style.CardTitle}><div className={style.AsPercents}><p className={style.MainParcent}>699.00</p><p className={style.LessParcent}>899.00₼</p></div><div className={style.Taksite}><p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p></div><p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p><div className={style.ASReiting}><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStar}></FaStar><FaStar className={style.AsStarNull}></FaStar><FaStar className={style.AsStarNull}></FaStar><p className={style.ReintgTitle}>3 reyting</p></div><hr className={style.Hr}/><div className={style.AsBasket}><i id={style. AsBasketIcon} className="fa-solid fa-basket-shopping"></i><p className={style.shopTitle}>Səbətə At</p>
            </div></div></div></div><button className={style.buttonAlls}>Məhsul kateqoriyasına keç</button></div>
            
</div>
<div className={style.ActualTopic}>
<div className={style.EndCost}> <h1 className={style.EcHeader}>Bu gün aktual olanlar</h1><div> <h1 className={style.uHed1}><img className={style.HedLogo} src="data:image/png;base64,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" alt="" /> Umico<span className={style.Market}>Market</span></h1>
    </div>
       </div>
  <div className={style.ActualCarts}> <div className={style.Stehero}><div id={style.DiplayNonen} className={style.ActualCart}><img className={style.PhotoActual}  id={style.DisplayNonenimsin} src="https://i.pinimg.com/736x/d5/1b/0d/d51b0d8826063f245dc38e9ff6c5c263.jpg" alt="" /><p className={style.ActualTitle}>Telefonlar,Smart Cihazlar<br/> və Telefon Aksesuarları</p></div><div className={style.ActualCart} id={style.DisplayNonenimsin}><img className={style.PhotoActual} src="https://i.pinimg.com/736x/38/95/52/389552d7b70c1cb3e5355392fbad23c0.jpg" alt="" /><p className={style.ActualTitle}>Telefonlar,Smart Cihazlar<br/> və Telefon Aksesuarları</p></div></div><div  className={style.Stehero}><div id={style.DiplayNonen} className={style.ActualCart}><img className={style.PhotoActual} src="https://i.pinimg.com/736x/75/14/12/7514125fdc5e9b99d3deed49cf00153c.jpg" alt="" /><p className={style.ActualTitle}>Telefonlar,Smart Cihazlar<br/> və Telefon Aksesuarları</p></div><div className={style.ActualCart}><img className={style.PhotoActual} src="https://i.pinimg.com/736x/b6/c8/d6/b6c8d61a1dae85c8a2b564af4cf05e3a.jpg" alt="" /><p className={style.ActualTitle}>Telefonlar,Smart Cihazlar<br/> və Telefon Aksesuarları</p></div></div><div id={style.DiplayNonenimm} className={style.ActualCart}><img  className={style.PhotoActual} src="https://i.pinimg.com/736x/38/a9/9e/38a99ef27007cfae409d65c0b935c9d8.jpg" alt="" /><p className={style.ActualTitle}>Telefonlar,Smart Cihazlar<br/> və Telefon Aksesuarları</p></div></div>
   <div className={style.ActualCarts}> <div className={style.Stehero}><div id={style.DiplayNonen} className={style.ActualCart}><img className={style.PhotoActual} id={style.DisplayNonenimsin} src="https://i.pinimg.com/736x/b3/ca/75/b3ca7546de22e55fd0c658ea1cb9bf92.jpg" alt="" /><p className={style.ActualTitle}>Telefonlar,Smart Cihazlar<br/> və Telefon Aksesuarları</p></div><div className={style.ActualCart} id={style.DisplayNonenimsin}><img className={style.PhotoActual} src="https://i.pinimg.com/736x/14/11/82/14118287d2e7c3d7940a12721da1171b.jpg" alt="" /><p className={style.ActualTitle}>Telefonlar,Smart Cihazlar<br/> və Telefon Aksesuarları</p></div></div><div className={style.ActualCart}><img className={style.PhotoActual} src="https://i.pinimg.com/736x/73/ed/49/73ed49b900a5a103df74599ad44e490a.jpg" alt="" /><p className={style.ActualTitle}>Telefonlar,Smart Cihazlar<br/> və Telefon Aksesuarları</p></div><div id={style.DiplayNonenimm} className={style.ActualCart}><img className={style.PhotoActual} src="https://i.pinimg.com/736x/56/71/32/567132eacdcce7c19ae8646fbe142ff9.jpg" alt="" /><p className={style.ActualTitle}>Telefonlar,Smart Cihazlar<br/> və Telefon Aksesuarları</p></div></div>
 <button className={style.buttonAllss}>Məhsul kateqoriyasına keç</button></div>
<div className={style.aksiyon}><h1 className={style.ElHeader}>Partnyorlardan aksiya və təkliflər</h1>
<div className={style.Aksion}>
  <img className={style.AksionImg} src="https://strgimgr.umico.az/dcmimages/5995/300x250AZ_47470.webp" alt="" />
  <img className={style.AksionImg} src="https://strgimgr.umico.az/dcmimages/5924/samsungAZ_47105.webp" alt="" />
  <img id={style.DisplayNonen} className={style.AksionImg} src="https://strgimgr.umico.az/dcmimages/5925/SaatAZ_47108.webp" alt="" />
</div>
</div>
 <h1 className={style.EbHeader}><span className={style.Meega}>Mega</span> Endirimlər</h1>
<div className={style.AgeSeenCartss}>           
   <Swiper 
  className={style.Swipers} 
  autoplay={{delay:4000,disableOnInteraction:false}} 
  spaceBetween={50} 
  slidesPerView={2} 
  pagination={{clickable:true}} 
  scrollbar={{draggable:true}} 
  modules={[Navigation,Pagination,Autoplay]}
    breakpoints={{1319:{slidesPerView:3},345:{slidesPerView:1},540:{slidesPerView:1},330:{slidesPerView:1},788:{slidesPerView:2}}}

>
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/09322d8b-6119-4adf-8cef-7e25c44c9d69.jpeg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i> <div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div>

        <p className={style.AsPercent}>-22%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/2d3074ca-e03b-4e04-afb5-4c26a616e100.jpeg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-25%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/660812e8-fa91-47e7-bf53-2e961d90b41c.jpeg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>            <div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div>

        <p className={style.AsPercent}>-32%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/942536-7be1cf6b5aa01079ef2d920036ebe543.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>            <div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div>

        <p className={style.AsPercent}>-12%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/09322d8b-6119-4adf-8cef-7e25c44c9d69.jpeg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i> <div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div>

        <p className={style.AsPercent}>-22%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/2d3074ca-e03b-4e04-afb5-4c26a616e100.jpeg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-25%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/660812e8-fa91-47e7-bf53-2e961d90b41c.jpeg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>            <div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div>

        <p className={style.AsPercent}>-32%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/942536-7be1cf6b5aa01079ef2d920036ebe543.jpg"/>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>            <div className={style.PartnerPemium}><p className={style.Partner}>Partner</p><p className={style.Premium}>Premuim</p></div>

        <p className={style.AsPercent}>-12%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
 
</Swiper><button className={style.buttonAll}>Bütün Endirimlərə baxmaq</button></div>
<h1 className={style.EbHeader}>TOP Məhsullar</h1>
<div className={style.AgeSeenCartss}>           
   <Swiper 
  className={style.Swipers} 
  autoplay={{delay:4000,disableOnInteraction:false}} 
  spaceBetween={50} 
  slidesPerView={2} 
  pagination={{clickable:true}} 
  scrollbar={{draggable:true}} 
  modules={[Navigation,Pagination,Autoplay]}
    breakpoints={{1319:{slidesPerView:3},345:{slidesPerView:1},540:{slidesPerView:1},330:{slidesPerView:1},788:{slidesPerView:2}}}

>
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/09322d8b-6119-4adf-8cef-7e25c44c9d69.jpeg"/><div className={style.Aksiyona}>Aksiya</div><div className={style.Aksiyona1}>Ən Çox Satılan</div><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i> 

        <p className={style.AsPercent}>-22%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/2d3074ca-e03b-4e04-afb5-4c26a616e100.jpeg"/><div className={style.Aksiyona1}>Ən Çox Satılan</div><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-25%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/660812e8-fa91-47e7-bf53-2e961d90b41c.jpeg"/><div className={style.Aksiyona1}>Ən Çox Satılan</div><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>            

        <p className={style.AsPercent}>-32%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/942536-7be1cf6b5aa01079ef2d920036ebe543.jpg"/><div className={style.Aksiyona}>Aksiya</div><div className={style.Aksiyona1}>Ən Çox Satılan</div><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>            

        <p className={style.AsPercent}>-12%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/09322d8b-6119-4adf-8cef-7e25c44c9d69.jpeg"/><div className={style.Aksiyona}>Aksiya</div><div className={style.Aksiyona1}>Ən Çox Satılan</div><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i> 

        <p className={style.AsPercent}>-22%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/2d3074ca-e03b-4e04-afb5-4c26a616e100.jpeg"/><div className={style.Aksiyona1}>Ən Çox Satılan</div><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-25%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/660812e8-fa91-47e7-bf53-2e961d90b41c.jpeg"/><div className={style.Aksiyona}>Aksiya</div><div className={style.Aksiyona1}>Ən Çox Satılan</div><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>         

        <p className={style.AsPercent}>-32%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/942536-7be1cf6b5aa01079ef2d920036ebe543.jpg"/><div className={style.Aksiyona}>Aksiya</div><div className={style.Aksiyona1}>Ən Çox Satılan</div><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>         
        <p className={style.AsPercent}>-12%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
 
</Swiper><button className={style.buttonAll}>Bütün TOP Məhsullara baxmaq</button></div>
<div className={style.EndCost}> <h1 className={style.EcHeader}>Yeniliklər</h1><div> <h1 className={style.uHed1}><img className={style.HedLogo} src="data:image/png;base64,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" alt="" /> Umico<span className={style.Market}>Market</span></h1>
    </div></div>
    <div className={style.AgeSeenCartss}>           
   <Swiper 
  className={style.Swipers} 
  autoplay={{delay:4000,disableOnInteraction:false}} 
  spaceBetween={50} 
  slidesPerView={2} 
  pagination={{clickable:true}} 
  scrollbar={{draggable:true}} 
  modules={[Navigation,Pagination,Autoplay]}
      breakpoints={{1319:{slidesPerView:3},345:{slidesPerView:1},540:{slidesPerView:1},330:{slidesPerView:1},788:{slidesPerView:2}}}

>
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/09322d8b-6119-4adf-8cef-7e25c44c9d69.jpeg"/><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i> 

        <p className={style.AsPercent}>-22%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/2d3074ca-e03b-4e04-afb5-4c26a616e100.jpeg"/><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-25%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/660812e8-fa91-47e7-bf53-2e961d90b41c.jpeg"/><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>            

        <p className={style.AsPercent}>-32%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/942536-7be1cf6b5aa01079ef2d920036ebe543.jpg"/><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>            

        <p className={style.AsPercent}>-12%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/09322d8b-6119-4adf-8cef-7e25c44c9d69.jpeg"/><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>

        <p className={style.AsPercent}>-22%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/2d3074ca-e03b-4e04-afb5-4c26a616e100.jpeg"/><div className={style.Aksiyona2}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>
        <p className={style.AsPercent}>-25%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/img/product/280/660812e8-fa91-47e7-bf53-2e961d90b41c.jpeg"/><div className={style.Aksiyona}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>           

        <p className={style.AsPercent}>-32%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className={style.AgeSeenCarti}>
      <div className={style.AgeSeenImg}>
        <img className={style.AsCartImg} src="https://strgimgr.umico.az/sized/280/942536-7be1cf6b5aa01079ef2d920036ebe543.jpg"/><div className={style.Aksiyona}>Yenilik</div>
        <i id={style.ASHeart} className="fa-solid fa-heart"></i>
        <i id={style.balance} className="fa-solid fa-scale-balanced"></i>         

        <p className={style.AsPercent}>-12%</p>
      </div>
      <div className={style.CardTitle}>
        <div className={style.AsPercents}>
          <p className={style.MainParcent}>699.00</p>
          <p className={style.LessParcent}>899.00₼</p>
        </div>
        <div className={style.Taksite}>
          <p className={style.TaksiteFigure}>29,13 ₼ x 24ay</p>
        </div>
        <p className={style.ASName}>Notbuk Hp 15-fd033na (943w4EA)</p>
        <div className={style.ASReiting}>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStar}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <FaStar className={style.AsStarNull}></FaStar>
          <p className={style.ReintgTitle}>3 reyting</p>
        </div>
        <hr className={style.Hr}/>
        <div className={style.AsBasket}>
          <i id={style.AsBasketIcon} className="fa-solid fa-basket-shopping"></i>
          <p className={style.shopTitle}>Səbətə At</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
 
</Swiper><button className={style.buttonAll}>Bütün Yeniliklərə baxmaq</button></div>
    


<div id={style.Falso} className={style.Footer1}><div className={style.Footer1img}><img className={style.Footer1img} src="https://umico.az/images/landing/loyalty-program.webp" alt="" /></div><div className={style.Footer1title}><h1 className={style.Footer1Hed}>Umico Bonus</h1><p className={style.PFooter1}>Ən sevdiyiniz mağazalarda bonus qazanın</p>
<p className={style.P2Footer1}><i className="fa-regular fa-credit-card" id={style.CarttId}></i> Umico mobil tətbiqini yükləyin</p><p className={style.p3Footer1}><i className="fa-solid fa-bag-shopping" id={style.CarttId}></i> Umico Bonus tərəfdaşları şəbəkəsində<br/> alış-verişə görə bonus qazanın</p><p className={style.P2Footer1}><i className="fa-solid fa-gift" id={style.CarttId}></i> Umico Bonus şəbəkəsində alışlarınızı<br/> qazandığınız bonuslarla ödəyin</p><button className={style.Footer1Button}>Ətraflı Öyrən</button></div></div>
<div id={style.Falso} className={style.Footer2}>
<div className={style.Footer2title}><h1 className={style.Footer2Hed}>Umico.az - sərfəli marketpleys.</h1>
<p className={style.PFooter2}><i className="fa-solid fa-truck" id={style.CarttId}></i> <b>2 saat </b>ərzində ekspres çatdırılma</p>
<p className={style.P3Footer2}><i className="fa-solid fa-percent" id={style.CarttId}></i> <b>24 ayadək</b> sərfəli kredit və taksit imkanları</p><p className={style.P2Footer2}><i className="fa-solid fa-location-dot" id={style.CarttId}></i> <b>250-dən çox</b> təhvil məntəqəsi</p><p className={style.P4Footer2}><i className="fa-solid fa-shopping-bag" id={style.CarttId}></i> <b>500.000-dən </b>məhsul seçimi</p>
<button className={style.Footer2Button}>Tətbiqi yükləyin, alış-verişə başlayın!</button></div>
  <div className={style.Footer2img}><img className={style.Footer22img} src="https://umico.az/images/landing/screens_az.png" alt="" /><div className={style.altDIv}><img src="https://umico.az/images/landing/app-store.svg" className={style.AltImg}/><img src="https://umico.az/images/landing/google-play.svg" className={style.AltImg}/><img src="https://umico.az/images/landing/huawei-app-gallery.svg" className={style.AltImg}/></div></div>
</div>


</>
        )
    }
export default Home;


