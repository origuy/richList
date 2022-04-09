const smCardsGrabber = document.querySelectorAll(".root-sm-card");
const rootGrabber = document.querySelector("#root");
const lgCardGrabber = document.getElementsByClassName("root-lg-card");
let imgGrabber = document.querySelectorAll("img[imgGrabber]");
let nameGrabber = document.querySelectorAll("div[nameGrabber]");
let moneyGrabber = document.querySelectorAll("div[moneyGrabber]");
let companyGrabber = document.querySelectorAll("div[companyGrabber]");
let grabberArray = [imgGrabber, nameGrabber, moneyGrabber, companyGrabber];
let newArray = json_ar.map((x) => {
	return {
		name: x.name,
		money: x.worth,
		company: x.source,
		img: x.image,
	};
});
let filterArray = newArray;

rootGrabber.addEventListener("click", (evt) => {
	let elementPerssed = evt;
	elementPerssed.path.forEach((element) => {
		switch (element.className) {
			case "root-sm-card one":
				console.log("one");
				updateGrabbers(element);
				filterArray = filterArray.filter((obj) => {
					return obj.name !== "Bill Gates";
				});
				break;
			case "root-sm-card two":
				console.log("two");
				updateGrabbers(element);
				filterArray = filterArray.filter((obj) => {
					return obj.name !== "Warren Buffett";
				});
				break;
			case "root-sm-card three":
				console.log("three");
				updateGrabbers(element);
				filterArray = filterArray.filter((obj) => {
					return obj.name !== "Mark Zuckerberg";
				});
				break;
			case "root-sm-card four":
				console.log("four");
				updateGrabbers(element);
				filterArray = filterArray.filter((obj) => {
					return obj.name !== "Larry Ellison";
				});
				break;
			case "five":
				console.log("five");
				updateGrabbers(element);
				filterArray = filterArray.filter((obj) => {
					return obj.name !== "Michael Bloomberg";
				});
				break;

			default:
				break;
		}
	});
	console.log(filterArray);
    setTimeout(() => {
        render(filterArray);
    }, 600);
});
function updateGrabbers(element) {
    element.style.opacity = 0;
    setTimeout(() => {
        element.parentNode.removeChild(element);
        imgGrabber = document.querySelectorAll("img[imgGrabber]");
        console.log(imgGrabber)
        nameGrabber = document.querySelectorAll("div[nameGrabber]");
        moneyGrabber = document.querySelectorAll("div[moneyGrabber]");
        companyGrabber = document.querySelectorAll("div[companyGrabber]");
        grabberArray = [imgGrabber, nameGrabber, moneyGrabber, companyGrabber];
    }, 500);

}
let render = (arr) => {
	let count = 0;
	grabberArray.forEach((grabber) => {
		grabber.forEach((element) => {
			switch (element.className) {
				case "name":
					if (count < arr.length) {
						element.innerHTML = `${arr[count].name}`;
					}

					count++;
					break;
				case "money":
					if (count < arr.length) {
						element.innerHTML = `${arr[count].money}`;
					}
					count++;
					break;
				case "company":
					if (count < arr.length) {
						element.innerHTML = `${arr[count].company}`;
					}
					count++;
					break;
				case "root-sm-card-img":
					if (count < arr.length) {
						element.src = `${arr[count].img}`;
					}
					count++;
					break;
				case "lg-card-img":
					if (count < arr.length) {
						element.src = `${arr[count].img}`;
					}
					count++;
					break;

				default:
					count = 0;

					break;
			}
		});
		count = 0;
	});
};

render(newArray);
