import React,{Component} from 'react';
import SubscribeBtn from './subscribe-btn.js'
import './footer.scss';

class Footer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>

                <div class="box-left-mini">
                    <div class="front">
                        <SubscribeBtn/>
                    </div>
                    <div class="behind_container">
                        <footer id="footer" class="footer-area footer--2">
                            <div class="footer__wrapper bg-image--10 section-padding--lg">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-sm-12">
                                            <div class="footer__widget">
                                                <div class="ft__logo">
                                                    <a href="index.html">
                                                        <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/logo/junior.png" alt="logo images"/>
                                                    </a>
                                                </div>
                                                <div class="ftr__details">
                                                    <p>Lorem ipsum dolor sit cnr adipisicing elit, sed do eiusmod teagna aliqua. Lorem ipsudolor sit cnr adi.</p>
                                                </div>
                                                <div class="ftr__address__inner">
                                                    <div class="footer__social__icon">
                                                        <ul class="dacre__social__link--2 d-flex justify-content-start">
                                                            <li class="facebook">
                                                                <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                                                            <li class="twitter"><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                                                            <li class="vimeo"><a href="https://vimeo.com/"><i class="fa fa-vimeo"></i></a></li>
                                                            <li class="pinterest"><a href="https://www.pinterest.com/"><i class="fa fa-pinterest-p"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="ft__btm__title">
                                                        <h4>About Us</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-sm-12 sm-mt-40">
                                            <div class="footer__widget">
                                                <h4>Latest Blog</h4>
                                                <div class="footer__innner">
                                                    <div class="ftr__latest__post">
                                                        <div class="single__ftr__post d-flex">
                                                            <div class="ftr__post__thumb">
                                                                <a href="blog-details.html">
                                                                    <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/blog/post-img/2.jpg" alt="post images"/>
                                                                </a>
                                                            </div>
                                                            <div class="ftr__post__details">
                                                                <h6><a href="blog-details.html">Sports Day is near! so lets get ready soon</a></h6>
                                                                <span><i class="fa fa-calendar"></i>30th Dec, 2017</span>
                                                            </div>
                                                        </div>
                                                        <div class="single__ftr__post d-flex">
                                                            <div class="ftr__post__thumb">
                                                                <a href="blog-details.html">
                                                                    <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/blog/post-img/3.jpg" alt="post images"/>
                                                                </a>
                                                            </div>
                                                            <div class="ftr__post__details">
                                                                <h6><a href="blog-details.html">Sports Day Celebration</a></h6>
                                                                <span><i class="fa fa-calendar"></i>21th Dec, 2017</span>
                                                            </div>
                                                        </div>
                                                        <div class="single__ftr__post d-flex">
                                                            <div class="ftr__post__thumb">
                                                                <a href="blog-details.html">
                                                                    <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/blog/post-img/4.jpg" alt="post images"/>
                                                                </a>
                                                            </div>
                                                            <div class="ftr__post__details">
                                                                <h6><a href="blog-details.html">Sports Day Celebration</a></h6>
                                                                <span><i class="fa fa-calendar"></i>10th Dec, 2017</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-6 col-sm-12 md-mt-40 sm-mt-40">
                                            <div class="footer__widget">
                                                <h4>Categories</h4>
                                                <div class="footer__innner">
                                                    <div class="ftr__latest__post">
                                                        <ul class="ftr__catrgory">
                                                            <li><a href="#">Painting</a></li>
                                                            <li><a href="#">Alphabet Matching</a></li>
                                                            <li><a href="#">Drawing</a></li>
                                                            <li><a href="#">Swimming</a></li>
                                                            <li><a href="#">Sports &amp; Games</a></li>
                                                            <li><a href="#">Painting</a></li>
                                                            <li><a href="#">Alphabet Matching</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 col-sm-12 md-mt-40 sm-mt-40">
                                            <div class="footer__widget">
                                                <h4>Twitter Widget</h4>
                                                <div class="footer__innner">
                                                    <div class="dcare__twit__wrap">
                                                        <div class="dcare__twit d-flex">
                                                            <div class="dcare__twit__icon">
                                                                <i class="fa fa-twitter"></i>
                                                            </div>
                                                            <div class="dcare__twit__details">
                                                                <p>Lorem ipsum dolor sit  consect ietur adipisicing sed  eiipsa
                                                                    <a href="#"> #twitter</a></p>
                                                                <span><i class="fa fa-clock-o"></i>30th Dec, 2017</span>
                                                                <span><i class="fa fa-calendar"></i>30th Dec, 2017</span>
                                                            </div>
                                                        </div>
                                                        <div class="dcare__twit d-flex">
                                                            <div class="dcare__twit__icon">
                                                                <i class="fa fa-twitter"></i>
                                                            </div>
                                                            <div class="dcare__twit__details">
                                                                <p>Lorem ipsum dolor sit  consect ietur adipisicing sed  eiipsa
                                                                    <a href="#"> #twitter</a></p>
                                                                <span><i class="fa fa-clock-o"></i>30th Dec, 2017</span>
                                                                <span><i class="fa fa-calendar"></i>30th Dec, 2017</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ft__bottom__images--1 wow flipInX class-InX" data-wow-delay="0.6s">
                                    <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/banner/mid-img/ft.png" alt="footer images"/>
                                </div>
                                <div class="ft__bottom__images--2 wow fadeInRight class-fadeRight" data-wow-delay="0.6s" >
                                    <img src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/banner/mid-img/ft-2.png" alt="footer images"/>
                                </div>
                            </div>
                            <div id="#contact" class="footer__contact__area bg__cat--2">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="footer__contact__wrapper d-flex flex-wrap justify-content-between">
                                                <div class="single__footer__address">
                                                    <div class="ft__contact__icon">
                                                        <i class="fa fa-home"></i>
                                                    </div>
                                                    <div class="ft__contact__details">
                                                        <p>Uttara, Zamzam Tower</p>
                                                        <p>Road # 12, Sec #13, 5th Floor</p>
                                                    </div>
                                                </div>
                                                <div class="single__footer__address">
                                                    <div class="ft__contact__icon">
                                                        <i class="fa fa-phone"></i>
                                                    </div>
                                                    <div class="ft__contact__details">
                                                        <p><a href="#">+08097-654321</a></p>
                                                        <p><a href="#">+09876-543211</a></p>
                                                    </div>
                                                </div>
                                                <div class="single__footer__address">
                                                    <div class="ft__contact__icon">
                                                        <i class="fa fa-envelope"></i>
                                                    </div>
                                                    <div class="ft__contact__details">
                                                        <p><a href="#">juniorhomeschool.@email.com</a></p>
                                                        <p><a href="#">Kidscareschool.@yahoo.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="copyright  bg--theme">
                                <div class="container">
                                    <div class="row align-items-center copyright__wrapper justify-content-center">
                                        <div class="col-lg-12 col-sm-12 col-md-12">
                                            <div class="coppy__right__inner text-center">
                                                <p><i class="fa fa-copyright"></i>All Right Reserved.<a href="#"> Devitems</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>  

                    </div>
                </div>
            </div>   

        );
    }
}

export default Footer;