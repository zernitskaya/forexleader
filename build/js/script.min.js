function cookPanel() {
  var openCookiesPanel = document.getElementById('cook-panel');
  var acceptCook = document.getElementById('accept-cook');
  var openCookDesc = document.getElementById('open-cook-desc');
  var cookDesc = document.getElementById('cook-desc');
  var closeCookDesc = document.getElementById('close-cook-desc');
  var closeCookOverlay = document.getElementById('close-cook-overlay');

  if (!openCookiesPanel) return;

  var isShowCook = localStorage.getItem('cook');

  if (!isShowCook) {
    openCookiesPanel.classList.add('active');
  } else {
    openCookiesPanel.classList.remove('active');
  }

  acceptCook.addEventListener('click', function() {
    localStorage.setItem('cook', 'true');
    openCookiesPanel.classList.remove('active');
  });

  openCookDesc.addEventListener('click', function() {
    cookDesc.classList.add('active');
  });

  closeCookDesc.addEventListener('click', function() {
    cookDesc.classList.remove('active');
  });

  closeCookOverlay.addEventListener('click', function() {
    cookDesc.classList.remove('active');
  });
}


cookPanel();

const response = [{
      "name": "Frederick",
      "surname": "Ellis",
      "gender": "male",
      "region": "England",
      "age": 30,
      "title": "mr",
      "phone": "(888) 357 2194",
      "birthday": {
          "dmy": "17\/01\/1988",
          "mdy": "01\/17\/1988",
          "raw": 569414483
      },
      "email": "frederick_88@example.com",
      "password": "Ellis88^$",
      "credit_card": {
          "expiration": "5\/22",
          "number": "6847-7304-9318-9983",
          "pin": 1032,
          "security": 860
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/11.jpg"
  },
  {
      "name": "James",
      "surname": "Price",
      "gender": "male",
      "region": "England",
      "age": 35,
      "title": "mr",
      "phone": "(956) 138 7724",
      "birthday": {
          "dmy": "17\/02\/1983",
          "mdy": "02\/17\/1983",
          "raw": 414338682
      },
      "email": "james_price@example.com",
      "password": "Price83({",
      "credit_card": {
          "expiration": "5\/19",
          "number": "5381-3952-8096-8421",
          "pin": 1996,
          "security": 184
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/10.jpg"
  },
  {
      "name": "Evan",
      "surname": "Walsh",
      "gender": "male",
      "region": "England",
      "age": 23,
      "title": "mr",
      "phone": "(857) 830 9697",
      "birthday": {
          "dmy": "05\/02\/1995",
          "mdy": "02\/05\/1995",
          "raw": 791967949
      },
      "email": "evan-walsh@example.com",
      "password": "Walsh95{}",
      "credit_card": {
          "expiration": "11\/26",
          "number": "4139-5334-2567-5634",
          "pin": 3463,
          "security": 622
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/17.jpg"
  },
  {
      "name": "Naomi",
      "surname": "Ross",
      "gender": "female",
      "region": "England",
      "age": 31,
      "title": "ms",
      "phone": "(204) 206 3624",
      "birthday": {
          "dmy": "08\/07\/1987",
          "mdy": "07\/08\/1987",
          "raw": 552782244
      },
      "email": "naomi-ross@example.com",
      "password": "Ross87&#",
      "credit_card": {
          "expiration": "7\/26",
          "number": "2365-4161-8521-7349",
          "pin": 4512,
          "security": 864
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/7.jpg"
  },
  {
      "name": "Harry",
      "surname": "Saunders",
      "gender": "male",
      "region": "England",
      "age": 24,
      "title": "mr",
      "phone": "(881) 353 2046",
      "birthday": {
          "dmy": "31\/08\/1994",
          "mdy": "08\/31\/1994",
          "raw": 778377534
      },
      "email": "harry_94@example.com",
      "password": "Saunders94_&",
      "credit_card": {
          "expiration": "9\/20",
          "number": "1227-1652-8990-9625",
          "pin": 6894,
          "security": 845
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/17.jpg"
  },
  {
      "name": "Demi",
      "surname": "Scott",
      "gender": "female",
      "region": "England",
      "age": 22,
      "title": "ms",
      "phone": "(284) 857 3253",
      "birthday": {
          "dmy": "27\/04\/1996",
          "mdy": "04\/27\/1996",
          "raw": 830657070
      },
      "email": "demi-scott@example.com",
      "password": "Scott96@&",
      "credit_card": {
          "expiration": "10\/25",
          "number": "5419-1062-6676-6751",
          "pin": 1340,
          "security": 509
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/11.jpg"
  },
  {
      "name": "Jamie",
      "surname": "Patel",
      "gender": "male",
      "region": "England",
      "age": 29,
      "title": "mr",
      "phone": "(394) 161 7621",
      "birthday": {
          "dmy": "31\/07\/1989",
          "mdy": "07\/31\/1989",
          "raw": 617913105
      },
      "email": "jamie-patel@example.com",
      "password": "Patel89{!",
      "credit_card": {
          "expiration": "12\/26",
          "number": "1427-3436-4522-4261",
          "pin": 5223,
          "security": 503
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/16.jpg"
  },
  {
      "name": "Harry",
      "surname": "Clark",
      "gender": "male",
      "region": "England",
      "age": 36,
      "title": "mr",
      "phone": "(842) 711 6160",
      "birthday": {
          "dmy": "14\/07\/1982",
          "mdy": "07\/14\/1982",
          "raw": 395536310
      },
      "email": "harry.clark@example.com",
      "password": "Clark82*+",
      "credit_card": {
          "expiration": "11\/23",
          "number": "3995-6787-3196-2498",
          "pin": 1446,
          "security": 462
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/2.jpg"
  },
  {
      "name": "Zachary",
      "surname": "Chapman",
      "gender": "male",
      "region": "England",
      "age": 27,
      "title": "mr",
      "phone": "(458) 334 9679",
      "birthday": {
          "dmy": "13\/01\/1991",
          "mdy": "01\/13\/1991",
          "raw": 663780057
      },
      "email": "zachary91@example.com",
      "password": "Chapman91&%",
      "credit_card": {
          "expiration": "1\/25",
          "number": "7416-5536-7951-8307",
          "pin": 9989,
          "security": 464
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/5.jpg"
  },
  {
      "name": "Connor",
      "surname": "Kennedy",
      "gender": "male",
      "region": "England",
      "age": 32,
      "title": "mr",
      "phone": "(876) 939 4467",
      "birthday": {
          "dmy": "09\/01\/1986",
          "mdy": "01\/09\/1986",
          "raw": 505642273
      },
      "email": "connor86@example.com",
      "password": "Kennedy86%$",
      "credit_card": {
          "expiration": "5\/21",
          "number": "2450-5086-5087-8648",
          "pin": 9065,
          "security": 206
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/12.jpg"
  },
  {
      "name": "Chloe",
      "surname": "Khan",
      "gender": "female",
      "region": "England",
      "age": 30,
      "title": "ms",
      "phone": "(287) 772 5418",
      "birthday": {
          "dmy": "09\/08\/1988",
          "mdy": "08\/09\/1988",
          "raw": 587177137
      },
      "email": "chloekhan@example.com",
      "password": "Khan88)(",
      "credit_card": {
          "expiration": "5\/25",
          "number": "1094-1889-1880-3789",
          "pin": 6498,
          "security": 822
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/2.jpg"
  },
  {
      "name": "Evan",
      "surname": "Murray",
      "gender": "male",
      "region": "England",
      "age": 29,
      "title": "mr",
      "phone": "(502) 781 7902",
      "birthday": {
          "dmy": "10\/04\/1989",
          "mdy": "04\/10\/1989",
          "raw": 608206680
      },
      "email": "evanmurray@example.com",
      "password": "Murray89^(",
      "credit_card": {
          "expiration": "5\/20",
          "number": "7736-8184-9303-5385",
          "pin": 7986,
          "security": 707
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/2.jpg"
  },
  {
      "name": "Natasha",
      "surname": "Russell",
      "gender": "female",
      "region": "England",
      "age": 33,
      "title": "mrs",
      "phone": "(733) 195 1420",
      "birthday": {
          "dmy": "15\/07\/1985",
          "mdy": "07\/15\/1985",
          "raw": 490326345
      },
      "email": "natasha-85@example.com",
      "password": "Russell85=&",
      "credit_card": {
          "expiration": "2\/25",
          "number": "7394-8961-3704-9955",
          "pin": 7865,
          "security": 371
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/6.jpg"
  },
  {
      "name": "Leon",
      "surname": "Turner",
      "gender": "male",
      "region": "England",
      "age": 33,
      "title": "mr",
      "phone": "(899) 159 9181",
      "birthday": {
          "dmy": "22\/06\/1985",
          "mdy": "06\/22\/1985",
          "raw": 488339202
      },
      "email": "leon_turner@example.com",
      "password": "Turner85&^",
      "credit_card": {
          "expiration": "12\/24",
          "number": "9256-2835-7182-6527",
          "pin": 6278,
          "security": 670
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/20.jpg"
  },
  {
      "name": "Alfie",
      "surname": "Murphy",
      "gender": "male",
      "region": "England",
      "age": 33,
      "title": "mr",
      "phone": "(825) 742 6600",
      "birthday": {
          "dmy": "26\/03\/1985",
          "mdy": "03\/26\/1985",
          "raw": 480673113
      },
      "email": "alfie-murphy@example.com",
      "password": "Murphy85)@",
      "credit_card": {
          "expiration": "3\/25",
          "number": "8168-4921-5758-3239",
          "pin": 4226,
          "security": 231
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/10.jpg"
  },
  {
      "name": "Matthew",
      "surname": "Cox",
      "gender": "male",
      "region": "England",
      "age": 23,
      "title": "mr",
      "phone": "(170) 121 3882",
      "birthday": {
          "dmy": "23\/10\/1995",
          "mdy": "10\/23\/1995",
          "raw": 814471194
      },
      "email": "matthew.cox@example.com",
      "password": "Cox95@~",
      "credit_card": {
          "expiration": "3\/26",
          "number": "3492-1458-5934-9667",
          "pin": 1602,
          "security": 772
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/15.jpg"
  },
  {
      "name": "Luke",
      "surname": "Gray",
      "gender": "male",
      "region": "England",
      "age": 27,
      "title": "mr",
      "phone": "(299) 102 2863",
      "birthday": {
          "dmy": "28\/10\/1991",
          "mdy": "10\/28\/1991",
          "raw": 688682213
      },
      "email": "luke_gray@example.com",
      "password": "Gray91=@",
      "credit_card": {
          "expiration": "3\/21",
          "number": "1912-2225-4033-4573",
          "pin": 8368,
          "security": 108
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/4.jpg"
  },
  {
      "name": "Alice",
      "surname": "Ward",
      "gender": "female",
      "region": "England",
      "age": 28,
      "title": "ms",
      "phone": "(599) 725 4147",
      "birthday": {
          "dmy": "13\/05\/1990",
          "mdy": "05\/13\/1990",
          "raw": 642638776
      },
      "email": "alice.ward@example.com",
      "password": "Ward90*#",
      "credit_card": {
          "expiration": "4\/24",
          "number": "5635-9983-3442-8050",
          "pin": 9570,
          "security": 122
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/7.jpg"
  },
  {
      "name": "Logan",
      "surname": "Robertson",
      "gender": "male",
      "region": "England",
      "age": 31,
      "title": "mr",
      "phone": "(188) 408 1851",
      "birthday": {
          "dmy": "24\/05\/1987",
          "mdy": "05\/24\/1987",
          "raw": 548867704
      },
      "email": "logan-87@example.com",
      "password": "Robertson87!*",
      "credit_card": {
          "expiration": "11\/20",
          "number": "9577-6715-5070-4442",
          "pin": 2391,
          "security": 285
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/7.jpg"
  },
  {
      "name": "Alisha",
      "surname": "James",
      "gender": "female",
      "region": "England",
      "age": 29,
      "title": "mrs",
      "phone": "(997) 400 8222",
      "birthday": {
          "dmy": "05\/01\/1989",
          "mdy": "01\/05\/1989",
          "raw": 599992535
      },
      "email": "alisha_james@example.com",
      "password": "James89)$",
      "credit_card": {
          "expiration": "3\/19",
          "number": "6254-9704-7168-8930",
          "pin": 8022,
          "security": 773
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/18.jpg"
  },
  {
      "name": "Holly",
      "surname": "Anderson",
      "gender": "female",
      "region": "England",
      "age": 34,
      "title": "mrs",
      "phone": "(485) 824 5311",
      "birthday": {
          "dmy": "21\/10\/1984",
          "mdy": "10\/21\/1984",
          "raw": 467259063
      },
      "email": "holly_84@example.com",
      "password": "Anderson84=*",
      "credit_card": {
          "expiration": "5\/24",
          "number": "9321-7690-5833-4128",
          "pin": 1344,
          "security": 157
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/14.jpg"
  },
  {
      "name": "George",
      "surname": "Baker",
      "gender": "male",
      "region": "England",
      "age": 24,
      "title": "mr",
      "phone": "(882) 784 9687",
      "birthday": {
          "dmy": "27\/11\/1994",
          "mdy": "11\/27\/1994",
          "raw": 785937159
      },
      "email": "george.baker@example.com",
      "password": "Baker94)",
      "credit_card": {
          "expiration": "2\/26",
          "number": "7089-4514-1136-8960",
          "pin": 3994,
          "security": 243
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/11.jpg"
  },
  {
      "name": "Ruby",
      "surname": "Cook",
      "gender": "female",
      "region": "England",
      "age": 24,
      "title": "ms",
      "phone": "(257) 564 2350",
      "birthday": {
          "dmy": "21\/05\/1994",
          "mdy": "05\/21\/1994",
          "raw": 769532170
      },
      "email": "ruby.cook@example.com",
      "password": "Cook94_}",
      "credit_card": {
          "expiration": "8\/26",
          "number": "7589-7315-4239-2656",
          "pin": 6378,
          "security": 674
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/14.jpg"
  },
  {
      "name": "Charlotte",
      "surname": "Lee",
      "gender": "female",
      "region": "England",
      "age": 23,
      "title": "ms",
      "phone": "(720) 868 1958",
      "birthday": {
          "dmy": "16\/04\/1995",
          "mdy": "04\/16\/1995",
          "raw": 798011579
      },
      "email": "charlotte-95@example.com",
      "password": "Lee95$%",
      "credit_card": {
          "expiration": "12\/24",
          "number": "4782-2615-4754-5740",
          "pin": 2167,
          "security": 448
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/19.jpg"
  },
  {
      "name": "Layla",
      "surname": "Parker",
      "gender": "female",
      "region": "England",
      "age": 30,
      "title": "ms",
      "phone": "(699) 902 7799",
      "birthday": {
          "dmy": "26\/08\/1988",
          "mdy": "08\/26\/1988",
          "raw": 588623309
      },
      "email": "layla-parker@example.com",
      "password": "Parker88}=",
      "credit_card": {
          "expiration": "1\/24",
          "number": "9431-7401-2363-2484",
          "pin": 6321,
          "security": 691
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/15.jpg"
  },
  {
      "name": "Ellie",
      "surname": "Jackson",
      "gender": "female",
      "region": "England",
      "age": 31,
      "title": "mrs",
      "phone": "(430) 858 5141",
      "birthday": {
          "dmy": "22\/05\/1987",
          "mdy": "05\/22\/1987",
          "raw": 548711272
      },
      "email": "ellie-87@example.com",
      "password": "Jackson87#@",
      "credit_card": {
          "expiration": "4\/23",
          "number": "1915-6753-2960-8958",
          "pin": 6599,
          "security": 334
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/25.jpg"
  },
  {
      "name": "Amy",
      "surname": "Chapman",
      "gender": "female",
      "region": "England",
      "age": 30,
      "title": "ms",
      "phone": "(809) 967 2594",
      "birthday": {
          "dmy": "16\/10\/1988",
          "mdy": "10\/16\/1988",
          "raw": 593012559
      },
      "email": "amychapman@example.com",
      "password": "Chapman88&)",
      "credit_card": {
          "expiration": "5\/25",
          "number": "1352-1383-6026-9574",
          "pin": 8447,
          "security": 935
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/8.jpg"
  },
  {
      "name": "Ewan",
      "surname": "Clark",
      "gender": "male",
      "region": "England",
      "age": 35,
      "title": "mr",
      "phone": "(321) 485 1690",
      "birthday": {
          "dmy": "21\/06\/1983",
          "mdy": "06\/21\/1983",
          "raw": 425094427
      },
      "email": "ewan_clark@example.com",
      "password": "Clark83#)",
      "credit_card": {
          "expiration": "5\/24",
          "number": "5692-7657-6267-9633",
          "pin": 4143,
          "security": 504
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/7.jpg"
  },
  {
      "name": "Sean",
      "surname": "Bell",
      "gender": "male",
      "region": "England",
      "age": 33,
      "title": "mr",
      "phone": "(609) 312 2465",
      "birthday": {
          "dmy": "22\/07\/1985",
          "mdy": "07\/22\/1985",
          "raw": 490933136
      },
      "email": "sean.bell@example.com",
      "password": "Bell85^",
      "credit_card": {
          "expiration": "12\/24",
          "number": "5049-1579-3775-4756",
          "pin": 3865,
          "security": 946
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/1.jpg"
  },
  {
      "name": "Madison",
      "surname": "Smith",
      "gender": "female",
      "region": "England",
      "age": 29,
      "title": "ms",
      "phone": "(138) 852 2933",
      "birthday": {
          "dmy": "21\/07\/1989",
          "mdy": "07\/21\/1989",
          "raw": 617071521
      },
      "email": "madison-89@example.com",
      "password": "Smith89%=",
      "credit_card": {
          "expiration": "8\/26",
          "number": "6927-4887-9848-6941",
          "pin": 1131,
          "security": 537
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/7.jpg"
  },
  {
      "name": "Gracie",
      "surname": "Murray",
      "gender": "female",
      "region": "England",
      "age": 34,
      "title": "mrs",
      "phone": "(660) 518 2005",
      "birthday": {
          "dmy": "10\/03\/1984",
          "mdy": "03\/10\/1984",
          "raw": 447768076
      },
      "email": "gracie_84@example.com",
      "password": "Murray84__",
      "credit_card": {
          "expiration": "11\/20",
          "number": "6655-4968-2179-5058",
          "pin": 2375,
          "security": 609
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/8.jpg"
  },
  {
      "name": "Lewis",
      "surname": "Richards",
      "gender": "male",
      "region": "England",
      "age": 23,
      "title": "mr",
      "phone": "(148) 699 3412",
      "birthday": {
          "dmy": "22\/06\/1995",
          "mdy": "06\/22\/1995",
          "raw": 803872962
      },
      "email": "lewis95@example.com",
      "password": "Richards95*",
      "credit_card": {
          "expiration": "4\/19",
          "number": "3238-7409-8885-4654",
          "pin": 6342,
          "security": 661
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/17.jpg"
  },
  {
      "name": "Jessica",
      "surname": "Young",
      "gender": "female",
      "region": "England",
      "age": 25,
      "title": "ms",
      "phone": "(971) 188 4973",
      "birthday": {
          "dmy": "10\/11\/1993",
          "mdy": "11\/10\/1993",
          "raw": 752909218
      },
      "email": "jessica93@example.com",
      "password": "Young93@$",
      "credit_card": {
          "expiration": "6\/21",
          "number": "2677-7648-9972-8393",
          "pin": 6545,
          "security": 829
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/6.jpg"
  },
  {
      "name": "Ella",
      "surname": "Jones",
      "gender": "female",
      "region": "England",
      "age": 34,
      "title": "ms",
      "phone": "(886) 557 5440",
      "birthday": {
          "dmy": "27\/05\/1984",
          "mdy": "05\/27\/1984",
          "raw": 454536154
      },
      "email": "ellajones@example.com",
      "password": "Jones84%_",
      "credit_card": {
          "expiration": "3\/23",
          "number": "1758-6456-2288-7922",
          "pin": 4779,
          "security": 245
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/8.jpg"
  },
  {
      "name": "Evan",
      "surname": "Mason",
      "gender": "male",
      "region": "England",
      "age": 29,
      "title": "mr",
      "phone": "(746) 737 3463",
      "birthday": {
          "dmy": "05\/02\/1989",
          "mdy": "02\/05\/1989",
          "raw": 602733335
      },
      "email": "evan.mason@example.com",
      "password": "Mason89!{",
      "credit_card": {
          "expiration": "6\/26",
          "number": "4957-4805-5350-4923",
          "pin": 1188,
          "security": 948
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/14.jpg"
  },
  {
      "name": "Skye",
      "surname": "Stewart",
      "gender": "female",
      "region": "England",
      "age": 34,
      "title": "mrs",
      "phone": "(950) 956 1404",
      "birthday": {
          "dmy": "28\/10\/1984",
          "mdy": "10\/28\/1984",
          "raw": 467794961
      },
      "email": "skyestewart@example.com",
      "password": "Stewart84}(",
      "credit_card": {
          "expiration": "6\/21",
          "number": "7981-3725-4974-8113",
          "pin": 4645,
          "security": 946
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/9.jpg"
  },
  {
      "name": "Lilly",
      "surname": "Richardson",
      "gender": "female",
      "region": "England",
      "age": 35,
      "title": "ms",
      "phone": "(234) 213 8716",
      "birthday": {
          "dmy": "19\/07\/1983",
          "mdy": "07\/19\/1983",
          "raw": 427462660
      },
      "email": "lilly-83@example.com",
      "password": "Richardson83}^",
      "credit_card": {
          "expiration": "9\/26",
          "number": "6023-4586-5195-4950",
          "pin": 2841,
          "security": 135
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/22.jpg"
  },
  {
      "name": "Jessica",
      "surname": "Thompson",
      "gender": "female",
      "region": "England",
      "age": 27,
      "title": "ms",
      "phone": "(730) 818 3075",
      "birthday": {
          "dmy": "09\/03\/1991",
          "mdy": "03\/09\/1991",
          "raw": 668507109
      },
      "email": "jessica_91@example.com",
      "password": "Thompson91}%",
      "credit_card": {
          "expiration": "5\/20",
          "number": "3873-7826-8445-1595",
          "pin": 9195,
          "security": 657
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/22.jpg"
  },
  {
      "name": "Joseph",
      "surname": "Martin",
      "gender": "male",
      "region": "England",
      "age": 27,
      "title": "mr",
      "phone": "(679) 722 3950",
      "birthday": {
          "dmy": "26\/12\/1991",
          "mdy": "12\/26\/1991",
          "raw": 693789309
      },
      "email": "joseph91@example.com",
      "password": "Martin91}",
      "credit_card": {
          "expiration": "9\/24",
          "number": "6702-7987-6149-1468",
          "pin": 5256,
          "security": 465
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/16.jpg"
  },
  {
      "name": "Sebastian",
      "surname": "Ross",
      "gender": "male",
      "region": "England",
      "age": 23,
      "title": "mr",
      "phone": "(731) 710 8948",
      "birthday": {
          "dmy": "13\/09\/1995",
          "mdy": "09\/13\/1995",
          "raw": 811047423
      },
      "email": "sebastian_95@example.com",
      "password": "Ross95=+",
      "credit_card": {
          "expiration": "1\/26",
          "number": "6516-8346-1389-3779",
          "pin": 3915,
          "security": 368
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/17.jpg"
  },
  {
      "name": "Zak",
      "surname": "Allen",
      "gender": "male",
      "region": "England",
      "age": 28,
      "title": "mr",
      "phone": "(732) 839 1047",
      "birthday": {
          "dmy": "24\/12\/1990",
          "mdy": "12\/24\/1990",
          "raw": 662079548
      },
      "email": "zak.allen@example.com",
      "password": "Allen90%%",
      "credit_card": {
          "expiration": "6\/19",
          "number": "7914-4250-2636-5474",
          "pin": 1425,
          "security": 417
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/8.jpg"
  },
  {
      "name": "Sophie",
      "surname": "Roberts",
      "gender": "female",
      "region": "England",
      "age": 29,
      "title": "ms",
      "phone": "(107) 158 3651",
      "birthday": {
          "dmy": "19\/08\/1989",
          "mdy": "08\/19\/1989",
          "raw": 619558573
      },
      "email": "sophie89@example.com",
      "password": "Roberts89~=",
      "credit_card": {
          "expiration": "12\/19",
          "number": "9054-9031-4051-9521",
          "pin": 9260,
          "security": 361
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/22.jpg"
  },
  {
      "name": "Freya",
      "surname": "Campbell",
      "gender": "female",
      "region": "England",
      "age": 30,
      "title": "ms",
      "phone": "(410) 911 6490",
      "birthday": {
          "dmy": "12\/12\/1988",
          "mdy": "12\/12\/1988",
          "raw": 597918167
      },
      "email": "freya_88@example.com",
      "password": "Campbell88^~",
      "credit_card": {
          "expiration": "9\/21",
          "number": "7298-5424-8128-4717",
          "pin": 1578,
          "security": 149
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/10.jpg"
  },
  {
      "name": "Alexandra",
      "surname": "Matthews",
      "gender": "female",
      "region": "England",
      "age": 23,
      "title": "ms",
      "phone": "(953) 781 1920",
      "birthday": {
          "dmy": "02\/11\/1995",
          "mdy": "11\/02\/1995",
          "raw": 815328401
      },
      "email": "alexandra-95@example.com",
      "password": "Matthews95&=",
      "credit_card": {
          "expiration": "5\/20",
          "number": "1941-5420-5382-1544",
          "pin": 1886,
          "security": 862
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/1.jpg"
  },
  {
      "name": "Nicole",
      "surname": "Collins",
      "gender": "female",
      "region": "England",
      "age": 28,
      "title": "ms",
      "phone": "(259) 635 6399",
      "birthday": {
          "dmy": "31\/05\/1990",
          "mdy": "05\/31\/1990",
          "raw": 644158477
      },
      "email": "nicole-90@example.com",
      "password": "Collins90$)",
      "credit_card": {
          "expiration": "5\/24",
          "number": "2512-1871-9443-7829",
          "pin": 1588,
          "security": 587
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/13.jpg"
  },
  {
      "name": "Amy",
      "surname": "Saunders",
      "gender": "female",
      "region": "England",
      "age": 24,
      "title": "ms",
      "phone": "(849) 743 9819",
      "birthday": {
          "dmy": "16\/04\/1994",
          "mdy": "04\/16\/1994",
          "raw": 766512097
      },
      "email": "amy_saunders@example.com",
      "password": "Saunders94%$",
      "credit_card": {
          "expiration": "1\/20",
          "number": "8288-7878-8730-7925",
          "pin": 9755,
          "security": 784
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/5.jpg"
  },
  {
      "name": "Lily",
      "surname": "Cook",
      "gender": "female",
      "region": "England",
      "age": 24,
      "title": "ms",
      "phone": "(818) 362 7471",
      "birthday": {
          "dmy": "18\/06\/1994",
          "mdy": "06\/18\/1994",
          "raw": 771914902
      },
      "email": "lily_cook@example.com",
      "password": "Cook94~@",
      "credit_card": {
          "expiration": "8\/22",
          "number": "5625-4178-7998-6144",
          "pin": 2548,
          "security": 159
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/24.jpg"
  },
  {
      "name": "Abbie",
      "surname": "Hill",
      "gender": "female",
      "region": "England",
      "age": 28,
      "title": "mrs",
      "phone": "(521) 357 8017",
      "birthday": {
          "dmy": "25\/03\/1990",
          "mdy": "03\/25\/1990",
          "raw": 638425016
      },
      "email": "abbie_hill@example.com",
      "password": "Hill90#)",
      "credit_card": {
          "expiration": "10\/24",
          "number": "9943-4097-1921-9756",
          "pin": 2532,
          "security": 708
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/female\/5.jpg"
  },
  {
      "name": "Elliot",
      "surname": "Bailey",
      "gender": "male",
      "region": "England",
      "age": 34,
      "title": "mr",
      "phone": "(820) 134 9698",
      "birthday": {
          "dmy": "10\/01\/1984",
          "mdy": "01\/10\/1984",
          "raw": 442620302
      },
      "email": "elliot84@example.com",
      "password": "Bailey84@_",
      "credit_card": {
          "expiration": "9\/24",
          "number": "5477-9106-4864-8457",
          "pin": 8499,
          "security": 456
      },
      //"photo": "https:\/\/uinames.com\/api\/photos\/male\/19.jpg"
  },
  {
      "name": "Isabel",
      "surname": "Roberts",
      "gender": "female",
      "region": "England",
      "age": 24,
      "title": "ms",
      "phone": "(457) 440 3098",
      "birthday": {
          "dmy": "15\/04\/1994",
          "mdy": "04\/15\/1994",
          "raw": 766456302
      },
      "email": "isabel94@example.com",
      "password": "Roberts94#)",
      "credit_card": {
          "expiration": "11\/20",
          "number": "5539-3392-4185-4815",
          "pin": 2498,
          "security": 325
      },
      ////"photo": "https:\/\/uinames.com\/api\/photos\/female\/19.jpg"
  }
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntFromRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var loopPeople = function(response) {
  var wrapper = $("#modal-money");
  wrapper.fadeOut();
  var index = getRandomInt(response.length);
  var name = response[index].name + " " + response[index].surname.charAt(0) + ".";
  var image = response[index].photo;
  var amt = Math.floor(50 + Math.random() * 300);
  var delay = getRandomIntFromRange(3500, 9000);

  setTimeout(function() {
      wrapper.find('.money-modal__name').text(name);
      wrapper.find('.money-modal__value').text('$' + amt);
      wrapper.fadeIn();
  }, delay / 2);

  setTimeout(function() {
      loopPeople(response);
  }, delay);

};

loopPeople(response)
