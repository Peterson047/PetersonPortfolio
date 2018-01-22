//"use strict";
//
// set <html> prefix + manifest
(function(){
    let getHtml = document.querySelector('html');
    getHtml.setAttribute('prefix', 'og: http://ogp.me/ns#');
    getHtml.setAttribute('lang', 'en');
})();

//
// preload
(function(){
    let preloadLists = [
        { href: 'https://spemer.com/js/dist/index.js', as: 'script' },
        { href: 'https://spemer.com/css/stylesheet.css', as: 'style' },
        { href: 'https://spemer.com/css/featherlight.css', as: 'style' },
        { href: 'https://spemer.com/css/featherlight.gallery.css', as: 'style' },
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/themes/blue/pace-theme-minimal.css', as: 'style' },
        { href: 'https://fonts.gstatic.com/s/robotoslab/v7/y7lebkjgREBJK96VQi37Zo4P5ICox8Kq3LLUNMylGO4.woff2', as: 'font' },
        { href: 'https://fonts.gstatic.com/s/merriweather/v19/ZvcMqxEwPfh2qDWBPxn6nk4GofcKVZz6wtzX_QUIqsI.woff2', as: 'font' },
        { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0', as: 'font' },
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min.js', as: 'script' },
        { href: 'https://spemer.com/js/dist/set.class.atech.js', as: 'script' },
        { href: 'https://spemer.com/js/jquery.slim.min.js', as: 'script' },
        { href: 'https://spemer.com/js/jquery.lazy.min.js', as: 'script' },
        { href: 'https://spemer.com/js/jquery.lazy.plugins.min.js', as: 'script' },
        { href: 'https://spemer.com/js/smooth.scroll.js', as: 'script' },
        { href: 'https://spemer.com/js/featherlight.js', as: 'script' },
        { href: 'https://spemer.com/js/featherlight.gallery.js', as: 'script' },
        { href: 'https://spemer.com/js/dist/after.jquery.js', as: 'script' },
    ];
    let headTitle = document.querySelector('head');
    preloadLists.forEach(function(preloadList){
        let setLinkProp = document.createElement('link');
        setLinkProp.setAttribute('rel', 'preload');
        setLinkProp.setAttribute('href', preloadList.href);
        setLinkProp.setAttribute('as', preloadList.as);

        if(preloadList.as == 'font')
        {
            setLinkProp.setAttribute('type', 'font/woff2');
            setLinkProp.setAttribute('crossorigin','');
        }
        headTitle.appendChild(setLinkProp);
    });
})();

//
// preload spinner.svg
(function(){
    let getHead = document.querySelector('head');
    let setLink = document.createElement('link');
    setLink.setAttribute('rel','prefetch');
    setLink.setAttribute('href','https://spemer.com/img/spinner.gif');
    getHead.appendChild(setLink);
})();

//
// meta Tags **meta [property, content]**
(function(){
    let thisUrl = window.location.href;
    let thisOGImg = document.querySelector("meta[property='og:image']").getAttribute("content");
    let thisKeys = document.querySelector("meta[name='keywords']").getAttribute("content");
    let propLists = [
        { property: 'og:img:alt', content: thisOGImg },
        { property: 'og:img:url', content: thisOGImg },
        { property: 'og:img:secure_url', content: thisOGImg },
        { property: 'article:section', content: 'Design' },
        { property: 'article:tag', content: thisKeys },
        { property: 'al:web:url', content: thisUrl }
    ];
    let headTitle = document.querySelector('head');
    propLists.forEach(function(propList){
        let setMetaProp = document.createElement('meta');
        setMetaProp.setAttribute('property', propList.property);
        setMetaProp.setAttribute('content', propList.content);
        headTitle.appendChild(setMetaProp);
    });
})();

//
// meta Tags **meta [name, content]**
(function(){
    let thisUrl = window.location.href;
    let thisTitle = document.title;
    let thisDesc = document.querySelector("meta[name='description']").getAttribute("content");
    let thisKeys = document.querySelector("meta[name='keywords']").getAttribute("content");
    let thisOGImg = document.querySelector("meta[property='og:image']").getAttribute("content");
    let metaLists = [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'subject', content: 'Design' },
        { name: 'copyright', content: 'Hyouk Seo(Spemer)' },
        { name: 'designer', content: 'Hyouk Seo(Spemer)' },
        { name: 'publisher', content: 'Hyouk Seo(Spemer)' },
        { name: 'creator', content: 'Hyouk Seo(Spemer)' },
        { name: 'web_author', content: 'Hyouk Seo(Spemer)' },
        { name: 'owner', content: 'Hyouk Seo(Spemer)' },
        { name: 'reply-to', content: 'ghsspower@gmail.com' },
        { name: 'category', content: 'website' },
        { name: 'topic', content: 'Design' },
        { name: 'target', content: 'all' },
        { name: 'url', content: thisUrl },
        { name: 'identifier-URL', content: thisUrl },
        { name: 'pagename', content: thisTitle },
        { name: 'rating', content: 'general' },
        { name: 'language', content: 'english' },
        { name: 'distribution', content: 'global' },
        { name: 'Resource-Type', content: 'Document' },
        { name: 'classification', content: 'Design' },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'referrer', content: 'origin-when-cross-origin' },
        { name: 'google', content: 'notranslate' },
        { name: 'fb:admins', content: '100001935259349' },
        { name: 'fb:app_id', content: '116484055630441' },
        { name: 'twitter:url', content: thisUrl },
        { name: 'twitter:domain', content: thisUrl },
        { name: 'twitter:title', content: thisTitle },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@OfficialSpemer' },
        { name: 'twitter:creator', content: '@OfficialSpemer' },
        { name: 'twitter:description', content: thisDesc },
        { name: 'twitter:image', content: thisOGImg },
        { name: 'twitter:image:src', content: thisOGImg },
        { name: 'twitter:image:alt', content: 'Hyouk Seo(Spemer)' },
        { name: 'application-name', content: thisTitle },
        { name: 'msapplication-TileColor', content: '#656c7a' },
        { name: 'msapplication-tooltip', content: thisTitle },
        { name: 'msapplication-starturl', content: thisUrl },
        { name: 'msapplication-TileImage', content: 'https://spemer.com/img/favicons/mstile-144x144.png' },
        { name: 'DC.subject', content: 'Design' },
        { name: 'DC.publisher', content: 'Hyouk Seo(Spemer)' },
        { name: 'DC.creator', content: 'Hyouk Seo(Spemer)' },
        { name: 'DC.contributor', content: 'Hyouk Seo(Spemer)' },
        { name: 'DC.source', content: thisUrl },
        { name: 'DC.relation', content: 'https://spemer.com/' },
        { name: 'DC.title', content: thisTitle },
        { name: 'DC.language', content: 'en' },
        { name: 'DC.coverage', content: 'World' },
        { name: 'DC.description', content: thisDesc },
        { name: 'DC.keywords', content: thisKeys },
        { name: 'news_keywords', content: thisKeys }
    ];
    let headTitle = document.querySelector('head');
    metaLists.forEach(function(metaList)
    {
        let setMeta = document.createElement('meta');
        setMeta.setAttribute('name', metaList.name);
        setMeta.setAttribute('content', metaList.content);
        headTitle.appendChild(setMeta);
    });
    let setMeta = document.createElement('meta');
    setMeta.setAttribute('property', 'og:img:alt');
    setMeta.setAttribute('content', thisTitle);
    headTitle.appendChild(setMeta);
})();

//
// favicon & shortcut icons
(function(){
    let headTitle = document.querySelector('head');
    // basic icons
    let etcIcons = [
        { rel: 'home', href: '' },
        { rel: 'pingback', href: '' },
        { rel: 'standout', href: '' },
        { rel: 'alternate', href: '' },
        { rel: 'author', href: 'about-spemer.html' },
        { rel: 'manifest', href: 'img/favicons/manifest.json' },
        { rel: 'shortcut icon', href: 'img/favicons/favicon.ico' }
    ];
    etcIcons.forEach(function(etcIcon)
    {
        let setFavicon = document.createElement('link');
        setFavicon.setAttribute('rel', etcIcon.rel);
        setFavicon.setAttribute('href', 'https://spemer.com/' + etcIcon.href);
        headTitle.appendChild(setFavicon);
    });

    // apple icons
    let faviconLists = [
        { sizes: '180x180', href: 'apple-touch-icon.png' },
        { sizes: '152x152', href: 'touch-icon-ipad.png' },
        { sizes: '180x180', href: 'touch-icon-iphone-retina.png' },
        { sizes: '167x167', href: 'touch-icon-ipad-retina.png' },
        { sizes: '57x57', href: 'apple-touch-icon-57x57.png' },
        { sizes: '60x60', href: 'apple-touch-icon-60x60.png' },
        { sizes: '72x72', href: 'apple-touch-icon-72x72.png' },
        { sizes: '76x76', href: 'apple-touch-icon-76x76.png' },
        { sizes: '114x114', href: 'apple-touch-icon-114x114.png' },
        { sizes: '120x120', href: 'apple-touch-icon-120x120.png' },
        { sizes: '144x144', href: 'apple-touch-icon-144x144.png' },
        { sizes: '152x152', href: 'apple-touch-icon-152x152.png' },
        { sizes: '180x180', href: 'apple-touch-icon-180x180.png' }
    ];
    faviconLists.forEach(function(faviconList)
    {
        let setFvIcon = document.createElement('link');
        setFvIcon.setAttribute('rel', 'apple-touch-icon');
        setFvIcon.setAttribute('sizes', faviconList.sizes);
        setFvIcon.setAttribute('href', 'https://spemer.com/img/favicons/' + faviconList.href);
        headTitle.appendChild(setFvIcon);
    });

    // web shorcut icons
    let iconLists = [
        { sizes: '32x32', href: 'favicon-32x32.png' },
        { sizes: '194x194', href: 'favicon-194x194.png' },
        { sizes: '192x192', href: 'android-chrome-192x192.png' },
        { sizes: '16x16', href: 'favicon-16x16.png' }
    ];
    iconLists.forEach(function(iconList)
    {
        let setScIcon = document.createElement('link');
        setScIcon.setAttribute('rel', 'icon');
        setScIcon.setAttribute('type', 'image/png');
        setScIcon.setAttribute('href', 'https://spemer.com/img/favicons/' + iconList.href);
        setScIcon.setAttribute('sizes', iconList.sizes);
        headTitle.appendChild(setScIcon);
    });
})();

//
// '#headerLogo'
(function(){
    let _headerLogo = document.querySelector('#headerLogo');
    let headerLink = document.createElement('a');
    headerLink.href = 'https://spemer.com/';
    let headerHeading = document.createElement('h1');
    let headerText = document.createTextNode('Hyouk Seo');
    
    _headerLogo.appendChild(headerLink);
    headerLink.appendChild(headerHeading);
    headerHeading.appendChild(headerText);
})();

//
// siteMap links
(function(){
    let siteMapList = [
        {
            name:  'Insharior',
            href:  'portfolio/insharior-ux-case-study-user-experience-design',
            title: 'Insharior - UX Case study: Interior item sharing mobile application design',
            img: 'insharior/thumb.png'
        },
        {
            name:  'IGTracker',
            href:  'portfolio/instagram-tracker-application-igtracker-design',
            title: 'IGTracker - UX Case study: Instagram Tracking Application UI Design',
            img: 'igtracker/thumb.png'
        },
        {
            name:  'AWeather',
            href:  'portfolio/weather-push-notification-alarm-application',
            title: 'AWeather - UX Case study: Weather notification application',
            img: 'weather/thumb.png'
        },
        {
            name:  'UnivCam',
            href:  'portfolio/album-image-sort-application-univcam',
            title: 'UnivCam - UX Case study: Album sorting application UI/UX design',
            img: 'univcam/thumb.png'
        },
        {
            name:  'Neighbors',
            href:  'portfolio/dream-drim-korea-apartment-application',
            title: 'Neighbors - SNS application for neighborhood UI Design',
            img: 'dream/cover.png'
        },
        {
            name:  'Memoree',
            href:  'portfolio/memory-record-application-ui-design',
            title: 'Memoree - Minimal UI/UX design for iOS',
            img: 'memoree/thumb.png'
        },
        {
            name:  'Sprinter',
            href:  'portfolio/todo-task-list-manage-application-sprinter',
            title: 'Sprinter - ToDo list & task management application UI/UX design',
            img: 'sprinter/thumb.png'
        },
        {
            name:  'Suhyup',
            href:  'portfolio/suhyup-mobile-banking-ui-ux-renewal',
            title: 'Suhyup - Mobile Banking Application UI/UX Renewal',
            img: 'suhyup/thumb.png'
        },
        {
            name:  'Flat Icons',
            href:  'portfolio/flaticon-vector-graphic-illustration-design',
            title: 'Minimal vector flat icon design',
            img: 'flaticon/house.jpg'
        }
    ];
    let siteMapListArticle = [
        {
            name:  'Gulp',
            href:  'articles/auto-css-vendor-browser-prefix-javascript-gulp',
            title: 'Auto CSS prefix with Gulp',
            img: 'gulp/thumb.png'
        },
        {
            name:  'Favicon',
            href:  'articles/set-favicon-with-javascript',
            title: 'Set favicons with JavaScript',
            img: 'favicon/favicon.png'
        },
        {
            name:  'Scrollbar',
            href:  'articles/customize-website-scrollbar-with-css-web-browser',
            title: 'Customize website’s scrollbar with CSS',
            img: 'scroll/cover.png'
        },
        {
            name:  'CSS Variables',
            href:  'articles/css-custom-properties-variables-usage',
            title: 'Using variables(custom properties) in CSS3',
            img: 'css/thumb.png'
        },
        {
            name:  'Bodymovin',
            href:  'articles/bodymovin-airbnb-lottie-after-effects',
            title: 'How to use Bodymovin for After Effects by Airbnb',
            img: 'bodymovin/cover.png'
        },
        {
            name:  'Jekyll',
            href:  'articles/free-github-blog-and-hosting-with-jekyll',
            title: 'Free GitHub blog and Hosting with Jekyll',
            img: 'jekyll/thumb.png'
        },
        {
            name:  'Material',
            href:  'articles/creative-pros-cons-google-material-design',
            title: 'Cons and Pros of Material design by Google',
            img: 'material/material.png'
        },
        {
            name:  'Firebase',
            href:  'articles/connecting-domain-with-google-firebase',
            title: 'Using Firebase to host website for free!',
            img: 'firebase/firebase_logo.jpg'
        },
        {
            name:  'Musics',
            href:  'articles/spemer-music',
            title: 'Musics by Spemer',
            img: 'music/cover.jpg'
        }
    ];

    //
    // home next prev(bottom)
    const portfolioLinks = document.querySelector('.portfolio');
    const articleLinks = document.querySelector('.articles');

    let nextLink;
    let nextBold;
    let nextText;
    let nextIcon;
    let thisUrl = window.location.href;
    let headForMeta = document.querySelector('head');
    // home next prev(bottom) -> NEXT
    function setNextBtn(arrayName, divClassName, listLength)
    {

        if (thisUrl.indexOf(arrayName[listLength].href) != -1)
        {
            // meta next
            let metaNextAttr = document.createElement('link');
            metaNextAttr.setAttribute('rel', 'next');
            metaNextAttr.setAttribute('href', "https://spemer.com/" + siteMapListArticle[0].href + ".html");
            headForMeta.appendChild(metaNextAttr);
        }

        for (let i = 0; i < arrayName.length; i++)
        {
            let substring = arrayName[i].href;
            if (thisUrl.indexOf(arrayName[listLength].href) != -1)
            {
                nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/";
                nextLink.title = "Home";
                
                nextBold = document.createElement('b');
                nextText = document.createTextNode('Home');
                nextIcon = document.createElement('i');
            }
            else if (thisUrl.indexOf(substring) != -1)
            {
                nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/" + arrayName[i + 1].href + ".html";
                nextLink.title = arrayName[i + 1].title;

                nextBold = document.createElement('b');
                nextText = document.createTextNode(arrayName[i + 1].name);
                nextIcon = document.createElement('i');
                nextIcon.className = 'fa fa-angle-double-right';

                // meta next
                let metaNextAttr = document.createElement('link');
                metaNextAttr.setAttribute('rel', 'next');
                metaNextAttr.setAttribute('href', "https://spemer.com/" + arrayName[i + 1].href + ".html");
                headForMeta.appendChild(metaNextAttr);

                nextLink.setAttribute('onmouseover', 'nextRight()');
                nextLink.setAttribute('onmouseleave', 'nextRightDel()');
            }
        }
        divClassName.appendChild(nextLink);
        nextLink.appendChild(nextBold);
        nextBold.appendChild(nextText);
        nextBold.appendChild(nextIcon);
    }

    //
    // home next prev(bottom) -> PREV
    function setPrevBtn(arrayName, divClassName)
    {
        if (thisUrl.indexOf(arrayName[0].href) != -1)
        {
            // meta prev
            let metaNextAttr = document.createElement('link');
            metaNextAttr.setAttribute('rel', 'prev');
            metaNextAttr.setAttribute('href', "https://spemer.com/" + siteMapList[siteMapList.length - 1].href + ".html");
            headForMeta.appendChild(metaNextAttr);
        }
        
        for (let i = 0; i < arrayName.length; i++)
        {
            let substring = arrayName[i].href;
            if (thisUrl.indexOf(arrayName[0].href) != -1)
            {
                nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/";
                nextLink.title = "Home";
                
                nextBold = document.createElement('b');
                nextText = document.createTextNode('Home');
                nextIcon = document.createElement('i');
            }
            else if (thisUrl.indexOf(substring) != -1)
            {
                nextLink = document.createElement('a');
                nextLink.className = 'prevNext prevNextText';
                nextLink.href = "https://spemer.com/" + arrayName[i - 1].href + ".html";
                nextLink.title = arrayName[i - 1].title;

                nextBold = document.createElement('b');
                nextText = document.createTextNode(arrayName[i - 1].name);
                nextIcon = document.createElement('i');
                nextIcon.className = 'fa fa-angle-double-left';

                // meta prev
                let metaNextAttr = document.createElement('link');
                metaNextAttr.setAttribute('rel', 'prev');
                metaNextAttr.setAttribute('href', "https://spemer.com/" + arrayName[i - 1].href + ".html");
                headForMeta.appendChild(metaNextAttr);

                nextLink.setAttribute('onmouseover', 'nextLeft()');
                nextLink.setAttribute('onmouseleave', 'nextLeftDel()');
            }
        }
        divClassName.appendChild(nextLink);
        nextLink.appendChild(nextBold);
        nextBold.appendChild(nextIcon);
        nextBold.appendChild(nextText);
    };

    // excute portfolio or article
    let siteMapListLength = Number(siteMapList.length - 1);
    let siteMapListArticleLength = Number(siteMapListArticle.length - 1);
    if (portfolioLinks)
    {
        setNextBtn(siteMapList, portfolioLinks, siteMapListLength);
        setPrevBtn(siteMapList, portfolioLinks);
    }
    else if (articleLinks)
    {
        setNextBtn(siteMapListArticle, articleLinks, siteMapListArticleLength);
        setPrevBtn(siteMapListArticle, articleLinks);
    }
    
    //
    // bottom siteMap navigation
    const siteMapNav = document.querySelector('.siteMapNav');
    function bottomSiteNav(arrayName)
    {
        arrayName.forEach(function(arrLen)
        {
            let listNode = document.createElement("li");
            let hrefNode = document.createElement("a");
            hrefNode.href = "https://spemer.com/" + arrLen.href + ".html";
            hrefNode.title = arrLen.title;
            let textNode = document.createTextNode(arrLen.name);

            siteMapNav.appendChild(listNode);
            listNode.appendChild(hrefNode);
            hrefNode.appendChild(textNode);

            let thisUrl = window.location.href;
            let substring = arrLen.href;
            if (thisUrl.indexOf(substring) != -1)
            {
                hrefNode.className = 'underline';
                hrefNode.setAttribute('style', 'font-weight: bold');
            }
        });
    }
    bottomSiteNav(siteMapList);
    bottomSiteNav(siteMapListArticle);

    //
    // set main lists
    const indexLists = document.querySelector('#indexList');
    const articleLists = document.querySelector('#articleList');
    // index.html
    if (indexLists) {
        setMainImgList(indexLists,siteMapList);
    }
    // article.html
    else if (articleLists) {
        setMainImgList(articleLists,siteMapListArticle);
    }
    function setMainImgList(setId,arrName)
    {
        let mainDiv = document.createElement('div');
        mainDiv.className = "artImgBoxEach grow";
        setId.appendChild(mainDiv);

        for (let i = 0; i < arrName.length; i++)
        {
            let aLink = document.createElement('a');
            let aLinkFigure = document.createElement('figure');
            let figImg = document.createElement('img');
            let figCap = document.createElement('figcaption');
            let figStr = document.createElement('h3');
            let figTxt = document.createTextNode(arrName[i].name);

            aLink.href = "https://spemer.com/" + arrName[i].href + ".html";
            figImg.src = "https://spemer.com/img/works/" + arrName[i].img;
            figImg.alt = arrName[i].title;
            figImg.title = arrName[i].title;
            
            mainDiv.appendChild(aLink);
            aLink.appendChild(aLinkFigure);
            aLinkFigure.appendChild(figImg);
            aLinkFigure.appendChild(figCap);
            figCap.appendChild(figStr);
            figStr.appendChild(figTxt);
        }
    }
})();

//
// headerNav 3 ul > li
(function(){
    let topNavLists = [
        {
            title: 'Portfolio',
            href: 'https://spemer.com/',
            hName: '/portfolio/'
        },
        {
            title: 'Articles',
            href: 'https://spemer.com/articles.html',
            hName: '/articles'
        },
        {
            title: 'About',
            href: 'https://spemer.com/about-spemer.html',
            hName: 'about-spemer.html'
        }
    ];

    let headerNavLists = document.querySelector('#headerNav > nav > ul');

    topNavLists.forEach(function(topNavList)
    {
        let setHeaderLists = document.createElement('li');
        setHeaderLists.className = 'headerNavList';

        let setHeaderAnchor = document.createElement('a');
        setHeaderAnchor.title = topNavList.title;
        setHeaderAnchor.href = topNavList.href;
        setHeaderAnchor.className = 'headerNav';

        let headerTextBold = document.createElement('b');
        let setHeaderNavText = document.createTextNode(topNavList.title);

        headerNavLists.appendChild(setHeaderLists);
        setHeaderLists.appendChild(setHeaderAnchor);
        setHeaderAnchor.appendChild(headerTextBold);
        headerTextBold.appendChild(setHeaderNavText);

        let thisUrl = window.location.href;
        let substring = topNavList.hName;
        if (thisUrl.indexOf(substring) != -1)
        {
            setHeaderLists.className = 'headerNavList aboutHover';
        }
    });
})();
//
// index.html only
(function(){
    let getindexMain = document.querySelector('.indexMain');
    if (getindexMain)
    {
        let IndexHeaderLi = document.querySelector('#headerNav > nav > ul > li');
        IndexHeaderLi.className = 'headerNavList aboutHover';
    }
})();

//
// TopBtn
(function(){
    const prevNextHome = document.querySelector('#prevNext');
    if(prevNextHome)
    {
        let topBtnNode = document.createElement("a");
        topBtnNode.setAttribute('data-scroll', '');
        topBtnNode.href = "body";
        topBtnNode.title = "Back to Top";
        topBtnNode.className = "prevNextTop";

        topBtnNode.setAttribute('onmouseover', 'topUp()');
        topBtnNode.setAttribute('onmouseleave', 'topDn()');

        let topBtnBold = document.createElement("b");
        let topBtnIcon = document.createElement("i");
        topBtnIcon.className = "fa" + " " + "fa-angle-up";
        let topTextNode = document.createTextNode("Top");

        prevNextHome.appendChild(topBtnNode);
        topBtnNode.appendChild(topBtnBold);
        topBtnBold.appendChild(topBtnIcon);
        topBtnBold.appendChild(topTextNode);
    }
})();

//
// Footer '#snsIcon'
(function(){
    let snsIconList = {
        Twitter: {
            href : 'twitter.com/OfficialSpemer',
            iconID : 'twIcon',
            iconClass : 'twitter'
        },
        GitHub: {
            href : 'github.com/spemer',
            iconID : 'ghIcon',
            iconClass : 'github'
        },
        FaceBook: {
            href : 'facebook.com/ghsspower',
            iconID : 'fbIcon',
            iconClass : 'facebook'
        },
        Instagram: {
            href : 'instagram.com/spemer/',
            iconID : 'inIcon',
            iconClass : 'instagram'
        },
        LinkedIn: {
            href : 'www.linkedin.com/in/hyouk-seo-0b6801122/',
            iconID : 'liIcon',
            iconClass : 'linkedin'
        },
        Dribbble: {
            href : 'dribbble.com/spemer',
            iconID : 'drIcon',
            iconClass : 'dribbble'
        },
        Medium: {
            href : 'medium.com/@spemer',
            iconID : 'medIcon',
            iconClass : 'medium'
        },
        Behance: {
            href : 'behance.net/spemer',
            iconID : 'beIcon',
            iconClass : 'behance'
        }
    };
    let snsIcon = document.querySelector('#snsIcon');
    for (let key in snsIconList)
    {
        let snsNode = document.createElement("a");
        snsNode.title = key + "(new tab)";
        snsNode.href = "https://" + snsIconList[key].href;
        snsNode.target = "_blank";

        let iconNode = document.createElement("i");
        iconNode.id = snsIconList[key].iconID;
        iconNode.className = "fa fa-" + snsIconList[key].iconClass;
        snsIcon.appendChild(snsNode);
        snsNode.appendChild(iconNode);
    }    
})();

//
// Code with Love by Hyouk Seo(Spemer)
(function(){
    let codeBy = document.querySelector('#codeBySpemer');
    let codeIconNode = document.createElement("i");
    codeIconNode.className = "fa fa-code";

    let topTextNode1 = document.createTextNode(" with ");
    let loveIconNode = document.createElement("i");
    loveIconNode.className = "fa fa-heart";
    let topTextNode2 = document.createTextNode(" by Hyouk Seo(Spemer)");

    codeBy.appendChild(codeIconNode);
    codeBy.appendChild(topTextNode1);
    codeBy.appendChild(loveIconNode);
    codeBy.appendChild(topTextNode2);    
})();

//
// #topBtnFixed
(function(){
    let getBody = document.querySelector('body');
    let fixedTopBtn = document.createElement('div');
    fixedTopBtn.id = "topBtnFixed";

    getBody.appendChild(fixedTopBtn);

    let fixedTopBtnLink = document.createElement('a');
    fixedTopBtnLink.setAttribute('data-scroll', 'aria-hidden');
    fixedTopBtnLink.href = 'body';
    fixedTopBtnLink.className = 'prevNextTop2';

    let fixedTopBtnIcon = document.createElement("i");
    fixedTopBtnIcon.className = 'fa fa-chevron-circle-up topBtn';
    fixedTopBtnIcon.title = 'Back to Top';

    fixedTopBtn.appendChild(fixedTopBtnLink);
    fixedTopBtnLink.appendChild(fixedTopBtnIcon);
    
    // topBtn hidden top
    window.onscroll = function(){
        scrollFunction(320)
    };
    function scrollFunction(h)
    {
        if (document.body.scrollTop > h || document.documentElement.scrollTop > h)
        {
            fixedTopBtn.style.opacity = 1;
            fixedTopBtnIcon.setAttribute('style','visibility:visible');
        }
        else
        {
            fixedTopBtn.style.opacity = 0;
            fixedTopBtnIcon.setAttribute('style','visibility:hidden');
        }
    }
})();

//
// set '.externalLink' Icon
(function(){
    let externalLinks = document.querySelectorAll('.externalLink');
    externalLinks.forEach(function(linkEach)
    {
        let setLinkIcon = document.createElement('i');
        setLinkIcon.className = "fa fa-external-link";
        linkEach.appendChild(setLinkIcon);
    });
})();

//
// '.hrline' -> medium style 3 dots
(function(){
    let gethrline = document.getElementsByClassName('hrline');
    for (let i = 0; i < gethrline.length; i++)
    {
        let setCenter = document.createElement('center');
        gethrline[i].appendChild(setCenter);
        for (let j = 0; j < 3; j++)
        {
            let setSpan = document.createElement('span');
            setCenter.appendChild(setSpan);
        }
    }
})();

//
// get <i> tag -> set 'aria-hidden' attr
(function(){
    let getIcons = document.querySelectorAll('.fa');
    getIcons.forEach(function(iconEach)
    {
        let getIconAttr = iconEach.getAttribute('aria-hidden');
        if (!getIconAttr)
        {
            iconEach.setAttribute('aria-hidden','true');
        }
    });
})();

//
// add className '.lazy' for all images
(function(){
    let getEveryImg = document.querySelectorAll('img');
    getEveryImg.forEach(function(images)
    {
        images.className += ' ' + 'lazy';
        let getImgSrc = images.getAttribute('src');
        images.src = 'https://spemer.com/img/spinner.gif';
        images.setAttribute('data-src', getImgSrc);
    });
})();