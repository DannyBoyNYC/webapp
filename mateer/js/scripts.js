//mql = media query list
const breakOne = '360'; // 360px  22.5em
const breakTwo = '760'; // 760px  46.25em
const breakThree = '980'; // 980px  61.25em
const breakFour = '1140'; // 1140px  71.25em
const breakFive = '1300'; // 1300px  81.25

const mqlBreakOne = window.matchMedia(`(min-width: ${breakOne}px)`);
const mqlBreakTwo = window.matchMedia(`(min-width: ${breakTwo}px)`);
const mqlBreakThree = window.matchMedia(`(min-width: ${breakThree}px)`);
const mqlBreakFour = window.matchMedia(`(min-width: ${breakFour}px)`);
const mqlBreakFive = window.matchMedia(`(min-width: ${breakFive}px)`);

// content switcher for show
const switchlink = document.querySelector('.switch')
const switchh1 = document.querySelector('.switch-h1')
const switchh2 = document.querySelector('.switch-h2')
const switchlede = document.querySelector('.switch-lede')
const switchToc = document.querySelector('.switch-cont')

const htmlRoot = document.querySelector('html')


switchToc.style.display = 'none'

if(switchh2){

switchh2.style.display = 'none'
switchh1.style.display = 'none'
switchlede.style.display = 'none'
switchlink.addEventListener('click', switcheroo)
}

function switcheroo(){
	htmlRoot.classList.add('in-chapter') // add root class
	switchlink.parentNode.classList.toggle('active')
	
	switchh1.innerHTML = 'Focus'
	switchToc.style.display = 'block'
	switchh2.style.display = 'block'
	switchh1.style.display = 'block'
	switchlede.style.display = 'block'
	switchlede.classList.toggle('lede') 
	switchh1.classList.toggle('alt') 
	switchh2.classList.toggle('alt') 
}

// end switcher for show


const toc = document.querySelector('.toc');
const toctoc = document.querySelector('.toc__toc');
const menuShow = document.querySelector('.menu-bug');
const contentHeader = document.querySelector('.content__header');
// const iconList = document.querySelector('.icon-list');
// var iconListIcons = [].slice.call(iconList.querySelectorAll('a'));

// open close toc
menuShow.addEventListener('click', function () {
	const tocCoords = toc.getBoundingClientRect();
	const topOfToc = (tocCoords.height)
	toctoc.style.top = topOfToc + 'px';
	toctoc.classList.toggle('toc__open');
});

//window.scroll functions
//show menubar at top of page, make the icon list static

window.addEventListener('scroll', fixTop);
const tocCoords = toc.getBoundingClientRect();
const coords = { bottom: tocCoords.bottom + window.scrollY }
	// console.log('The bottom of TOC is ' + coords.bottom + 'px from the top')
	function fixTop(){
		if (window.scrollY > coords.bottom) {
			toc.classList.add('fix-top')
			setTimeout(function(){
				toc.classList.add('fix-top-open')
			}, 0)
			// iconList.classList.add('posfixed')
		} else if(window.scrollY < coords.bottom) {
			toc.classList.remove('fix-top')
			toc.classList.remove('fix-top-open')
			// iconList.classList.remove('posfixed')
		}
	}

//, parallax effect on image
window.addEventListener('scroll', staticize);
function staticize(){
	contentHeader.style.backgroundPosition = '50% ' + (pageYOffset * -2.0) + 'px';
}
//END window.scroll functions

// footnotes
const fnlink = document.querySelector('.footnote-link');
const fntext = document.querySelector('.footnote-item');

function show(){
	this.classList.toggle('fn-expanded');
	fntext.classList.toggle('fn-displayed');
	setTimeout(animate, 100);
}
function animate(){
	fntext.classList.toggle('fn-expanded');
}
// support MAIN-2 page
if(fnlink){
	fnlink.addEventListener('click', show);
}


// MARK OF THE UNICORN
// -- // -- // -- byline popovers
const popLinks = document.querySelectorAll('.byline a');
popLinks.forEach( popLink => popLink.addEventListener('click', popUpAction));

const popOver = document.createElement('div');
popOver.classList.add('popover');
document.body.append(popOver)

function popUpAction(e){
	const templateSelector = this.getAttribute('href');
	const linkCoords = this.getBoundingClientRect();
	const coords = {
		bottom: linkCoords.bottom + window.scrollY,
		left: linkCoords.left + window.scrollX
	}
	popOver.style.position = 'absolute'
	popOver.style.top = `${coords.bottom + 4}px`; 

	//mql = media query list
	let mql = window.matchMedia('(min-width: 760px)');

	if (mql.matches) {
		popOver.style.left = `${coords.left}px`;
	} else {
		popOver.style.left = `1rem`;
	}

	if (templateSelector === '#multiples'){
		popOver.innerHTML = popOverFragMultiples;
	} else if (templateSelector === '#single'){
		popOver.innerHTML = popOverFrag;
	} else if (templateSelector === '#icn-1'){
		popOver.innerHTML = popOverFragIcn01;
	} else if (templateSelector === '#icn-2'){
		popOver.innerHTML = popOverFragIcn02;
	} else if (templateSelector === '#icn-3'){
		popOver.innerHTML = popOverFragIcn03;
	}

	popOver.classList.toggle('show');
	const closePopover = popOver.querySelector('.close-popover');
	closePopover.addEventListener('click', function(){
		popOver.classList.remove('show');
	})
	e.preventDefault();
}

const popOverFrag = `
<a class="close-popover" href="#00">✖︎</a>
<div class="popover__content">
<div>Harry Mateer<span class="popover-credentials">BCI, US</span> <span class="popover-credentials">High Grade Credit</span></div>
<ul>
<li><span class="md" aria-hidden="true" data-icon="&#xF430;"></span> <a href="#0">+1 (212) 526-4000</a></li>
<li><span class="md" aria-hidden="true" data-icon="&#xF407;"></span> <a href="#0">Analyst's Page</a></li>
<li><span class="md" aria-hidden="true" data-icon="&#xF379;"></span> <a href="#0">harry.mateer@barclays.com</a></li>
</ul>
</div>
`;

const popOverFragMultiples = `
<a class="close-popover" href="#00">✖︎</a>
<div class="popover__content multiple">
<div>Multiple Analysts<span class="popover-credentials">BCI, US</span> <span class="popover-credentials">High Grade Credit</span></div>
<ul>
<li><span class="md" aria-hidden="true" data-icon="&#xF430;"></span> <a href="#0">+1 (212) 526-4000</a></li>
<li><span class="md" aria-hidden="true" data-icon="&#xF407;"></span> <a href="#0">Analyst's Page</a></li>
<li><span class="md" aria-hidden="true" data-icon="&#xF379;"></span> <a href="#0">shobit.gupta@barclays.com</a></li>
</ul>
</div>

<div class="popover__content multiple">
<div>Shobhit Gupta<span class="popover-credentials">BCI, US</span> <span class="popover-credentials">High Grade Credit</span></div>
<ul>
<li><span class="md" aria-hidden="true" data-icon="&#xF430;"></span> <a href="#0">+1 (212) 526-4000</a></li>
<li><span class="md" aria-hidden="true" data-icon="&#xF407;"></span> <a href="#0">Analyst's Page</a></li>
<li><span class="md" aria-hidden="true" data-icon="&#xF379;"></span> <a href="#0">shobit.gupta@barclays.com</a></li>
</ul>
</div>

<div class="popover__content multiple">
<div>Another Analyst, CFA<span class="popover-credentials">BCI, US</span> <span class="popover-credentials">High Grade Credit</span></div>
<ul>
<li><span class="md" aria-hidden="true" data-icon="&#xF430;"></span> <a href="#0">+1 (212) 526-4000</a></li>
<li><span class="md" aria-hidden="true" data-icon="&#xF407;"></span> <a href="#0">Analyst's Page</a></li>
<li><span class="md" aria-hidden="true" data-icon="&#xF379;"></span> <a href="#0">another.analyst@barclays.com</a></li>
</ul>
</div>
`;


const popOverFragIcn01 = `
<a class="close-popover" href="#0">✖︎</a>
<div class="popover__content">

<div>Subscribe</div>
<ul>
<li><a href="#0">Add to Read Later</a> <input type="checkbox"> </li>
<li><a href="#0">Clippings &amp; Annotations</a>
<ul>
<li><a href="#0">Annotation 1</a></li>
<li><a href="#0">Annotation 2</a></li>
</ul>
</li>

</ul>

<div>Document Tools</div>
<ul>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Add to Quicklist</a></li>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Add to Briefcase</a></li>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Email Me</a></li>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Share</a></li>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Subscribe Client</a></li>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Copy Link</a></li>
</ul>

</div>

</div>
`;

const popOverFragIcn02 = `
<a class="close-popover" href="#0">✖︎</a>
<div class="popover__content">

<div>Print PDF</div>
<ul style="display: block">
<li><a target="_blank" href="https://liveqa.barcap.com/RSR_S/nyfipubs/_quark-author-tests/webapp-demo-mateer/mateer.pdf"><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> This article (3 pages)</a></li>
<!-- <li><a><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> US Credit Alpha (43 pages)</a></li> -->
</ul>
</div>
</div>
`;

const popOverFragIcn03 = `
<a class="close-popover" href="#0">✖︎</a>
<div class="popover__content">

<div>Attachments in this article</div>
<ul style="display: block">
<li> <a><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> Sample PDF</a></li>
<li> <a><span class="md" aria-hidden="true" data-icon="&#xE006;"></span> Sample Power Point</a></li>
<li> <a><span class="md" aria-hidden="true" data-icon="&#xE003;"></span> Sample Word doc</a></li>
<li> <a><span class="md" aria-hidden="true" data-icon="&#xE002;"></span> Sample Excel spreadsheet</a></li>
</ul>
</div>
</div>
`;



// simulate clicking on a large table
const tablePopover = document.querySelector('.figure-header');
const tableToPop = document.querySelector('.figure-header + table');
const tablePopIcon = document.querySelector('.table-xl--btn');
const captionToPop = document.querySelector('.caption')

// support MAIN-2
if(tablePopover) {
	tablePopover.addEventListener('click', showTable);
}

function showTable(){
	tableToPop.classList.toggle('table-pop')
	captionToPop.classList.toggle('table-pop')
	if (tableToPop.classList.contains('table-pop')) {
		tablePopIcon.classList.add('hilite')
		tablePopIcon.innerHTML = '<img src="https://liveqa.barcap.com/RSR_S/nyfipubs/_quark-author-tests/webapp-demo-mateer/webapp-authors6/svg/arrows-close.svg" />'
	} else {
		tablePopIcon.classList.remove('hilite')
		tablePopIcon.innerHTML = '<img src="https://liveqa.barcap.com/RSR_S/nyfipubs/_quark-author-tests/webapp-demo-mateer/webapp-authors6/svg/arrows.svg" />'
	}
}


































