!function(){var e=document.querySelector("form"),n=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');function u(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(r){r.preventDefault();var c=Number(o.value),i=Number(n.value),a=Number(t.value);e.reset();for(var l=0;l<c;l++)u(l+1,i).then((function(e){var n=e.position,t=e.delay;return console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;return console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),i+=a}))}();
//# sourceMappingURL=03-promises.23e6e7fd.js.map
