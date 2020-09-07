
let instance = null;
var accessToken=null;
class LocalDb{
    constructor(){
        if(!instance){
            instance=this;
        }
        return instance;
    }
    getAccessToken = () =>{
        return accessToken;
    } 
    setAccessToken = (token) =>{
        accessToken=token;
    }
    getEventsList = () => {
        return [
            {
                "title":"Drawing Class",
                "top_image":"https://d29u17ylf1ylz9.cloudfront.net/junior/images/shape/sm-icon/1.png",
                "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
                "navigateTo":"#"   
            },
            {
                "title":"Active Learning",
                "top_image":"https://d29u17ylf1ylz9.cloudfront.net/junior/images/shape/sm-icon/2.png" ,
                "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
                "navigateTo":"#"
            },
            {
                "title":"Creative Lesson",
                "top_image":"https://d29u17ylf1ylz9.cloudfront.net/junior/images/shape/sm-icon/3.png",
                "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
                "navigateTo":"#"
            },
            {
                "title":"Yoga Class",
                "top_image":"https://d29u17ylf1ylz9.cloudfront.net/junior/images/shape/sm-icon/4.png",
                "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
                "navigateTo":"#"
            }
        ];
    }

    getUpcommingEventsList = () =>{
        return [
            {
                bg_image:"https://d29u17ylf1ylz9.cloudfront.net/junior/images/upcomming/1.png",
                title:"Childrens Day Celebration",
                description:"Lor error sit volupta item accusantim doloremque laudantium, toe aperiam, eaque ipsa quae ab illoe invenveritatis et quasi architecto beatae viliquam quaerat voluptatem.",
                address:"Childrens Club, Uttara, Dhaka",
                icon1:"fa fa-home",
                time:"10.00 am to 1.00 pm",
                icon2:"fa fa-clock-o",
                eventDate:"21st",
                eventMonthYear:"Dec, 2017"
            },
            {
                bg_image:"https://d29u17ylf1ylz9.cloudfront.net/junior/images/upcomming/2.png",
                title:"Todler Art Exhibition",
                description:"Lor error sit volupta item accusantim doloremque laudantium, toe aperiam, eaque ipsa quae ab illoe invenveritatis et quasi architecto beatae viliquam quaerat voluptatem.",
                address:"Childrens Club, Uttara, Dhaka",
                icon1:"fa fa-home",
                time:"10.00 am to 1.00 pm",
                icon2:"fa fa-clock-o",
                eventDate:"21st",
                eventMonthYear:"Dec, 2017"
            }

        ];
    }

    getGallryImages= () =>{
        return [
            {
                imgUrl:"https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" ,
                hrefLink:"https://images.pexels.com/photos/62307/air-bubbles-diving-underwater-blow-62307.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            },
            {
                imgUrl:"https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" ,
                hrefLink:"https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
            },

            { 
                imgUrl:"https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                hrefLink:"https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            { 
                imgUrl:"https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                hrefLink:"https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            { 
                imgUrl:"https://images.pexels.com/photos/1038914/pexels-photo-1038914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                hrefLink:"https://images.pexels.com/photos/1038914/pexels-photo-1038914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            { 
                imgUrl:"https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                hrefLink:"https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            { 
                imgUrl:"https://images.pexels.com/photos/56005/fiji-beach-sand-palm-trees-56005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                hrefLink:"https://images.pexels.com/photos/56005/fiji-beach-sand-palm-trees-56005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            { 
                imgUrl:"https://images.pexels.com/photos/1038002/pexels-photo-1038002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                hrefLink:"https://images.pexels.com/photos/1038002/pexels-photo-1038002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
        ];
    }

    getBlogsList =()=>{
        return[
            {
                id:"1",
                date:"10",
                monthYear:"November, 2017",
                imgUrl:"https://d29u17ylf1ylz9.cloudfront.net/junior/images/blog/md-img/1.jpg",
                title_sub1:"Children Blog : Post By Ariana",
                title:"Basic Knowledge About Drawing",
                description:"Lorem ipsum dolor sit amet, consectetur ad modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                commment_count:"04",
                likesCount:"02"
            },
            {
                id:"2",
                date:"26",
                monthYear:"October, 2017",
                imgUrl:"https://d29u17ylf1ylz9.cloudfront.net/junior/images/blog/md-img/2.jpg",
                title_sub1:"Children Blog : Post By Jonson",
                title:"Study Tour",
                description:"Lorem ipsum dolor sit amet, consectetur ad modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                commment_count:"05",
                likesCount:"07"
            },
            {
                id:"3",
                date:"25",
                monthYear:"May, 2018",
                imgUrl:"https://d29u17ylf1ylz9.cloudfront.net/junior/images/blog/md-img/3.jpg",
                title_sub1:"Children Blog : Post By Michel Jack",
                title:"Childrens Day",
                description:"Lorem ipsum dolor sit amet, consectetur ad modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                commment_count:"01",
                likesCount:"06"
            }
        ];
    }

}
export default LocalDb;