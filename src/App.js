
import React from 'react';
import './App.css'
import $ from 'jquery'
export default class app extends React.Component{
btn(){
  $("button#on").click(function(){
if($("#on").text()==="ON"){
  $("#section-main").addClass("main")
  $("#on").text("OFF")
  $("#img").addClass("img1")
  $("#img").removeClass("img2 img3")
}
else if($("#on").text()==="OFF"){
  $("#section-main").removeClass('main')
  $("#on").text("ON")
  $("#1,#2").removeClass("button");
  $("#img").removeClass("img1 img2 img3")
}
})

$("button#1").click(function(){
if($("button#on").text()==="OFF"){
$("#1").addClass("button")
$("#2").removeClass("button");
$("#img").addClass("img2")
$("#img").removeClass("img1 img3")
}
else if($("button#on").text()==="ON"){
  alert("Click ON Button")
}

})

$("button#2").click(function(){
if($("#on").text()==="OFF"){
$("#2").addClass("button");
$("#1").removeClass("button");
$("#img").addClass("img3")
$("#img").removeClass("img2 img1")
}
else if($("#on").text()==="ON"){
  alert("Click ON Button")
}

})
}
  componentDidMount(){
this.btn();


  }
render(){
  return(
React.createElement("div",{className:'main-section'},React.createElement("section", {
  id: "section-main"
}, React.createElement("div", {
  className: "d1"
}, React.createElement("figure", null, React.createElement("img", {
  src: require("./img/fan.png"),
  alt: "fan",
  id: "img"
}), React.createElement("a", {
  href: "https://youtu.be/vngkjaWk1lI",
  target: "_self"
}, React.createElement("img", {
  src: require("./img/youtube.jpg"),
  alt: "photo",
  className: "favcon"
}))))), React.createElement("section", {
  className: "d2"
}, React.createElement("div", {
  id: "d2"
})), React.createElement("section", {
  className: "d3"
}, React.createElement("div", null, React.createElement("button", {
  id: "on"
}, "ON"), React.createElement("button", {
  id: "1"
}, "1"), React.createElement("button", {
  id: "2"
}, "2")))))
}
}
