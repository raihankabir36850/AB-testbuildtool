"use strict";(self.webpackChunkabtest_webpack_boilerplate=self.webpackChunkabtest_webpack_boilerplate||[]).push([[179],{355:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=Date.now||function(){return(new Date).getTime()},n=function t(n,o){var r=n;return Object.keys(o).forEach((function(n){var i=o[n],a=r[n],l=a&&"object"===e(a)&&!(a instanceof Array);r[n]=l?t(a,i):i})),r},o=function(o,r,i){var a={wait:50,multiplier:1.1,timeout:0};i&&(a=n(a,i));for(var l=a,c=l.multiplier,d=l.wait,s=a.timeout?new Date(t()+a.timeout):null,u=[],b=function n(i,a,l){if(s&&s&&t()>s)return!1;var d=function(t){if(!t)return!1;var n={function:function(){return t()},string:function(){return document.querySelector(t)}}[e(t)];return!n||n()}(i);d?(u.push(d),u.length===o.length&&r(u)):setTimeout((function(){n(i,a*c)}),l?0:a)},f=0;f<o.length;f+=1){if("string"!=typeof o[f]&&"function"!=typeof o[f])throw"Every item in the poller array should be a function or a string";b(o[f],d,!0)}};var r=function(){var e,t,n;if(-1!==location.pathname.indexOf("/product")){console.log("hello- all");var r=function(){var e=window.meta.product.variants,t=e.reduce((function(e,t){return e[t.id]=t.sku,e}),{});window.sno342Variants=t;var n=e[0].id,o=location.search;return t[o.substring(o.indexOf("?variant=")+9,o.indexOf("&"))||n]}();null===(e=document.getElementById("ReviewsWidget"))||void 0===e||e.remove(),document.getElementById("judgeme_product_reviews").insertAdjacentHTML("beforebegin",'<div id="ReviewsWidget" class="sno334__container Container"></div>'),t=r,n=window.setInterval((function(){o([function(){return null!=window.ReviewsWidget}],(function(){new ReviewsWidget("#ReviewsWidget",{store:"snocks",widget:"polaris",options:{types:"product_review",lang:"en",layout:"",per_page:10,store_review:{hide_if_no_results:!0},third_party_review:{hide_if_no_results:!0},product_review:{sku:t,enable_rich_snippets:!0},questions:{hide_if_no_results:!1,enable_ask_question:!0,show_dates:!0,grouping:"{{ product.variants | map: 'sku' | join: ';' }};{{ product.variants | map: 'id' | join: ';' }}"},header:{enable_summary:!0,enable_ratings:!0,enable_attributes:!1,enable_image_gallery:!1,enable_percent_recommended:!1,enable_write_review:!1,enable_ask_question:!1,enable_sub_header:!0,rating_decimal_places:2},filtering:{enable:!0,enable_text_search:!1,enable_sorting:!0,enable_product_filter:!0,enable_media_filter:!1,enable_overall_rating_filter:!0,enable_language_filter:!1,enable_language_filter_language_change:!1,enable_ratings_filters:!0,enable_attributes_filters:!0},reviews:{enable_avatar:!0,enable_reviewer_name:!0,enable_reviewer_address:!0,reviewer_address_format:"city, country",enable_verified_badge:!0,review_content_filter:"undefined",enable_reviewer_recommends:!1,enable_attributes:!0,enable_product_name:!0,enable_review_title:!0,enable_replies:void 0,enable_images:!1,enable_ratings:!0,enable_share:!1,enable_helpful_vote:!1,enable_helpful_display:!0,enable_report:!1,enable_date:!1}},translations:{"Verified Customer":"Verifizierter Käufer","Fallen klein aus":"klein"},styles:{"--base-font-size":"16px","--common-button-font-family":"inherit","--common-button-font-size":"16px","--common-button-font-weight":"500","--common-button-letter-spacing":"0","--common-button-text-transform":"none","--common-button-vertical-padding":"10px","--common-button-horizontal-padding":"20px","--common-button-border-width":"2px","--common-button-border-radius":"0px","--primary-button-bg-color":"#0E1311","--primary-button-border-color":"#0E1311","--primary-button-text-color":"#ffffff","--secondary-button-bg-color":"transparent","--secondary-button-border-color":"#0E1311","--secondary-button-text-color":"#0E1311","--common-star-color":"#F9CA4F","--common-star-disabled-color":"#FFFFFF","--medium-star-size":"22px","--small-star-size":"19px","--heading-text-color":"#0E1311","--heading-text-font-weight":"700","--heading-text-font-family":"inherit","--heading-text-line-height":"1.4","--heading-text-letter-spacing":"0","--heading-text-transform":"none","--body-text-color":"#575757","--body-text-font-weight":"500","--body-text-font-family":"inherit","--body-text-line-height":"1.4","--body-text-letter-spacing":"0","--body-text-transform":"none","--inputfield-text-font-family":"inherit","--input-text-font-size":"14px","--inputfield-text-font-weight":"400","--inputfield-text-color":"#0E1311","--inputfield-border-color":"rgba(0,0,0,0.2)","--inputfield-background-color":"transparent","--inputfield-border-width":"1px","--inputfield-border-radius":"0px","--common-border-color":"rgba(0,0,0,0.15)","--common-border-width":"1px","--common-sidebar-width":"190px","--slider-indicator-bg-color":"rgba(0,0,0,0.1)","--slider-indicator-button-color":"#0E1311","--slider-indicator-width":"190px","--badge-icon-color":"#0E1311","--badge-icon-font-size":"0px","--badge-text-color":"#0E1311","--badge-text-font-size":"inherit","--badge-text-letter-spacing":"inherit","--badge-text-transform":"capitalize","--author-font-size":"inherit","--author-text-transform":"none","--avatar-thumbnail-size":"60px","--avatar-thumbnail-border-radius":"100px","--avatar-thumbnail-text-color":"#0E1311","--avatar-thumbnail-bg-color":"rgba(0,0,0,0.1)","--photo-video-thumbnail-size":"80px","--photo-video-thumbnail-border-radius":"0px","--mediaslider-scroll-button-icon-color":"#0E1311","--mediaslider-scroll-button-bg-color":"rgba(255, 255, 255, 0.85)","--mediaslider-overlay-text-color":"#ffffff","--mediaslider-overlay-bg-color":"rgba(0, 0, 0, 0.8))","--mediaslider-item-size":"110px","--pagination-tab-text-color":"#0E1311","--pagination-tab-text-transform":"none","--pagination-tab-text-letter-spacing":"0","--pagination-tab-text-font-size":"16px","--pagination-tab-text-font-weight":"600","--pagination-tab-active-text-color":"#0E1311","--pagination-tab-active-text-font-weight":"600","--pagination-tab-active-border-color":"#0E1311","--pagination-tab-border-width":"3px"}}),window.clearInterval(n)}))}),100)}};var i=/MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent),a=-1!==location.pathname.indexOf("/product");!i&&a&&o(["body","#judgeme_product_reviews"],(function(){o(["#judgeme_product_reviews",".Product__Info "],(function(){var e,t,n=document.querySelector(".Product__Info");e="https://widget.reviews.io/polaris/build.js",(t=document.createElement("script")).type="text/javascript",t.src="".concat(e),!document.querySelector('[src="'.concat(e,"]"))&&document.querySelector("head").append(t),setTimeout((function(){r()}),2e3);var o=location.href;new MutationObserver((function(e){e.forEach((function(e){o!=location.href&&(o=location.href,setTimeout((function(){r()}),1e3))}))})).observe(n,{childList:!0,subtree:!0})}))}))},213:()=>{}},e=>{var t=t=>e(e.s=t);t(213),t(355)}]);