import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);

if (!ieChecks) {
  pollerLite(['body', '#cart-table > tbody > tr > td.item-details > div.product-list-item > div.item-name-container'], activate);
}
