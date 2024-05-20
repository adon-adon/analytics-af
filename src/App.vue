<template>
    <div class="container">
        <div class="appInfo">
            <img src="./images/logo.png" class="appLogo" />
            <div class="boxRight">
                <h1 class="title">888b</h1>
                <div class="payTip">In-app purchases</div>
            </div>
        </div>

        <div class="appStore">
            <div class="textLeft textItem">
                <div class="topBox">
                    <div class="starRating">
                        <span class="boldTitle">4.3</span>
                        <img src="./images/star.png" />
                    </div>
                </div>
                <div>2M reviews</div>
            </div>
            <div class="textMiddle textItem">
                <div class="topBox">
                    <span class="boldTitle">1M+</span>
                    <!-- <img class="download" src="./images/download.png" /> -->
                </div>
                <div>Downloads</div>
            </div>
            <div class="textRight textItem">
                <div class="topBox">
                    <img class="rate18Plus" src="./images/rate18+.png" />
                </div>
                <div>Rated for 18+</div>
            </div>
        </div>

        <div class="clickBtn" @click="download">Install</div>

        <div class="banners">
            <img class="banner" src="./images/banner1.jpg" />
            <img class="banner" src="./images/banner2.jpg" />
            <img class="banner" src="./images/banner3.jpg" />
            <img class="banner" src="./images/banner4.jpg" />
            <img class="banner" src="./images/banner5.jpg" />
            <img class="banner" src="./images/banner6.jpg" />
        </div>

        <div class="aboutDetail">
            <div class="boxTitle">
                <p class="title">About this app</p>
                <img src="./images/right-arrow.png" />
            </div>

            <div class="description">
                Hãy tham gia khám phá kho game đổi thưởng cực khủng tại 888b.com. Chúng tôi được biết đến là một sân chơi uy tín, nơi quy tụ hàng triệu người chơi với nhiều thể loại game đa dạng, phong phú dành cho bạn tha hồ lựa chọn và trải nghiệm thỏa thích.
            </div>

            <div class="updateVersion">
                <div class="title">Updated on</div>
                <div class="updateDate">Oct 25, 2023</div>
            </div>
        </div>

        <div class="aboutDetail">
            <div class="boxTitle">
                <p class="title">Data safety</p>
                <img src="./images/right-arrow.png" />
            </div>
            <div class="description">
                Safety starts with understanding how developers collect and
                share your data. Data privacy and security practices may vary
                based on your use, region, and age. The developer provided this
                information and may update it over time.
            </div>
        </div>

        <div class="aboutDetail">
            <div class="boxTitle">
                <p class="title">Ratings and reviews</p>
                <img src="./images/right-arrow.png" />
            </div>

            <p class="titleInfo">
                Ratings and reviews are verified and are from people who use the
                same type of device tha you use
            </p>
            <div class="ratedBox">
                <div class="HJV0ef">
                    <div class="P4w39d">
                        <div class="Te9Tpc">
                            <div>
                                <div class="jILTFe">4.7</div>
                                <div
                                    aria-label="Rated 4.7 stars out of five stars"
                                    role="img"
                                    class="I26one"
                                >
                                    <span
                                        aria-hidden="true"
                                        jsname="fI6EEc"
                                        class="deXnLd"
                                        data-number="1"
                                        ssk="1#1"
                                        ><span class="Z1Dz7b" aria-hidden="true"
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path
                                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                ></path></svg></span
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        jsname="fI6EEc"
                                        class="deXnLd"
                                        data-number="2"
                                        ssk="1#2"
                                        ><span class="Z1Dz7b" aria-hidden="true"
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path
                                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                ></path></svg></span
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        jsname="fI6EEc"
                                        class="deXnLd"
                                        data-number="3"
                                        ssk="1#3"
                                        ><span class="Z1Dz7b" aria-hidden="true"
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path
                                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                ></path></svg></span
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        jsname="fI6EEc"
                                        class="deXnLd"
                                        data-number="3"
                                        ssk="1#3"
                                        ><span class="Z1Dz7b" aria-hidden="true"
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path
                                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                ></path></svg></span
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        jsname="fI6EEc"
                                        class="deXnLd"
                                        data-number="4"
                                        ssk="1#4"
                                        ><span class="" aria-hidden="true"
                                            ><svg
                                                class="xdPrrd"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="url(#i14)"
                                            >
                                                <defs>
                                                    <linearGradient id="i14">
                                                        <stop
                                                            stop-opacity="1"
                                                            offset="50%"
                                                            class="Z1Dz7b"
                                                        ></stop>
                                                        <stop
                                                            stop-opacity="1"
                                                            offset="50%"
                                                            class="Wi7KIe"
                                                        ></stop>
                                                    </linearGradient>
                                                </defs>
                                                <path
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path
                                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                ></path></svg></span
                                    ></span>
                                </div>
                                <div class="EHUI5b">2M reviews</div>
                            </div>
                            <div>
                                <div
                                    class="JzwBgb"
                                    role="img"
                                    aria-label="4,007 reviews for star rating 5"
                                >
                                    <div aria-hidden="true" class="Qjdn7d">
                                        5
                                    </div>
                                    <div aria-hidden="true" class="RJfYGf">
                                        <div
                                            class="RutFAf wcB8se"
                                            style="width: 78.317638791286015%"
                                            title="4,007"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    class="JzwBgb"
                                    role="img"
                                    aria-label="619 reviews for star rating 4"
                                >
                                    <div aria-hidden="true" class="Qjdn7d">
                                        4
                                    </div>
                                    <div aria-hidden="true" class="RJfYGf">
                                        <div
                                            class="RutFAf wcB8se"
                                            style="width: 8.699929725931131%"
                                            title="619"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    class="JzwBgb"
                                    role="img"
                                    aria-label="489 reviews for star rating 3"
                                >
                                    <div aria-hidden="true" class="Qjdn7d">
                                        3
                                    </div>
                                    <div aria-hidden="true" class="RJfYGf">
                                        <div
                                            class="RutFAf wcB8se"
                                            style="width: 6.872803935347856%"
                                            title="489"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    class="JzwBgb"
                                    role="img"
                                    aria-label="279 reviews for star rating 2"
                                >
                                    <div aria-hidden="true" class="Qjdn7d">
                                        2
                                    </div>
                                    <div aria-hidden="true" class="RJfYGf">
                                        <div
                                            class="RutFAf wcB8se"
                                            style="width: 13.921293042867182%"
                                            title="279"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    class="JzwBgb"
                                    role="img"
                                    aria-label="1,718 reviews for star rating 1"
                                >
                                    <div aria-hidden="true" class="Qjdn7d">
                                        1
                                    </div>
                                    <div aria-hidden="true" class="RJfYGf">
                                        <div
                                            class="RutFAf wcB8se"
                                            style="width: 5.14617006324666%"
                                            title="1,718"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="rateList">
            <div class="EGFGHd">
                <header class="c1bOId">
                    <div class="YNR7H">
                        <div class="gSGphe">
                            <img
                                src="./images/user1.png"
                                class="T75of abYEib"
                            />
                            <div class="X5PpBb">Henry Futch</div>
                        </div>
                        <div class="rightCircle">
                            <img src="./images/more.png" />
                        </div>
                    </div>
                    <div class="Jx4nYe">
                        <div
                            aria-label="Rated 5 stars out of five stars"
                            role="img"
                            class="iXRFPc"
                        >
                            <span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="1"
                                ssk="1#1"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="2"
                                ssk="1#2"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="3"
                                ssk="1#3"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="4"
                                ssk="1#4"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="5"
                                ssk="1#5"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span
                            ></span>
                        </div>
                        <span class="bp9Aid">October 23, 2023</span>
                    </div>
                </header>
                <div class="h3YV2d">
                    Game hay, hấp dẫn, đổi thưởng ok mọi người nên thử nha.
                </div>
                <div>
                    <div class="AJTPZc" jsname="J0d7Yd">
                        35 people found this review helpful
                    </div>
                    <footer class="Anb3we">
                        <div class="NC0Ppb">Did you find this helpful?</div>
                        <div class="btnArr">
                            <div class="btn">Yes</div>
                            <div class="btn">No</div>
                        </div>
                    </footer>
                </div>
            </div>
            <div class="EGFGHd">
                <header class="c1bOId">
                    <div class="YNR7H">
                        <div class="gSGphe">
                            <img
                                src="./images/user2.png"
                                class="T75of abYEib"
                            />
                            <div class="X5PpBb">Henry Futch</div>
                        </div>
                        <div class="rightCircle">
                            <img src="./images/more.png" />
                        </div>
                    </div>
                    <div class="Jx4nYe">
                        <div
                            aria-label="Rated 5 stars out of five stars"
                            role="img"
                            class="iXRFPc"
                        >
                            <span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="1"
                                ssk="1#1"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="2"
                                ssk="1#2"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="3"
                                ssk="1#3"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="4"
                                ssk="1#4"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="5"
                                ssk="1#5"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span
                            ></span>
                        </div>
                        <span class="bp9Aid">October 23, 2023</span>
                    </div>
                </header>
                <div class="h3YV2d">
                    Trải nghiệm siêu mượt, dễ chơi, phù hợp với mọi đối tượng.
                </div>
                <div>
                    <div class="AJTPZc" jsname="J0d7Yd">
                        21 people found this review helpful
                    </div>
                    <footer class="Anb3we">
                        <div class="NC0Ppb">Did you find this helpful?</div>
                        <div class="btnArr">
                            <div class="btn">Yes</div>
                            <div class="btn">No</div>
                        </div>
                    </footer>
                </div>
            </div>
            <div class="EGFGHd">
                <header class="c1bOId">
                    <div class="YNR7H">
                        <div class="gSGphe">
                            <img
                                src="./images/user3.png"
                                class="T75of abYEib"
                            />
                            <div class="X5PpBb">Henry Futch</div>
                        </div>
                        <div class="rightCircle">
                            <img src="./images/more.png" />
                        </div>
                    </div>
                    <div class="Jx4nYe">
                        <div
                            aria-label="Rated 5 stars out of five stars"
                            role="img"
                            class="iXRFPc"
                        >
                            <span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="1"
                                ssk="1#1"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="2"
                                ssk="1#2"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="3"
                                ssk="1#3"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="4"
                                ssk="1#4"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span></span
                            ><span
                                aria-hidden="true"
                                jsname="fI6EEc"
                                class="F7XJmb"
                                data-number="5"
                                ssk="1#5"
                                ><span class="Z1Dz7b" aria-hidden="true"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                        ></path></svg></span
                            ></span>
                        </div>
                        <span class="bp9Aid">October 23, 2023</span>
                    </div>
                </header>
                <div class="h3YV2d">
                    Giao diện đẹp, game mượt, hình ảnh sôi động, nên tải về thử nha.
                </div>
                <div>
                    <div class="AJTPZc" jsname="J0d7Yd">
                        58 people found this review helpful
                    </div>
                    <footer class="Anb3we">
                        <div class="NC0Ppb">Did you find this helpful?</div>
                        <div class="btnArr">
                            <div class="btn">Yes</div>
                            <div class="btn">No</div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>

        <div class="aboutDetail">
            <div class="boxTitle">
                <p class="title">Similar games</p>
                <img src="./images/right-arrow.png" />
            </div>

            <div class="gameList">
                <div class="gameItem">
                    <img class="gameIcon" src="./images/game1.png" />
                    <div class="rightTitle">
                        <div class="gameName">Gin Rummy Stars</div>
                        <div class="gameName">Beach Bum Ltd.</div>
                        <div class="gameStar">
                            <div
                                style="
                                    display: inline-flex;
                                    align-items: center;
                                "
                            >
                                <span class="w2kbF">4.6</span>
                                <img src="./images/star.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gameItem">
                    <img class="gameIcon" src="./images/game2.png" />
                    <div class="rightTitle">
                        <div class="gameName">ZingPlay game portal</div>
                        <div class="gameName">VNG ZingPlay Game Studios</div>
                        <div class="gameStar">
                            <div
                                style="
                                    display: inline-flex;
                                    align-items: center;
                                "
                            >
                                <span class="w2kbF">4.7</span>
                                <img src="./images/star.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gameItem">
                    <img class="gameIcon" src="./images/game3.png" />
                    <div class="rightTitle">
                        <div class="gameName">Gin Rummy Legends</div>
                        <div class="gameName">Beach Bum Ltd.</div>
                        <div class="gameStar">
                            <div
                                style="
                                    display: inline-flex;
                                    align-items: center;
                                "
                            >
                                <span class="w2kbF">4.5</span>
                                <img src="./images/star.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gameItem">
                    <img class="gameIcon" src="./images/game4.png" />
                    <div class="rightTitle">
                        <div class="gameName">
                            Pusoy ZingPlay - 13 cards game
                        </div>
                        <div class="gameName">VNG ZingPlay Studio</div>
                        <div class="gameStar">
                            <div
                                style="
                                    display: inline-flex;
                                    align-items: center;
                                "
                            >
                                <span class="w2kbF">4.7</span>
                                <img src="./images/star.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gameItem">
                    <img class="gameIcon" src="./images/game5.png" />
                    <div class="rightTitle">
                        <div class="gameName">Spades: Classic Card Game</div>
                        <div class="gameName">People Lovin Games</div>
                        <div class="gameStar">
                            <div
                                style="
                                    display: inline-flex;
                                    align-items: center;
                                "
                            >
                                <span class="w2kbF">4.8</span>
                                <img src="./images/star.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gameItem">
                    <img class="gameIcon" src="./images/game6.png" />
                    <div class="rightTitle">
                        <div class="gameName">
                            Gin Rummy - Classic Card Games
                        </div>
                        <div class="gameName">SNG Games</div>
                        <div class="gameStar">
                            <div
                                style="
                                    display: inline-flex;
                                    align-items: center;
                                "
                            >
                                <span class="w2kbF">4.5</span>
                                <img src="./images/star.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="aboutDetail">
            <div class="boxTitle">
                <p class="title">More by Teen Patti Rummy Ludo by Banyan</p>
                <img src="./images/right-arrow.png" />
            </div>

            <div class="gameList">
                <div class="gameItem">
                    <img class="gameIcon" src="./images/game1.png" />
                    <div class="rightTitle">
                        <div class="gameName">
                            Poker Deluxe: Texas Holdem Onl
                        </div>
                        <div class="gameName">
                            Teen Patti Rummy Ludo by Banyan
                        </div>
                        <div class="gameStar">
                            <div
                                style="
                                    display: inline-flex;
                                    align-items: center;
                                "
                            >
                                <span class="w2kbF">4.7</span>
                                <img src="./images/star.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gameItem">
                    <img class="gameIcon" src="./images/game2.png" />
                    <div class="rightTitle">
                        <div class="gameName">Spades</div>
                        <div class="gameName">
                            Teen Patti Rummy Ludo by Banyan
                        </div>
                        <div class="gameStar">
                            <div
                                style="
                                    display: inline-flex;
                                    align-items: center;
                                "
                            >
                                <span class="w2kbF">4.6</span>
                                <img src="./images/star.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gameItem">
                    <img class="gameIcon" src="./images/game3.png" />
                    <div class="rightTitle">
                        <div class="gameName">Rummy</div>
                        <div class="gameName">
                            Teen Patti Rummy Ludo by Banyan
                        </div>
                        <div class="gameStar">
                            <div
                                style="
                                    display: inline-flex;
                                    align-items: center;
                                "
                            >
                                <span class="w2kbF">4.6</span>
                                <img src="./images/star.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gameItem">
                    <img class="gameIcon" src="./images/game4.png" />
                    <div class="rightTitle">
                        <div class="gameName">Ludo Mania</div>
                        <div class="gameName">
                            Teen Patti Rummy Ludo by Banyan
                        </div>
                        <div class="gameStar">
                            <div
                                style="
                                    display: inline-flex;
                                    align-items: center;
                                "
                            >
                                <span class="w2kbF">4.9</span>
                                <img src="./images/star.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        download() {
            window.location.href = "https://game-sport.s3-ap-east-1.amazonaws.com/app/888b-af-v12.apk";
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    margin-bottom: 10px;
    .appInfo {
        margin: 0 24px;

        margin-top: 28px;
        display: flex;
        align-items: flex-start;
        .appLogo {
            width: 72px;
            height: 72px;
            box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
                0 1px 3px 1px rgba(60, 64, 67, 0.15);
            margin: 7px 20px 0 0;
            border-radius: 20%;
            border-width: 0;
        }
        .boxRight {
            flex: 1;

            .title {
                margin: 0;
                font-family: "Google Sans", Roboto, Arial, sans-serif;
                font-size: 24px;
                line-height: 28px;
                letter-spacing: 0;
                font-weight: 400;
                font-weight: 500;
                align-items: flex-end;
                display: flex;
                overflow-wrap: anywhere;
                width: 100%;
                word-break: keep-all;
            }

            .company {
                font-family: "Google Sans", Roboto, Arial, sans-serif;
                line-height: 20px;
                font-size: 18px;
                font-weight: 500;
                color: #01875f;
            }

            .payTip {
                fill: rgb(95, 99, 104);
                stop-color: rgb(95, 99, 104);
                font-family: Roboto, Arial, sans-serif;
                line-height: 20px;
                font-size: 18px;
                letter-spacing: 0.025em;
                font-weight: 400;
                color: rgb(95, 99, 104);
            }
        }
    }

    .appStore {
        display: flex;
        margin-top: 15px;

        .textItem {
            padding: 0 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            position: relative;

            .boldTitle {
                font-size: 14px;
                color: black;
                font-weight: 700;
            }
            .starRating {
                display: flex;
                align-items: center;
                img {
                    width: 14px;
                    height: 14px;
                    margin-left: 3px;
                }
            }

            &:not(:first-child)::before {
                position: absolute;
                content: "";
                top: calc(50% - 12px);
                left: 0;
                width: 1px;
                height: 24px;
                background-color: rgb(232, 234, 237);
            }
        }

        .topBox {
            height: 28px;
            display: flex;
            align-items: center;
        }

        .textLeft {
        }

        .textMiddle {
            .download {
                width: 25px;
                height: 25px;
            }
        }

        .textRight {
            .rate18Plus {
                width: 25px;
                height: 17.87px;
            }
        }
    }

    .clickBtn {
        margin: 0 auto;
        width: 342px;
        height: 36px;
        line-height: 36px;
        background-color: #01875f;
        color: white;
        text-align: center;
        margin-top: 15px;
        border-radius: 6px;
        font-size: 18px;
        &:active {
            opacity: 0.8;
        }
    }

    .banners {
        margin-top: 20px;
        padding: 0 10px;
        overflow-x: auto;
        display: flex;
        .banner {
            // width: 120px;
            height: 120px;
            margin: 0 10px;
        }
    }

    .aboutDetail {
        margin-top: 20px;
        padding: 0 20px;

        .title {
            font-size: 16px;
            color: black;
            font-weight: 700;
        }

        .description {
            margin-top: 20px;
            font-size: 14px;
            font-weight: 400;
            line-height: 16px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            line-clamp: 6;
            overflow: hidden;
            text-overflow: ellipsis;
            color: rgb(95, 99, 104);
        }

        .updateVersion {
            margin-top: 20px;
            .title {
                fill: rgb(32, 33, 36);
                stop-color: rgb(32, 33, 36);
                line-height: 16px;
                font-size: 15px;
                letter-spacing: 0.0178571429em;
                font-weight: 500;
            }

            .updateDate {
                margin-top: 6px;
                font-size: 15px;
                color: rgb(95, 99, 104);
            }
        }
    }

    .titleInfo {
        color: rgb(95, 99, 104);
        font-size: 12px;
        font-weight: 400;
    }

    .ratedBox {
        .HJV0ef {
            padding-bottom: 16px;
            .P4w39d {
                display: flex;
                padding-top: 24px;
                .Te9Tpc {
                    column-gap: 24px;
                    display: grid;
                    flex-grow: 1;
                    grid-template-columns: max-content auto;
                    .jILTFe {
                        color: rgb(32, 33, 36);
                        fill: rgb(32, 33, 36);
                        stop-color: rgb(32, 33, 36);
                        font-family: "Google Sans Display", Roboto, Arial,
                            sans-serif;
                        line-height: 58px;
                        font-size: 58px;
                        letter-spacing: 0;
                        font-weight: 400;
                    }
                    .I26one {
                        display: inline-block;
                        .deXnLd {
                            display: inline-block;
                            text-align: left;
                            height: 16px;
                            width: 16px;
                            .Z1Dz7b {
                                fill: #01875f;
                                stop-color: #01875f;
                            }
                            .Wi7KIe {
                                fill: rgb(241, 243, 244);
                                stop-color: rgb(241, 243, 244);
                            }
                        }
                    }

                    .JzwBgb {
                        display: grid;
                        grid-template-columns: max-content auto;
                        align-items: center;
                        .Qjdn7d {
                            font-family: Roboto, Arial, sans-serif;
                            line-height: 14px;
                            font-size: 14px;
                            letter-spacing: 0.025em;
                            font-weight: 400;
                            padding-right: 16px;
                        }

                        .RJfYGf {
                            border-radius: 9999px;
                            background-color: rgb(232, 234, 237);
                            height: 10px;
                            .RutFAf {
                                height: 100%;
                                border-radius: inherit;
                                background-color: #01875f;
                            }
                        }
                    }
                }
            }
        }
    }

    .boxTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 20px;
        }
    }

    .rateList {
        padding: 0 20px;
        color: rgb(95, 99, 104);
        .EGFGHd {
            padding: 16px 0;

            header {
                display: block;
                .YNR7H {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .rightCircle {
                        img {
                            width: 20px;
                            transform: rotate(90deg);
                        }
                    }

                    .gSGphe {
                        display: grid;
                        align-items: center;
                        grid-column-gap: 16px;
                        grid-template-columns: repeat(2, max-content);
                        .abYEib {
                            border-radius: 50%;
                            width: 32px;
                            height: 32px;
                            overflow: hidden;
                            background-size: cover;
                        }
                        .X5PpBb {
                            font-size: 14px;
                            color: rgb(32, 33, 36);
                            fill: rgb(32, 33, 36);
                            stop-color: rgb(32, 33, 36);
                            font-weight: 400;
                        }
                    }

                    .VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd {
                        position: relative;
                        overflow: visible;
                        .VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd {
                            position: relative;
                            overflow: visible;
                        }
                    }
                }
                .Jx4nYe {
                    margin-top: 16px;
                    .iXRFPc {
                        display: inline-block;
                        .F7XJmb {
                            display: inline-block;
                            text-align: left;
                            height: 12px;
                            width: 12px;
                            .Z1Dz7b {
                                color: #01875f;
                                fill: #01875f;
                                stop-color: #01875f;
                            }
                        }
                    }
                }
            }

            .h3YV2d {
                margin-top: 8px;
                font-size: 14px;
                line-height: 20px;
                overflow-wrap: anywhere;
            }

            .AJTPZc {
                font-size: 13px;
                line-height: 19px;
                margin-top: 10px;
            }

            .Anb3we {
                align-items: center;
                justify-content: space-between;
                display: flex;
                font-size: 13px;
                margin-top: 12px;
            }

            .D3Qfie .Gggmbb {
                background-color: rgb(95, 99, 104);
            }

            .NC0Ppb {
                font-size: 13px;
                font-weight: 400;
                // letter-spacing: .025em;
                line-height: 20px;
                margin-right: 24px;
            }

            .btnArr {
                display: flex;
                align-items: center;
                .btn {
                    padding: 0 10px;
                    border-radius: 5px;
                    border: 1px solid rgb(95, 99, 104);
                    margin-right: 5px;
                }
            }
        }
    }

    .gameList {
        display: grid;
        grid-gap: 24px;
        grid-template-columns: repeat(2, 1fr);
        .gameItem {
            display: flex;
            overflow: hidden;
            .gameIcon {
                border-radius: 12px;
                border-width: 0;
                box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
                    0 1px 3px 1px rgba(60, 64, 67, 0.15);
                height: 56px;
                width: 56px;
                margin-right: 10px;
            }
            .gameStar {
                display: flex;
                align-items: center;
                img {
                    width: 10px;
                    height: 10px;
                    margin-left: 3px;
                }
            }
            .rightTitle {
                display: flex;
                flex-direction: column;
                .gameName {
                    align-items: center;
                    display: inline-flex;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>
