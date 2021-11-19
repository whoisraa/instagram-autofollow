let time=[5000,10000,20000,30000,40000,50000,60000];
let tagFollow = document.getElementsByTagName("button");
let searchFollow = "Follow";
let foundFollow;

const clickFollow = () => {
  for (let i = 0; i < tagFollow.length; i++) {
    if (tagFollow[i].textContent === searchFollow) {
      foundFollow = tagFollow[i];
      foundFollow.click();
      break;
    }
  }
};

const action = () => {
  let i = 1;
  setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
    clickFollow();
    i++;
    if (i < 500) {
      action();
    }
  }, time.sort((element1, element2) => Math.random() - Math.random())[1]);
};

action();
