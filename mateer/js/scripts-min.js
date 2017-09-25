"use strict";function switcheroo(){htmlRoot.classList.add("in-chapter"),switchlink.parentNode.classList.toggle("active"),switchh1.innerHTML="Focus",switchToc.style.display="block",switchh2.style.display="block",switchh1.style.display="block",switchlede.style.display="block",switchlede.classList.toggle("lede"),switchh1.classList.toggle("alt"),switchh2.classList.toggle("alt")}function fixTop(){window.scrollY>coords.bottom?(toc.classList.add("fix-top"),setTimeout(function(){toc.classList.add("fix-top-open")},0)):window.scrollY<coords.bottom&&(toc.classList.remove("fix-top"),toc.classList.remove("fix-top-open"))}function staticize(){contentHeader.style.backgroundPosition="50% "+-2*pageYOffset+"px"}function show(){this.classList.toggle("fn-expanded"),fntext.classList.toggle("fn-displayed"),setTimeout(animate,100)}function animate(){fntext.classList.toggle("fn-expanded")}function popUpAction(e){var a=this.getAttribute("href"),n=this.getBoundingClientRect(),t={bottom:n.bottom+window.scrollY,left:n.left+window.scrollX};popOver.style.position="absolute",popOver.style.top=t.bottom+4+"px",window.matchMedia("(min-width: 760px)").matches?popOver.style.left=t.left+"px":popOver.style.left="1rem","#multiples"===a?popOver.innerHTML=popOverFragMultiples:"#single"===a?popOver.innerHTML=popOverFrag:"#icn-1"===a?popOver.innerHTML=popOverFragIcn01:"#icn-2"===a?popOver.innerHTML=popOverFragIcn02:"#icn-3"===a&&(popOver.innerHTML=popOverFragIcn03),popOver.classList.toggle("show"),popOver.querySelector(".close-popover").addEventListener("click",function(){popOver.classList.remove("show")}),e.preventDefault()}function showTable(){tableToPop.classList.toggle("table-pop"),captionToPop.classList.toggle("table-pop"),tableToPop.classList.contains("table-pop")?(tablePopIcon.classList.add("hilite"),tablePopIcon.innerHTML='<img src="../../svg/arrows-close.svg" />'):(tablePopIcon.classList.remove("hilite"),tablePopIcon.innerHTML='<img src="../../svg/arrows.svg" />')}var breakOne="360",breakTwo="760",breakThree="980",breakFour="1140",breakFive="1300",mqlBreakOne=window.matchMedia("(min-width: "+breakOne+"px)"),mqlBreakTwo=window.matchMedia("(min-width: "+breakTwo+"px)"),mqlBreakThree=window.matchMedia("(min-width: "+breakThree+"px)"),mqlBreakFour=window.matchMedia("(min-width: "+breakFour+"px)"),mqlBreakFive=window.matchMedia("(min-width: "+breakFive+"px)"),switchlink=document.querySelector(".switch"),switchh1=document.querySelector(".switch-h1"),switchh2=document.querySelector(".switch-h2"),switchlede=document.querySelector(".switch-lede"),switchToc=document.querySelector(".switch-cont"),htmlRoot=document.querySelector("html");switchToc.style.display="none",switchh2&&(switchh2.style.display="none",switchh1.style.display="none",switchlede.style.display="none",switchlink.addEventListener("click",switcheroo));var toc=document.querySelector(".toc"),toctoc=document.querySelector(".toc__toc"),menuShow=document.querySelector(".menu-bug"),contentHeader=document.querySelector(".content__header");menuShow.addEventListener("click",function(){var e=toc.getBoundingClientRect(),a=e.height;toctoc.style.top=a+"px",toctoc.classList.toggle("toc__open")}),window.addEventListener("scroll",fixTop);var tocCoords=toc.getBoundingClientRect(),coords={bottom:tocCoords.bottom+window.scrollY};window.addEventListener("scroll",staticize);var fnlink=document.querySelector(".footnote-link"),fntext=document.querySelector(".footnote-item");fnlink&&fnlink.addEventListener("click",show);var popLinks=document.querySelectorAll(".byline a");popLinks.forEach(function(e){return e.addEventListener("click",popUpAction)});var popOver=document.createElement("div");popOver.classList.add("popover"),document.body.append(popOver);var popOverFrag='\n<a class="close-popover" href="#00">✖︎</a>\n<div class="popover__content">\n<div>Harry Mateer<span class="popover-credentials">BCI, US</span> <span class="popover-credentials">High Grade Credit</span></div>\n<ul>\n<li><span class="md" aria-hidden="true" data-icon="&#xF430;"></span> <a href="#0">+1 (212) 526-4000</a></li>\n<li><span class="md" aria-hidden="true" data-icon="&#xF407;"></span> <a href="#0">Analyst\'s Page</a></li>\n<li><span class="md" aria-hidden="true" data-icon="&#xF379;"></span> <a href="#0">harry.mateer@barclays.com</a></li>\n</ul>\n</div>\n',popOverFragMultiples='\n<a class="close-popover" href="#00">✖︎</a>\n<div class="popover__content multiple">\n<div>Multiple Analysts<span class="popover-credentials">BCI, US</span> <span class="popover-credentials">High Grade Credit</span></div>\n<ul>\n<li><span class="md" aria-hidden="true" data-icon="&#xF430;"></span> <a href="#0">+1 (212) 526-4000</a></li>\n<li><span class="md" aria-hidden="true" data-icon="&#xF407;"></span> <a href="#0">Analyst\'s Page</a></li>\n<li><span class="md" aria-hidden="true" data-icon="&#xF379;"></span> <a href="#0">shobit.gupta@barclays.com</a></li>\n</ul>\n</div>\n\n<div class="popover__content multiple">\n<div>Shobhit Gupta<span class="popover-credentials">BCI, US</span> <span class="popover-credentials">High Grade Credit</span></div>\n<ul>\n<li><span class="md" aria-hidden="true" data-icon="&#xF430;"></span> <a href="#0">+1 (212) 526-4000</a></li>\n<li><span class="md" aria-hidden="true" data-icon="&#xF407;"></span> <a href="#0">Analyst\'s Page</a></li>\n<li><span class="md" aria-hidden="true" data-icon="&#xF379;"></span> <a href="#0">shobit.gupta@barclays.com</a></li>\n</ul>\n</div>\n\n<div class="popover__content multiple">\n<div>Another Analyst, CFA<span class="popover-credentials">BCI, US</span> <span class="popover-credentials">High Grade Credit</span></div>\n<ul>\n<li><span class="md" aria-hidden="true" data-icon="&#xF430;"></span> <a href="#0">+1 (212) 526-4000</a></li>\n<li><span class="md" aria-hidden="true" data-icon="&#xF407;"></span> <a href="#0">Analyst\'s Page</a></li>\n<li><span class="md" aria-hidden="true" data-icon="&#xF379;"></span> <a href="#0">another.analyst@barclays.com</a></li>\n</ul>\n</div>\n',popOverFragIcn01='\n<a class="close-popover" href="#0">✖︎</a>\n<div class="popover__content">\n\n<div>Subscribe</div>\n<ul>\n<li><a href="#0">Add to Read Later</a> <input type="checkbox"> </li>\n<li><a href="#0">Clippings &amp; Annotations</a>\n<ul>\n<li><a href="#0">Annotation 1</a></li>\n<li><a href="#0">Annotation 2</a></li>\n</ul>\n</li>\n\n</ul>\n\n<div>Document Tools</div>\n<ul>\n<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Add to Quicklist</a></li>\n<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Add to Briefcase</a></li>\n<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Email Me</a></li>\n<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Share</a></li>\n<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Subscribe Client</a></li>\n<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Copy Link</a></li>\n</ul>\n\n</div>\n\n</div>\n',popOverFragIcn02='\n<a class="close-popover" href="#0">✖︎</a>\n<div class="popover__content">\n\n<div>Print PDF</div>\n<ul style="display: block">\n<li><a><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> This article (3 pages)</a></li>\n<!-- <li><a><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> US Credit Alpha (43 pages)</a></li> -->\n</ul>\n</div>\n</div>\n',popOverFragIcn03='\n<a class="close-popover" href="#0">✖︎</a>\n<div class="popover__content">\n\n<div>Attachments in this article</div>\n<ul style="display: block">\n<li> <a><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> Sample PDF</a></li>\n<li> <a><span class="md" aria-hidden="true" data-icon="&#xE006;"></span> Sample Power Point</a></li>\n<li> <a><span class="md" aria-hidden="true" data-icon="&#xE003;"></span> Sample Word doc</a></li>\n<li> <a><span class="md" aria-hidden="true" data-icon="&#xE002;"></span> Sample Excel spreadsheet</a></li>\n</ul>\n</div>\n</div>\n',tablePopover=document.querySelector(".figure-header"),tableToPop=document.querySelector(".figure-header + table"),tablePopIcon=document.querySelector(".table-xl--btn"),captionToPop=document.querySelector(".caption");tablePopover&&tablePopover.addEventListener("click",showTable);