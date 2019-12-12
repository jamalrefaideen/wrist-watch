window.onload = function () {
    const secondHand = document.querySelector('.secondHand')
    const minuteHand = document.querySelector('.minuteHand')
    const hourHand = document.querySelector('.hourHand')
    const btn = document.querySelector('.rrr');
    const input = document.querySelector('input')
    var oo = true;
    var vv = null;
    var hourDegrees = 0;
    var minutes = 0;
    var hours = 0;
    var ss = true;
    var minuteDegrees = 0

    function getDate() {
        const date = new Date() //get
        const seconds = date.getSeconds();
        const secondDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        if (oo) {
            minutes = date.getMinutes();
            minuteDegrees = //(minutes * 360 / 60) + (seconds * 360 / 60) / 60
                ((minutes / 60) * 360) + 360
            minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

            hours = date.getHours();
            hourDegrees = hours * 360 / 12 + ((minutes * 360 / 60) / 12)
            setAmOrPm(hours,minutes)
            hourHand.style.transform = `rotate(${hourDegrees-2}deg)`
            btn.addEventListener('click', hourChanges);

        }



    }
    setInterval(getDate, 1000)

    var count = 0
    var deg = 0;
    var changeTime = 0;
    var hh = 0;

    function hourChanges() {
        const date1 = new Date();
        count = count + 1
        changeTime = deg + count
        oo = false;
        var sss = Math.round(minuteDegrees + changeTime)
        nn = sss / 6
        const hzz = date1.setHours(date1.getHours() - 1, nn)
        date1.setTime(hzz)
        minuteHand.style.transform = `rotate(${sss}deg)`;
        hourDegrees = date1.getHours() * 360 / 12 + ((date1.getMinutes() * 360 / 60) / 12)
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        setAmOrPm (date1.getHours(), date1.getMinutes())
    }

    function setAmOrPm(hours,minutes) {
        if(hours < 12 || hours == 24){
        input.value = hours + ":" + minutes + " am"

    }
    else{
        input.value = hours + ":" + minutes + " pm"





    }

    }



}
// const topLeftSideHook = this.renderer.createElement('span');
    // const topInnerBox1 = this.renderer.createElement('span');
    // const topInnerBox2 = this.renderer.createElement('span');
    // const topInnerBox3 = this.renderer.createElement('span');
    // const topRightSideHook = this.renderer.createElement('span');

    // const topSectionLeftBlock = this.renderer.createElement('span');
    // const topSectionMiddleBlock = this.renderer.createElement('span');
    // const topSectionRightBlock = this.renderer.createElement('span');

    // const topSection1LeftBlock = this.renderer.createElement('span');
    // const topSection1MiddleBlock = this.renderer.createElement('span');
    // const topSection1RightBlock = this.renderer.createElement('span');


    // const bottomLeftSideHook = this.renderer.createElement('span');
    // const bottomInnerBox1 = this.renderer.createElement('span');
    // const bottomInnerBox2 = this.renderer.createElement('span');
    // const bottomInnerBox3 = this.renderer.createElement('span');
    // const bottomRightSideHook = this.renderer.createElement('span');

    // const bottomSectionLeftBlock = this.renderer.createElement('span');
    // const bottomSectionMiddleBlock = this.renderer.createElement('span');
    // const bottomSectionRightBlock = this.renderer.createElement('span');

    // const bottomSection1LeftBlock = this.renderer.createElement('span');
    // const bottomSection1MiddleBlock = this.renderer.createElement('span');
    // const bottomSection1RightBlock = this.renderer.createElement('span')
    // this.renderer.appendChild(wrapper, topLeftSideHook);
    // this.renderer.appendChild(wrapper, topInnerBox1);
    // this.renderer.appendChild(wrapper, topInnerBox2);
    // this.renderer.appendChild(wrapper, topInnerBox3);
    // this.renderer.appendChild(wrapper, topRightSideHook);


    // this.renderer.appendChild(wrapper, topSectionLeftBlock);
    // this.renderer.appendChild(wrapper, topSectionMiddleBlock);
    // this.renderer.appendChild(wrapper, topSectionRightBlock);

    // this.renderer.appendChild(wrapper, topSection1LeftBlock);
    // this.renderer.appendChild(wrapper, topSection1MiddleBlock);
    // this.renderer.appendChild(wrapper, topSection1RightBlock);

    // this.renderer.appendChild(wrapper, bottomLeftSideHook);
    // this.renderer.appendChild(wrapper, bottomInnerBox1);
    // this.renderer.appendChild(wrapper, bottomInnerBox2);
    // this.renderer.appendChild(wrapper, bottomInnerBox3);
    // this.renderer.appendChild(wrapper, bottomRightSideHook);


    // this.renderer.appendChild(wrapper, bottomSectionLeftBlock);
    // this.renderer.appendChild(wrapper, bottomSectionMiddleBlock);
    // this.renderer.appendChild(wrapper, bottomSectionRightBlock);


    // this.renderer.appendChild(wrapper, bottomSection1LeftBlock);
    // this.renderer.appendChild(wrapper, bottomSection1MiddleBlock);
    // this.renderer.appendChild(wrapper, bottomSection1RightBlock);


    applyStyleInWatchStraps(strap) {
      this.renderer.addClass(strap.strapPrimaryBottomLeft, 'left-bottom-rec');
      this.renderer.addClass(strap.strapPrimaryBottomLeft, 'border-color');
      this.renderer.addClass(strap.strapPrimaryBottomMiddle, 'middle-bottom-rec');
      this.renderer.addClass(strap.strapPrimaryBottomMiddle, 'border-color');
      this.renderer.addClass(strap.strapPrimaryBottomRight, 'middle2-bottom-rec');
      this.renderer.addClass(strap.strapPrimaryBottomRight, 'border-color');
    }




    this.renderer.addClass(leftInner, 'leftRec');
    this.renderer.addClass(leftInner, 'border-color');
    this.renderer.addClass(middleInner1, 'middle-rec');
    this.renderer.addClass(middleInner1, 'border-color');
    this.renderer.addClass(middleInner2, 'middle2-rec');
    this.renderer.addClass(middleInner2, 'border-color');
    this.renderer.addClass(right, 'watch-buggle-right');
    applyStyleInDugHoles(dugHole) {
      dugHole.topLeftDugHole.style.position = this.styleInfo.absolute;
      dugHole.topLeftDugHole.style.width = this.styleInfo.wrapWidth;
      dugHole.topLeftDugHole.style.borderBottom  = this.styleInfo.wrapBorderBottom;
      dugHole.topLeftDugHole.style.borderLeft = this.styleInfo.wrapBorderLeft;
      dugHole.topLeftDugHole.style.top = this.styleInfo.wrapTop;
      dugHole.topLeftDugHole.style.left = this.styleInfo.wrapLeft;
      dugHole.topLeftDugHole.style.borderBottomRightRadius = this.styleInfo.rightBorderRightRadius;
      this.renderer.addClass(dugHole.topLeftDugHole, 'watch-buggle-left');
      this.renderer.addClass(dugHole.topRightDugHole, 'watch-buggle-right');
      this.renderer.addClass(dugHole.bottomLeftDugHole, 'watch-buggle-bottom');
      this.renderer.addClass(dugHole.bottomRightDugHole, 'watch-buggle-bottom-right');


      dugHole.topRightDugHole.style.position = this.styleInfo.absolute;
      dugHole.topRightDugHole.style.width = this.styleInfo. rightWrapWidth;
      dugHole.topRightDugHole.style.borderBottom  = this.styleInfo.rightWrapBorderBottom;
      dugHole.topRightDugHole.style.borderRight = this.styleInfo.rightWrapBorderright;
      dugHole.topRightDugHole.style.top = this.styleInfo. rightWrapTop;
      dugHole.topRightDugHole.style.left = this.styleInfo.rightWrapLeft;
      dugHole.topRightDugHole.style.margin = this.styleInfo.rightWrapMargin;
      dugHole.topRightDugHole.style.borderBottomLeftRadius = this.styleInfo.rightBorderLeftRadius;

      const styleTag = this.renderer.createElement('style');
      const cssText = this.renderer.createText(this.style);
      this.renderer.appendChild(styleTag, cssText);
      this.renderer.appendChild(document.head, styleTag);



    }




    .curve{
      position: absolute;
      left: 14%;
      border-bottom: 54px solid  #2F4F4F;
      border-left: 16px solid white;
      width: 15px;
      bottom: 185px;
      border-right: 1px solid green;
  }


  .rightcurve{
      position: absolute;
      left: 73%;
      border-bottom: 63px solid  #2F4F4F;
      border-right: 14px solid white;
      width: 16px;
      bottom: 180px;
      border-left: 1px solid green;
  }
  .mark{
      border-right: 16px solid  #2F4F4F;
      position: absolute;
      left: -1px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }
  .markright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }

  .bottomleftcurve{
      position: absolute;
      left: 11%;
      border-top: 52px solid   #2F4F4F;
      border-left: 13px solid transparent;
      width: 16px;
      bottom: -28px;
      border-right: 1px solid green;
  }

  .markbottomleft{
      border-right: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }

  .bottomrightcurve{
      position: absolute;
      left: 70%;
      border-top: 47px solid   #2F4F4F;
      border-right: 16px solid transparent;
      width: 16px;
      bottom: -30px;
      border-left: 1px solid green;
  }

  .markbottomright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }
  .outercircle{
      width:202px;
      height:202px;
      border-radius: 50%;
      border:10px solid  #2F4F4F;
      position: relative;
      left:40%;
      top:180px;


  }
  .primarycircle{
      left: -1px;
      width: 193px;
      height: 193px;
      border-radius: 50%;
      border: 6px solid gray;
      position: absolute;
      top: -1px;
  }
  .secondarycircle
  {
      width: 184px;
      height: 184px;
      border-radius: 50%;
      border: 5px solid black;
      position: absolute;

  }


  .btn-group span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left; /* Float the buttons side by side */
    }

    .btn-group span:not(:first-child) {
      border-left: none; /* Prevent double borders */
    }

    /* Clear floats (clearfix hack) */
    .btn-group:after {
      content: "";
      clear: both;
      display: table;
    }

    /* Add a background color on hover */


  .section1 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section1 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section1:after {
      content: "";
      clear: both;
      display: table;
    }

    .section2 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section2 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section2:after {
      content: "";
      clear: both;
      display: table;
    }


    .section3 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section3 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section3:after {
      content: "";
      clear: both;
      display: table;
    }

    .section4 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section4 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section4:after {
      content: "";
      clear: both;
      display: table;
    }















    .hand{
        top:50%;
        position: absolute;
      transform-origin: 70%;       /*it is the axis to rotate*/
      transition: all 0.05s;
      transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

  }
  .hour{

          transform-origin: 70% 85%;       /*it is the axis to rotate*/
          transition: all 0.05s;
          transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

      }











  /* .curve::before{
      content: "";
      border-left: 3px solid green;
      position: absolute;
      bottom:100px;
      left:40px;
     height:80px;
     border-radius: 50%;

  } */

  .firstsec{
      top: -112px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec{
      top: -93px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec{
      top: -112px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .firstsec1{
      top: -156px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F !important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec1{
      top: -143px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec1{
      top: -157px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .bottomfirstsec{
      top: 238px;
      left: 52px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 5px solid transparent !important;
     /* border-top: none!important;*/
      border-right: none!important
  }
  .bottommiddlesec{
      top: 237px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec{
      top: 240px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 5px solid transparent!important;
     /* border-top: none!important;*/
      border-left: none!important

  }


  .bottomfirstsec1{
      top: 282px;
      left: 53px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
     /* border-top: none!important;*/
      border-right: none!important
  }
  .bottommiddlesec1{
      top: 286px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec1{
      top: 285px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
     /* border-top: none!important;*/
      border-left: none!important

  }










   .hourHand{
       border: 1px solid black;
      position: absolute;
      top: 58px;
      height: 40px;
      left: 84px;
      width: 5px;

     /* position: absolute;
      width:112px;
      border-bottom:2px solid yellow;
      left: 0.73rem; */
  }
   .hourHand::before{
      position: absolute;
      content: "";
      border-radius: 50%;
      width: 15px;
      height: 15px;
      border: 1px solid black;
      top: -17px;
      left: -6px;
  }

  .hourHand .round{
      position: absolute;
      content: "";
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      top: -28px;
      left: -4px;
     /* transform: rotate(85deg);*/
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 13px solid black;
  }

  .line{
      position: absolute;
      height: 9px;
      border-left: 1px solid black;
      left: 34%;
      top: -10px
  }
  .line::after{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      left: 3px;
      top: -6px;
      transform:rotate(50deg)
  }

  .line::before{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      right: 4px;
      top: -6px;
      transform:rotate(120deg);

  }
  .minuteHand{
      border: 1px solid black;
      position: absolute;
      top: 50px;
      height: 50px;
      left: 85px;
      width: 5px;
  }

  .minuteHand::before{
      position: absolute;
      content: "";
      border-right: 26px solid black;
      border-top: 3px solid transparent;
      top: -17px;
      left: -11px;
      transform: rotate(85deg);
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 6px solid transparent
  }

  .secondHand::before{
      position: absolute;
      border-radius: 50%;
      width:6px;
      height: 6px;
      background-color: beige;
      top:7rem;
      left:9px

  }.curve{
      position: absolute;
      left: 14%;
      border-bottom: 54px solid  #2F4F4F;
      border-left: 16px solid white;
      width: 15px;
      bottom: 185px;
      border-right: 1px solid green;
  }


  .rightcurve{
      position: absolute;
      left: 73%;
      border-bottom: 63px solid  #2F4F4F;
      border-right: 14px solid white;
      width: 16px;
      bottom: 180px;
      border-left: 1px solid green;
  }
  .mark{
      border-right: 16px solid  #2F4F4F;
      position: absolute;
      left: -1px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }
  .markright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }

  .bottomleftcurve{
      position: absolute;
      left: 11%;
      border-top: 52px solid   #2F4F4F;
      border-left: 13px solid transparent;
      width: 16px;
      bottom: -28px;
      border-right: 1px solid green;
  }

  .markbottomleft{
      border-right: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }

  .bottomrightcurve{
      position: absolute;
      left: 70%;
      border-top: 47px solid   #2F4F4F;
      border-right: 16px solid transparent;
      width: 16px;
      bottom: -30px;
      border-left: 1px solid green;
  }

  .markbottomright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }
  .outercircle{
      width:202px;
      height:202px;
      border-radius: 50%;
      border:10px solid  #2F4F4F;
      position: relative;
      left:40%;
      top:180px;


  }
  .primarycircle{
      left: -1px;
      width: 193px;
      height: 193px;
      border-radius: 50%;
      border: 6px solid gray;
      position: absolute;
      top: -1px;
  }
  .secondarycircle
  {
      width: 184px;
      height: 184px;
      border-radius: 50%;
      border: 5px solid black;
      position: absolute;

  }


  .btn-group span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left; /* Float the buttons side by side */
    }

    .btn-group span:not(:first-child) {
      border-left: none; /* Prevent double borders */
    }

    /* Clear floats (clearfix hack) */
    .btn-group:after {
      content: "";
      clear: both;
      display: table;
    }

    /* Add a background color on hover */


  .section1 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section1 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section1:after {
      content: "";
      clear: both;
      display: table;
    }

    .section2 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section2 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section2:after {
      content: "";
      clear: both;
      display: table;
    }


    .section3 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section3 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section3:after {
      content: "";
      clear: both;
      display: table;
    }

    .section4 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section4 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section4:after {
      content: "";
      clear: both;
      display: table;
    }















    .hand{
        top:50%;
        position: absolute;
      transform-origin: 70%;       /*it is the axis to rotate*/
      transition: all 0.05s;
      transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

  }
  .hour{

          transform-origin: 70% 85%;       /*it is the axis to rotate*/
          transition: all 0.05s;
          transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

      }











  /* .curve::before{
      content: "";
      border-left: 3px solid green;
      position: absolute;
      bottom:100px;
      left:40px;
     height:80px;
     border-radius: 50%;

  } */

  .firstsec{
      top: -112px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec{
      top: -93px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec{
      top: -112px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .firstsec1{
      top: -156px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F !important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec1{
      top: -143px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec1{
      top: -157px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .bottomfirstsec{
      top: 238px;
      left: 52px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 5px solid transparent !important;
     /* border-top: none!important;*/
      border-right: none!important
  }
  .bottommiddlesec{
      top: 237px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec{
      top: 240px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 5px solid transparent!important;
     /* border-top: none!important;*/
      border-left: none!important

  }


  .bottomfirstsec1{
      top: 282px;
      left: 53px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
     /* border-top: none!important;*/
      border-right: none!important
  }
  .bottommiddlesec1{
      top: 286px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec1{
      top: 285px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
     /* border-top: none!important;*/
      border-left: none!important

  }










   .hourHand{
       border: 1px solid black;
      position: absolute;
      top: 58px;
      height: 40px;
      left: 84px;
      width: 5px;

     /* position: absolute;
      width:112px;
      border-bottom:2px solid yellow;
      left: 0.73rem; */
  }
   .hourHand::before{
      position: absolute;
      content: "";
      border-radius: 50%;
      width: 15px;
      height: 15px;
      border: 1px solid black;
      top: -17px;
      left: -6px;
  }

  .hourHand .round{
      position: absolute;
      content: "";
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      top: -28px;
      left: -4px;
     /* transform: rotate(85deg);*/
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 13px solid black;
  }

  .line{
      position: absolute;
      height: 9px;
      border-left: 1px solid black;
      left: 34%;
      top: -10px
  }
  .line::after{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      left: 3px;
      top: -6px;
      transform:rotate(50deg)
  }

  .line::before{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      right: 4px;
      top: -6px;
      transform:rotate(120deg);

  }
  .minuteHand{
      border: 1px solid black;
      position: absolute;
      top: 50px;
      height: 50px;
      left: 85px;
      width: 5px;
  }

  .minuteHand::before{
      position: absolute;
      content: "";
      border-right: 26px solid black;
      border-top: 3px solid transparent;
      top: -17px;
      left: -11px;
      transform: rotate(85deg);
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 6px solid transparent
  }

  .secondHand::before{
      position: absolute;
      border-radius: 50%;
      width:6px;
      height: 6px;
      background-color: beige;
      top:7rem;
      left:9px

  }.curve{
      position: absolute;
      left: 14%;
      border-bottom: 54px solid  #2F4F4F;
      border-left: 16px solid white;
      width: 15px;
      bottom: 185px;
      border-right: 1px solid green;
  }


  .rightcurve{
      position: absolute;
      left: 73%;
      border-bottom: 63px solid  #2F4F4F;
      border-right: 14px solid white;
      width: 16px;
      bottom: 180px;
      border-left: 1px solid green;
  }
  .mark{
      border-right: 16px solid  #2F4F4F;
      position: absolute;
      left: -1px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }
  .markright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }

  .bottomleftcurve{
      position: absolute;
      left: 11%;
      border-top: 52px solid   #2F4F4F;
      border-left: 13px solid transparent;
      width: 16px;
      bottom: -28px;
      border-right: 1px solid green;
  }

  .markbottomleft{
      border-right: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }

  .bottomrightcurve{
      position: absolute;
      left: 70%;
      border-top: 47px solid   #2F4F4F;
      border-right: 16px solid transparent;
      width: 16px;
      bottom: -30px;
      border-left: 1px solid green;
  }

  .markbottomright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }
  .outercircle{
      width:202px;
      height:202px;
      border-radius: 50%;
      border:10px solid  #2F4F4F;
      position: relative;
      left:40%;
      top:180px;


  }
  .primarycircle{
      left: -1px;
      width: 193px;
      height: 193px;
      border-radius: 50%;
      border: 6px solid gray;
      position: absolute;
      top: -1px;
  }
  .secondarycircle
  {
      width: 184px;
      height: 184px;
      border-radius: 50%;
      border: 5px solid black;
      position: absolute;

  }


  .btn-group span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left; /* Float the buttons side by side */
    }

    .btn-group span:not(:first-child) {
      border-left: none; /* Prevent double borders */
    }

    /* Clear floats (clearfix hack) */
    .btn-group:after {
      content: "";
      clear: both;
      display: table;
    }

    /* Add a background color on hover */


  .section1 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section1 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section1:after {
      content: "";
      clear: both;
      display: table;
    }

    .section2 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section2 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section2:after {
      content: "";
      clear: both;
      display: table;
    }


    .section3 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section3 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section3:after {
      content: "";
      clear: both;
      display: table;
    }

    .section4 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section4 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section4:after {
      content: "";
      clear: both;
      display: table;
    }















    .hand{
        top:50%;
        position: absolute;
      transform-origin: 70%;       /*it is the axis to rotate*/
      transition: all 0.05s;
      transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

  }
  .hour{

          transform-origin: 70% 85%;       /*it is the axis to rotate*/
          transition: all 0.05s;
          transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

      }











  /* .curve::before{
      content: "";
      border-left: 3px solid green;
      position: absolute;
      bottom:100px;
      left:40px;
     height:80px;
     border-radius: 50%;

  } */

  .firstsec{
      top: -112px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec{
      top: -93px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec{
      top: -112px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .firstsec1{
      top: -156px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F !important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec1{
      top: -143px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec1{
      top: -157px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .bottomfirstsec{
      top: 238px;
      left: 52px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 5px solid transparent !important;
     /* border-top: none!important;*/
      border-right: none!important
  }
  .bottommiddlesec{
      top: 237px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec{
      top: 240px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 5px solid transparent!important;
     /* border-top: none!important;*/
      border-left: none!important

  }


  .bottomfirstsec1{
      top: 282px;
      left: 53px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
      border-bottom: none!important;
      border-right: none!important;
  }
  .bottommiddlesec1{
      top: 286px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec1{
      top: 285px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-bottom: none!important;
      border-left: none!important;
  }










   .hourHand{
       border: 1px solid black;
      position: absolute;
      top: 58px;
      height: 40px;
      left: 84px;
      width: 5px;

     /* position: absolute;
      width:112px;
      border-bottom:2px solid yellow;
      left: 0.73rem; */
  }
   .hourHand::before{
      position: absolute;
      content: "";
      border-radius: 50%;
      width: 15px;
      height: 15px;
      border: 1px solid black;
      top: -17px;
      left: -6px;
  }

  .hourHand .round{
      position: absolute;
      content: "";
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      top: -28px;
      left: -4px;
     /* transform: rotate(85deg);*/
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 13px solid black;
  }

  .line{
      position: absolute;
      height: 9px;
      border-left: 1px solid black;
      left: 34%;
      top: -10px
  }
  .line::after{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      left: 3px;
      top: -6px;
      transform:rotate(50deg)
  }

  .line::before{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      right: 4px;
      top: -6px;
      transform:rotate(120deg);

  }
  .minuteHand{
      border: 1px solid black;
      position: absolute;
      top: 50px;
      height: 50px;
      left: 85px;
      width: 5px;
  }

  .minuteHand::before{
      position: absolute;
      content: "";
      border-right: 26px solid black;
      border-top: 3px solid transparent;
      top: -17px;
      left: -11px;
      transform: rotate(85deg);
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 6px solid transparent
  }

  .secondHand::before{
      position: absolute;
      border-radius: 50%;
      width:6px;
      height: 6px;
      background-color: beige;
      top:7rem;
      left:9px

  }.curve{
      position: absolute;
      left: 14%;
      border-bottom: 54px solid  #2F4F4F;
      border-left: 16px solid white;
      width: 15px;
      bottom: 185px;
      border-right: 1px solid green;
  }


  .rightcurve{
      position: absolute;
      left: 73%;
      border-bottom: 63px solid  #2F4F4F;
      border-right: 14px solid white;
      width: 16px;
      bottom: 180px;
      border-left: 1px solid green;
  }
  .mark{
      border-right: 16px solid  #2F4F4F;
      position: absolute;
      left: -1px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }
  .markright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }

  .bottomleftcurve{
      position: absolute;
      left: 11%;
      border-top: 52px solid   #2F4F4F;
      border-left: 13px solid transparent;
      width: 16px;
      bottom: -28px;
      border-right: 1px solid green;
  }

  .markbottomleft{
      border-right: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }

  .bottomrightcurve{
      position: absolute;
      left: 70%;
      border-top: 47px solid   #2F4F4F;
      border-right: 16px solid transparent;
      width: 16px;
      bottom: -30px;
      border-left: 1px solid green;
  }

  .markbottomright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }
  .outercircle{
      width:202px;
      height:202px;
      border-radius: 50%;
      border:10px solid  #2F4F4F;
      position: relative;
      left:40%;
      top:180px;


  }
  .primarycircle{
      left: -1px;
      width: 193px;
      height: 193px;
      border-radius: 50%;
      border: 6px solid gray;
      position: absolute;
      top: -1px;
  }
  .secondarycircle
  {
      width: 184px;
      height: 184px;
      border-radius: 50%;
      border: 5px solid black;
      position: absolute;

  }


  .btn-group span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left; /* Float the buttons side by side */
    }

    .btn-group span:not(:first-child) {
      border-left: none; /* Prevent double borders */
    }

    /* Clear floats (clearfix hack) */
    .btn-group:after {
      content: "";
      clear: both;
      display: table;
    }

    /* Add a background color on hover */


  .section1 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section1 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section1:after {
      content: "";
      clear: both;
      display: table;
    }

    .section2 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section2 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section2:after {
      content: "";
      clear: both;
      display: table;
    }


    .section3 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section3 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section3:after {
      content: "";
      clear: both;
      display: table;
    }

    .section4 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section4 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section4:after {
      content: "";
      clear: both;
      display: table;
    }















    .hand{
        top:50%;
        position: absolute;
      transform-origin: 70%;       /*it is the axis to rotate*/
      transition: all 0.05s;
      transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

  }
  .hour{

          transform-origin: 70% 85%;       /*it is the axis to rotate*/
          transition: all 0.05s;
          transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

      }











  /* .curve::before{
      content: "";
      border-left: 3px solid green;
      position: absolute;
      bottom:100px;
      left:40px;
     height:80px;
     border-radius: 50%;

  } */

  .firstsec{
      top: -112px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec{
      top: -93px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec{
      top: -112px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .firstsec1{
      top: -156px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F !important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec1{
      top: -143px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec1{
      top: -157px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .bottomfirstsec{
      top: 238px;
      left: 52px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 5px solid transparent !important;
     /* border-top: none!important;*/
      border-right: none!important
  }
  .bottommiddlesec{
      top: 237px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec{
      top: 240px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 5px solid transparent!important;
     /* border-top: none!important;*/
      border-left: none!important

  }


  .bottomfirstsec1{
      top: 282px;
      left: 53px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
     /* border-top: none!important;*/
      border-right: none!important
  }
  .bottommiddlesec1{
      top: 286px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec1{
      top: 285px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
     /* border-top: none!important;*/
      border-left: none!important

  }










   .hourHand{
       border: 1px solid black;
      position: absolute;
      top: 58px;
      height: 40px;
      left: 84px;
      width: 5px;

     /* position: absolute;
      width:112px;
      border-bottom:2px solid yellow;
      left: 0.73rem; */
  }
   .hourHand::before{
      position: absolute;
      content: "";
      border-radius: 50%;
      width: 15px;
      height: 15px;
      border: 1px solid black;
      top: -17px;
      left: -6px;
  }

  .hourHand .round{
      position: absolute;
      content: "";
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      top: -28px;
      left: -4px;
     /* transform: rotate(85deg);*/
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 13px solid black;
  }

  .line{
      position: absolute;
      height: 9px;
      border-left: 1px solid black;
      left: 34%;
      top: -10px
  }
  .line::after{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      left: 3px;
      top: -6px;
      transform:rotate(50deg)
  }

  .line::before{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      right: 4px;
      top: -6px;
      transform:rotate(120deg);

  }
  .minuteHand{
      border: 1px solid black;
      position: absolute;
      top: 50px;
      height: 50px;
      left: 85px;
      width: 5px;
  }

  .minuteHand::before{
      position: absolute;
      content: "";
      border-right: 26px solid black;
      border-top: 3px solid transparent;
      top: -17px;
      left: -11px;
      transform: rotate(85deg);
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 6px solid transparent
  }

  .secondHand::before{
      position: absolute;
      border-radius: 50%;
      width:6px;
      height: 6px;
      background-color: beige;
      top:7rem;
      left:9px

  }.curve{
      position: absolute;
      left: 14%;
      border-bottom: 54px solid  #2F4F4F;
      border-left: 16px solid white;
      width: 15px;
      bottom: 185px;
      border-right: 1px solid green;
  }


  .rightcurve{
      position: absolute;
      left: 73%;
      border-bottom: 63px solid  #2F4F4F;
      border-right: 14px solid white;
      width: 16px;
      bottom: 180px;
      border-left: 1px solid green;
  }
  .mark{
      border-right: 16px solid  #2F4F4F;
      position: absolute;
      left: -1px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }
  .markright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }

  .bottomleftcurve{
      position: absolute;
      left: 11%;
      border-top: 52px solid   #2F4F4F;
      border-left: 13px solid transparent;
      width: 16px;
      bottom: -28px;
      border-right: 1px solid green;
  }

  .markbottomleft{
      border-right: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }

  .bottomrightcurve{
      position: absolute;
      left: 70%;
      border-top: 47px solid   #2F4F4F;
      border-right: 16px solid transparent;
      width: 16px;
      bottom: -30px;
      border-left: 1px solid green;
  }

  .markbottomright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }
  .outercircle{
      width:202px;
      height:202px;
      border-radius: 50%;
      border:10px solid  #2F4F4F;
      position: relative;
      left:40%;
      top:180px;


  }
  .primarycircle{
      left: -1px;
      width: 193px;
      height: 193px;
      border-radius: 50%;
      border: 6px solid gray;
      position: absolute;
      top: -1px;
  }
  .secondarycircle
  {
      width: 184px;
      height: 184px;
      border-radius: 50%;
      border: 5px solid black;
      position: absolute;

  }


  .btn-group span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left; /* Float the buttons side by side */
    }

    .btn-group span:not(:first-child) {
      border-left: none; /* Prevent double borders */
    }

    /* Clear floats (clearfix hack) */
    .btn-group:after {
      content: "";
      clear: both;
      display: table;
    }

    /* Add a background color on hover */


  .section1 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section1 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section1:after {
      content: "";
      clear: both;
      display: table;
    }

    .section2 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section2 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section2:after {
      content: "";
      clear: both;
      display: table;
    }


    .section3 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section3 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section3:after {
      content: "";
      clear: both;
      display: table;
    }

    .section4 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section4 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section4:after {
      content: "";
      clear: both;
      display: table;
    }















    .hand{
        top:50%;
        position: absolute;
      transform-origin: 70%;       /*it is the axis to rotate*/
      transition: all 0.05s;
      transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

  }
  .hour{

          transform-origin: 70% 85%;       /*it is the axis to rotate*/
          transition: all 0.05s;
          transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

      }











  /* .curve::before{
      content: "";
      border-left: 3px solid green;
      position: absolute;
      bottom:100px;
      left:40px;
     height:80px;
     border-radius: 50%;

  } */

  .firstsec{
      top: -112px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec{
      top: -93px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec{
      top: -112px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .firstsec1{
      top: -156px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F !important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec1{
      top: -143px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec1{
      top: -157px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .bottomfirstsec{
      top: 238px;
      left: 52px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 5px solid transparent !important;
     /* border-top: none!important;*/
      border-right: none!important
  }
  .bottommiddlesec{
      top: 237px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec{
      top: 240px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 5px solid transparent!important;
     /* border-top: none!important;*/
      border-left: none!important

  }


  .bottomfirstsec1{
      top: 282px;
      left: 53px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
     /* border-top: none!important;*/
      border-right: none!important
  }
  .bottommiddlesec1{
      top: 286px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec1{
      top: 285px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
     /* border-top: none!important;*/
      border-left: none!important

  }










   .hourHand{
       border: 1px solid black;
      position: absolute;
      top: 58px;
      height: 40px;
      left: 84px;
      width: 5px;

     /* position: absolute;
      width:112px;
      border-bottom:2px solid yellow;
      left: 0.73rem; */
  }
   .hourHand::before{
      position: absolute;
      content: "";
      border-radius: 50%;
      width: 15px;
      height: 15px;
      border: 1px solid black;
      top: -17px;
      left: -6px;
  }

  .hourHand .round{
      position: absolute;
      content: "";
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      top: -28px;
      left: -4px;
     /* transform: rotate(85deg);*/
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 13px solid black;
  }

  .line{
      position: absolute;
      height: 9px;
      border-left: 1px solid black;
      left: 34%;
      top: -10px
  }
  .line::after{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      left: 3px;
      top: -6px;
      transform:rotate(50deg)
  }

  .line::before{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      right: 4px;
      top: -6px;
      transform:rotate(120deg);

  }
  .minuteHand{
      border: 1px solid black;
      position: absolute;
      top: 50px;
      height: 50px;
      left: 85px;
      width: 5px;
  }

  .minuteHand::before{
      position: absolute;
      content: "";
      border-right: 26px solid black;
      border-top: 3px solid transparent;
      top: -17px;
      left: -11px;
      transform: rotate(85deg);
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 6px solid transparent
  }

  .secondHand::before{
      position: absolute;
      border-radius: 50%;
      width:6px;
      height: 6px;
      background-color: beige;
      top:7rem;
      left:9px

  }.curve{
      position: absolute;
      left: 14%;
      border-bottom: 54px solid  #2F4F4F;
      border-left: 16px solid white;
      width: 15px;
      bottom: 185px;
      border-right: 1px solid green;
  }


  .rightcurve{
      position: absolute;
      left: 73%;
      border-bottom: 63px solid  #2F4F4F;
      border-right: 14px solid white;
      width: 16px;
      bottom: 180px;
      border-left: 1px solid green;
  }
  .mark{
      border-right: 16px solid  #2F4F4F;
      position: absolute;
      left: -1px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }
  .markright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 14px solid transparent;
      border-bottom: 5px solid  #2F4F4F;
      width: 0px;
      bottom: -6px;
  }

  .bottomleftcurve{
      position: absolute;
      left: 11%;
      border-top: 52px solid   #2F4F4F;
      border-left: 13px solid transparent;
      width: 16px;
      bottom: -28px;
      border-right: 1px solid green;
  }

  .markbottomleft{
      border-right: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }

  .bottomrightcurve{
      position: absolute;
      left: 70%;
      border-top: 47px solid   #2F4F4F;
      border-right: 16px solid transparent;
      width: 16px;
      bottom: -30px;
      border-left: 1px solid green;
  }

  .markbottomright{
      border-left: 16px solid   #2F4F4F;
      position: absolute;
      left: 0px;
      border-top: 8px solid   #2F4F4F;
      border-bottom: 16px solid transparent;
      width: 0px;
      bottom: -15px;
  }
  .outercircle{
      width:202px;
      height:202px;
      border-radius: 50%;
      border:10px solid  #2F4F4F;
      position: relative;
      left:40%;
      top:180px;


  }
  .primarycircle{
      left: -1px;
      width: 193px;
      height: 193px;
      border-radius: 50%;
      border: 6px solid gray;
      position: absolute;
      top: -1px;
  }
  .secondarycircle
  {
      width: 184px;
      height: 184px;
      border-radius: 50%;
      border: 5px solid black;
      position: absolute;

  }


  .btn-group span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left; /* Float the buttons side by side */
    }

    .btn-group span:not(:first-child) {
      border-left: none; /* Prevent double borders */
    }

    /* Clear floats (clearfix hack) */
    .btn-group:after {
      content: "";
      clear: both;
      display: table;
    }

    /* Add a background color on hover */


  .section1 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section1 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section1:after {
      content: "";
      clear: both;
      display: table;
    }

    .section2 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section2 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section2:after {
      content: "";
      clear: both;
      display: table;
    }


    .section3 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section3 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section3:after {
      content: "";
      clear: both;
      display: table;
    }

    .section4 span{
      border: 1px solid green; /* Green border */
      cursor: pointer; /* Pointer/hand icon */
      float: left;
  }
  .section4 span:not(:firstchild) {
      border-left: none; /* Prevent double borders */
      border-top: none;
      border-right: none!important;
    }
  .section4:after {
      content: "";
      clear: both;
      display: table;
    }















    .hand{
        top:50%;
        position: absolute;
      transform-origin: 70%;       /*it is the axis to rotate*/
      transition: all 0.05s;
      transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

  }
  .hour{

          transform-origin: 70% 85%;       /*it is the axis to rotate*/
          transition: all 0.05s;
          transform: rotate(90deg);     /*fix the default degree in clock which place to start*/
          transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)  ;

      }











  /* .curve::before{
      content: "";
      border-left: 3px solid green;
      position: absolute;
      bottom:100px;
      left:40px;
     height:80px;
     border-radius: 50%;

  } */

  .firstsec{
      top: -112px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec{
      top: -93px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec{
      top: -112px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .firstsec1{
      top: -156px;
      left: 61px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-bottom: 43px solid   #2F4F4F !important;
      border-left: 4px solid transparent !important;
      border-top: none!important;
      border-right: none!important
  }
  .middlesec1{
      top: -143px;
      left: 85px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .lastsec1{
      top: -157px;
      left: 124px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-bottom: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-top: none!important;
      border-left: none!important

  }

  .bottomfirstsec{
      top: 238px;
      left: 52px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 5px solid transparent !important;
     /* border-top: none!important;*/
      border-right: none!important
  }
  .bottommiddlesec{
      top: 237px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec{
      top: 240px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 5px solid transparent!important;
     /* border-top: none!important;*/
      border-left: none!important

  }


  .bottomfirstsec1{
      top: 282px;
      left: 53px;
      position: absolute;
      width: 20px;
      height: 30px;
      border-top: 43px solid   #2F4F4F!important;
      border-left: 4px solid transparent !important;
      border-bottom: none!important;
      border-right: none!important;
  }
  .bottommiddlesec1{
      top: 286px;
      left: 77px;
      position: absolute;
      width: 38px;
      height: 48px;
      background-color:   #2F4F4F;
  }
  .bottomlastsec1{
      top: 285px;
      left: 117px;
      position: absolute;
      width: 20px;
      height: 29px;
      border-top: 44px solid  #2F4F4F!important;
      border-right: 3px solid transparent!important;
      border-bottom: none!important;
      border-left: none!important;
  }










   .hourHand{
       border: 1px solid black;
       position: absolute;
       top: 61px;
       height: 40px;
       left: 86px;
       width: 5px;
       /* position: absolute;
      width:112px;
      border-bottom:2px solid yellow;
      left: 0.73rem; */
  }
   .hourHand::before{
      position: absolute;
      content: "";
      border-radius: 50%;
      width: 15px;
      height: 15px;
      border: 1px solid black;
      top: -17px;
      left: -6px;
  }

  .hourHand .round{
      position: absolute;
      content: "";
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      top: -28px;
      left: -4px;
     /* transform: rotate(85deg);*/
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 13px solid black;
  }

  .line{
      position: absolute;
      height: 9px;
      border-left: 1px solid black;
      left: 34%;
      top: -10px
  }
  .line::after{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      left: 3px;
      top: -6px;
      transform:rotate(50deg)
  }

  .line::before{
      position: absolute;
      content: "";
      height: 8px;
      border-left: 1px solid black;
      right: 4px;
      top: -6px;
      transform:rotate(120deg);

  }
  .minuteHand{
      border: 1px solid black;
      position: absolute;
      top: 52px;
      height: 50px;
      left: 85px;
      width: 5px;
  }

  .minuteHand::before{
      position: absolute;
      content: "";
      border-right: 21px solid black;
      border-left: 21px solid transparent;
      top: -24px;
      left: -20px;
      /* transform: rotate(85deg); */
      /* width: 22px; */
      /* height: 4px; */
      border-bottom: 4px solid transparent;
  }

  .secondHand::before{
      position: absolute;
      border-radius: 50%;
      width:6px;
      height: 6px;
      background-color: beige;
      top:7rem;
      left:9px

  }

  .rrr{
      position :absolute;
      left:211px;
      top:51%;
      transform: rotate(90deg)
  }
  .rrr::before{
      content:"";
      position :absolute;
      width: 10px;
      height: 0;
      border-left: 2px solid transparent;
      border-right: 2px solid transparent;
      border-bottom: 10px solid #2f4f4f;;
      top:-10px;
      left:-1px;
  }
  .input{
      outline:0px;
      border:none;
      border-bottom: 2px solid teal;

  }


