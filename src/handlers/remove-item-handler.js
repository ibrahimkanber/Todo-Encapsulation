'use strict';

import { logger } from '../../lib/logger.js';

document.getElementById("delete-list").addEventListener("click",removeItemHandler)
export const removeItemHandler = (event) => {
  
  event.preventDefault();
 
  console.log("hello")
  
  logger.push({
    action: 'delete item',
    event,
    newList,
    renderedNewItem
  });

};