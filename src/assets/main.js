// Recommendations
import { recommendations } from './recommendations.js';

const randomRecommendations = [];
let usedIndices = [];

while (randomRecommendations.length < 3 && randomRecommendations.length < recommendations.length) {
  const randomIndex = Math.floor(Math.random() * recommendations.length);
  if (!usedIndices.includes(randomIndex)) {
    usedIndices.push(randomIndex);
    randomRecommendations.push(recommendations[randomIndex]);
  }
}

const container = document.getElementById("recommendations-container");

randomRecommendations.forEach(recommendation => {
  const div = document.createElement("div");
  div.setAttribute("class", "shadow text-white px-32 py-8 recommendation-card text-xl px-6 max-w-3xl mx-auto rounded-xl drop-shadow-xl flex flex-col space-x-6 mb-6 transition hover:scale-105");
  div.innerHTML = "<i>" + recommendation.recommentation + "</i><b class='text-right pt-4'>- " + recommendation.from + "</b>";
  container.appendChild(div);
});


// Copies sold animation
function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
            var timer2 = setInterval(function() { 
                let plus = document.getElementById("plus");
                plus.innerHTML = "+";
                plus.setAttribute("class", "animate-in fade-in duration-700 slide-out-to-top slide-out-to-left")
                let copies = document.getElementById("copies");
                clearInterval(timer2);
            }, stepTime * 8);
        }
    }, stepTime);
}

animateValue("value", 1, 35, 1500);