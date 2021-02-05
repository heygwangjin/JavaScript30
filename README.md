![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30

Starter Files + Completed solutions for the JavaScript 30 Day Challenge.

Grab the course at [https://JavaScript30.com](https://JavaScript30.com)

# Planner 

1. Write index-START.html to index.html.
2. Googling the parts you do not know.
3. Watch the lecture.
4. Happy coding.
5. Post code on your blog.
6. Write single comment of TIL.

# Progress

- [x] <a href="https://heygwangjin.github.io/challenge/2021/01/31/Day01/">Day01</a> - JavaScript Drum Kit 
- [x] <a href="https://heygwangjin.github.io/challenge/2021/02/01/Day02/">Day02</a> - JS and CSS Clock 
- [x] <a href="https://heygwangjin.github.io/challenge/2021/02/05/Day03/">Day03</a> - CSS Variables 
- [ ] <a href="">Day04</a> - Array Cardio Day 1 
- [ ] <a href="">Day05</a> - Flex Panel Gallery 
- [ ] <a href="">Day06</a> - Type Ahead 
- [ ] <a href="">Day07</a> - Array Cardio Day 2 
- [ ] <a href="">Day08</a> - Fun with HTML5 Canvas 
- [ ] <a href="">Day09</a> - Dev Tools Domination 
- [ ] <a href="">Day10</a> - Hold Shift and Check Checkboxes 
- [ ] <a href="">Day11</a> - Custom Video Player
- [ ] <a href="">Day12</a> - Key Sequence Detection 
- [ ] <a href="">Day13</a> - Slide in on Scroll 
- [ ] <a href="">Day14</a> - JavaScript References VS Copying 
- [ ] <a href="">Day15</a> - LocalStorage 
- [ ] <a href="">Day16</a> - Mouse Move Shadow 
- [ ] <a href="">Day17</a> - Sort Without Articles 
- [ ] <a href="">Day18</a> - Adding Up Times with Reduce 
- [ ] <a href="">Day19</a> - Webcam Fun 
- [ ] <a href="">Day20</a> - Speech Detection 
- [ ] <a href="">Day21</a> - Geolocation
- [ ] <a href="">Day22</a> - Follow Along Link Highlighter 
- [ ] <a href="">Day23</a> - Speech Synthesis 
- [ ] <a href="">Day24</a> - Sticky Nav 
- [ ] <a href="">Day25</a> - Event Capture, Propagation, Bubbling and Once 
- [ ] <a href="">Day26</a> - Stripe Follow Along Nav 
- [ ] <a href="">Day27</a> - Click and Drag 
- [ ] <a href="">Day28</a> - Video Speed Controller 
- [ ] <a href="">Day29</a> - Countdown Timer 
- [ ] <a href="">Day30</a> - Whack A Mole 

# Today I Learned (Single Comment)

- <a href="https://velog.io/@takeknowledge/script-태그는-어디에-위치해야-할까요">script 태그는 body태그의 최하단에 위치하는것</a>이 좋다. 그 이유는 브라우저가 html을 parsing 하는 도중에, script 태그를 만나면, html 태그 parsing을 멈추고, script loading과 execution을 한다. 만약, body태그의 최하단에 위치시키지 못하는 경우, async와 defer속성을 이용하면 로딩 순서를 제어할 수 있다. async는 js의 loading이 마칠 때까지 html을 parsing하다가, js 실행이 되면 html parsing이 멈추고 js 실행이 완료되면 다시 html parsing을 한다. defer는 html의 parsing이 다 끝나고 나서 js가 실행되어서, 자바스크립트가 생성되지 않은 DOM트리를 조작할 일이 없다. 
