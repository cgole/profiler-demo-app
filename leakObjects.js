/**
* Use this script to burn cpu and try out CPU profiling. 
*   slc run --cluster <n> burnCPU.js
*
* For On-premises Heap profiling,
*   see http://docs.strongloop.com/display/SLA/Heap+profiling+and+object+tracking
*
* For hosted Heap profiling, 
*   see http://docs.strongloop.com/display/SLA/Heap+memory+profiling
*
*/

function Paris() {
}

function addObjects() {

  var paris= []
  setInterval(function() {
    for (var i=0; i < 100; i++) {  
      paris.push(new Paris);
    }
    if (paris.length > 1000) {
      clearInterval(10);
    }
  }, 1000);
}

addObjects();
