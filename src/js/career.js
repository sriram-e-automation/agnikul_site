import $ from 'jquery';
import Swiper from "swiper";

export default function Init() {

  var careerSwiper;

  /* 
  Add new jobs here. 
  The jobs json is structured as, 
  Key - category short code. The short code is derived from the id of the corresponding dropdown option
  Value - a json array containing all the jobs in the category.
          Each json has two keys,
          name - name to be displayed in the dropdown.
          id - id of the dropdown option and thus we can map the corresponding description 
          by making the id of the description by adding the suffix -desc to it.
          For eg., if the id of Electric Motor Designer is electric-motor-designer, then we should have
          the description div id as electric-motor-designer-desc
*/
  var jobs = {
    "elec": [
      {
        "name": "Electric Motor Designer",
        "id": "electric-motor-designer"
      },
      {
        "name": "Power Electronics Engineer",
        "id": "power-electronics-engineer"
      },
      {
        "name": "Space Robotics and Controls Engineer",
        "id": "space-robotics-and-control-engineer"
      },
      {
        "name": "Navigation Guidance and Control Systems Engineer",
        "id": "navigation-guidance-and-control-systems-engineer"
      },
      {
        "name": "Embedded Systems & Mixed Signal Hardware Engineer",
        "id": "embedded-systems-&-mixed-signal-hardware-engineer"
      },
      {
        "name": "RF Systems Design Engineer",
        "id": "rf-systems-design-engineer"
      },
      {
        "name": "Printed Circuit Board Design Engineer",
        "id": "printed-circuit-board-design-engineer"
      },
      {
        "name": "Maker / Fabricator - Avionics",
        "id": "maker-or-fabricator-avionics"
      },
      {
        "name" : "Other Profiles",
        "id" : "other-profiles"
      }
    ],
    "sw": [
      {
        "name": "Embedded Systems Software Developer",
        "id": "embedded-systems-software-developer"
      },
      {
        "name": "Embedded Software Engineer - Linux",
        "id": "embedded-software-engineer-linux"
      },
      {
        "name": "Mission Design Software Developer",
        "id": "mission-design-software-developer"
      },
      {
        "name": "ERPNext Developer",
        "id": "erpnext-developer"
      },
      {
        "name": "LabVIEW Developer",
        "id": "labview-developer"
      },
      {
        "name" : "Other Profiles",
        "id" : "other-profiles"
      }
    ],
    "sws": [
      {
        "name": "Launch vehicle Structural Engineer",
        "id": "launch-vehicle-structural-engineer"
      },
      {
        "name": "Ground Systems Structural Engineer",
        "id": "ground-systems-structural-engineer"
      },
      {
        "name": "Vehicle Dynamics Engineer",
        "id": "vehicle-dynamics-engineer"
      },
      {
        "name": "Additive Manufacturing Engineer",
        "id": "additive-manufacturing-engineer"
      },
      {
        "name": "Maker / Fabricator - Mechanical",
        "id": "maker-or-fabricator-mechanical"
      },
      {
        "name" : "Other Profiles",
        "id" : "other-profiles"
      }
    ],
    "fls": [
      {
        "name": "Launch Vehicle Propulsion Engineer",
        "id": "launch-vehicle-propulsion-engineer"
      },
      {
        "name": "Launch Vehicle Aerodynamics Engineer",
        "id": "launch-vehicle-aerodynamics-engineer"
      },
      {
        "name": "Launch Vehicle Turbomachinery Engineer",
        "id": "launch-vehicle-turbomachinery-engineer"
      },
      {
        "name": "Launch Vehicle Thermal Systems Engineer",
        "id": "launch-vehicle-thermal-systems-engineer"
      },
      {
        "name" : "Other Profiles",
        "id" : "other-profiles"
      }
    ],
    "op": [
      {
        "name": "Launch Vehicle Operations Strategist",
        "id": "launch-vehicle-operations-strategist"
      },
      {
        "name": "Launch Vehicle Economist",
        "id": "launch-vehicle-economist"
      },
      {
        "name": "Inventory Specialist",
        "id": "inventory-specialist"
      },
      {
        "name": "Front end systems developer",
        "id": "front-end-systems-developer"
      },
      {
        "name" : "Other Profiles",
        "id" : "other-profiles"
      }
    ],
    "fiac": [
      {
        "name": "Finance and Accounting Specialist",
        "id": "finance-and-accounting-specialist"
      }
    ],
    "hr": [
      {
        "name": "Human Capital Resources Partner",
        "id": "human-capital-resource-parnter"
      }
    ],
    "lase": [
      {
        "name": "Payload Acquisition strategist",
        "id": "payload-acquisition-strategist"
      },
      {
        "name": "Hangar Optimizer",
        "id": "hangar-optimizer"
      },
      {
        "name": "Logistics Manager",
        "id": "logistics-manager"
      },
      {
        "name" : "Other Profiles",
        "id" : "other-profiles"
      }
    ]
  }

  function addEvents() {
    $("#job .dropdown-item").click(function () {
      var key = $(this).attr("id");
      document.getElementById("job-field").innerHTML = this.innerHTML;
      if (!document.getElementById("job-field").classList.contains("selected"))
        document.getElementById("job-field").classList.add("selected");

      var contents = document.getElementsByClassName("career__description");
      for (var cont in contents) {
        cont = contents[cont];
        if (cont.classList != undefined && cont.classList.contains("visible"))
          cont.classList.remove("visible");
      }


      var content = document.getElementById(key + "-desc");
      if (content == undefined)
        content = document.getElementById("backup-profiles-desc");
      content.classList.add("visible");

    });

  }

  $(document).ready(function () {

    $("body").removeClass("products");
    $(".first-row").removeClass("home__first-row");

    $(".book__terms__link").click(function () {
      $(".custom-modal-out").addClass("show");
      $(".body").css("overflow-y", "hidden");
    });

    $(".close-icon").click(function () {
      $(".custom-modal-out").removeClass("show");
      $(".body").css("overflow-y", "scroll");
    });


      careerSwiper = new Swiper(".career__location-swiper",{
            direction: "vertical",
            cssMode: true,
            slidesPerView: "auto",
            pagination: {
                el: ".career__location__swiper-pagination",
                clickable: true
            },
            mousewheel: {
                invert: false,
            },
            keyboard:{
                enabled: true,
            }
      });

      var prev = 0;

      var len = $(".career__content").length;

      $(".career__location__slide-content").each(function(index){
          $(this).click(function(){
            index = index % len;
              if(window.screen.width > 450)
              {
                $(".career__location__slide-content").each(function(){
                        $(this).removeClass("active");
                });
                $(this).addClass("active");
                var contents = document.getElementsByClassName("career__content");
                if(prev != index)
                {
                contents[prev].classList.remove("active");
                contents[index].classList.add("active");
                }
                prev = index;
              }
              else
              {
                var contents = document.getElementsByClassName("career__content");
                contents[index].classList.add("show"); 
              }
          });
      });

      $(".career__close-icon").click(
          function() {
            var contents = document.getElementsByClassName("career__content");
            for(var index in contents)
            {
                if(contents[index] != undefined && contents[index].classList != undefined)
                contents[index].classList.remove("show");
            }
          }
      );

    $("#crew .dropdown-item").click(function () {
      var key = $(this).attr("id");
      document.getElementById("crew-field").innerHTML = this.innerHTML;
      document.getElementById("job-field").innerHTML = "JOB";
      var contents = document.getElementsByClassName("career__description");
      for (var cont in contents) {
        cont = contents[cont];
        if (cont.classList != undefined && cont.classList.contains("visible"))
          cont.classList.remove("visible");
      }

      var content = document.getElementById("blank");
      content.classList.add("visible");

      if (!document.getElementById("crew-field").classList.contains("selected"))
        document.getElementById("crew-field").classList.add("selected");

      var currCat = jobs[key];
      if (currCat == undefined)
        return;
      content = "";
      for (var job in currCat) {
        job = currCat[job];
        content += '<p class="dropdown-item" id="' + job.id + '">' + job.name + "</p>\n";
      }
      var dropdw = document.getElementById("job");
      dropdw.innerHTML = content;
      addEvents();
    });



  });

}

