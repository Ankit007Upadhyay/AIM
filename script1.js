// var acc = document.getElementsByClassName("accordion");
// var i;
// for(i = 0; i < acc.length; i++){
//     acc[i].addEventListener("click", function(){
//         this.classList.toogle("active");
//         this.parentElement.classList.toogle("active");
//         var pannel = this.nextElementSibling;
//         if(pannel.style.display === "block"){
//             pannel.style.display = "none";
//         } else {
//             pannel.style.display = "block";
//         }
//     });
// }
const faqs = document.querySelectorAll(".faq"); 
for (const item of faqs) { 
const curr_faq = item.childNodes; 
const question = curr_faq[1]; 
const answer = curr_faq[3]; 
const icon = question.querySelector(".icon-main"); 
icon.addEventListener("click", function () { 
	answer.classList.toggle("non-active"); 
	const i = icon.querySelector("i"); 
	i.classList.toggle("fa-xmark"); 
	i.classList.toggle("fa-plus"); 
	console.log(i); 
}); 
} 
