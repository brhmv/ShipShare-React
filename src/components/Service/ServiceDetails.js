import React from 'react';
import Reveal from 'react-reveal';
import Fade from 'react-reveal/Fade';

const ServiceDetails = () => {
    return (
        <section className="service_details_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 pr_70">
                        <div className="job_info">
                            <div className="info_head">
                                <i className="ti-receipt"></i>
                                <h6 className="f_p f_600 f_size_18 t_color3">Unique Elements</h6>
                            </div>
                            <div className="info_item">
                                <h6>Owner:</h6>
                                <p>Droit Theme</p>
                            </div>
                            <div className="info_item">
                                <h6>Live Time:</h6>
                                <p>2 Working Days</p>
                            </div>
                            <div className="info_item">
                                <h6>Service Cost:</h6>
                                <p>$250.00</p>
                            </div>
                            <div className="info_item">
                                <h6>Quality:</h6>
                                <p>High</p>
                            </div>
                            <div className="info_item">
                                <h6>Experience</h6>
                                <p>3 Years</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="details_content">
                            <div className="sec_title">
                                <p className="f_400 f_size_15">He lost his bottle a load of old tosh cup of tea brolly bog-standard matie boy blow off the little rotter morish, haggle hotpot skive off cuppa don't get shirty with me off his nut the full monty. Starkers morish down the pub such a fibber quaint gosh Harry boot owt to do with me the little rotter, baking cakes Eaton ummm I'm telling pardon me the bee's knees vagabond Oxford chap, A bit of how's your father bog-standard hanky panky daft well lavatory bubble and squeak the full monty. That say nice one grub cup of tea so I said barmy only a quid, I it's your round gutted mate cup of char golly gosh dropped a clanger my good sir, James Bond happy days brilliant blimey I is. Boot Jeffrey cockup the BBC pardon me victoria sponge Why chip shop what a load of rubbish pukka brolly cuppa tickety-boo bog-standard cheesed off posh, bugger Eaton William smashing knackered bog bonnet bobby bender cobblers only a quid baking cakes the full monty pardon you. </p>
                                <p className="f_400 f_size_15">Twit bonnet Jeffrey hunky-dory gormless chancer bog-standard spiffing good time, young delinquent Charles don't get shirty with me the BBC is brown bread off his nut a load of old tosh, chap grub bog skive off pardon me bleeder. Lavatory on your bike mate happy days the little rotter arse over tit no biggie at public school wind up car boot bamboozled well barmy bleeder the wireless bugger, cockup blatant David it's all gone to pot morish mush sloshed boot A bit of how's your father skive off cheers a load of old tosh. No biggie mush I don't want no agro it's your round cack boot say, the full monty mufty such a fibber up the duff Why, Eaton pardon me spiffing blower brown bread.</p>
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-md-12 text-center seo_banner_content">
                            <Reveal effect="fadeInUp" duration={500}><h2>Drive More Customers<br /> Through Digital</h2></Reveal>
                            <Reveal effect="fadeInUp" duration={1000}><p className="wow fadeInUp" data-wow-delay="0.5s">Chap fantastic skive off chancer knees up starkers easy peasy up the<br /> kyver David, bleeding the BBC tomfoolery chimney.!</p></Reveal>
                            <Reveal effect="fadeInLeft" duration={1200}><a href="./" className="seo_btn seo_btn_one btn_hover wow fadeInLeft">Get Started</a></Reveal>
                            <Reveal effect="fadeInLeft" duration={1200}><a href="./" className="seo_btn seo_btn_two btn_hover wow fadeInRight">Learn More</a></Reveal>
                        </div>
                    </div>

                    <div className="home_bubble">
                        <div className="bubble b_one"></div>
                        <div className="bubble b_two"></div>
                        <div className="bubble b_three"></div>
                        <div className="bubble b_four"></div>
                        <div className="bubble b_five"></div>
                        <div className="bubble b_six"></div>
                        <div className="triangle b_seven" data-parallax='{"x": 20, "y": 150}'><img src={require('../../img/seo/triangle_one.png')} alt="" /></div>
                        <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src={require('../../img/seo/triangle_two.png')} alt="" /></div>
                        <div className="triangle b_nine"><img src={require('../../img/seo/triangle_three.png')} alt="" /></div>
                    </div>

                    <div className="saas_home_img">
                        <Reveal effect="fadeInUp" duration={1400}><img src={require('../../img/seo/image.png')} alt="" /></Reveal>
                    </div>

                    <section className="seo_features_one sec_pad">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="seo_features_img seo_features_img_two">
                                        <div className="round_circle"></div>
                                        <div className="round_circle two"></div>
                                        <img src={require('../../img/seo/features_img_two.png')} alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-6 d-flex align-items-center">
                                    <Fade bottom cascade>
                                        <div className="seo_features_content">
                                            <h2 className="wow fadeInUp">Get tips & tricks on how to skyrocket your sales.</h2>
                                            <h6 className="wow fadeInUp">What a plonker bamboozled so I said say what a load of rubbish owt to do with me haggle.</h6>
                                            <p className="wow fadeInUp">Cheeky bugger gosh codswallop chap bamboozled blatant cracking goal brown bread, pear shaped cor blimey guvnor easy peasy lemon squeezy hotpot spiffing good time, chancer a spend a penny spiffing I don't want no agro tinkety tonk old fruit.</p>
                                            <a href=".#" className="seo_btn seo_btn_one btn_hover wow fadeInUp">Learn More</a>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </section>
    )
}
export default ServiceDetails;