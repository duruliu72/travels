var $=require('jquery');
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeaher';


new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"60%");

stickyHeader=new StickyHeader();
