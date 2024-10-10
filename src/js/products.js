import $ from "jquery";

export default function Init() {
  var _containerHeight = 4000;
  var _width, _height, _scrollHeight;
  var _movingElements = [];
  var _scrollPercent = 0;
  var pre;
  var _jsPrefix;
  var _cssPrefix;

  var prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-"];

  var transitions = [
    {
      selector: ".first-scroll-content,.first-scroll-specs",
      before: [["opacity", 1.0]],
      on: [
        [
          "opacity",
          {
            start: 1.0,
            end: 0.0,
          },
        ],
      ],
      after: [["opacity", 0.0]],
      percentStart: 0.0,
      percentEnd: 0.015,
      percentBefore: -1,
      percentAfter: 1.1,
    },
    {
      selector: ".second-scroll",
      before: [["opacity", 0.0]],
      on: [
        [
          "opacity",
          {
            start: 0.0,
            end: 1.0,
          },
        ],
      ],
      after: [["opacity", 1.0]],
      percentStart: 0.11,
      percentEnd: 0.135,
      percentBefore: -1,
      percentAfter: 0.255,
    },
    {
      selector: ".second-scroll",
      before: [["opacity", 1.0]],
      on: [
        [
          "opacity",
          {
            start: 1.0,
            end: 0.0,
          },
        ],
      ],
      after: [["opacity", 0.0]],
      percentStart: 0.255,
      percentEnd: 0.27,
      percentBefore: 0.135,
      percentAfter: 1.1,
    },
    {
      selector: ".third-scroll",
      before: [["opacity", 0.0]],
      on: [
        [
          "opacity",
          {
            start: 0.0,
            end: 1.0,
          },
        ],
      ],
      after: [["opacity", 1.0]],
      percentStart: 0.36,
      percentEnd: 0.375,
      percentBefore: -1,
      percentAfter: 0.495,
    },
    {
      selector: ".third-scroll",
      before: [["opacity", 1.0]],
      on: [
        [
          "opacity",
          {
            start: 1.0,
            end: 0.0,
          },
        ],
      ],
      after: [["opacity", 0.0]],
      percentStart: 0.495,
      percentEnd: 0.51,
      percentBefore: 0.375,
      percentAfter: 1.1,
    },
    {
      selector: ".fourth-scroll",
      before: [["opacity", 0.0]],
      on: [
        [
          "opacity",
          {
            start: 0.0,
            end: 1.0,
          },
        ],
      ],
      after: [["opacity", 1.0]],
      percentStart: 0.6,
      percentEnd: 0.615,
      percentBefore: -1,
      percentAfter: 0.735,
    },
    {
      selector: ".fourth-scroll",
      before: [["opacity", 1.0]],
      on: [
        [
          "opacity",
          {
            start: 1.0,
            end: 0.0,
          },
        ],
      ],
      after: [["opacity", 0.0]],
      percentStart: 0.735,
      percentEnd: 0.75,
      percentBefore: 0.615,
      percentAfter: 1.1,
    },
    {
      selector: ".fifth-scroll",
      before: [["opacity", 0.0]],
      on: [
        [
          "opacity",
          {
            start: 0.0,
            end: 1.0,
          },
        ],
      ],
      after: [["opacity", 1.0]],
      percentStart: 0.855,
      percentEnd: 0.975,
      percentBefore: -1,
      percentAfter: 1.1,
    },
    {
      selector: ".rocket-horizontal",
      before: [["transform", []]],
      after: [["transform", [["scale", 1.75, 1.65]]]],
      on: [
        [
          "transform",
          [
            [
              "scale",
              {
                start: 1,
                end: 1.75,
              },
              {
                start: 1,
                end: 1.65,
              },
            ],
          ],
        ],
      ],
      percentStart: 0.015,
      percentEnd: 0.135,
      percentBefore: -1,
      percentAfter: 0.735,
    },
    {
      selector: ".rocket-horizontal",
      percentStart: 0.015,
      percentEnd: 0.135,
      percentBefore: -1,
      percentAfter: 0.255,

      before: [
        ["left", 12.15],
        ["top", 35],
      ],
      after: [
        ["left", 30],
        ["top", 30],
      ],
      on: [
        ["left", { start: 12.15, end: 30 }],
        ["top", { start: 35, end: 30 }],
      ],
    },
    {
      selector: ".rocket-horizontal",
      percentStart: 0.255,
      percentEnd: 0.375,
      percentBefore: 0.135,
      percentAfter: 0.495,

      before: [
        ["left", 30],
        ["top", 30],
      ],
      after: [
        ["left", -2],
        ["top", 30],
      ],
      on: [
        ["left", { start: 30, end: -2 }],
        ["top", { start: 30, end: 30 }],
      ],
    },
    {
      selector: ".rocket-horizontal",
      percentStart: 0.495,
      percentEnd: 0.615,
      percentBefore: 0.375,
      percentAfter: 0.735,

      before: [
        ["left", -2],
        ["top", 30],
      ],
      after: [
        ["left", -44.5],
        ["top", 30],
      ],
      on: [
        ["left", { start: -2, end: -44.5 }],
        ["top", { start: 30, end: 30 }],
      ],
    },
    {
      selector: ".rocket-horizontal",
      before: [["transform", [["scale", 1.75, 1.65]]]],
      on: [
        [
          "transform",
          [
            [
              "scale",
              {
                start: 1.75,
                end: 0.33,
              },
              {
                start: 1.65,
                end: 0.31,
              },
            ],
          ],
        ],
      ],
      after: [["transform", [["scale", 0.33, 0.31]]]],
      percentStart: 0.735,
      percentBefore: 0.135,
      percentAfter: 1.1,
      percentEnd: 0.805,
    },
    {
      selector: ".rocket-horizontal",
      percentStart: 0.735,
      percentBefore: 0.615,
      percentAfter: 0.805,
      percentEnd: 0.805,

      before: [
        ["left", -44.5],
        ["top", 30],
      ],
      after: [
        ["left", 66],
        ["top", 53],
      ],
      on: [
        ["left", { start: -44.5, end: 66 }],
        ["top", { start: 30, end: 53 }],
      ],
    },
    {
      selector: ".rocket-horizontal",
      percentStart: 0.805,
      percentBefore: 0.805,
      percentAfter: 1.1,
      percentEnd: 0.855,

      before: [
        ["left", 66],
        ["top", 53],
      ],
      after: [
        ["left", 66],
        ["top", 70.4],
      ],
      on: [
        ["left", { start: 66, end: 66 }],
        ["top", { start: 53, end: 70.4 }],
      ],
    },
    {
      selector: ".rocket-horizontal",
      percentStart: 0.855,
      percentBefore: -1,
      percentAfter: 1.1,
      percentEnd: 0.855,

      before: [["opacity", 1]],
      after: [["opacity", 0]],
      on: [
        [
          "opacity",
          {
            start: 1,
            end: 0,
          },
        ],
      ],
    },
    {
      selector: ".rocket-horizontal-2",
      percentStart: 0.855,
      percentBefore: -1,
      percentAfter: 1.1,
      percentEnd: 0.855,

      before: [["opacity", 0]],
      after: [["opacity", 1]],
      on: [
        [
          "opacity",
          {
            start: 0,
            end: 1,
          },
        ],
      ],
    },
    {
      selector: ".rocket-horizontal-2",
      before: [["transform", []]],
      on: [
        [
          "transform",
          [
            [
              "rotate",
              {
                start: 0,
                end: 90,
              },
            ],
          ],
        ],
      ],
      after: [["transform", [["rotate", 90]]]],
      percentStart: 0.855,
      percentBefore: 0.805,
      percentAfter: 1.1,
      percentEnd: 0.975,
    },
    {
      selector: ".hydraulic",
      percentStart: 0.855,
      percentBefore: -1,
      percentAfter: 1.1,
      percentEnd: 0.855,

      before: [["opacity", 0]],
      after: [["opacity", 1]],
      on: [
        [
          "opacity",
          {
            start: 0,
            end: 1,
          },
        ],
      ],
    },
    {
      selector: ".hydraulic",
      before: [["bezier", 7.7, 4.1, 0]],
      on: [
        ["bezier", 7.7, 4.1, { start: 0, end: 90 }],
        // ["width",{start: 3.3,end: 8.7}],
      ],
      after: [["bezier", 7.7, 4.1, 90]],
      percentStart: 0.855,
      percentBefore: 0.805,
      percentAfter: 1.1,
      percentEnd: 0.975,
    },
    {
      selector: ".stand",
      before: [["transform", [["rotate", 0]]]],
      on: [
        [
          "transform",
          [
            [
              "rotate",
              {
                start: 0,
                end: 90,
              },
            ],
          ],
        ],
      ],
      after: [["transform", [["rotate", 90]]]],
      percentStart: 0.855,
      percentBefore: 0.805,
      percentAfter: 1.1,
      percentEnd: 0.975,
    },
    {
      selector: ".rocket-3",
      before: [["opacity", 1.0]],
      on: [
        [
          "opacity",
          {
            start: 1.0,
            end: 0.1,
          },
        ],
      ],
      after: [["opacity", 0.1]],
      percentStart: 0.015,
      percentEnd: 0.135,
      percentBefore: -1,
      percentAfter: 0.495,
    },
    {
      selector: ".rocket-3",
      before: [["opacity", 0.1]],
      on: [
        [
          "opacity",
          {
            start: 0.1,
            end: 1.0,
          },
        ],
      ],
      after: [["opacity", 1.0]],
      percentStart: 0.495,
      percentEnd: 0.615,
      percentBefore: 0.135,
      percentAfter: 1.1,
    },
    {
      selector: ".rocket-2",
      before: [["opacity", 1.0]],
      on: [
        [
          "opacity",
          {
            start: 1.0,
            end: 0.1,
          },
        ],
      ],
      after: [["opacity", 0.1]],
      percentStart: 0.015,
      percentEnd: 0.135,
      percentBefore: -1,
      percentAfter: 0.255,
    },
    {
      selector: ".rocket-2",
      before: [["opacity", 0.1]],
      on: [
        [
          "opacity",
          {
            start: 0.1,
            end: 1.0,
          },
        ],
      ],
      after: [["opacity", 1.0]],
      percentStart: 0.255,
      percentEnd: 0.375,
      percentBefore: 0.135,
      percentAfter: 1.1,
    },
    {
      selector: ".rocket-1",
      before: [["opacity", 1.0]],
      on: [
        [
          "opacity",
          {
            start: 1.0,
            end: 0.1,
          },
        ],
      ],
      after: [["opacity", 0.1]],
      percentStart: 0.255,
      percentEnd: 0.375,
      percentBefore: -1,
      percentAfter: 0.615,
    },
    {
      selector: ".rocket-1",
      before: [["opacity", 0.1]],
      on: [
        [
          "opacity",
          {
            start: 0.1,
            end: 1.0,
          },
        ],
      ],
      after: [["opacity", 1.0]],
      percentStart: 0.615,
      percentEnd: 0.62,
      percentBefore: 0.375,
      percentAfter: 1.1,
    },
    {
      selector: ".truck",
      before: [["opacity", 0]],
      on: [
        [
          "opacity",
          {
            start: 0,
            end: 1,
          },
        ],
      ],
      after: [["opacity", 1]],
      percentStart: 0.405,
      percentEnd: 0.555,
      percentBefore: -1,
      percentAfter: 1.1,
    },
    {
      selector: ".stand",
      before: [["opacity", 0]],
      on: [
        [
          "opacity",
          {
            start: 0,
            end: 1,
          },
        ],
      ],
      after: [["opacity", 1]],
      percentStart: 0.405,
      percentEnd: 0.555,
      percentBefore: -1,
      percentAfter: 1.1,
    },
    {
      selector: ".truck",
      percentStart: 0.735,
      percentBefore: -1,
      percentAfter: 1.1,
      percentEnd: 0.815,

      before: [
        ["left", 100],
        ["top", 70],
      ],
      after: [
        ["left", 56],
        ["top", 70],
      ],
      on: [
        ["left", { start: 100, end: 56 }],
        ["top", { start: 70, end: 70 }],
      ],
    },
    {
      selector: ".stand",
      percentStart: 0.735,
      percentBefore: -1,
      percentAfter: 1.1,
      percentEnd: 0.815,

      before: [
        ["left", 112.5],
        ["top", 70.5],
      ],
      after: [
        ["left", 67.3],
        ["top", 70.5],
      ],
      on: [
        ["left", { start: 112.5, end: 67.3 }],
        ["top", { start: 70.5, end: 70.5 }],
      ],
    },
  ];

  function prefix() {
    if (!document.documentElement) {
      console.error("document.documentElement is not available");
      return null;
    }

    var styles = window?.getComputedStyle(document.documentElement, ""),
      pre = (Array.prototype.slice
        .call(styles)
        .join("")
        .match(/-(moz|webkit|ms)-/) ||
        (styles.OLink === "" && ["", "o"]))[1],
      dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
    return {
      dom: dom,
      lowercase: pre,
      css: "-" + pre + "-",
      js: pre[0].toUpperCase() + pre.substr(1),
    };
  }

  function resize() {
    _width = window.innerWidth;
    _height = window.innerHeight;
    _scrollHeight = _containerHeight - _height;
  }
  function pos() {
    var truck = document.getElementsByClassName("truck")[0];
    if (truck) {
      var styles = window.getComputedStyle(truck);
      var t = styles.top.split("p")[0];
      var h = styles.height.split("p")[0];
      t = Number.parseFloat(t);
      h = Number.parseFloat(h);
      $(".hydraulic").css("top", t + 0.6 * h + "px");
      $(".hydraulic-mobile").css("top", t + 0.6 * h + "px");
    }
  }

  function constructTransform(transforms) {
    var result = "";
    for (var transform in transforms) {
      transform = transforms[transform];
      result += transform[0] + "(";
      if (transform[0] == "translate")
        result += transform[1] + "%," + transform[2] + "%";
      else if (transform[0] == "rotate") result += transform[1] + "deg";
      else result += transform[1] + "," + transform[2];
      result += ") ";
    }
    if (result == "") return "none";
    else return result;
  }

  function constructTransformInProgress(transforms, effectScrollPercent) {
    var result = "";
    for (var transform in transforms) {
      transform = transforms[transform];
      result += transform[0] + "(";
      var val1 =
        transform[1].start +
        (transform[1].end - transform[1].start) * effectScrollPercent;
      if (transform[0] != "rotate")
        var val2 =
          transform[2].start +
          (transform[2].end - transform[2].start) * effectScrollPercent;
      if (transform[0] == "translate") result += val1 + "%," + val2 + "%";
      else if (transform[0] == "rotate") result += val1 + "deg";
      else result += val1 + "," + val2;
      result += ") ";
    }
    if (result == "") return "none";
    else return result;
  }

  function calculateBezierWidth(z, x, theta) {
    theta = theta * (Math.PI / 180);
    var y = z * z + x * x - 2 * x * z * Math.cos(theta);
    return Math.sqrt(y);
  }

  function calcualteBezierAngle(y, theta, z, x) {
    theta = theta * (Math.PI / 180);
    theta = Math.sin(theta);
    var angle = (theta * z) / y;
    angle = Math.asin(angle);
    angle = angle * (180 / Math.PI);
    if (x * x + y * y > z * z) angle = 180 - angle;
    return angle;
  }

  function loop() {
    var _scrollOffset = window.pageYOffset || window.scrollTop;
    var _scrollPercent = _scrollOffset / _scrollHeight || 0;

    for (var transition in transitions) {
      transition = transitions[transition];
      if (
        _scrollPercent < transition.percentStart &&
        _scrollPercent > transition.percentBefore
      ) {
        for (var effect in transition.before) {
          effect = transition.before[effect];
          if (effect[0] == "transform")
            $(transition.selector).css(
              effect[0],
              constructTransform(effect[1])
            );
          else if (effect[0] == "bezier") {
            var y = calculateBezierWidth(effect[1], effect[2], effect[3]);
            $(transition.selector).css("width", y + "%");
            $(transition.selector).css(
              "transform",
              "rotate(" +
                calcualteBezierAngle(y, effect[3], effect[1], effect[2]) +
                "deg)"
            );
          } else if (
            effect[0] == "left" ||
            effect[0] == "top" ||
            effect[0] == "width"
          )
            $(transition.selector).css(effect[0], effect[1] + "%");
          else $(transition.selector).css(effect[0], effect[1]);
        }
      } else if (
        _scrollPercent > transition.percentEnd &&
        _scrollPercent < transition.percentAfter
      ) {
        for (var effect in transition.after) {
          effect = transition.after[effect];
          if (effect[0] == "transform")
            $(transition.selector).css(
              effect[0],
              constructTransform(effect[1])
            );
          else if (effect[0] == "bezier") {
            var y = calculateBezierWidth(effect[1], effect[2], effect[3]);
            $(transition.selector).css("width", y + "%");
            for (var prefix in prefixes) {
              prefix = prefixes[prefix];
              $(transition.selector).css(
                prefix + "transform",
                "rotate(" +
                  calcualteBezierAngle(y, effect[3], effect[1], effect[2]) +
                  "deg)"
              );
            }
          } else if (
            effect[0] == "left" ||
            effect[0] == "top" ||
            effect[0] == "width"
          )
            $(transition.selector).css(effect[0], effect[1] + "%");
          else {
            for (var prefix in prefixes) {
              prefix = prefixes[prefix];
              $(transition.selector).css(prefix + effect[0], effect[1]);
            }
          }
        }
      } else if (
        _scrollPercent >= transition.percentStart &&
        _scrollPercent <= transition.percentEnd
      ) {
        var effectScrollPercent = _scrollPercent - transition.percentStart;
        effectScrollPercent /= transition.percentEnd - transition.percentStart;
        for (var effect in transition.on) {
          effect = transition.on[effect];
          var value;
          if (effect[0] == "transform")
            value = constructTransformInProgress(
              effect[1],
              effectScrollPercent
            );
          else if (effect[0] == "bezier")
            value =
              effect[3].start +
              (effect[3].end - effect[3].start) * effectScrollPercent;
          else
            value =
              effect[1].start +
              (effect[1].end - effect[1].start) * effectScrollPercent;
          if (effect[0] == "left" || effect[0] == "top" || effect[0] == "width")
            $(transition.selector).css(effect[0], value + "%");
          else if (effect[0] == "bezier") {
            var y = calculateBezierWidth(effect[1], effect[2], value);
            $(transition.selector).css("width", y + "%");
            $(transition.selector).css(
              "transform",
              "rotate(" +
                calcualteBezierAngle(y, value, effect[1], effect[2]) +
                "deg)"
            );
          } else $(transition.selector).css(effect[0], value);
        }
      }
    }
    pos();
    requestAnimationFrame(loop);
  }

  function handleMobile() {
    _containerHeight = 5000;
    var value = 9;
    for (var transition in transitions) {
      var index = transition;
      transition = transitions[transition];

      if (transition.selector == ".fifth-scroll") {
        transition.percentEnd = transition.percentStart;
      }
      if (transition.selector == ".hydraulic")
        transition.selector = ".hydraulic-mobile";
      for (var record in transition.before) {
        record = transition.before[record];
        if (record[0] == "top") {
          if (window.screen.width <= 320 && index == 9) record[1] += 9;
          record[1] += value;
        }
      }
      for (var record in transition.after) {
        record = transition.after[record];
        if (record[0] == "top") record[1] += value;
      }
      for (var record in transition.on) {
        record = transition.on[record];
        if (record[0] == "top") {
          if (window.screen.width <= 320 && index == 9) record[1].start += 9;
          record[1].start += value;
          record[1].end += value;
        }
      }
    }
  }

  function setHeight() {
    var ratio = 117.55 / 956.85;
    $(".rocket-horizontal").css(
      "height",
      ratio * window.screen.width * 0.75 + "px"
    );
    $(".rocket-horizontal-2").css(
      "height",
      ratio * window.screen.width * 0.25 + "px"
    );
  }

  $(document).ready(function () {
    $("body").addClass("products");
    setHeight();
    if (window.screen.width <= 576) handleMobile();
    pre = prefix();
    _jsPrefix = pre.lowercase;
    if (_jsPrefix == "moz") _jsPrefix = "Moz";
    _cssPrefix = pre.css;
    resize();

    $(window).on("resize", resize());
    loop();
    resize();
  });
}
