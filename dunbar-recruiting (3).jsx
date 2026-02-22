import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "questionnaire", label: "Questionnaire" },
  { id: "social", label: "Social Media" },
  { id: "outreach", label: "Email & DMs" },
  { id: "camps", label: "Prospect Camps" },

];

const questionnaireSchools = [
  { name: "Abilene Christian Wildcats", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/66ab96eced0a" },
  { name: "Alabama A&M Bulldogs", division: "D1 FCS", url: "https://aamusports.com/sb_output.aspx?form=3" },
  { name: "Alabama State Hornets", division: "D1 FCS", url: "https://bamastatesports.com/sb_output.aspx?form=11" },
  { name: "albany great danes", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/ce2ee88e7302?path=football" },
  { name: "Alcorn State Braves", division: "D1 FCS", url: "https://alcornsports.com/sb_output.aspx?form=3" },
  { name: "Arkansas–Pine Bluff Golden Lions", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/f5797a01f623" },
  { name: "Austin Peay Governors", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/cf5482d7b7bb" },
  { name: "Bethune-Cookman Wildcats", division: "D1 FCS", url: "https://bcuathletics.com/sb_output.aspx?form=18" },
  { name: "Brown Bears", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/e611bb1201e4" },
  { name: "Bryant Bulldogs", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/b2a334c37cf8" },
  { name: "Bucknell Bison", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/8463cb4b53b7" },
  { name: "Butler Bulldogs", division: "D1 FCS", url: "https://forms.office.com/pages/responsepage.aspx?id=PnO_9IQjYkmWnwNmQ55irH-fbFQfOHBFrnBSPJ0KwV9UQVc2TkVPSVU3WldMTElaT04wMVY4VllYSiQlQCN0PWcu" },
  { name: "Cal Poly Mustangs", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/801bfc4cad70" },
  { name: "Campbell Camels", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/9bbc274a4e2e" },
  { name: "Central Connecticut State Blue Devils", division: "D1 FCS", url: "https://college.jumpforward.com/questionnaire.aspx?iid=1569&sportid=18" },
  { name: "Charleston Southern Buccaneers", division: "D1 FCS", url: "https://www.csusports.com/sb_output.aspx?form=3" },
  { name: "Chattanooga Mocs", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/17c6cae593d4" },
  { name: "Chicago State Cougars", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/0f6a3905f087" },
  { name: "The Citadel Bulldogs", division: "D1 FCS", url: "https://citadelsports.com/sb_output.aspx?form=211" },
  { name: "Colgate Raiders", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/71b59d70989d" },
  { name: "Columbia Lions", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/a11c89254bde" },
  { name: "Cornell Big Red", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/1a8aec04b91c?path=football" },
  { name: "Dartmouth Big Green", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/03ad0636b738?path=football" },
  { name: "Davidson Wildcats", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/9fd3f4e0e154" },
  { name: "Dayton Flyers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/81f3191225eb" },
  { name: "Delaware State Hornets", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/d50b35477ad7?path=fb" },
  { name: "Drake Bulldogs", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/3647a664e7e2" },
  { name: "Duquesne Dukes", division: "D1 FCS", url: "https://goduquesne.com/sb_output.aspx?form=3" },
  { name: "East Texas A&M Lions", division: "D1 FCS", url: "https://lionathletics.com/sb_output.aspx?form=3" },
  { name: "Eastern Illinois Panthers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/b793bb41ab3f" },
  { name: "Eastern Washington Eagles", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/db76d9b577f3" },
  { name: "Elon Phoenix", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/15f6159d5d21" },
  { name: "Florida A&M Rattlers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/ba0df47a4de5" },
  { name: "Fordham Rams", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/f8b363467a11" },
  { name: "Furman Paladins", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/be5d157f9dfd" },
  { name: "Gardner-Webb Runnin’ Bulldogs", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/85948d591686" },
  { name: "Georgetown Hoyas", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/7d5107e1a07d" },
  { name: "Grambling State Tigers", division: "D1 FCS", url: "https://gsutigers.com/sb_output.aspx?form=3" },
  { name: "Hampton Pirates", division: "D1 FCS", url: "https://hamptonpirates.com/sb_output.aspx?form=3&path=football" },
  { name: "Harvard Crimson", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/2adb5596b93b" },
  { name: "Holy Cross Crusaders", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/5028e3d4d7dc" },
  { name: "Houston Christian Huskies", division: "D1 FCS", url: "https://hcuhuskies.com/sb_output.aspx?form=3" },
  { name: "Howard Bison", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/9ff7e3dc728b" },
  { name: "Idaho Vandals", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/2a7618939f4f" },
  { name: "Idaho State Bengals", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/056ff80b0518" },
  { name: "Illinois State Redbirds", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/24e846c637d7" },
  { name: "Incarnate Word Cardinals", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/b468ad5d09a9" },
  { name: "Indiana State Sycamores", division: "D1 FCS", url: "https://college.jumpforward.com/questionnaire.aspx?iid=460&sportid=54" },
  { name: "Jackson State Tigers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/0f9573f9b74d" },
  { name: "Lafayette Leopards", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/9414dc4e629a" },
  { name: "Lamar Cardinals", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/665cfb24fc92" },
  { name: "Lehigh Mountain Hawks", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/572c23813563" },
  { name: "Lindenwood Lions", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/9708055dfd3f" },
  { name: "Long Island Sharks", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/c27887340f20" },
  { name: "Maine Black Bears", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/66a51f31ef1b" },
  { name: "Marist Red Foxes", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/fd0489e9b5c6" },
  { name: "Mercyhurst Lakers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/d236e1ddcdc1" },
  { name: "Merrimack Warriors", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/db3ff541efa9" },
  { name: "Mississippi Valley State Delta Devils", division: "D1 FCS", url: "https://mvsusports.com/sb_output.aspx?form=3" },
  { name: "Monmouth Hawks", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/91eeff38abfc" },
  { name: "Montana Grizzlies", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/b0fb10cd0c64" },
  { name: "Montana State Bobcats", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/095d632436ca" },
  { name: "Morehead State Eagles", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/622b3bc684e7" },
  { name: "Morgan State Bears", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/1b9177e5d958" },
  { name: "Murray State Racers", division: "D1 FCS", url: "https://goracers.com/form/22" },
  { name: "New Hampshire Wildcats", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/f64276ecad33" },
  { name: "New Haven Chargers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/b1e2db406055" },
  { name: "Nicholls Colonels", division: "D1 FCS", url: "https://geauxcolonels.com/sb_output.aspx?form=7" },
  { name: "Norfolk State Spartans", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/46973fd70003" },
  { name: "North Alabama Lions", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/d7c8f686a62c" },
  { name: "North Carolina A&T Aggies", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/bfd9d47b9e79" },
  { name: "North Carolina Central Eagles", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/cda76fdd40a8" },
  { name: "North Dakota Fighting Hawks", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/008db4e612c4" },
  { name: "North Dakota State Bison", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/8f1dc9c11e14" },
  { name: "Northern Arizona Lumberjacks", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/8f95299bab36" },
  { name: "Northern Iowa Panthers", division: "D1 FCS", url: "https://college.jumpforward.com/questionnaire.aspx?iid=537&sportid=54" },
  { name: "Northwestern State Demons", division: "D1 FCS", url: "https://nsudemons.com/sb_output.aspx?form=10" },
  { name: "Penn Quakers", division: "D1 FCS", url: "https://my.armssoftware.com/arms/public/questionnaire/a8e4bf5dd078?path=football" },
  { name: "Portland State Vikings", division: "D1 FCS", url: "https://goviks.com/sb_output.aspx?form=20" },
  { name: "Prairie View A&M Panthers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/80bca4175ea6" },
  { name: "Presbyterian Blue Hose", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/5c3fdd452d5d" },
  { name: "Princeton Tigers", division: "D1 FCS", url: "https://www.princetontigersfootball.com/recruit-questionnaire/" },
  { name: "Rhode Island Rams", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/cfa3d431c131" },
  { name: "Richmond Spiders", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/c696c61f350e" },
  { name: "Robert Morris Colonials", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/6d5d8efe7873" },
  { name: "Sacramento State Hornets", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/68860cd2b5d6" },
  { name: "Sacred Heart Pioneers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/7800c1f17a4a" },
  { name: "San Diego Torreros", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/a3dcbbc88a40" },
  { name: "South Carolina State Bulldogs", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/4730bf3aedf4" },
  { name: "South Dakota Coyotes", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/84a456dc9504" },
  { name: "South Dakota State Jackrabbits", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/d3066dda621e" },
  { name: "Southern Jaguars", division: "D1 FCS", url: "https://gojagsports.com/sb_output.aspx?form=3" },
  { name: "Southern Illinois Salukis", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/4a091efa1362" },
  { name: "Southern Utah Thunderbirds", division: "D1 FCS", url: "https://college.jumpforward.com/questionnaire.aspx?DB_OEM_ID=20100&iid=1675&sportid=54&path=football" },
  { name: "St. Thomas (MN) Tommies", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/b28fee1b179c" },
  { name: "Stephen F. Austin Lumberjacks", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/01b15e0e7694" },
  { name: "Stetson Hatters", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/ef9cda564a8b" },
  { name: "Stonehill Skyhawks", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/9aedf68ee0b2" },
  { name: "Stony Brook Seawolves", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/c5f0b465d619" },
  { name: "Tarleton State Texans", division: "D1 FCS", url: "https://tarletonsports.com/sb_output.aspx?form=12" },
  { name: "Tennessee Martin Skyhawks", division: "D1 FCS", url: "https://utmsports.com/form/3" },
  { name: "Tennessee State Tigers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/d515302e88a5" },
  { name: "Tennessee Tech Golden Eagles", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/06b491eb33e7" },
  { name: "Texas Southern Tigers", division: "D1 FCS", url: "https://tsusports.com/sb_output.aspx?form=3" },
  { name: "Towson Tigers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/bcaa9def7793" },
  { name: "UC Davis Aggies", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/54fb93553a2c" },
  { name: "Utah Tech Trailblazers", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/5b94f7f7f864" },
  { name: "UTRGV Vaqueros", division: "D1 FCS", url: "https://goutrgv.com/sb_output.aspx?form=3" },
  { name: "Valparaiso Beacons", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/e1cbd6e96f33" },
  { name: "Villanova Wildcats", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/66dc8064db9f" },
  { name: "VMI Keydets", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/271a6340d276?path=football" },
  { name: "Wagner Seahawks", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/cd9e81f90620" },
  { name: "Weber State Wildcats", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/7d8f54310bb0" },
  { name: "West Georgia Wolves", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/483cff930a80" },
  { name: "Western Carolina Catamounts", division: "D1 FCS", url: "https://catamountsports.com/sb_output.aspx?form=5" },
  { name: "Western Illinois Leathernecks", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/fd26d6cd3735" },
  { name: "William & Mary Tribe", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/7f0ac3a662a4" },
  { name: "Wofford Terriers", division: "D1 FCS", url: "https://college.jumpforward.com/questionnaire.aspx?iid=356&sportid=54" },
  { name: "Yale Bulldogs", division: "D1 FCS", url: "https://questionnaires.armssoftware.com/809330ccfb92" },
  { name: "Youngstown State Penguins", division: "D1 FCS", url: "https://college.jumpforward.com/questionnaire.aspx?iid=1593&sportid=54" },
  { name: "Arizona Christian University", division: "NAIA", url: "https://acufirestorm.com/sb_output.aspx?form=4" },
  { name: "Ave Maria", division: "NAIA", url: "https://avemariagyrenes.com/sports/2023/7/5/prospective-student-athlete-interest-form.aspx?sys:sex=M&sys:field:sport_primary=725f5da9-680c-46db-869e-8e5a9e6d6a7f" },
  { name: "Avila University", division: "NAIA", url: "https://app.winwontech.com/questionnaire/avila/football/jvEDbSD3sqoH6oLecmYj" },
  { name: "Baker University", division: "NAIA", url: "https://bakeru.tfaforms.net/40" },
  { name: "Benedictine College", division: "NAIA", url: "https://questionnaires.armssoftware.com/c2e6343460b7" },
  { name: "Bethel College – Kansas", division: "NAIA", url: "https://forms.arirecruiting.com/Bethel.College/form" },
  { name: "Bluefield University", division: "NAIA", url: "https://www.bluefield.edu/athletic-recruitment-questionnaire/" },
  { name: "Briar Cliff University", division: "NAIA", url: "https://bcuchargers.com/sports/2021/1/7/football-recruiting-form.aspx" },
  { name: "Calumet College of St. Joseph", division: "NAIA", url: "https://admissions.ccsj.edu/register/arq" },
  { name: "Campbellsville University", division: "NAIA", url: "https://campbellsvilletigers.com/sb_output.aspx?form=8" },
  { name: "Carroll College", division: "NAIA", url: "https://docs.google.com/forms/d/1NDD7Z8pLoNvF7AL5TBzx6AmvhGCev189Tj4x0FQvLAM/viewform?ts=67bcac82&edit_requested=true" },
  { name: "Central Methodist University", division: "NAIA", url: "https://college.jumpforward.com/questionnaire.aspx?iid=1807&sportid=18" },
  { name: "Clarke University", division: "NAIA", url: "https://forms.arirecruiting.com/forms/ClarkeUniversity_Football/form" },
  { name: "Concordia University – Nebraska", division: "NAIA", url: "https://www.cune.edu/athletics/teams/football/recruit-me" },
  { name: "Culver-Stockton College", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MTIyNjA=-uaqQc5fQHiE=&ptype=recrui" },
  { name: "Cumberland University", division: "NAIA", url: "https://gocumberlandathletics.com/sb_output.aspx?form=3" },
  { name: "Dakota State", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MTgwNzg=-vbcGRe4rOzM=&ptype=recruit" },
  { name: "dakota wesleyan university", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MTk1MQ==-aZR3XTk4wPg=&ptype=recruit" },
  { name: "Defiance College", division: "NAIA", url: "https://www.defianceathletics.com/information/Recruits/form" },
  { name: "Dickinson State", division: "NAIA", url: "https://dsubluehawks.com/sb_output.aspx?form=3" },
  { name: "Doane", division: "NAIA", url: "https://www.doane.edu/salesforce/activities/a2BUU000000dxLB2AY" },
  { name: "Dordt", division: "NAIA", url: "https://hello.dordt.edu/register/?id=2757044f-8e6b-4d56-a114-52d1fcee0399&sys:sport:sport=79c1a192-86ca-4e7d-8790-90e2da60f687" },
  { name: "Eastern Oregon University", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MjI2NTg=-amA++S4JsKY=&ptype=recruit" },
  { name: "Evangel University", division: "NAIA", url: "https://athlete.scorability.com/sign-in?watchlistId=3448801f-4326-468c-9b3b-30244c8a46e4" },
  { name: "Faulkner University", division: "NAIA", url: "https://faulknereagles.com/sb_output.aspx?form=10" },
  { name: "Florida Memorial University", division: "NAIA", url: "https://fmuathletics.com/sb_output.aspx?form=3" },
  { name: "Georgetown College", division: "NAIA", url: "https://questionnaires.armssoftware.com/94727036c090" },
  { name: "Graceland University", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MTg5MQ==-F6I0q5z6SeY=&ptype=recruit" },
  { name: "Grand View University", division: "NAIA", url: "https://gvvikings.com/sb_output.aspx?form=7" },
  { name: "Hastings College", division: "NAIA", url: "https://forms.arirecruiting.com/hastingscollege_football/GeneralRecruit" },
  { name: "Indiana Wesleyan University", division: "NAIA", url: "https://forms.office.com/pages/responsepage.aspx?id=9t5dAzMktkiFJnDKgYH3bRnE0YEhcs5PvANTpLCCqkNUQThHRjdSWDlYMTFOOUxUMDdVS0dYUklBSS4u&path=football&route=shorturl" },
  { name: "Judson University", division: "NAIA", url: "https://www.judsoneagles.com/recruiting_forms/fball" },
  { name: "Kansas Wesleyan University", division: "NAIA", url: "https://app.winwontech.com/questionnaire/kansas-wesleyan/football/2Cg8xMcPM4dHQkiQlS70" },
  { name: "kentucky christian university", division: "NAIA", url: "https://www.kcu.edu/athletic-recruit-request/" },
  { name: "Kentucky Christian University", division: "NAIA", url: "https://www.kcu.edu/athletic-recruit-request/" },
  { name: "Lawrence Technological University", division: "NAIA", url: "https://college.jumpforward.com/questionnaire.aspx?iid=1787&sportid=18" },
  { name: "Lindsey Wilson College", division: "NAIA", url: "https://lindseyathletics.com/sb_output.aspx?form=3" },
  { name: "Louisiana Christian University", division: "NAIA", url: "https://www.lcwildcats.net/sb_output.aspx?form=3" },
  { name: "LYON FB", division: "NAIA", url: "https://linktr.ee/lyonfbrecruitingform" },
  { name: "Madonna University", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MjM5NTU=-tXENfsPqgdY=&ptype=recruit" },
  { name: "Marian University – Indiana", division: "NAIA", url: "https://muknights.com/sb_output.aspx?form=3" },
  { name: "Mayville State University", division: "NAIA", url: "https://college.jumpforward.com/questionnaire.aspx?iid=1783&sportid=18" },
  { name: "McPherson College", division: "NAIA", url: "https://forms.arirecruiting.com/forms/McPherson.College.Football/form" },
  { name: "MidAmerica Nazarene University", division: "NAIA", url: "https://apply.mnu.edu/register/football" },
  { name: "Midland University", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MTk1NjM=-R/rC+sJhw9Y=&ptype=recrui" },
  { name: "Midway University", division: "NAIA", url: "https://gomidwayeagles.com/sb_output.aspx?form=12" },
  { name: "Missouri Baptist University", division: "NAIA", url: "https://app.spry.so/paperwork/missouri-baptist-university/mensfootball" },
  { name: "Missouri Valley College", division: "NAIA", url: "https://go.moval.edu/applynow/inquiryform" },
  { name: "Montana State University – Northern", division: "NAIA", url: "https://golightsgo.com/sb_output.aspx?form=7" },
  { name: "Montana Tech of the University of Montana", division: "NAIA", url: "https://godiggers.com/sb_output.aspx?form=3" },
  { name: "Morningside University", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MTUyODg=-lP4ogMaln3U=&ptype=recruit" },
  { name: "Northwestern College – Iowa", division: "NAIA", url: "https://questionnaires.armssoftware.com/67cf6d4944fe" },
  { name: "Oakland City University", division: "NAIA", url: "https://gomightyoaks.com/sb_output.aspx?form=3" },
  { name: "Oklahoma Panhandle State University", division: "NAIA", url: "https://opsuaggies.com/sb_output.aspx?form=5" },
  { name: "Olivet Nazarene University", division: "NAIA", url: "https://college.jumpforward.com/questionnaire.aspx?iid=1812&sportid=18" },
  { name: "Ottawa University", division: "NAIA", url: "https://ottawauniversity.my.salesforce-sites.com/inquiry/TargetX_Base__InquiryForm#?formId=a0BQj000001LHJpMAO&formType=general%E2%80%9D" },
  { name: "Peru State College", division: "NAIA", url: "https://my.peru.edu/athletics/inquiryform" },
  { name: "Point University", division: "NAIA", url: "https://skyhawkathletics.com/Recruits/football-interest-form" },
  { name: "Reinhardt University", division: "NAIA", url: "https://www.reinhardteagles.com/sports/Student-Athlete_Recruiting_Form" },
  { name: "Rocky Mountain College", division: "NAIA", url: "https://docs.google.com/forms/d/e/1FAIpQLSch6_dnQAXxZfbkV04Ch49FD4hba3Ky_rYWUMjjDx1ieN9a7Q/viewform" },
  { name: "Saint Xavier University", division: "NAIA", url: "https://sxucougars.com/sports/2023/3/23/10167_133240725203499591.aspx" },
  { name: "Simpson University", division: "NAIA", url: "https://simpsonu.edu/athletics/requestinfoathletics/" },
  { name: "Southeastern University", division: "NAIA", url: "https://questionnaires.armssoftware.com/246d91c47ae1" },
  { name: "Southern Oregon University", division: "NAIA", url: "https://docs.google.com/forms/d/1gwE5Y-xuSSj7XR0AKfEvWnTRez-nscl0sKWXOwRhL2M/viewform?edit_requested=true" },
  { name: "Southwestern College – Kansas", division: "NAIA", url: "https://scps.formstack.com/forms/mc_athletic_recruiting_football" },
  { name: "st thomas university", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MTk0MDk=-nssEktug0Bw=&ptype=recruit" },
  { name: "St. Ambrose University", division: "NAIA", url: "https://admit.sau.edu/register/recruiting" },
  { name: "Sterling College – Kansas", division: "NAIA", url: "https://sterlingcollege.prestosports.com/general/Football_Recruiting_Form" },
  { name: "Tabor College", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MzU1NQ==-rJSCfQyHLik=&ptype=recruit%27%20width=%27100%%27%20height=%275000%27" },
  { name: "Taylor University", division: "NAIA", url: "https://taylortrojans.com/sports/fball/fb_recruits" },
  { name: "Texas College", division: "NAIA", url: "https://www.tcsteersathletics.com/forms/Athlete_Interest_Form" },
  { name: "The College of Idaho", division: "NAIA", url: "https://docs.google.com/forms/d/e/1FAIpQLSfQIBSUuMZ94DMhFFcY1XOjexyknbSXakkpDVf_TVhJ_TWzpQ/viewform" },
  { name: "Thomas University", division: "NAIA", url: "https://tunighthawks.com/sb_output.aspx?form=3" },
  { name: "Union Commonwealth University", division: "NAIA", url: "https://gounionbulldogs.com/sports/fball/recruit_form" },
  { name: "university of pikeville", division: "NAIA", url: "https://upikebears.com/sb_output.aspx?form=3" },
  { name: "University of Saint Francis – Indiana", division: "NAIA", url: "https://www.saintfranciscougars.com/football-recruits-registration" },
  { name: "University of the Cumberlands", division: "NAIA", url: "https://cumberlandspatriots.com/sb_output.aspx?form=3" },
  { name: "Valley City State University", division: "NAIA", url: "https://vcsuvikings.com/sports/2023/1/26/8893_133192469594697361.aspx" },
  { name: "Waldorf University", division: "NAIA", url: "https://waldorfacquisitionllcdbawaldorfuni.my.salesforce-sites.com/inquiry/TargetX_Base__InquiryForm#?formId=a0CHs00001spD4AMAU&formType=general" },
  { name: "Wayland Baptist University", division: "NAIA", url: "https://admissions.wbu.edu/register/pioneer_football" },
  { name: "Webber", division: "NAIA", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=NTE1Mw==-qZnt+DLq7y8=&ptype=recruit&path=football" },
  { name: "William Penn University", division: "NAIA", url: "https://app.winwontech.com/questionnaire/william-penn-university/football/r0ss2N4SKuXiY4AFqRGC" },
  { name: "William Woods University", division: "NAIA", url: "https://docs.google.com/forms/d/e/1FAIpQLSefUWHBL9_8QXLVbJ17ncLa4oSnGe_miuyD1EuCXmlIFG51Tw/viewform" },
  { name: "Adams State", division: "D2", url: "https://questionnaires.armssoftware.com/0600ab064d24" },
  { name: "Albany State", division: "D2", url: "https://questionnaires.armssoftware.com/9bbfdfffb19c" },
  { name: "Allen", division: "D2", url: "https://questionnaires.armssoftware.com/42c2b39d84c9" },
  { name: "American International", division: "D2", url: "https://questionnaires.armssoftware.com/a4810dbf8cbe" },
  { name: "Arkansas Tech", division: "D2", url: "https://arkansastechsports.com/sb_output.aspx?frform=1&path=football" },
  { name: "Arkansas-Monticello", division: "D2", url: "https://www.uamsports.com/sb_output.aspx?form=4" },
  { name: "Ashland", division: "D2", url: "https://questionnaires.armssoftware.com/fb779b50b416" },
  { name: "Assumption", division: "D2", url: "https://questionnaires.armssoftware.com/b100ccaa730a" },
  { name: "Augustana (SD)", division: "D2", url: "https://questionnaires.armssoftware.com/1c413d0fd3ac" },
  { name: "Bemidji State", division: "D2", url: "https://questionnaires.armssoftware.com/d378f5107aff" },
  { name: "Benedict", division: "D2", url: "https://benedicttigers.com/sb_output.aspx?form=3" },
  { name: "Bentley", division: "D2", url: "https://questionnaires.armssoftware.com/de9c5d168823" },
  { name: "Black Hills State", division: "D2", url: "https://questionnaires.armssoftware.com/aafd298bc1c3" },
  { name: "Bloomsburg", division: "D2", url: "https://questionnaires.armssoftware.com/d135bff4cb3f" },
  { name: "Bluefield State", division: "D2", url: "https://docs.google.com/forms/d/e/1FAIpQLSeUsXt-sypnfS8Kllg2nLxJ5_1UpCvCpqQsJvGIKX6mF9ey-Q/viewform" },
  { name: "Bowie State", division: "D2", url: "https://bsubulldogs.com/sb_output.aspx?form=3" },
  { name: "California (PA)", division: "D2", url: "https://questionnaires.armssoftware.com/aae478e664c7" },
  { name: "Carson-Newman", division: "D2", url: "https://questionnaires.armssoftware.com/eecba3924389" },
  { name: "Catawba", division: "D2", url: "https://questionnaires.armssoftware.com/f33ac69c2efe" },
  { name: "Central Missouri", division: "D2", url: "https://questionnaires.armssoftware.com/759a9193936b" },
  { name: "Central Oklahoma", division: "D2", url: "https://questionnaires.armssoftware.com/4e64987dd835" },
  { name: "Central State (OH)", division: "D2", url: "https://maraudersports.com/sb_output.aspx?form=3" },
  { name: "Central Washington", division: "D2", url: "https://wildcatsports.com/sb_output.aspx?form=3" },
  { name: "Chadron State", division: "D2", url: "https://questionnaires.armssoftware.com/c171cc344985" },
  { name: "Charleston (WV)", division: "D2", url: "https://questionnaires.armssoftware.com/42478c4f940f" },
  { name: "Chowan", division: "D2", url: "https://gocuhawks.com/sb_output.aspx?form=3" },
  { name: "Clarion", division: "D2", url: "https://questionnaires.armssoftware.com/b1bc7e4964fe" },
  { name: "Clark Atlanta", division: "D2", url: "https://questionnaires.armssoftware.com/5ea180fcc0fb" },
  { name: "Colorado Mesa", division: "D2", url: "https://questionnaires.armssoftware.com/814c80fab2b4" },
  { name: "Colorado Mines", division: "D2", url: "https://questionnaires.armssoftware.com/6b9feb2d5656" },
  { name: "Concordia–St. Paul", division: "D2", url: "https://cspbears.com/sports/2014/7/21/FB_0721142914.aspx" },
  { name: "CSU Pueblo", division: "D2", url: "https://questionnaires.armssoftware.com/c965bf3e644e" },
  { name: "Davenport", division: "D2", url: "https://questionnaires.armssoftware.com/b8262114ecdf" },
  { name: "Delta State", division: "D2", url: "https://questionnaires.armssoftware.com/730c69ea09a2" },
  { name: "East Central", division: "D2", url: "https://ecutigers.com/sb_output.aspx?form=3" },
  { name: "East Stroudsburg", division: "D2", url: "https://questionnaires.armssoftware.com/c096c4aa54b2" },
  { name: "Eastern New Mexico", division: "D2", url: "https://questionnaires.armssoftware.com/4b093df9ac45" },
  { name: "Edinboro", division: "D2", url: "https://questionnaires.armssoftware.com/09ec29373cf7" },
  { name: "Emory & Henry", division: "D2", url: "https://questionnaires.armssoftware.com/c878e030ab9a" },
  { name: "Emporia State", division: "D2", url: "http://my.armssoftware.com/arms/public/questionnaire/ef1d80bc2212" },
  { name: "Erskine", division: "D2", url: "https://erskinesports.com/sb_output.aspx?form=3" },
  { name: "Fairmont State", division: "D2", url: "https://questionnaires.armssoftware.com/403e032f0bd0" },
  { name: "Fayetteville State", division: "D2", url: "https://fsubroncos.com/sb_output.aspx?form=12" },
  { name: "Ferris State", division: "D2", url: "https://docs.google.com/forms/d/e/1FAIpQLSccTOrkYlSFglmLOYHkKU-WCgMXVGhZlUwdAHXhnmuFxoCLag/viewform" },
  { name: "Ferrum", division: "D2", url: "https://questionnaires.armssoftware.com/7334096e69cb" },
  { name: "Findlay", division: "D2", url: "https://questionnaires.armssoftware.com/23d1d430c254" },
  { name: "Fort Hays State", division: "D2", url: "https://questionnaires.armssoftware.com/b935cea1ff7f" },
  { name: "Fort Lewis", division: "D2", url: "https://goskyhawks.com/sb_output.aspx?form=30" },
  { name: "Fort Valley State", division: "D2", url: "https://fvsusports.com/sb_output.aspx?form=3" },
  { name: "Franklin Pierce", division: "D2", url: "https://questionnaires.armssoftware.com/7ceb526a27b9" },
  { name: "Frostburg State", division: "D2", url: "https://questionnaires.armssoftware.com/210375186406" },
  { name: "Gannon", division: "D2", url: "https://questionnaires.armssoftware.com/a548a8143ff9" },
  { name: "Glenville State", division: "D2", url: "https://www.cognitoforms.com/GlenvilleStateCollege1/pioneerathleticsrecruitmentquestionnaire" },
  { name: "Harding", division: "D2", url: "https://hardingsports.com/sports/2025/5/14/prospective-student-athlete-form.aspx" },
  { name: "Henderson State", division: "D2", url: "https://questionnaires.armssoftware.com/f53b519255f2" },
  { name: "Hillsdale", division: "D2", url: "https://questionnaires.armssoftware.com/2ecbc53deb6a" },
  { name: "Jamestown", division: "D2", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=OTQ2MA==-8eR5eqjXx/Q=&ptype=Recruit" },
  { name: "Johnson C. Smith", division: "D2", url: "https://goldenbullsports.com/sb_output.aspx?form=3&&tab=4" },
  { name: "Kentucky State", division: "D2", url: "https://docs.google.com/forms/d/e/1FAIpQLSdo-oAKuTFzQ9yf3LZzl16S9I0vyjQ1RUEpbOYOuGp3ZNj2Yw/viewform" },
  { name: "Kentucky Wesleyan", division: "D2", url: "https://questionnaires.armssoftware.com/a8d24220ab02" },
  { name: "Kutztown", division: "D2", url: "https://questionnaires.armssoftware.com/b53971ecd6df" },
  { name: "Lake Erie", division: "D2", url: "https://questionnaires.armssoftware.com/ade8956ae640" },
  { name: "Lane", division: "D2", url: "https://golcdragons.com/sb_output.aspx?form=3" },
  { name: "Lenoir–Rhyne", division: "D2", url: "https://questionnaires.armssoftware.com/9f87b60990a3" },
  { name: "Lincoln (PA)", division: "D2", url: "https://questionnaires.armssoftware.com/cf52f3c2bf63" },
  { name: "Livingstone", division: "D2", url: "https://bluebearathletics.com/sb_output.aspx?form=3" },
  { name: "Lock Haven", division: "D2", url: "https://questionnaires.armssoftware.com/4b0148820178" },
  { name: "Mars Hill", division: "D2", url: "https://questionnaires.armssoftware.com/3c53f4939042" },
  { name: "Mary", division: "D2", url: "https://college.jumpforward.com/questionnaire.aspx?iid=1784&sportid=18" },
  { name: "McKendree", division: "D2", url: "https://questionnaires.armssoftware.com/7e5d8b9084df" },
  { name: "Michigan Tech", division: "D2", url: "https://questionnaires.armssoftware.com/5104c69f22b4" },
  { name: "Midwestern State", division: "D2", url: "https://questionnaires.armssoftware.com/64c85deac8bb" },
  { name: "Miles", division: "D2", url: "https://milesgoldenbears.com/sb_output.aspx?form=3" },
  { name: "Millersville", division: "D2", url: "https://questionnaires.armssoftware.com/2b06d027b120" },
  { name: "Minnesota State", division: "D2", url: "https://questionnaires.armssoftware.com/cbe67caed9e3" },
  { name: "Minot State", division: "D2", url: "https://questionnaires.armssoftware.com/5fddbdd685d5" },
  { name: "Missouri S&T", division: "D2", url: "https://questionnaires.armssoftware.com/7db0d273d7d8" },
  { name: "Missouri Southern", division: "D2", url: "https://questionnaires.armssoftware.com/701e43b44a0d" },
  { name: "Missouri Western", division: "D2", url: "https://questionnaires.armssoftware.com/ed8ddabe798b" },
  { name: "Morehouse", division: "D2", url: "https://morehouseathletics.com/sb_output.aspx?form=3" },
  { name: "MSU Moorhead", division: "D2", url: "https://www.msumdragons.com/sb_output.aspx?form=24" },
  { name: "Nebraska–Kearney", division: "D2", url: "https://questionnaires.armssoftware.com/2b8cf5e7c992" },
  { name: "New Mexico Highlands", division: "D2", url: "https://nmhuathletics.com/sb_output.aspx?form=3" },
  { name: "Newberry", division: "D2", url: "https://app.spry.so/paperwork/newberry-college/NewberryRecruits" },
  { name: "North Greenville", division: "D2", url: "https://www.nguathletics.com/sb_output.aspx?form=4" },
  { name: "Northeastern State", division: "D2", url: "https://questionnaires.armssoftware.com/57e2a0e4edc3" },
  { name: "Northern Michigan", division: "D2", url: "https://questionnaires.armssoftware.com/2b11e532b55b" },
  { name: "Northern State", division: "D2", url: "https://docs.google.com/forms/d/e/1FAIpQLScD8tGLcotD6sOxRrUP5U6hy_ZfTTlhRVXorfjEoDWOms2K8g/viewform" },
  { name: "Northwood", division: "D2", url: "https://application.northwood.edu/register/SAProspectForm" },
  { name: "NW Missouri State", division: "D2", url: "https://questionnaires.armssoftware.com/ba199dbde026" },
  { name: "NW Oklahoma State", division: "D2", url: "https://questionnaires.armssoftware.com/0cf702b36e56" },
  { name: "Ohio Dominican", division: "D2", url: "https://ohiodominicanpanthers.com/sb_output.aspx?form=7" },
  { name: "Oklahoma Baptist", division: "D2", url: "https://questionnaires.armssoftware.com/9abd093a59d1" },
  { name: "Pace", division: "D2", url: "https://questionnaires.armssoftware.com/a347f4725a3f" },
  { name: "Pittsburg State", division: "D2", url: "https://pittstategorillas.com/sb_output.aspx?form=3" },
  { name: "Post", division: "D2", url: "https://posteagles.com/sb_output.aspx?form=8&path=sprtftb" },
  { name: "Quincy", division: "D2", url: "https://questionnaires.armssoftware.com/382d6b0a1882" },
  { name: "Roosevelt", division: "D2", url: "https://rooseveltlakers.com/sb_output.aspx?form=3" },
  { name: "Saginaw Valley State", division: "D2", url: "https://questionnaires.armssoftware.com/7b1f6a7aa9bc" },
  { name: "Saint Anselm", division: "D2", url: "https://questionnaires.armssoftware.com/3bd072bd5f12" },
  { name: "Savannah State", division: "D2", url: "https://ssuathletics.com/sb_output.aspx?form=14" },
  { name: "SE Oklahoma State", division: "D2", url: "https://questionnaires.armssoftware.com/834126afe42e" },
  { name: "Seton Hill", division: "D2", url: "https://questionnaires.armssoftware.com/eb07191a467b" },
  { name: "Shepherd", division: "D2", url: "https://questionnaires.armssoftware.com/1df2f096dcf5" },
  { name: "Shippensburg", division: "D2", url: "https://questionnaires.armssoftware.com/ac510ffd1962" },
  { name: "Shorter", division: "D2", url: "https://college.jumpforward.com/questionnaire.aspx?iid=1734&sportid=18" },
  { name: "Sioux Falls", division: "D2", url: "https://app.spry.so/paperwork/university-of-sioux-falls/mensfootball" },
  { name: "Slippery Rock", division: "D2", url: "https://questionnaires.armssoftware.com/2ff1d7f558a8" },
  { name: "South Dakota Mines", division: "D2", url: "https://docs.google.com/forms/d/e/1FAIpQLSexLcq-OiBB_URHL7RYFCpNpEC0Cp2EKOYxviqnqnG-OnJ4YQ/viewform" },
  { name: "Southern Arkansas", division: "D2", url: "https://muleriderathletics.com/sb_output.aspx?form=23" },
  { name: "Southern Connecticut", division: "D2", url: "https://airtable.com/appdLVGpy1erlEOnj/shr7p71YjmzXYcGQn" },
  { name: "Southern Nazarene", division: "D2", url: "https://snu.elluciancrmrecruit.com/Apply/Account/Create?f=e9c8e48a-1634-44c0-8043-b0d4b931c9ce&o=c49f0e2d-fad5-4b7c-92bc-8af0325ea06f&IsInquiry=True" },
  { name: "Southwest Baptist", division: "D2", url: "https://questionnaires.armssoftware.com/c275cb11b48e" },
  { name: "Sul Ross", division: "D2", url: "https://questionnaires.armssoftware.com/541779241e8d" },
  { name: "SW Oklahoma State", division: "D2", url: "https://swosuathletics.com/sb_output.aspx?form=4" },
  { name: "Texas A&M–Kingsville", division: "D2", url: "https://javelinaathletics.com/sb_output.aspx?form=32" },
  { name: "Thomas More", division: "D2", url: "https://questionnaires.armssoftware.com/eeff89b47200" },
  { name: "Tiffin", division: "D2", url: "https://questionnaires.armssoftware.com/4850cce650f7" },
  { name: "Truman", division: "D2", url: "https://connect.truman.edu/register/AthleticProspectQuestionnaire" },
  { name: "Tusculum", division: "D2", url: "https://questionnaires.armssoftware.com/4b789221b442" },
  { name: "Tuskegee", division: "D2", url: "https://goldentigersports.com/sb_output.aspx?form=3" },
  { name: "UNC Pembroke", division: "D2", url: "https://questionnaires.armssoftware.com/f13f023492fb" },
  { name: "Upper Iowa", division: "D2", url: "https://docs.google.com/forms/d/e/1FAIpQLSfT0x1ZzMqMrqj4l6ZGClgDpyU1TL-jd1BDz0m8b9UoBh119w/viewform" },
  { name: "UT Permian Basin", division: "D2", url: "https://questionnaires.armssoftware.com/d77d8c6322a0" },
  { name: "UVA Wise", division: "D2", url: "https://questionnaires.armssoftware.com/eec45aac8ae5" },
  { name: "Valdosta State", division: "D2", url: "https://vstateblazers.com/sb_output.aspx?form=4" },
  { name: "Virginia State", division: "D2", url: "https://govsutrojans.com/sb_output.aspx?form=14&path=football" },
  { name: "Virginia Union", division: "D2", url: "https://vuusports.com/sb_output.aspx?form=3&path=football" },
  { name: "Walsh", division: "D2", url: "https://questionnaires.armssoftware.com/c56f642dcb23" },
  { name: "Washburn", division: "D2", url: "https://wusports.com/sb_output.aspx?form=4" },
  { name: "Wayne State (MI)", division: "D2", url: "https://questionnaires.armssoftware.com/6f5e29c77b3c" },
  { name: "Wayne State (NE)", division: "D2", url: "https://www.wsc.edu/get-recruited/football" },
  { name: "West Alabama", division: "D2", url: "https://questionnaires.armssoftware.com/a0c5b8874e91" },
  { name: "West Chester", division: "D2", url: "https://questionnaires.armssoftware.com/023ce109bb90" },
  { name: "West Florida", division: "D2", url: "https://goargos.com/sb_output.aspx?form=3" },
  { name: "West Liberty", division: "D2", url: "https://hilltoppersports.com/sb_output.aspx?form=3" },
  { name: "West Texas A&M", division: "D2", url: "https://gobuffsgo.com/sb_output.aspx?form=3" },
  { name: "West Virginia State", division: "D2", url: "https://docs.google.com/forms/d/e/1FAIpQLSfpDAKY8eerOUUS2so3BGjcOtevjnLq4eP0OjKletSvRZ9slA/viewform?vc=0&c=0&w=1" },
  { name: "West Virginia Wesleyan", division: "D2", url: "https://college.jumpforward.com/questionnaire.aspx?iid=1713&sportid=54" },
  { name: "Western Colorado", division: "D2", url: "https://questionnaires.armssoftware.com/9cb22f20110b?path=football" },
  { name: "Western New Mexico", division: "D2", url: "https://app.spry.so/paperwork/western-new-mexico-university/MustangFootball" },
  { name: "Western Oregon", division: "D2", url: "https://wouwolves.com/sb_output.aspx?form=62&path=football" },
  { name: "Wheeling", division: "D2", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=MTQ2MTI=-Jz2JxYd8w70=&ptype=recruit" },
  { name: "William Jewell", division: "D2", url: "https://questionnaires.armssoftware.com/00d4ac0b07e8" },
  { name: "Wingate", division: "D2", url: "https://questionnaires.armssoftware.com/32fa944328f7" },
  { name: "Winona State", division: "D2", url: "https://www.frontrush.com/FR_Web_App/Player/PlayerSubmit.aspx?sid=NDQyNQ==-296ZWBhLBuo=&ptype=recruit%27%20width=%27100%%27%20height=%27100%%27%3E%3C/iframe%3E" },
  { name: "University of Akron", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/3242f548bc75" },
  { name: "Appalachian State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/a6373a93722b" },
  { name: "Arizona State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/ab20d3134f9d" },
  { name: "Arkansas", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/567edf1eacb2" },
  { name: "Ball State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/489a56db71f3" },
  { name: "Baylor", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/aa72ebcc5cb6" },
  { name: "Boise State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/654c9875b45c" },
  { name: "Boston College", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/10bc896ebffd" },
  { name: "Bowling Green", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/da9ecb9101b1" },
  { name: "Buffalo", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/c2ff35d2eb21" },
  { name: "BYU", division: "D1 FBS", url: "https://www.byuathletemanager.com/Questionnaire/Form/1" },
  { name: "California", division: "D1 FBS", url: "https://cal.collegewarroom.com/Questionnaire/Form/Football" },
  { name: "Central Michigan", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/6b6c8f52db3f" },
  { name: "Charlotte", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/2b0570a8394a" },
  { name: "Cincinnati", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/d7c18b19b6cc" },
  { name: "Clemson", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/b61a225a2d5e" },
  { name: "Coastal Carolina", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/a68f185623e5" },
  { name: "Colorado State", division: "D1 FBS", url: "https://college.jumpforward.com/questionnaire.aspx?iid=1606&sportid=18" },
  { name: "Delaware", division: "D1 FBS", url: "https://www1.udel.edu/forms/sportsinfo/" },
  { name: "Duke", division: "D1 FBS", url: "https://duke.collegewarroom.com/Questionnaire/Form/1" },
  { name: "East Carolina", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/54e0439b932b" },
  { name: "Eastern Michigan", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/0b95647b5489?path=football" },
  { name: "Florida Atlantic", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/4f0d0d975c59" },
  { name: "FIU", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/fd78600856fe" },
  { name: "Fresno State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/43d0748bd98a" },
  { name: "Georgia", division: "D1 FBS", url: "https://my.armssoftware.com/arms/public/questionnaire/7443102ccb8e" },
  { name: "Georgia Tech", division: "D1 FBS", url: "https://ramblinwreck.com/student-athlete-questionnaire/" },
  { name: "Hawaiʻi", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/79737af39e0a" },
  { name: "Houston", division: "D1 FBS", url: "https://my.armssoftware.com/arms/public/questionnaire/9ff8090d45d9" },
  { name: "Illinois", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/5c988717357b" },
  { name: "Indiana", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/ee805559225c" },
  { name: "Georgia Southern", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/a23d05138b08" },
  { name: "James Madison", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/b649b94cfffd" },
  { name: "Kansas State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/8fd884a36fbc" },
  { name: "Liberty", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/174fa9a5d8bc" },
  { name: "Maryland", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/b37f2f0aac44" },
  { name: "Memphis", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/7deec5814344" },
  { name: "Miami (OH)", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/8ec82a98b444" },
  { name: "Middle Tennessee", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/3cbdaac68e8e" },
  { name: "NC State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/fa5122606469" },
  { name: "Nevada", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/6f8b6c2472a1" },
  { name: "New Mexico", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/fc6335185ee7" },
  { name: "Northwestern", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/be4d150daff0" },
  { name: "Notre Dame", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/f0393f4128e2" },
  { name: "Ohio", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/233a2d93ee59" },
  { name: "Oklahoma State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/6b59d5845a8c" },
  { name: "Old Dominion", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/68685a2e9eda" },
  { name: "Penn State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/24b0eed6eb01" },
  { name: "Pittsburgh", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/b0c551579d60" },
  { name: "Rutgers", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/581588caf234" },
  { name: "San Diego State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/16c63dea081e" },
  { name: "San Jose State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/a685a82d7583" },
  { name: "South Alabama", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/d043922d4bc0" },
  { name: "Southern Miss", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/8714178713d4" },
  { name: "Stanford", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/a1565868bdbf" },
  { name: "Syracuse", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/a413b021b677" },
  { name: "Toledo", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/97ef9cb72419" },
  { name: "Tulane", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/1c01a8dbf7a3" },
  { name: "UCF", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/316449b71334" },
  { name: "UCLA", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/74c822368ab9" },
  { name: "UConn", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/a34f74e9b093" },
  { name: "UMass", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/f2df0deb984d" },
  { name: "USC", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/b91abe2ae0c8" },
  { name: "Utah", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/c15fb5f63631" },
  { name: "Utah State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/6c5f86740feb" },
  { name: "UTSA", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/1a6c084f40d1" },
  { name: "Virginia", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/5eb2b0c4eed7" },
  { name: "Wake Forest", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/b35995e9775c" },
  { name: "Washington State", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/07fbe4e87211" },
  { name: "Wisconsin", division: "D1 FBS", url: "https://questionnaires.armssoftware.com/73384a600a7f" }
];

const camps = [
  { school: "Alabama State (Eddie Robinson Jr.)", division: "D1 FCS / SWAC", campName: "Prospect Camp #1", dates: "June 13, 2026", details: "All prospects", cost: "", registration: "Alabama State Athletics", notes: "#SwarmAS1" },
  { school: "Alabama State (Eddie Robinson Jr.)", division: "D1 FCS / SWAC", campName: "Prospect Camp #2", dates: "July 10, 2026", details: "All prospects", cost: "", registration: "Alabama State Athletics", notes: "" },
  { school: "Auburn University", division: "D1 FBS / SEC", campName: "One Day Camp", dates: "May 31, 2026", details: "All prospects; 5:00 PM", cost: "", registration: "auburnfootballcamps.org", notes: "Alex Golesh Football Camps" },
  { school: "Auburn University", division: "D1 FBS / SEC", campName: "One Day Camp", dates: "June 3, 2026", details: "All prospects; 5:00 PM", cost: "", registration: "auburnfootballcamps.org", notes: "" },
  { school: "Auburn University", division: "D1 FBS / SEC", campName: "One Day Camp", dates: "June 10, 2026", details: "All prospects; 5:00 PM", cost: "", registration: "auburnfootballcamps.org", notes: "" },
  { school: "Auburn University", division: "D1 FBS / SEC", campName: "One Day Camp", dates: "June 21, 2026", details: "All prospects; 5:00 PM", cost: "", registration: "auburnfootballcamps.org", notes: "" },
  { school: "Boston College", division: "D1 FBS / ACC", campName: "Under the Lights Clinic", dates: "June 2, 2026", details: "Grades 9-12", cost: "", registration: "bostoncollegefootball.totalcamps.com", notes: "Bill O'Brien Football Clinics" },
  { school: "Boston College", division: "D1 FBS / ACC", campName: "All Positions Clinic", dates: "June 7, 2026", details: "Grades 9-12", cost: "", registration: "bostoncollegefootball.totalcamps.com", notes: "" },
  { school: "Brock Spack Football Camps (Illinois State)", division: "D1 FCS / MVFC", campName: "One Day Camp", dates: "June 22, 2026 (AM)", details: "All prospects", cost: "", registration: "spackfootballcamps.com", notes: "" },
  { school: "Brock Spack Football Camps (Illinois State)", division: "D1 FCS / MVFC", campName: "Skill Camp", dates: "June 27, 2026 (PM)", details: "Skill positions", cost: "", registration: "spackfootballcamps.com", notes: "" },
  { school: "Brock Spack Football Camps (Illinois State)", division: "D1 FCS / MVFC", campName: "One Day Camp", dates: "June 28, 2026 (PM)", details: "All prospects", cost: "", registration: "spackfootballcamps.com", notes: "" },
  { school: "Brown University (James Perry Camps)", division: "D1 FCS / Ivy League", campName: "Football Camp", dates: "June 22, 2026", details: "All prospects; Sunday", cost: "", registration: "jamesperryfootballcamps.com", notes: "" },
  { school: "Brown University (James Perry Camps)", division: "D1 FCS / Ivy League", campName: "Football Camp", dates: "June 23, 2026", details: "All prospects; Monday", cost: "", registration: "jamesperryfootballcamps.com", notes: "" },
  { school: "Brown University (James Perry Camps)", division: "D1 FCS / Ivy League", campName: "Football Camp", dates: "June 25, 2026", details: "All prospects; Wednesday", cost: "", registration: "jamesperryfootballcamps.com", notes: "" },
  { school: "Brown University (James Perry Camps)", division: "D1 FCS / Ivy League", campName: "Football Camp", dates: "July 6, 2026", details: "All prospects; Sunday", cost: "", registration: "jamesperryfootballcamps.com", notes: "" },
  { school: "Brown University (James Perry Camps)", division: "D1 FCS / Ivy League", campName: "Football Camp", dates: "July 7, 2026", details: "All prospects; Monday", cost: "", registration: "jamesperryfootballcamps.com", notes: "" },
  { school: "Brown University (James Perry Camps)", division: "D1 FCS / Ivy League", campName: "Football Camp", dates: "July 9, 2026", details: "All prospects; Wednesday", cost: "", registration: "jamesperryfootballcamps.com", notes: "" },
  { school: "Brown University (James Perry Camps)", division: "D1 FCS / Ivy League", campName: "Football Camp", dates: "July 13, 2026", details: "All prospects; Sunday", cost: "", registration: "jamesperryfootballcamps.com", notes: "" },
  { school: "BYU", division: "D1 FBS / Big 12", campName: "Football Camp", dates: "June 1-3, 2026", details: "All prospects", cost: "", registration: "byusportscamps.com / 801-422-5724", notes: "" },
  { school: "BYU", division: "D1 FBS / Big 12", campName: "Football Camp", dates: "June 8-10, 2026", details: "All prospects", cost: "", registration: "byusportscamps.com / 801-422-5724", notes: "" },
  { school: "BYU", division: "D1 FBS / Big 12", campName: "Special Teams Camp", dates: "June 10, 2026", details: "All prospects", cost: "", registration: "byusportscamps.com / 801-422-5724", notes: "" },
  { school: "Charlotte (UNCC)", division: "D1 FBS / AAC", campName: "Skill Camp", dates: "June 2, 2026", details: "All prospects", cost: "", registration: "Jerry Richardson Stadium", notes: "" },
  { school: "Charlotte (UNCC)", division: "D1 FBS / AAC", campName: "Prospect Camp", dates: "June 9, 2026", details: "All prospects", cost: "", registration: "Jerry Richardson Stadium", notes: "" },
  { school: "Charlotte (UNCC)", division: "D1 FBS / AAC", campName: "Skill Camp", dates: "June 16, 2026", details: "All prospects", cost: "", registration: "Jerry Richardson Stadium", notes: "" },
  { school: "Charlotte (UNCC)", division: "D1 FBS / AAC", campName: "Prospect Camp", dates: "June 18, 2026", details: "All prospects", cost: "", registration: "Jerry Richardson Stadium", notes: "" },
  { school: "Clemson", division: "D1 FBS / ACC", campName: "Dabo Swinney – High School Camp #1 (Rising 8th-12th)", dates: "June 2, 2026", details: "All prospects", cost: "", registration: "Clemson Athletics", notes: "" },
  { school: "Clemson", division: "D1 FBS / ACC", campName: "Dabo Swinney – High School Camp #2 (Rising 8th-12th)", dates: "June 3, 2026", details: "All prospects", cost: "", registration: "Clemson Athletics", notes: "" },
  { school: "Clemson", division: "D1 FBS / ACC", campName: "Dabo Swinney – High School Camp #3 Overnight (Rising 8th-12th)", dates: "June 5-6, 2026", details: "All prospects", cost: "", registration: "Clemson Athletics", notes: "" },
  { school: "David Bowser Football Camps (SIAC)", division: "Independent / Multi-School", campName: "All Prospects Showcase Camp #1", dates: "June 11, 2026", details: "All prospects", cost: "", registration: "SIAC / David Bowser", notes: "" },
  { school: "David Bowser Football Camps (SIAC)", division: "Independent / Multi-School", campName: "All Prospects Showcase Camp #2", dates: "July 16, 2026", details: "All prospects", cost: "", registration: "SIAC / David Bowser", notes: "" },
  { school: "Davidson College", division: "D1 FCS / Pioneer League", campName: "Saj Thakkar – National Academic Camp", dates: "June 13, 2026", details: "All prospects", cost: "", registration: "davidsonfootball.totalcamps.com", notes: "" },
  { school: "Davidson College", division: "D1 FCS / Pioneer League", campName: "Saj Thakkar – Prospect Camp", dates: "July 18, 2026", details: "All prospects", cost: "", registration: "davidsonfootball.totalcamps.com", notes: "" },
  { school: "Dialleo Burks Sr. Prospect Showcase", division: "Independent / Multi-School", campName: "Prospect Showcase Camp I", dates: "February 21, 2026", details: "Grad Classes 2025-2028 & Portal Transfers; all positions incl. P/K/LS; 8AM-1PM", cost: "$54 ($50+$4 fee)", registration: "ster.ryzer.com", notes: "Location: 13895 US-27, Lake Wales, FL 33859; transcripts required for transfers" },
  { school: "Drake University", division: "D1 FCS / Pioneer League", campName: "Prospect Camp", dates: "June 3, 2026", details: "All prospects", cost: "", registration: "Drake University (QR code)", notes: "" },
  { school: "Drake University", division: "D1 FCS / Pioneer League", campName: "Prospect Camp", dates: "June 12, 2026", details: "All prospects", cost: "", registration: "Drake University (QR code)", notes: "" },
  { school: "Drake University", division: "D1 FCS / Pioneer League", campName: "Prospect Camp", dates: "June 14, 2026", details: "All prospects", cost: "", registration: "Drake University (QR code)", notes: "" },
  { school: "Drake University", division: "D1 FCS / Pioneer League", campName: "Prospect Camp", dates: "June 27, 2026", details: "All prospects", cost: "", registration: "Drake University (QR code)", notes: "" },
  { school: "Duke University", division: "D1 FBS / ACC", campName: "Indy Camp", dates: "June 11, 2026", details: "Individual players", cost: "", registration: "dukefootballcamps.totalcamps.com", notes: "Manny Diaz Football Camps; ACC Champs" },
  { school: "Duke University", division: "D1 FBS / ACC", campName: "Academic Mega Camp", dates: "June 14, 2026", details: "All prospects; academic focus", cost: "", registration: "dukefootballcamps.totalcamps.com", notes: "" },
  { school: "East Carolina (ECU)", division: "D1 FBS / AAC", campName: "Blake Harrell – Mega Camp", dates: "May 31, 2026", details: "All prospects", cost: "", registration: "blakeharrellfootballcampsllc.com", notes: "" },
  { school: "East Carolina (ECU)", division: "D1 FBS / AAC", campName: "Blake Harrell – 1 Day Camp", dates: "June 14, 2026", details: "All prospects", cost: "", registration: "blakeharrellfootballcampsllc.com", notes: "" },
  { school: "East Carolina (ECU)", division: "D1 FBS / AAC", campName: "Blake Harrell – Jr. Pirates Camp", dates: "June 15-17, 2026", details: "All prospects", cost: "", registration: "blakeharrellfootballcampsllc.com", notes: "" },
  { school: "Eastern Illinois University", division: "D1 FCS / OVC", campName: "Prospect Camp #1", dates: "June 7, 2026", details: "All prospects", cost: "", registration: "eiupanthers.com", notes: "" },
  { school: "Eastern Illinois University", division: "D1 FCS / OVC", campName: "Under the Lights Prospect Camp", dates: "June 19, 2026", details: "All prospects", cost: "", registration: "eiupanthers.com", notes: "" },
  { school: "Eastern Illinois University", division: "D1 FCS / OVC", campName: "Prospect Camp #2", dates: "July 19, 2026", details: "All prospects", cost: "", registration: "eiupanthers.com", notes: "" },
  { school: "ETSU", division: "D1 FCS / SoCon", campName: "Will Healy – Mega Camp", dates: "May 30, 2026", details: "All prospects", cost: "", registration: "etsufootball.ryzerevents.com", notes: "" },
  { school: "ETSU", division: "D1 FCS / SoCon", campName: "Will Healy – Prospect Camp", dates: "June 6, 2026", details: "All prospects", cost: "", registration: "etsufootball.ryzerevents.com", notes: "" },
  { school: "ETSU", division: "D1 FCS / SoCon", campName: "Will Healy – Friday Night Lights", dates: "June 19, 2026", details: "All prospects", cost: "", registration: "etsufootball.ryzerevents.com", notes: "" },
  { school: "Florida Atlantic (FAU)", division: "D1 FBS / AAC", campName: "FAU/FSU Skills Camp", dates: "June 4, 2026", details: "Skills positions", cost: "", registration: "More info coming soon", notes: "Zach Kittley Football Camps" },
  { school: "Florida Atlantic (FAU)", division: "D1 FBS / AAC", campName: "FAU Skills Camp", dates: "June 10, 2026", details: "Skills positions", cost: "", registration: "More info coming soon", notes: "Zach Kittley Football Camps" },
  { school: "Florida Atlantic University (FAU)", division: "D1 FBS / AAC", campName: "Skills Camp", dates: "June 15, 2026", details: "Skill positions; Session A AM / Session B PM", cost: "", registration: "FAU Athletics", notes: "HC Zach Kittley" },
  { school: "Fresno State", division: "D1 FBS / Mountain West", campName: "Junior College Showcase", dates: "May 31, 2026", details: "JUCO prospects", cost: "", registration: "fresnostatefootballcamps.com", notes: "" },
  { school: "Fresno State", division: "D1 FBS / Mountain West", campName: "Central Valley Showcase", dates: "June 13, 2026", details: "All prospects", cost: "", registration: "fresnostatefootballcamps.com", notes: "" },
  { school: "Fresno State", division: "D1 FBS / Mountain West", campName: "Friday Night Lights Camp", dates: "June 19, 2026", details: "All prospects", cost: "", registration: "fresnostatefootballcamps.com", notes: "" },
  { school: "Gabe Giardina Football Camps", division: "Independent / Multi-School", campName: "Prospect Camp", dates: "June 6, 2026", details: "All prospects; Saturday", cost: "", registration: "gabegiardinafbcamps.com", notes: "" },
  { school: "Gabe Giardina Football Camps", division: "Independent / Multi-School", campName: "Prospect Camp", dates: "July 10, 2026", details: "All prospects; Friday", cost: "", registration: "gabegiardinafbcamps.com", notes: "" },
  { school: "Georgia Tech (Brent Key)", division: "D1 FBS / ACC", campName: "Prospect Camp", dates: "June 4, 2026", details: "All prospects", cost: "", registration: "Georgia Tech Athletics (QR code)", notes: "" },
  { school: "Georgia Tech (Brent Key)", division: "D1 FBS / ACC", campName: "Prospect Camp", dates: "June 8, 2026", details: "All prospects", cost: "", registration: "Georgia Tech Athletics (QR code)", notes: "" },
  { school: "Idaho State", division: "D1 FCS / Big Sky", campName: "Prospect Camp", dates: "June 12, 2026", details: "All prospects", cost: "", registration: "idahostatefootballcamps.com", notes: "" },
  { school: "Idaho State", division: "D1 FCS / Big Sky", campName: "Prospect Camp", dates: "July 17, 2026", details: "All prospects", cost: "", registration: "idahostatefootballcamps.com", notes: "" },
  { school: "Jacksonville State (Jax State)", division: "D1 FCS / CUSA", campName: "Prospect Camp", dates: "June 1, 2026", details: "All prospects", cost: "", registration: "charleskellyfootballcamps.com", notes: "" },
  { school: "Jacksonville State (Jax State)", division: "D1 FCS / CUSA", campName: "Prospect Camp", dates: "June 11, 2026", details: "All prospects", cost: "", registration: "charleskellyfootballcamps.com", notes: "" },
  { school: "Jon Poppe Football Camps", division: "Independent / Multi-School", campName: "Camp", dates: "June 7, 2026", details: "All positions; start 8:15AM", cost: "", registration: "jonpoppefootball.totalcamps.com", notes: "" },
  { school: "Jon Poppe Football Camps", division: "Independent / Multi-School", campName: "Camp", dates: "June 23, 2026", details: "All positions; start 8:15AM", cost: "", registration: "jonpoppefootball.totalcamps.com", notes: "" },
  { school: "Jon Poppe Football Camps", division: "Independent / Multi-School", campName: "Camp", dates: "June 25, 2026", details: "All positions; start 8:15AM", cost: "", registration: "jonpoppefootball.totalcamps.com", notes: "" },
  { school: "Jon Poppe Football Camps", division: "Independent / Multi-School", campName: "Camp", dates: "July 7, 2026", details: "All positions; start 8:15AM", cost: "", registration: "jonpoppefootball.totalcamps.com", notes: "" },
  { school: "Jon Poppe Football Camps", division: "Independent / Multi-School", campName: "Camp", dates: "July 9, 2026", details: "All positions; start 8:15AM", cost: "", registration: "jonpoppefootball.totalcamps.com", notes: "" },
  { school: "Keiser University", division: "NAIA / Sun Conference", campName: "Running Backs & Linebackers Showcase", dates: "June 6, 2026", details: "RB/LB; 8:30-11:30 AM", cost: "$40", registration: "Contact: cortiztorres@keiseruniversity.edu", notes: "Location: 2800 N. Military Trail, West Palm Beach, FL 33409" },
  { school: "Keiser University", division: "NAIA / Sun Conference", campName: "DB Ball Hawk Showcase", dates: "June 6, 2026", details: "DB; 8:30-11:30 AM", cost: "$40", registration: "Contact: cortiztorres@keiseruniversity.edu", notes: "Location: West Palm Beach, FL" },
  { school: "Kennesaw State University", division: "D1 FBS / C-USA", campName: "Big Mack Mega Camp", dates: "June 2, 2026", details: "All prospects", cost: "", registration: "kennesawstatefootball.totalcamps.com", notes: "" },
  { school: "Kennesaw State University", division: "D1 FBS / C-USA", campName: "Big Mack Mega Camp", dates: "June 4, 2026", details: "All prospects", cost: "", registration: "kennesawstatefootball.totalcamps.com", notes: "" },
  { school: "Kent State", division: "D1 FBS / MAC", campName: "MACtion Indy Camp", dates: "June 3, 2026", details: "Grades 9-12", cost: "", registration: "Kent State Athletics", notes: "" },
  { school: "Kent State", division: "D1 FBS / MAC", campName: "Friday Night Lights", dates: "June 12, 2026", details: "Grades 9-12", cost: "", registration: "Kent State Athletics", notes: "" },
  { school: "Kent State", division: "D1 FBS / MAC", campName: "MACtion Indy Camp", dates: "June 17, 2026", details: "Grades 9-12", cost: "", registration: "Kent State Athletics", notes: "" },
  { school: "Lafayette College", division: "D1 FCS / Patriot League", campName: "Prospect Camp", dates: "June 18, 2026", details: "All HS grades; Fisher Stadium", cost: "", registration: "Lafayette Athletics", notes: "" },
  { school: "Lafayette College", division: "D1 FCS / Patriot League", campName: "Prospect Camp", dates: "July 14, 2026", details: "All HS grades; Fisher Stadium", cost: "", registration: "Lafayette Athletics", notes: "" },
  { school: "Lehigh University (Brown & White Camp)", division: "D1 FCS / Patriot League", campName: "High School Prospect Camp", dates: "June 17, 2026", details: "HS prospects; 4PM-7PM", cost: "", registration: "brownandwhitefootballcamp.com", notes: "" },
  { school: "Lehigh University (Brown & White Camp)", division: "D1 FCS / Patriot League", campName: "High School Prospect Camp", dates: "June 24, 2026", details: "HS prospects; 4PM-7PM", cost: "", registration: "brownandwhitefootballcamp.com", notes: "" },
  { school: "Lehigh University (Brown & White Camp)", division: "D1 FCS / Patriot League", campName: "High School Prospect Camp", dates: "July 22, 2026", details: "HS prospects; 4PM-7PM", cost: "", registration: "brownandwhitefootballcamp.com", notes: "" },
  { school: "Livingstone College", division: "D2 / CIAA", campName: "Prospect Camp #1", dates: "June 30, 2026", details: "All prospects", cost: "", registration: "Livingstone Athletics", notes: "" },
  { school: "Livingstone College", division: "D2 / CIAA", campName: "Prospect Camp #2", dates: "July 22, 2026", details: "All prospects", cost: "", registration: "Livingstone Athletics", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - Atlanta, GA", dates: "April 25, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - Southern GA", dates: "April 26, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - Richmond, VA", dates: "May 6, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - VA Beach", dates: "May 8, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - Northern VA", dates: "May 9, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - Charlotte, NC", dates: "May 15, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - Jacksonville, FL", dates: "May 26, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - Tallahassee, FL", dates: "May 27, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - Orlando, FL", dates: "May 28, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - Tampa, FL", dates: "May 29, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Mark Hall Football Camp Tour", division: "Independent / Multi-School", campName: "Camp Tour - Palm Beach, FL", dates: "May 30, 2026", details: "All prospects", cost: "", registration: "markhallfootballcamps.com", notes: "" },
  { school: "Marshall", division: "D1 FBS / Sun Belt", campName: "Tony Gibson – HS Prospect Camp", dates: "June 5, 2026", details: "All prospects", cost: "", registration: "tonygibsonfootballcamps.com", notes: "" },
  { school: "Marshall", division: "D1 FBS / Sun Belt", campName: "Tony Gibson – HS Prospect Camp", dates: "June 11, 2026", details: "All prospects", cost: "", registration: "tonygibsonfootballcamps.com", notes: "" },
  { school: "Marshall", division: "D1 FBS / Sun Belt", campName: "Tony Gibson – HS Prospect Camp", dates: "June 12, 2026", details: "All prospects", cost: "", registration: "tonygibsonfootballcamps.com", notes: "" },
  { school: "Middle Tennessee (MTSU)", division: "D1 FBS / C-USA", campName: "Derek Mason – Elite Camp", dates: "June 12, 2026", details: "All prospects", cost: "", registration: "coachderekmasonfootballcamps.com", notes: "" },
  { school: "Middle Tennessee (MTSU)", division: "D1 FBS / C-USA", campName: "Derek Mason – Elite Camp", dates: "June 17, 2026", details: "All prospects", cost: "", registration: "coachderekmasonfootballcamps.com", notes: "" },
  { school: "Middle Tennessee (MTSU)", division: "D1 FBS / C-USA", campName: "Derek Mason – Elite Camp", dates: "June 18, 2026", details: "All prospects", cost: "", registration: "coachderekmasonfootballcamps.com", notes: "" },
  { school: "Middle Tennessee (MTSU)", division: "D1 FBS / C-USA", campName: "Derek Mason – Friday Night Lights", dates: "June 19, 2026", details: "All prospects", cost: "", registration: "coachderekmasonfootballcamps.com", notes: "" },
  { school: "Millsaps College", division: "D3 / SAA", campName: "Friday Night Lights", dates: "April 10, 2026", details: "6PM-9PM; registration starts 5:30PM", cost: "", registration: "Millsaps Athletics (QR code)", notes: "" },
  { school: "Minot State University", division: "D2 / NSAA", campName: "Elite Prospect Camp", dates: "July 11, 2026", details: "All prospects", cost: "", registration: "minotstatefootballcamps.totalcamps.com", notes: "" },
  { school: "Missouri S&T", division: "D2 / GLVC", campName: "Prospect Camp", dates: "May 9, 2026", details: "All prospects; Allgood-Bailey Stadium", cost: "", registration: "minerfootballcamps.com", notes: "" },
  { school: "Missouri S&T", division: "D2 / GLVC", campName: "Prospect Camp", dates: "July 17, 2026", details: "All prospects; Allgood-Bailey Stadium", cost: "", registration: "minerfootballcamps.com", notes: "" },
  { school: "Monmouth University", division: "D1 FCS / CAA", campName: "Prospect Camp 1", dates: "June 7, 2026", details: "All prospects; Sunday", cost: "", registration: "monmouthfootballcamp.com", notes: "" },
  { school: "Monmouth University", division: "D1 FCS / CAA", campName: "Prospect Camp 2", dates: "June 11, 2026", details: "All prospects; Thursday", cost: "", registration: "monmouthfootballcamp.com", notes: "" },
  { school: "Monmouth University", division: "D1 FCS / CAA", campName: "Prospect Camp 3", dates: "June 14, 2026", details: "All prospects; Sunday", cost: "", registration: "monmouthfootballcamp.com", notes: "" },
  { school: "Monmouth University", division: "D1 FCS / CAA", campName: "Prospect Camp 4", dates: "June 17, 2026", details: "All prospects; Wednesday", cost: "", registration: "monmouthfootballcamp.com", notes: "" },
  { school: "Montana State", division: "D1 FCS / Big Sky", campName: "Individual Camp #1 (HS)", dates: "May 31, 2026", details: "All prospects", cost: "", registration: "Montana State Athletics", notes: "" },
  { school: "Montana State", division: "D1 FCS / Big Sky", campName: "Friday Night Lights – Individual Camp #2 (HS)", dates: "June 26, 2026", details: "All prospects", cost: "", registration: "Montana State Athletics", notes: "" },
  { school: "NC State (Dave Doeren)", division: "D1 FBS / ACC", campName: "1 Day Camp", dates: "May 31, 2026", details: "All prospects; 3PM-6PM", cost: "", registration: "davedoerenfootballcamps.com", notes: "Location: NC State Wolfpack Football Complex, 4550 Trinity Rd, Raleigh NC 27607" },
  { school: "NC State (Dave Doeren)", division: "D1 FBS / ACC", campName: "1 Day Camp", dates: "June 7, 2026", details: "All prospects; 3PM-6PM", cost: "", registration: "davedoerenfootballcamps.com", notes: "" },
  { school: "NC State (Dave Doeren)", division: "D1 FBS / ACC", campName: "1 Day Camp", dates: "June 11, 2026", details: "All prospects; 11AM-3PM", cost: "", registration: "davedoerenfootballcamps.com", notes: "" },
  { school: "NC State (Dave Doeren)", division: "D1 FBS / ACC", campName: "1 Day Camp", dates: "June 14, 2026", details: "All prospects; 3PM-6PM", cost: "", registration: "davedoerenfootballcamps.com", notes: "" },
  { school: "NDSU", division: "D1 FCS / MVFC", campName: "HS Indy Camp – Session 1", dates: "June 12-14, 2026", details: "All prospects", cost: "", registration: "ndsufootballcamps.com", notes: "" },
  { school: "NDSU", division: "D1 FCS / MVFC", campName: "HS Indy Camp – Session 2", dates: "June 19-21, 2026", details: "All prospects", cost: "", registration: "ndsufootballcamps.com", notes: "" },
  { school: "Nevada Wolf Pack", division: "D1 FBS / Mountain West", campName: "Indy Camp", dates: "June 7, 2026", details: "All positions; 10AM-1PM", cost: "", registration: "nevadafootballcamps.com", notes: "" },
  { school: "Nevada Wolf Pack", division: "D1 FBS / Mountain West", campName: "Indy Camp", dates: "June 14, 2026", details: "All positions; 10AM-1PM", cost: "", registration: "nevadafootballcamps.com", notes: "" },
  { school: "Northern Arizona", division: "D1 FCS / Big Sky", campName: "Indy Camp", dates: "June 7, 2026", details: "All prospects", cost: "", registration: "brianwrightfootball.totalcamps.com", notes: "" },
  { school: "Northern Arizona", division: "D1 FCS / Big Sky", campName: "Indy Camp", dates: "June 14, 2026", details: "All prospects", cost: "", registration: "brianwrightfootball.totalcamps.com", notes: "" },
  { school: "Northern Arizona", division: "D1 FCS / Big Sky", campName: "Mega Camp", dates: "June 18, 2026", details: "All prospects", cost: "", registration: "brianwrightfootball.totalcamps.com", notes: "" },
  { school: "Northern Arizona", division: "D1 FCS / Big Sky", campName: "Mega Camp", dates: "June 19, 2026", details: "All prospects", cost: "", registration: "brianwrightfootball.totalcamps.com", notes: "" },
  { school: "Northern Iowa (UNI)", division: "D1 FCS / MVFC", campName: "Prospect Camp", dates: "May 31, 2026", details: "All prospects", cost: "", registration: "unifbcamps.com", notes: "" },
  { school: "Northern Iowa (UNI)", division: "D1 FCS / MVFC", campName: "Prospect Camp", dates: "June 7, 2026", details: "All prospects", cost: "", registration: "unifbcamps.com", notes: "" },
  { school: "Northern Iowa (UNI)", division: "D1 FCS / MVFC", campName: "Prospect Camp", dates: "July 12, 2026", details: "All prospects", cost: "", registration: "unifbcamps.com", notes: "" },
  { school: "Northern Iowa (UNI)", division: "D1 FCS / MVFC", campName: "Prospect Camp", dates: "July 19, 2026", details: "All prospects", cost: "", registration: "unifbcamps.com", notes: "" },
  { school: "Northwest Missouri State", division: "D2 / MIAA", campName: "Prospect Camp", dates: "June 21, 2026", details: "Prospects", cost: "", registration: "Northwest Missouri State Athletics", notes: "" },
  { school: "Northwest Missouri State", division: "D2 / MIAA", campName: "Prospect Camp", dates: "July 19, 2026", details: "Prospects", cost: "", registration: "Northwest Missouri State Athletics", notes: "" },
  { school: "Northwestern", division: "D1 FBS / Big Ten", campName: "David Braun – Skill Showcase S1", dates: "June 5 PM, 2026", details: "All prospects", cost: "", registration: "davidbraunfootballcamps.com", notes: "" },
  { school: "Northwestern", division: "D1 FBS / Big Ten", campName: "David Braun – Skill Showcase S2", dates: "June 6 AM, 2026", details: "All prospects", cost: "", registration: "davidbraunfootballcamps.com", notes: "" },
  { school: "Northwestern", division: "D1 FBS / Big Ten", campName: "David Braun – Underclassmen Showcase", dates: "June 7 AM, 2026", details: "All prospects", cost: "", registration: "davidbraunfootballcamps.com", notes: "" },
  { school: "Old Dominion University (ODU)", division: "D1 FBS / Sun Belt", campName: "Elite Mega Camp Session I", dates: "May 31, 2026", details: "All prospects", cost: "", registration: "RahneFootballCamps.com", notes: "#PlayByTheBay" },
  { school: "Old Dominion University (ODU)", division: "D1 FBS / Sun Belt", campName: "Elite Mega Camp Session II", dates: "June 6, 2026", details: "All prospects", cost: "", registration: "RahneFootballCamps.com", notes: "" },
  { school: "Old Dominion University (ODU)", division: "D1 FBS / Sun Belt", campName: "Elite Mega Camp Session III", dates: "June 14, 2026", details: "All prospects", cost: "", registration: "RahneFootballCamps.com", notes: "" },
  { school: "Old Dominion University (ODU)", division: "D1 FBS / Sun Belt", campName: "Elite Mega Camp Session IV", dates: "June 20, 2026", details: "All prospects", cost: "", registration: "RahneFootballCamps.com", notes: "" },
  { school: "Penn State", division: "D1 FBS / Big Ten", campName: "Prospect Camp 1", dates: "June 3, 2026", details: "All prospects", cost: "", registration: "Penn State Football", notes: "" },
  { school: "Penn State", division: "D1 FBS / Big Ten", campName: "Prospect Camp 2", dates: "June 10, 2026", details: "All prospects", cost: "", registration: "Penn State Football", notes: "" },
  { school: "Penn State", division: "D1 FBS / Big Ten", campName: "Prospect Camp 3", dates: "June 17, 2026", details: "All prospects", cost: "", registration: "Penn State Football", notes: "" },
  { school: "Pittsburg State (Tom Anthony Camps)", division: "D2 / MIAA", campName: "HS Mega Camp (Padded)", dates: "June 12, 2026", details: "High school; padded", cost: "", registration: "tomanthonyfootballcamps.com", notes: "" },
  { school: "Pittsburg State (Tom Anthony Camps)", division: "D2 / MIAA", campName: "Prospect Camp (Padded)", dates: "July 25, 2026", details: "Prospects; padded", cost: "", registration: "tomanthonyfootballcamps.com", notes: "" },
  { school: "PSR NJ Camp", division: "Independent / Multi-School", campName: "PSR NJ Prospect Camp", dates: "May 9, 2026", details: "All prospects; starts 1PM", cost: "", registration: "psrbig.com", notes: "Location: Monroe Township High School, Monroe, NJ" },
  { school: "Purdue University", division: "D1 FBS / Big Ten", campName: "One Day Prospect Camp", dates: "June 7, 2026", details: "All prospects; starts 3:00 PM", cost: "$50", registration: "purduefootballcamps.com", notes: "" },
  { school: "Purdue University", division: "D1 FBS / Big Ten", campName: "One Day Prospect Camp", dates: "June 14, 2026", details: "All prospects; starts 3:00 PM", cost: "$50", registration: "purduefootballcamps.com", notes: "" },
  { school: "Purdue University", division: "D1 FBS / Big Ten", campName: "One Day Prospect Camp", dates: "June 17, 2026", details: "All prospects; starts 3:00 PM", cost: "$50", registration: "purduefootballcamps.com", notes: "" },
  { school: "Purdue University", division: "D1 FBS / Big Ten", campName: "One Day Prospect Camp", dates: "June 20, 2026", details: "All prospects; starts 3:00 PM", cost: "$50", registration: "purduefootballcamps.com", notes: "" },
  { school: "Raymond Woodie Jr. Football Camps", division: "Independent / Multi-School", campName: "High School Prospect Camp", dates: "June 27, 2026 (AM)", details: "HS prospects", cost: "", registration: "www.linktr.ee/rwjcamps", notes: "Location: Daytona Beach, FL" },
  { school: "Sacramento State", division: "D1 FCS / Big Sky", campName: "Rising Stars Mega Camp", dates: "June 9-10, 2026", details: "All prospects", cost: "", registration: "Sac State Athletics", notes: "" },
  { school: "Sam Houston State", division: "D1 FBS / C-USA", campName: "Kat Attack Camp", dates: "June 18, 2026", details: "All prospects", cost: "", registration: "katattackfootball.com", notes: "" },
  { school: "Sam Houston State", division: "D1 FBS / C-USA", campName: "Kat Attack Camp", dates: "June 19, 2026", details: "All prospects", cost: "", registration: "katattackfootball.com", notes: "" },
  { school: "Sam Houston State", division: "D1 FBS / C-USA", campName: "Kat Attack Camp", dates: "June 20, 2026", details: "All prospects", cost: "", registration: "katattackfootball.com", notes: "" },
  { school: "Sam Houston State", division: "D1 FBS / C-USA", campName: "Kat Attack Camp", dates: "June 21, 2026", details: "All prospects", cost: "", registration: "katattackfootball.com", notes: "" },
  { school: "San Diego State", division: "D1 FBS / Mountain West", campName: "Mega Camp – Skills Session", dates: "June 3, 2026", details: "WR, DB, QB (C/O 2027-2028); 10:45 AM & 6:45 PM sessions", cost: "", registration: "aztecfootballcamps.totalcamps.com", notes: "Multi-school D1 coaching staffs; also Mids/Bigs sessions" },
  { school: "San Diego State", division: "D1 FBS / Mountain West", campName: "Mega Camp – Mids Session", dates: "June 3, 2026", details: "RB, FB, TE, LB, QB (C/O 2029-2030); 9:45 AM & 5:45 PM", cost: "", registration: "aztecfootballcamps.totalcamps.com", notes: "" },
  { school: "Slippery Rock University", division: "D2 / PSAC", campName: "Prospect Camp", dates: "May 3, 2026", details: "All prospects", cost: "", registration: "Slippery Rock Athletics (QR)", notes: "" },
  { school: "South Dakota State", division: "D1 FCS / MVFC", campName: "Prospect Camp", dates: "June 8, 2026", details: "All prospects; link in bio", cost: "", registration: "SDSU Athletics (QR code)", notes: "Jackrabbit Camps" },
  { school: "South Dakota State", division: "D1 FCS / MVFC", campName: "Prospect Camp", dates: "June 18, 2026", details: "All prospects; link in bio", cost: "", registration: "SDSU Athletics (QR code)", notes: "Jackrabbit Camps" },
  { school: "St. Thomas University", division: "D1 FCS / Pioneer League", campName: "Prospect Camp", dates: "June 18, 2026", details: "All prospects; first come, first serve", cost: "", registration: "St. Thomas Football (QR code)", notes: "" },
  { school: "St. Thomas University", division: "D1 FCS / Pioneer League", campName: "Prospect Camp", dates: "June 20, 2026", details: "All prospects; first come, first serve", cost: "", registration: "St. Thomas Football (QR code)", notes: "" },
  { school: "St. Thomas University", division: "D1 FCS / Pioneer League", campName: "Prospect Camp", dates: "July 23, 2026", details: "All prospects; first come, first serve", cost: "", registration: "St. Thomas Football (QR code)", notes: "" },
  { school: "St. Thomas University", division: "D1 FCS / Pioneer League", campName: "Prospect Camp", dates: "July 25, 2026", details: "All prospects; first come, first serve", cost: "", registration: "St. Thomas Football (QR code)", notes: "" },
  { school: "Syracuse University", division: "D1 FBS / ACC", campName: "Franchise Prospect Camp", dates: "June 4, 2026", details: "All prospects", cost: "", registration: "cuse.com/footballcamps", notes: "" },
  { school: "Syracuse University", division: "D1 FBS / ACC", campName: "Franchise Prospect Camp", dates: "June 7, 2026", details: "All prospects", cost: "", registration: "cuse.com/footballcamps", notes: "" },
  { school: "Syracuse University", division: "D1 FBS / ACC", campName: "Franchise Prospect Camp", dates: "June 11, 2026", details: "All prospects", cost: "", registration: "cuse.com/footballcamps", notes: "" },
  { school: "TCU (Horned Frogs)", division: "D1 FBS / Big 12", campName: "DFW Showcase", dates: "June 5-6, 2026", details: "Rising 9th-12th Grade; also open to JUCO & 4-yr transfers", cost: "", registration: "TCU Athletics", notes: "" },
  { school: "Texas Longhorns", division: "D1 FBS / Big 12", campName: "Elite Camp (Under the Lights)", dates: "June 10, 2026", details: "All prospects", cost: "", registration: "coachsarktexasfootballcamps.com", notes: "" },
  { school: "Texas Longhorns", division: "D1 FBS / Big 12", campName: "Elite Camp (Under the Lights)", dates: "June 17, 2026", details: "All prospects", cost: "", registration: "coachsarktexasfootballcamps.com", notes: "" },
  { school: "The Citadel", division: "D1 FCS / SoCon", campName: "Friday Night Lights Prospect Camp", dates: "June 19, 2026", details: "All prospects", cost: "", registration: "The Citadel Athletics (QR code)", notes: "" },
  { school: "The Citadel", division: "D1 FCS / SoCon", campName: "Friday Night Lights Prospect Camp", dates: "July 10, 2026", details: "All prospects", cost: "", registration: "The Citadel Athletics (QR code)", notes: "" },
  { school: "Troy University", division: "D1 FBS / Sun Belt", campName: "Mega Prospect Camp", dates: "June 5, 2026", details: "All prospects", cost: "", registration: "Troy Football", notes: "" },
  { school: "Troy University", division: "D1 FBS / Sun Belt", campName: "Mega Prospect Camp", dates: "June 12, 2026", details: "All prospects", cost: "", registration: "Troy Football", notes: "" },
  { school: "Troy University", division: "D1 FBS / Sun Belt", campName: "Mega Prospect Camp – Last Chance", dates: "June 18, 2026", details: "All prospects; last chance", cost: "", registration: "Troy Football", notes: "" },
  { school: "UNC (Bill Belichick)", division: "D1 FBS / ACC", campName: "One Day Football Camp", dates: "May 31, 2026", details: "Rising 9th-12th graders; 12:00 PM", cost: "", registration: "billbelichickfootballcamps.com", notes: "Sunday" },
  { school: "UNC (Bill Belichick)", division: "D1 FBS / ACC", campName: "One Day Football Camp", dates: "June 7, 2026", details: "Rising 9th-12th graders; 12:00 PM", cost: "", registration: "billbelichickfootballcamps.com", notes: "Sunday" },
  { school: "UNC Pembroke", division: "D2 / Conference Carolinas", campName: "Prospect Camp - Underclassman", dates: "June 26, 2026", details: "C/O 2029-2031; 6PM; Grace P. Johnson Stadium", cost: "", registration: "markhallfootballcamps.com", notes: "Friday" },
  { school: "UNC Pembroke", division: "D2 / Conference Carolinas", campName: "Prospect Camp - Upperclassman", dates: "June 27, 2026", details: "C/O 2027-2028; 10AM; Grace P. Johnson Stadium", cost: "", registration: "markhallfootballcamps.com", notes: "Saturday" },
  { school: "University at Buffalo", division: "D1 FBS / MAC", campName: "Mega Camp", dates: "June 6, 2026", details: "All positions", cost: "", registration: "Buffalo Athletics", notes: "" },
  { school: "University at Buffalo", division: "D1 FBS / MAC", campName: "Prospect Camp", dates: "June 21, 2026", details: "All prospects", cost: "", registration: "Buffalo Athletics", notes: "" },
  { school: "University of Arkansas", division: "D1 FBS / SEC", campName: "Individual Prospect Camp #1", dates: "June 7, 2026", details: "All prospects", cost: "$50", registration: "arkansasrazorbackfootballcamps.com", notes: "" },
  { school: "University of Arkansas", division: "D1 FBS / SEC", campName: "Individual Prospect Camp #2", dates: "June 14, 2026", details: "All prospects", cost: "$50", registration: "arkansasrazorbackfootballcamps.com", notes: "" },
  { school: "University of Arkansas", division: "D1 FBS / SEC", campName: "Individual Prospect Camp #3", dates: "June 21, 2026", details: "All prospects", cost: "$50", registration: "arkansasrazorbackfootballcamps.com", notes: "" },
  { school: "University of Cincinnati", division: "D1 FBS / Big 12", campName: "Elite Prospect Camp", dates: "May 31, 2026", details: "Grades 9-12; 11:00-1:30", cost: "", registration: "ucfbcamps.com", notes: "Scott Satterfield Football Camps" },
  { school: "University of Cincinnati", division: "D1 FBS / Big 12", campName: "Elite Prospect Camp", dates: "June 2, 2026", details: "Grades 9-12; 1:00-3:30", cost: "", registration: "ucfbcamps.com", notes: "" },
  { school: "University of Cincinnati", division: "D1 FBS / Big 12", campName: "Elite Prospect Camp", dates: "June 16, 2026", details: "Grades 9-12; 1:00-3:30", cost: "", registration: "ucfbcamps.com", notes: "" },
  { school: "University of Cincinnati", division: "D1 FBS / Big 12", campName: "Elite Prospect Camp - Under the Lights", dates: "June 18, 2026", details: "Grades 9-12; 6:30-8:45PM", cost: "", registration: "ucfbcamps.com", notes: "" },
  { school: "University of Cincinnati", division: "D1 FBS / Big 12", campName: "Skills Camp (WR/DB/RB/LB/TE)", dates: "June 9, 2026", details: "Grades 7-12; 1:00-3:30", cost: "", registration: "ucfbcamps.com", notes: "Position Camp" },
  { school: "University of Delaware", division: "D1 FBS / CAA", campName: "Football Camp", dates: "June 9, 2026", details: "All prospects; Tuesday", cost: "", registration: "delawarefootballcamp.com", notes: "" },
  { school: "University of Delaware", division: "D1 FBS / CAA", campName: "Football Camp", dates: "June 21, 2026", details: "All prospects; Sunday", cost: "", registration: "delawarefootballcamp.com", notes: "" },
  { school: "University of Idaho", division: "D1 FCS / Big Sky", campName: "Prospect Camp", dates: "June 12, 2026", details: "All prospects", cost: "", registration: "Idaho Athletics", notes: "" },
  { school: "University of Idaho", division: "D1 FCS / Big Sky", campName: "Prospect Camp", dates: "June 24, 2026", details: "All prospects", cost: "", registration: "Idaho Athletics", notes: "" },
  { school: "University of Idaho", division: "D1 FCS / Big Sky", campName: "Prospect Camp", dates: "July 27, 2026", details: "All prospects", cost: "", registration: "Idaho Athletics", notes: "" },
  { school: "University of Massachusetts (UMass)", division: "D1 FBS / MAC", campName: "Football Showcase", dates: "May 31, 2026", details: "Grades 9-12; 12:30 PM - 4 PM", cost: "", registration: "UMass Athletics (QR code)", notes: "Joe Harasymiak" },
  { school: "University of Massachusetts (UMass)", division: "D1 FBS / MAC", campName: "Football Showcase", dates: "June 6, 2026", details: "Grades 9-12; 2 PM - 5:30 PM", cost: "", registration: "UMass Athletics (QR code)", notes: "" },
  { school: "University of Massachusetts (UMass)", division: "D1 FBS / MAC", campName: "Football Showcase", dates: "June 18, 2026", details: "Grades 9-12; 5:30 PM - 9 PM", cost: "", registration: "UMass Athletics (QR code)", notes: "" },
  { school: "University of Memphis", division: "D1 FBS / AAC", campName: "Mega Camp", dates: "June 1, 2026", details: "All prospects", cost: "", registration: "Memphis Tiger Football", notes: "Huff's Heroes / CloseTheGap" },
  { school: "University of Memphis", division: "D1 FBS / AAC", campName: "Tiger Night Lights Prospect Camp", dates: "June 19, 2026", details: "All prospects", cost: "", registration: "Memphis Tiger Football", notes: "" },
  { school: "University of Memphis", division: "D1 FBS / AAC", campName: "Elite Prospect Camp", dates: "June 21, 2026", details: "All prospects", cost: "", registration: "Memphis Tiger Football", notes: "" },
  { school: "University of Northern Colorado", division: "D1 FCS / Big Sky", campName: "No Limits Camp", dates: "June 18, 2026", details: "All prospects", cost: "", registration: "Northern Colorado Athletics", notes: "" },
  { school: "University of Northern Colorado", division: "D1 FCS / Big Sky", campName: "Mega Camp", dates: "June 20, 2026", details: "All prospects", cost: "", registration: "Northern Colorado Athletics", notes: "" },
  { school: "University of South Alabama", division: "D1 FBS / Sun Belt", campName: "Rising Stars Camp", dates: "June 7, 2026", details: "All prospects", cost: "", registration: "jaguarfootballcamps.com", notes: "" },
  { school: "University of South Alabama", division: "D1 FBS / Sun Belt", campName: "Rising Stars Camp", dates: "June 14, 2026", details: "All prospects", cost: "", registration: "jaguarfootballcamps.com", notes: "" },
  { school: "University of Tennessee", division: "D1 FBS / SEC", campName: "HS Prospect Camp", dates: "May 31, 2026", details: "HS prospects", cost: "", registration: "tennesseefootballcamp.com", notes: "" },
  { school: "University of Tennessee", division: "D1 FBS / SEC", campName: "HS Prospect Camp", dates: "June 7, 2026", details: "HS prospects", cost: "", registration: "tennesseefootballcamp.com", notes: "" },
  { school: "University of Toledo", division: "D1 FBS / MAC", campName: "Friday Night Lights Camp", dates: "June 5, 2026", details: "All prospects; Friday", cost: "", registration: "Toledo Football (email: logan.meyer3@utoledo.edu)", notes: "" },
  { school: "University of Toledo", division: "D1 FBS / MAC", campName: "Friday Night Lights Camp", dates: "June 12, 2026", details: "All prospects; Friday", cost: "", registration: "Toledo Football", notes: "" },
  { school: "University of Utah", division: "D1 FBS / Big 12", campName: "Elite Camp", dates: "June 3, 2026", details: "All prospects", cost: "", registration: "Contact: mhumeniuk@huntsman.utah.edu", notes: "" },
  { school: "UPenn", division: "D1 FCS / Ivy League", campName: "Rick Santos Football Camp", dates: "June 14, 2026", details: "All prospects", cost: "", registration: "Penn Athletics", notes: "" },
  { school: "UPenn", division: "D1 FCS / Ivy League", campName: "Rick Santos Football Camp", dates: "June 22, 2026", details: "All prospects", cost: "", registration: "Penn Athletics", notes: "" },
  { school: "UPenn", division: "D1 FCS / Ivy League", campName: "Rick Santos Football Camp", dates: "July 10, 2026", details: "All prospects", cost: "", registration: "Penn Athletics", notes: "" },
  { school: "UPenn", division: "D1 FCS / Ivy League", campName: "Rick Santos Football Camp", dates: "July 12, 2026", details: "All prospects", cost: "", registration: "Penn Athletics", notes: "" },
  { school: "UPenn", division: "D1 FCS / Ivy League", campName: "Rick Santos Football Camp", dates: "July 17, 2026", details: "All prospects", cost: "", registration: "Penn Athletics", notes: "" },
  { school: "UTC Chattanooga", division: "D1 FCS / SoCon", campName: "Prospect Camp 1", dates: "June 19, 2026", details: "All prospects", cost: "", registration: "Chattanooga Athletics", notes: "" },
  { school: "UTC Chattanooga", division: "D1 FCS / SoCon", campName: "Prospect Camp 2", dates: "July 17, 2026", details: "All prospects", cost: "", registration: "Chattanooga Athletics", notes: "" },
  { school: "UTSA", division: "D1 FBS / AAC", campName: "Prospect Camp", dates: "June 4, 2026", details: "All prospects", cost: "", registration: "UTSA Athletics (QR code)", notes: "" },
  { school: "UTSA", division: "D1 FBS / AAC", campName: "Prospect Camp", dates: "June 11, 2026", details: "All prospects", cost: "", registration: "UTSA Athletics (QR code)", notes: "" },
  { school: "Vanderbilt", division: "D1 FBS / SEC", campName: "Clark Lea Prospect Camp", dates: "June 14, 2026", details: "All positions", cost: "$60", registration: "vanderbiltfootballcamps.com", notes: "Sunday" },
  { school: "Vanderbilt", division: "D1 FBS / SEC", campName: "Clark Lea Prospect Camp", dates: "June 19, 2026", details: "All positions", cost: "$60", registration: "vanderbiltfootballcamps.com", notes: "Friday" },
  { school: "Vanderbilt", division: "D1 FBS / SEC", campName: "Clark Lea Prospect Camp", dates: "June 20, 2026", details: "All positions", cost: "$60", registration: "vanderbiltfootballcamps.com", notes: "Saturday" },
  { school: "Virginia (UVA)", division: "D1 FBS / ACC", campName: "Tony Elliott Football Camp", dates: "June 8, 2026", details: "All prospects", cost: "", registration: "UVA Athletics", notes: "" },
  { school: "Virginia (UVA)", division: "D1 FBS / ACC", campName: "Tony Elliott Football Camp", dates: "June 10, 2026", details: "All prospects", cost: "", registration: "UVA Athletics", notes: "" },
  { school: "Virginia (UVA)", division: "D1 FBS / ACC", campName: "Tony Elliott Football Camp", dates: "June 15, 2026", details: "All prospects", cost: "", registration: "UVA Athletics", notes: "" },
  { school: "Virginia (UVA)", division: "D1 FBS / ACC", campName: "Tony Elliott Football Camp", dates: "June 17, 2026", details: "All prospects", cost: "", registration: "UVA Athletics", notes: "" },
  { school: "Virginia (UVA)", division: "D1 FBS / ACC", campName: "Tony Elliott Football Camp", dates: "June 21, 2026", details: "All prospects", cost: "", registration: "UVA Athletics", notes: "" },
  { school: "Virginia Union University (Alvin Parker)", division: "D2 / CIAA", campName: "VUU RVA Exposure Camp", dates: "May 16, 2026", details: "All prospects; Richmond, VA area", cost: "", registration: "Virginia Union Athletics", notes: "" },
  { school: "Virginia Union University (Alvin Parker)", division: "D2 / CIAA", campName: "#PLAY411 Mega Prospect Camp #1", dates: "June 13, 2026", details: "All prospects", cost: "", registration: "Virginia Union Athletics", notes: "" },
  { school: "Virginia Union University (Alvin Parker)", division: "D2 / CIAA", campName: "#PLAY411 Mega Prospect Camp #2", dates: "June 26, 2026", details: "All prospects", cost: "", registration: "Virginia Union Athletics", notes: "" },
  { school: "Virginia Union University (Alvin Parker)", division: "D2 / CIAA", campName: "VUU RVA Exposure Last Chance Camp", dates: "July 18, 2026", details: "All prospects; last chance exposure", cost: "", registration: "Virginia Union Athletics", notes: "" },
  { school: "West Florida (UWF)", division: "D2 / Gulf South", campName: "Kaleb Nobles – QB/WR/DB Camp", dates: "May 29 4:00 PM, 2026", details: "All prospects", cost: "", registration: "Penair Field – Pensacola FL", notes: "" },
  { school: "West Florida (UWF)", division: "D2 / Gulf South", campName: "Kaleb Nobles – QB/WR/DB Camp", dates: "June 4 4:00 PM, 2026", details: "All prospects", cost: "", registration: "Penair Field – Pensacola FL", notes: "" },
  { school: "West Florida (UWF)", division: "D2 / Gulf South", campName: "Kaleb Nobles – QB Only Camp", dates: "June 11 10:00 AM, 2026", details: "All prospects", cost: "", registration: "Penair Field – Pensacola FL", notes: "" },
  { school: "West Florida (UWF)", division: "D2 / Gulf South", campName: "Kaleb Nobles – QB/WR/DB Camp", dates: "June 12 4:00 PM, 2026", details: "All prospects", cost: "", registration: "Penair Field – Pensacola FL", notes: "" },
  { school: "West Virginia University", division: "D1 FBS / Big 12", campName: "Prospect Camp", dates: "June 1, 2026", details: "All prospects", cost: "", registration: "wvusports.com/feature/footballcamps", notes: "" },
  { school: "West Virginia University", division: "D1 FBS / Big 12", campName: "Post-Grad Showcase", dates: "June 3, 2026", details: "Post-grad/transfer prospects", cost: "", registration: "wvusports.com/feature/footballcamps", notes: "" },
  { school: "West Virginia University", division: "D1 FBS / Big 12", campName: "Prospect Camp", dates: "June 8, 2026", details: "All prospects", cost: "", registration: "wvusports.com/feature/footballcamps", notes: "" },
  { school: "West Virginia University", division: "D1 FBS / Big 12", campName: "Prospect Camp", dates: "June 20, 2026", details: "All prospects", cost: "", registration: "wvusports.com/feature/footballcamps", notes: "" },
  { school: "Western Illinois University", division: "D1 FCS / OVC", campName: "Friday Night Lights Prospect Camp", dates: "June 19, 2026", details: "HS-JUCO", cost: "", registration: "leatherneckfootballcamps.com", notes: "" },
  { school: "Western Illinois University", division: "D1 FCS / OVC", campName: "Elite Prospect Camp II", dates: "June 22, 2026", details: "HS-JUCO; @College of DuPage, Glen Ellyn, IL", cost: "", registration: "leatherneckfootballcamps.com", notes: "" },
  { school: "Wofford College (Shawn Watson)", division: "D1 FCS / SoCon", campName: "Prospect Camp", dates: "June 7, 2026", details: "All prospects", cost: "", registration: "Wofford Athletics (QR code)", notes: "" },
  { school: "Wofford College (Shawn Watson)", division: "D1 FCS / SoCon", campName: "Prospect Camp", dates: "June 14, 2026", details: "All prospects", cost: "", registration: "Wofford Athletics (QR code)", notes: "" },
  { school: "Wofford College (Shawn Watson)", division: "D1 FCS / SoCon", campName: "Prospect Camp", dates: "June 21, 2026", details: "All prospects", cost: "", registration: "Wofford Athletics (QR code)", notes: "" },
  { school: "Wofford College (Shawn Watson)", division: "D1 FCS / SoCon", campName: "Prospect Camp", dates: "July 15, 2026", details: "All prospects", cost: "", registration: "Wofford Athletics (QR code)", notes: "" },
  { school: "Yale University", division: "D1 FCS / Ivy League", campName: "All-Position Camp #1", dates: "June 8, 2026", details: "All positions", cost: "", registration: "Yale Athletics (QR code)", notes: "" },
  { school: "Yale University", division: "D1 FCS / Ivy League", campName: "All-Position Camp #2", dates: "June 10, 2026", details: "All positions", cost: "", registration: "Yale Athletics (QR code)", notes: "" },
  { school: "Yale University", division: "D1 FCS / Ivy League", campName: "All-Position Camp #3", dates: "June 15, 2026", details: "All positions", cost: "", registration: "Yale Athletics (QR code)", notes: "" }
];


const STORAGE_KEY = "dunbar_questionnaire_completed";

const DIV_COLORS = {
  "D1 FBS": { bg: "rgba(96,165,250,0.12)", text: "#60A5FA" },
  "D1 FCS": { bg: "rgba(255,107,0,0.12)", text: "#FF6B00" },
  "D2":     { bg: "rgba(167,139,250,0.12)", text: "#A78BFA" },
  "NAIA":   { bg: "rgba(34,197,94,0.12)", text: "#22C55E" },
};


const Pagination = ({ page, totalPages, onPage }) => {
  if (totalPages <= 1) return null;
  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);
  for (let i = start; i <= end; i++) pages.push(i);
  const btnStyle = (active) => ({
    background: active ? "#FF6B00" : "transparent",
    border: `1px solid ${active ? "#FF6B00" : "rgba(255,107,0,0.25)"}`,
    color: active ? "#0A0A0A" : "#FF6B00",
    padding: "6px 12px",
    fontFamily: "'Oswald', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 1,
    cursor: active ? "default" : "pointer",
    minWidth: 36,
  });
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center", justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
      <button disabled={page === 1} onClick={() => onPage(page - 1)} style={{ ...btnStyle(false), opacity: page === 1 ? 0.3 : 1, cursor: page === 1 ? "default" : "pointer" }}>← PREV</button>
      {start > 1 && <><button onClick={() => onPage(1)} style={btnStyle(false)}>1</button>{start > 2 && <span style={{ color: "rgba(245,240,232,0.3)", fontSize: 12 }}>…</span>}</>}
      {pages.map(p => <button key={p} onClick={() => onPage(p)} style={btnStyle(p === page)}>{p}</button>)}
      {end < totalPages && <>{end < totalPages - 1 && <span style={{ color: "rgba(245,240,232,0.3)", fontSize: 12 }}>…</span>}<button onClick={() => onPage(totalPages)} style={btnStyle(false)}>{totalPages}</button></>}
      <button disabled={page === totalPages} onClick={() => onPage(page + 1)} style={{ ...btnStyle(false), opacity: page === totalPages ? 0.3 : 1, cursor: page === totalPages ? "default" : "pointer" }}>NEXT →</button>
      <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.3)", marginLeft: 8 }}>Page {page} of {totalPages}</span>
    </div>
  );
};

export default function DunbarRecruiting() {
  const [activeSection, setActiveSection] = useState("home");

  const [completed, setCompleted] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEY); return s ? JSON.parse(s) : {}; }
    catch { return {}; }
  });
  const [qSearch, setQSearch] = useState("");
  const [qDivFilter, setQDivFilter] = useState("all");
  const [qStatusFilter, setQStatusFilter] = useState("all");
  const [campSearch, setCampSearch] = useState("");
  const [campDivFilter, setCampDivFilter] = useState("all");
  const [qPage, setQPage] = useState(1);
  const [campPage, setCampPage] = useState(1);
  const PAGE_SIZE = 25;

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(completed)); } catch {}
  }, [completed]);

  const toggleComplete = (name) => setCompleted(prev => ({ ...prev, [name]: !prev[name] }));

  // Reset pages when filters change
  const resetQPage = (fn) => { setQPage(1); return fn; };
  const resetCampPage = (fn) => { setCampPage(1); return fn; };

  const filteredSchools = questionnaireSchools.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(qSearch.toLowerCase());
    const matchDiv = qDivFilter === "all" || s.division === qDivFilter;
    const matchStatus =
      qStatusFilter === "all" ? true :
      qStatusFilter === "completed" ? !!completed[s.name] :
      !completed[s.name];
    return matchSearch && matchDiv && matchStatus;
  });

  const qTotalPages = Math.max(1, Math.ceil(filteredSchools.length / PAGE_SIZE));
  const paginatedSchools = filteredSchools.slice((qPage - 1) * PAGE_SIZE, qPage * PAGE_SIZE);

  const totalCount = questionnaireSchools.length;
  const completedCount = questionnaireSchools.filter(s => completed[s.name]).length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  const divCounts = ["D1 FBS", "D1 FCS", "D2", "NAIA"].reduce((acc, d) => {
    acc[d] = questionnaireSchools.filter(s => s.division === d).length;
    return acc;
  }, {});

  const openLink = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Oswald', sans-serif", background: "#0A0A0A", color: "#F5F0E8", minHeight: "100vh", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.92) 100%)", backdropFilter: "blur(16px)", borderBottom: "2px solid #FF6B00", padding: "0 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="data:image/jpeg;base64,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" alt="Dunbar Tigers" style={{ width: 44, height: 36, objectFit: "contain" }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: 2, lineHeight: 1 }}>DUNBAR TIGERS</div>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#FF6B00", fontWeight: 500 }}>RECRUITING HQ</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {sections.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)} style={{ background: activeSection === s.id ? "rgba(255,107,0,0.15)" : "transparent", border: "none", color: activeSection === s.id ? "#FF6B00" : "#F5F0E8", padding: "8px 14px", fontFamily: "'Oswald', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: 1.5, cursor: "pointer", borderRadius: 4, transition: "all 0.2s" }}>{s.label.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", minHeight: "85vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,107,0,0.03) 40px, rgba(255,107,0,0.03) 42px)" }} />
        <div style={{ position: "absolute", right: -100, top: "50%", transform: "translateY(-50%)", fontSize: 600, fontWeight: 700, color: "rgba(255,107,0,0.04)", lineHeight: 0.8, letterSpacing: -20, userSelect: "none" }}>T</div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "#FF6B00", color: "#0A0A0A", padding: "6px 16px", fontSize: 11, fontWeight: 700, letterSpacing: 3, marginBottom: 24 }}>DUNBAR HIGH SCHOOL • FORT MYERS, FL</div>
          <h1 style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 700, lineHeight: 0.95, letterSpacing: -2, margin: "0 0 24px 0" }}>
            YOUR PATH<br /><span style={{ color: "#FF6B00" }}>TO THE</span><br />NEXT LEVEL
          </h1>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 18, fontWeight: 300, color: "rgba(245,240,232,0.7)", maxWidth: 520, lineHeight: 1.7, margin: "0 0 40px 0" }}>
            Everything you need to get recruited. From building your profile to connecting with college coaches — the Tigers Recruiting HQ has you covered.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("questionnaire")} style={{ background: "linear-gradient(135deg, #FF6B00, #E55A00)", border: "none", color: "#fff", padding: "16px 32px", fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: 2, cursor: "pointer" }}>START YOUR QUESTIONNAIRE →</button>
            <button onClick={() => scrollTo("camps")} style={{ background: "transparent", border: "2px solid rgba(255,107,0,0.4)", color: "#FF6B00", padding: "16px 32px", fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: 2, cursor: "pointer" }}>VIEW CAMPS</button>
          </div>
          <div style={{ display: "flex", gap: 48, marginTop: 80, flexWrap: "wrap", borderTop: "1px solid rgba(255,107,0,0.2)", paddingTop: 32 }}>
            {[{ num: `${totalCount}+`, label: "College Programs in Database" }, { num: "15+", label: "Summer Camps Listed" }, { num: "100%", label: "Free for Dunbar Athletes" }].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 36, fontWeight: 700, color: "#FF6B00", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 11, letterSpacing: 2, color: "rgba(245,240,232,0.5)", marginTop: 4 }}>{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #FF6B00, transparent)" }} />

      {/* QUESTIONNAIRE TRACKER */}
      <section id="questionnaire" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <div style={{ width: 32, height: 2, background: "#FF6B00" }} />
          <span style={{ fontSize: 11, letterSpacing: 3, color: "#FF6B00", fontWeight: 600 }}>01</span>
        </div>
        <h2 style={{ fontSize: 48, fontWeight: 700, margin: "0 0 16px 0", letterSpacing: -1 }}>RECRUITING <span style={{ color: "#FF6B00" }}>QUESTIONNAIRE</span></h2>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 16, color: "rgba(245,240,232,0.6)", maxWidth: 640, lineHeight: 1.7, marginBottom: 40 }}>
          Track every questionnaire you've submitted across all divisions. Check off each school as you complete it — progress saves automatically.
        </p>

        {/* DIVISION SUMMARY CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 32 }}>
          {[
            { label: "Total Schools", value: totalCount, color: "#F5F0E8", bg: "rgba(255,255,255,0.04)" },
            { label: "Completed", value: completedCount, color: "#22C55E", bg: "rgba(34,197,94,0.06)" },
            { label: "Remaining", value: totalCount - completedCount, color: "#FF6B00", bg: "rgba(255,107,0,0.06)" },
            { label: "D1 FBS", value: divCounts["D1 FBS"], color: "#60A5FA", bg: "rgba(96,165,250,0.06)" },
            { label: "D1 FCS", value: divCounts["D1 FCS"], color: "#FF6B00", bg: "rgba(255,107,0,0.06)" },
            { label: "Division II", value: divCounts["D2"], color: "#A78BFA", bg: "rgba(167,139,250,0.06)" },
            { label: "NAIA", value: divCounts["NAIA"], color: "#22C55E", bg: "rgba(34,197,94,0.06)" },
          ].map((stat, i) => (
            <div key={i} style={{ background: stat.bg, border: `1px solid ${stat.color}22`, padding: "18px 20px" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.4)", marginTop: 6, letterSpacing: 1 }}>{stat.label.toUpperCase()}</div>
            </div>
          ))}
        </div>

        {/* PROGRESS BAR */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.4)" }}>{completedCount} of {totalCount} submitted</span>
            <span style={{ fontWeight: 700, fontSize: 14, color: "#FF6B00" }}>{progressPct}%</span>
          </div>
          <div style={{ height: 10, background: "rgba(255,107,0,0.1)", borderRadius: 5, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progressPct}%`, background: "linear-gradient(90deg, #FF6B00, #22C55E)", borderRadius: 5, transition: "width 0.4s ease" }} />
          </div>
        </div>

        {/* SEARCH + FILTERS */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", marginBottom: 8 }}>
          <div style={{ position: "relative", flex: "1 1 220px" }}>
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 13, color: "rgba(245,240,232,0.3)" }}>🔍</span>
            <input type="text" placeholder="Search schools..." value={qSearch} onChange={e => { setQSearch(e.target.value); setQPage(1); }} style={{ width: "100%", background: "#111", border: "1px solid rgba(255,107,0,0.2)", color: "#F5F0E8", padding: "9px 12px 9px 34px", fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
          </div>
        </div>

        {/* DIVISION FILTER ROW */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.3)", alignSelf: "center", letterSpacing: 1, marginRight: 4 }}>DIVISION:</span>
          {[{ key: "all", label: "All" }, { key: "D1 FBS", label: "D1 FBS" }, { key: "D1 FCS", label: "D1 FCS" }, { key: "D2", label: "Division II" }, { key: "NAIA", label: "NAIA" }].map(f => {
            const c = DIV_COLORS[f.key] || { bg: "rgba(255,107,0,0.15)", text: "#FF6B00" };
            const active = qDivFilter === f.key;
            return (
              <button key={f.key} onClick={() => { setQDivFilter(f.key); setQPage(1); }} style={{ background: active ? (DIV_COLORS[f.key]?.bg || "rgba(255,107,0,0.15)") : "transparent", border: active ? `1px solid ${DIV_COLORS[f.key]?.text || "#FF6B00"}` : "1px solid rgba(255,107,0,0.15)", color: active ? (DIV_COLORS[f.key]?.text || "#FF6B00") : "rgba(245,240,232,0.4)", padding: "7px 14px", fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 1.5, cursor: "pointer", transition: "all 0.15s" }}>{f.label.toUpperCase()}</button>
            );
          })}
        </div>

        {/* STATUS FILTER ROW */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.3)", alignSelf: "center", letterSpacing: 1, marginRight: 4 }}>STATUS:</span>
          {[{ key: "all", label: "All" }, { key: "pending", label: "Pending" }, { key: "completed", label: "Completed" }].map(f => (
            <button key={f.key} onClick={() => { setQStatusFilter(f.key); setQPage(1); }} style={{ background: qStatusFilter === f.key ? "rgba(255,107,0,0.15)" : "transparent", border: qStatusFilter === f.key ? "1px solid #FF6B00" : "1px solid rgba(255,107,0,0.15)", color: qStatusFilter === f.key ? "#FF6B00" : "rgba(245,240,232,0.4)", padding: "7px 14px", fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: 1.5, cursor: "pointer", transition: "all 0.15s" }}>{f.label.toUpperCase()}</button>
          ))}
          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.3)", alignSelf: "center", marginLeft: "auto" }}>Showing {filteredSchools.length} schools</span>
        </div>

        {/* TABLE */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Source Sans 3', sans-serif", minWidth: 560 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #FF6B00" }}>
                {["", "School", "Division", "Questionnaire"].map((h, i) => (
                  <th key={i} style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "#FF6B00", textAlign: "left", padding: "12px 16px", width: i === 0 ? 48 : i === 2 ? 130 : i === 3 ? 130 : "auto" }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedSchools.map((school, i) => {
                const isDone = !!completed[school.name];
                const dc = DIV_COLORS[school.division] || { bg: "rgba(255,107,0,0.1)", text: "#FF6B00" };
                return (
                  <tr key={school.name} style={{ borderBottom: "1px solid rgba(255,107,0,0.06)", background: isDone ? "rgba(34,197,94,0.04)" : i % 2 === 0 ? "rgba(255,107,0,0.02)" : "transparent", transition: "background 0.2s" }}>
                    <td style={{ padding: "10px 16px" }}>
                      <button onClick={() => toggleComplete(school.name)} style={{ width: 22, height: 22, border: isDone ? "2px solid #22C55E" : "2px solid rgba(255,107,0,0.3)", background: isDone ? "#22C55E" : "transparent", borderRadius: 4, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}>
                        {isDone && <span style={{ color: "#0A0A0A", fontSize: 13, fontWeight: 700, lineHeight: 1 }}>✓</span>}
                      </button>
                    </td>
                    <td style={{ padding: "10px 16px" }}>
                      <span style={{ fontSize: 14, fontWeight: isDone ? 400 : 600, color: isDone ? "rgba(245,240,232,0.35)" : "#F5F0E8", textDecoration: isDone ? "line-through" : "none", transition: "all 0.2s" }}>{school.name}</span>
                    </td>
                    <td style={{ padding: "10px 16px" }}>
                      <span style={{ background: dc.bg, color: dc.text, padding: "3px 9px", fontSize: 10, fontWeight: 600, letterSpacing: 1, fontFamily: "'Oswald', sans-serif", whiteSpace: "nowrap" }}>{school.division}</span>
                    </td>
                    <td style={{ padding: "10px 16px" }}>
                      <a href={school.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(255,107,0,0.08)", border: "1px solid rgba(255,107,0,0.2)", color: "#FF6B00", padding: "5px 12px", fontSize: 11, fontWeight: 600, letterSpacing: 1, fontFamily: "'Oswald', sans-serif", textDecoration: "none", cursor: "pointer" }}>OPEN ↗</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredSchools.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", fontFamily: "'Source Sans 3', sans-serif", color: "rgba(245,240,232,0.3)", fontSize: 14 }}>No schools match your search or filter.</div>
        )}

        <Pagination page={qPage} totalPages={qTotalPages} onPage={setQPage} />

        <div style={{ marginTop: 32, background: "rgba(255,107,0,0.08)", border: "1px solid rgba(255,107,0,0.2)", padding: "20px 28px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: 24 }}>⚡</span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, letterSpacing: 1 }}>PRO TIP</div>
            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, color: "rgba(245,240,232,0.6)", marginTop: 4 }}>
              Complete your questionnaire BEFORE camps and junior days. Coaches check these after meeting you in person. Your progress saves automatically — come back anytime.
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section id="social" style={{ background: "linear-gradient(180deg, rgba(255,107,0,0.04) 0%, transparent 100%)", borderTop: "1px solid rgba(255,107,0,0.1)", borderBottom: "1px solid rgba(255,107,0,0.1)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
            <div style={{ width: 32, height: 2, background: "#FF6B00" }} />
            <span style={{ fontSize: 11, letterSpacing: 3, color: "#FF6B00", fontWeight: 600 }}>02</span>
          </div>
          <h2 style={{ fontSize: 48, fontWeight: 700, margin: "0 0 16px 0", letterSpacing: -1 }}>SOCIAL MEDIA <span style={{ color: "#FF6B00" }}>SETUP</span></h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 16, color: "rgba(245,240,232,0.6)", maxWidth: 640, lineHeight: 1.7, marginBottom: 56 }}>
            Your Twitter/X profile is your 30-second elevator pitch to every college coach in the country. Set it up right — once.
          </p>

          {/* TOP ROW: annotated mock profile + bio must-haves */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 32, alignItems: "start" }}>

            {/* ANNOTATED MOCK PROFILE */}
            <div>
              <div style={{ fontSize: 11, letterSpacing: 3, color: "#FF6B00", fontWeight: 600, marginBottom: 16, fontFamily: "'Oswald', sans-serif" }}>THE IDEAL PROFILE</div>
              <div style={{ background: "#15202B", borderRadius: 16, overflow: "hidden", border: "2px solid rgba(255,107,0,0.25)" }}>
                {/* Banner */}
                <div style={{ height: 72, background: "linear-gradient(135deg, #1a1a2e, #16213e)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: 3, color: "rgba(255,107,0,0.35)" }}>ACTION SHOT / GAME FILM BANNER</span>
                </div>
                <div style={{ padding: "0 20px 20px" }}>
                  <div style={{ marginTop: -24, marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div style={{ width: 50, height: 50, borderRadius: "50%", background: "linear-gradient(135deg, #FF6B00, #FF8C33)", border: "3px solid #15202B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#0A0A0A", fontFamily: "'Oswald', sans-serif", textAlign: "center", lineHeight: 1.2 }}>UNIFORM<br/>PHOTO</div>
                    <div style={{ display: "flex", gap: 6 }}>
                      <div style={{ background: "rgba(255,107,0,0.15)", border: "1px solid rgba(255,107,0,0.3)", borderRadius: 20, padding: "4px 12px", fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "#FF6B00", fontWeight: 600 }}>Message</div>
                      <div style={{ background: "#FF6B00", borderRadius: 20, padding: "4px 12px", fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "#0A0A0A", fontWeight: 700 }}>Follow</div>
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 800, fontSize: 16, color: "#fff" }}>John Doe</div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>@JohnDoe_WR2027</div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: 10, background: "rgba(255,107,0,0.05)", padding: "10px 12px", border: "1px solid rgba(255,107,0,0.1)", borderRadius: 6 }}>
                    WR | 6'2" 185lbs | C/O 2027<br/>
                    Dunbar HS • Fort Myers, FL 🐅<br/>
                    4.42 forty | 3.8 GPA | SAT 1080<br/>
                    NCAA ID: 2312-4567 | 📞 (239) 555-0192<br/>
                    🎥 hudl.com/profile/johndoe
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 10 }}>
                    📍 Fort Myers, FL
                  </div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 10 }}>
                    <span style={{ color: "#fff", fontWeight: 700 }}>247</span> Following &nbsp;
                    <span style={{ color: "#fff", fontWeight: 700 }}>831</span> Followers
                  </div>
                </div>
                <div style={{ background: "rgba(255,107,0,0.07)", borderTop: "1px solid rgba(255,107,0,0.15)", padding: "10px 20px" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: 2, color: "#FF6B00", marginBottom: 3 }}>📌 PINNED — HIGHLIGHT REEL (NATIVE VIDEO)</div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.35)" }}>Best plays first. Download from savethevideo.com — upload as video, never a link.</div>
                </div>
              </div>

              {/* Key callouts below mock */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
                {[
                  { icon: "👤", label: "Real name as handle", sub: "No nicknames or gamer tags" },
                  { icon: "📸", label: "Uniform photo", sub: "Helmet off — coaches ID you at events" },
                  { icon: "📩", label: "DMs open", sub: "D3 coaches can ONLY DM you" },
                  { icon: "📍", label: "Real city & state", sub: "Coaches use this for recruiting regions" },
                ].map((c, i) => (
                  <div key={i} style={{ background: "#111", border: "1px solid rgba(255,107,0,0.1)", padding: "10px 12px" }}>
                    <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, fontWeight: 700, color: "#F5F0E8", marginBottom: 2 }}>{c.icon} {c.label}</div>
                    <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.35)" }}>{c.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BIO MUST-HAVES — right column */}
            <div>
              <div style={{ fontSize: 11, letterSpacing: 3, color: "#FF6B00", fontWeight: 600, marginBottom: 16, fontFamily: "'Oswald', sans-serif" }}>BIO MUST-HAVES</div>
              <div style={{ background: "#111", border: "1px solid rgba(255,107,0,0.15)" }}>
                {[
                  { item: "Position", note: "Spell it out: WR, OLB/SS, QB, etc." },
                  { item: "Class of (C/O)", note: "e.g. C/O 2027 or '27" },
                  { item: "High school name", note: "Full name — thousands of HS exist" },
                  { item: "City & State", note: "Coaches need your region" },
                  { item: "Height & Weight", note: "First measurable coaches check" },
                  { item: "40-yard dash time", note: "Lead with your BEST attribute" },
                  { item: "GPA + SAT/ACT", note: "Academic eligibility is non-negotiable" },
                  { item: "NCAA ID #", note: "Get it free at ncaa.org — required for D1/D2" },
                  { item: "Phone number", note: "Coaches may call — make it easy" },
                  { item: "Hudl film link", note: "Keep updated — best plays first" },
                  { item: "Other sports / orgs", note: "Multi-sport athletes stand out" },
                  { item: "Rankings (if applicable)", note: "247, Rivals, ESPN stars" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 16px", borderBottom: i < 11 ? "1px solid rgba(255,107,0,0.06)" : "none" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ color: "#22C55E", fontWeight: 700, fontSize: 11, flexShrink: 0 }}>✓</span>
                      <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, fontWeight: 600, color: "#F5F0E8" }}>{r.item}</span>
                    </div>
                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "rgba(245,240,232,0.35)", textAlign: "right", maxWidth: 140, lineHeight: 1.3 }}>{r.note}</span>
                  </div>
                ))}
              </div>

              {/* Bio ordering tip */}
              <div style={{ background: "rgba(234,179,8,0.06)", border: "1px solid rgba(234,179,8,0.2)", padding: "14px 16px", marginTop: 12 }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#EAB308", marginBottom: 6 }}>💡 BIO ORDERING HACK</div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.6)", lineHeight: 1.5 }}>
                  Lead with your <strong style={{ color: "#EAB308" }}>best measurable</strong>. 4.4 forty? That goes first. 4.0 GPA? Start there. Use <code style={{ color: "#FF6B00" }}> | </code> as dividers — coaches scan in one glance.
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: Technical settings + Do/Don't + Content strategy */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>

            {/* TECHNICAL SETTINGS */}
            <div style={{ background: "#111", border: "1px solid rgba(96,165,250,0.2)", overflow: "hidden" }}>
              <div style={{ background: "rgba(96,165,250,0.08)", padding: "12px 18px", fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#60A5FA", borderBottom: "1px solid rgba(96,165,250,0.1)" }}>⚙️ ACCOUNT SETTINGS — NON-NEGOTIABLES</div>
              <div style={{ padding: "16px 18px" }}>
                {[
                  { check: "DMs open to everyone", warn: "D3 coaches CANNOT follow you — DM is their only option" },
                  { check: "Public profile (not protected)", warn: "A locked account is invisible to coaches" },
                  { check: "Blue checkmark ($8/mo)", warn: "Boosts visibility — coaches search verified accounts first" },
                  { check: "Post minimum once/week", warn: "Coaches notice active profiles; silent accounts get ignored" },
                ].map((s, i) => (
                  <div key={i} style={{ padding: "10px 0", borderBottom: i < 3 ? "1px solid rgba(96,165,250,0.07)" : "none" }}>
                    <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, fontWeight: 700, color: "#F5F0E8", marginBottom: 3 }}>✅ {s.check}</div>
                    <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.35)", lineHeight: 1.4 }}>{s.warn}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTENT — WHAT TO POST */}
            <div style={{ background: "#111", border: "1px solid rgba(167,139,250,0.2)", overflow: "hidden" }}>
              <div style={{ background: "rgba(167,139,250,0.08)", padding: "12px 18px", fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#A78BFA", borderBottom: "1px solid rgba(167,139,250,0.1)" }}>📱 WHAT TO POST</div>
              <div style={{ padding: "16px 18px" }}>
                {[
                  { pct: "80%", label: "Film content", detail: "Game highlights, workout clips, camp reps — always native video, not links" },
                  { pct: "20%", label: "Everything else", detail: "Engage with programs you're targeting, share academic wins, repost team content" },
                ].map((c, i) => (
                  <div key={i} style={{ padding: "10px 0", borderBottom: i < 1 ? "1px solid rgba(167,139,250,0.08)" : "none", display: "flex", gap: 14 }}>
                    <div style={{ fontSize: 24, fontWeight: 700, color: "#A78BFA", fontFamily: "'Oswald', sans-serif", flexShrink: 0, lineHeight: 1 }}>{c.pct}</div>
                    <div>
                      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, fontWeight: 700, color: "#F5F0E8", marginBottom: 3 }}>{c.label}</div>
                      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.4)", lineHeight: 1.4 }}>{c.detail}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 14, background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.18)", padding: "12px 14px" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: "#EF4444", marginBottom: 4 }}>⚠️ BE CAREFUL WHAT YOU LIKE</div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.5)", lineHeight: 1.4 }}>Your Likes tab is public. Coaches check it. One careless like can cost you an offer — it reflects your character.</div>
                </div>
              </div>
            </div>

            {/* DO / DON'T — combined, no repeats */}
            <div style={{ background: "#111", border: "1px solid rgba(255,107,0,0.15)", overflow: "hidden" }}>
              <div style={{ background: "rgba(255,107,0,0.08)", padding: "12px 18px", fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#FF6B00", borderBottom: "1px solid rgba(255,107,0,0.1)" }}>✓ / ✗ QUICK RULES</div>
              <div style={{ padding: "16px 18px" }}>
                {[
                  { type: "do", text: "Follow every program you're targeting" },
                  { type: "do", text: "Engage respectfully with coaches' posts" },
                  { type: "do", text: "Update your film and stats each season" },
                  { type: "do", text: "Pin a native video highlight — not a Hudl link" },
                  { type: "dont", text: "Argue with athletes, coaches, or recruits" },
                  { type: "dont", text: "Post political opinions or controversial takes" },
                  { type: "dont", text: "Beg for offers or complain publicly" },
                  { type: "dont", text: "Trash talk schools, coaches, or programs" },
                  { type: "dont", text: "Post anything you'd hide from your mom" },
                ].map((r, i) => (
                  <div key={i} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.7)", padding: "8px 0", borderBottom: i < 8 ? "1px solid rgba(255,107,0,0.05)" : "none", lineHeight: 1.4, display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: r.type === "do" ? "#22C55E" : "#EF4444", fontWeight: 700, flexShrink: 0, fontSize: 14 }}>{r.type === "do" ? "+" : "−"}</span>
                    {r.text}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EMAIL & DM */}
      <section id="outreach" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <div style={{ width: 32, height: 2, background: "#FF6B00" }} />
          <span style={{ fontSize: 11, letterSpacing: 3, color: "#FF6B00", fontWeight: 600 }}>03</span>
        </div>
        <h2 style={{ fontSize: 48, fontWeight: 700, margin: "0 0 16px 0", letterSpacing: -1 }}>EMAIL & DM <span style={{ color: "#FF6B00" }}>PLAYBOOK</span></h2>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 16, color: "rgba(245,240,232,0.6)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>How you communicate with college coaches matters. Here's how to stand out the right way.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          <div style={{ background: "#111", border: "1px solid rgba(255,107,0,0.15)", overflow: "hidden" }}>
            <div style={{ background: "rgba(255,107,0,0.1)", padding: "14px 24px", fontSize: 12, fontWeight: 600, letterSpacing: 2, color: "#FF6B00", borderBottom: "1px solid rgba(255,107,0,0.15)" }}>📧 EMAIL TEMPLATE</div>
            <div style={{ padding: 24, fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, color: "rgba(245,240,232,0.7)", lineHeight: 1.8 }}>
              <div style={{ color: "rgba(245,240,232,0.4)", fontSize: 12, marginBottom: 4 }}>SUBJECT:</div>
              <div style={{ color: "#FF6B00", marginBottom: 16, fontWeight: 600 }}>Class of 2027 | WR | Dunbar HS, Fort Myers FL — John Doe</div>
              <div style={{ color: "rgba(245,240,232,0.4)", fontSize: 12, marginBottom: 4 }}>BODY:</div>
              <div style={{ borderLeft: "2px solid rgba(255,107,0,0.3)", paddingLeft: 16 }}>
                Dear Coach [Last Name],<br /><br />
                My name is [Name], and I'm a [Position] at Dunbar High School in Fort Myers, FL (Class of 20XX). I'm reaching out because I'm very interested in [School Name] and your football program.<br /><br />
                <strong style={{ color: "#FF6B00" }}>Quick Stats:</strong><br />Height/Weight • 40 Time • GPA • Key Stats<br /><br />
                Here is a link to my highlight film: [Hudl Link]<br />Questionnaire completed: [Yes/No + Link]<br /><br />
                I would love the opportunity to learn more about your program. Thank you for your time.<br /><br />
                Respectfully,<br />[Full Name] | [Phone] | [Email]
              </div>
            </div>
          </div>
          <div style={{ background: "#111", border: "1px solid rgba(255,107,0,0.15)", overflow: "hidden" }}>
            <div style={{ background: "rgba(255,107,0,0.1)", padding: "14px 24px", fontSize: 12, fontWeight: 600, letterSpacing: 2, color: "#FF6B00", borderBottom: "1px solid rgba(255,107,0,0.15)" }}>💬 DM BEST PRACTICES</div>
            <div style={{ padding: 24 }}>
              {[{ rule: "Keep it SHORT", detail: "Coaches get hundreds of DMs. 3-4 sentences max. Name, position, class, school, and Hudl link." }, { rule: "Be RESPECTFUL", detail: "Always address them as 'Coach [Last Name].' Never use first names or casual greetings." }, { rule: "Send at the RIGHT TIME", detail: "Best times: Tues-Thurs, 9AM-11AM or 2PM-4PM. Avoid game days and weekends." }, { rule: "Follow UP (once)", detail: "If no response in 2 weeks, send ONE follow-up. After that, move on to other programs." }, { rule: "Add VALUE", detail: "Include new film, an award, or updated stats. Don't just say 'Hey coach, interested!'" }, { rule: "Never MASS DM", detail: "Personalize every message. Mention something specific about their program." }].map((item, i) => (
                <div key={i} style={{ padding: "14px 0", borderBottom: i < 5 ? "1px solid rgba(255,107,0,0.08)" : "none" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 1, marginBottom: 4 }}><span style={{ color: "#FF6B00" }}>{i + 1}.</span> {item.rule}</div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.5)", lineHeight: 1.5 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROSPECT CAMPS */}
      <section id="camps" style={{ background: "linear-gradient(180deg, rgba(255,107,0,0.04) 0%, transparent 100%)", borderTop: "1px solid rgba(255,107,0,0.1)", borderBottom: "1px solid rgba(255,107,0,0.1)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
            <div style={{ width: 32, height: 2, background: "#FF6B00" }} />
            <span style={{ fontSize: 11, letterSpacing: 3, color: "#FF6B00", fontWeight: 600 }}>04</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 16 }}>
            <h2 style={{ fontSize: 48, fontWeight: 700, margin: 0, letterSpacing: -1 }}>PROSPECT <span style={{ color: "#FF6B00" }}>CAMPS</span></h2>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.4)", letterSpacing: 1 }}>{camps.length} CAMPS LISTED • 2026</div>
          </div>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 16, color: "rgba(245,240,232,0.6)", maxWidth: 600, lineHeight: 1.7, marginBottom: 32 }}>Camps are one of the best ways to get evaluated by college coaching staffs in person. Register early — spots fill fast.</p>

          {/* Search & Filter */}
          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="Search school or camp name..."
              value={campSearch}
              onChange={e => { setCampSearch(e.target.value); setCampPage(1); }}
              style={{ flex: "1 1 240px", background: "#111", border: "1px solid rgba(255,107,0,0.2)", color: "#F5F0E8", padding: "10px 14px", fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, outline: "none", minWidth: 200 }}
            />
            <select
              value={campDivFilter}
              onChange={e => { setCampDivFilter(e.target.value); setCampPage(1); }}
              style={{ background: "#111", border: "1px solid rgba(255,107,0,0.2)", color: "#F5F0E8", padding: "10px 14px", fontFamily: "'Oswald', sans-serif", fontSize: 12, letterSpacing: 1, cursor: "pointer", outline: "none" }}
            >
              <option value="all">ALL DIVISIONS</option>
              <option value="D1 FBS">D1 FBS</option>
              <option value="D1 FCS">D1 FCS</option>
              <option value="D2">D2</option>
              <option value="NAIA">NAIA</option>
              <option value="Independent">MULTI-SCHOOL / INDEPENDENT</option>
            </select>
          </div>

          {/* Results count */}
          {(() => {
            const filtered = camps.filter(c => {
              const matchSearch = campSearch === "" || c.school.toLowerCase().includes(campSearch.toLowerCase()) || c.campName.toLowerCase().includes(campSearch.toLowerCase());
              const matchDiv = campDivFilter === "all" || c.division.startsWith(campDivFilter === "Independent" ? "Independent" : campDivFilter);
              return matchSearch && matchDiv;
            });
            const campTotalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
            const safeCampPage = Math.min(campPage, campTotalPages);
            const paginatedCamps = filtered.slice((safeCampPage - 1) * PAGE_SIZE, safeCampPage * PAGE_SIZE);
            return (
              <>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.35)", marginBottom: 12 }}>
                  Showing {Math.min(filtered.length, (safeCampPage - 1) * PAGE_SIZE + paginatedCamps.length)} of {filtered.length} camps (Page {safeCampPage} of {campTotalPages})
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Source Sans 3', sans-serif", minWidth: 800 }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid #FF6B00" }}>
                        {["School", "Division", "Camp", "Dates", "Details", "Cost", "Registration"].map(h => (
                          <th key={h} style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "#FF6B00", textAlign: "left", padding: "10px 12px", whiteSpace: "nowrap" }}>{h.toUpperCase()}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedCamps.map((c, i) => {
                        const divTop = c.division.split("/")[0].trim();
                        const divColor =
                          divTop === "D1 FBS" ? { bg: "rgba(96,165,250,0.1)", text: "#60A5FA" } :
                          divTop === "D1 FCS" ? { bg: "rgba(255,107,0,0.1)", text: "#FF6B00" } :
                          divTop === "D2" ? { bg: "rgba(167,139,250,0.1)", text: "#A78BFA" } :
                          divTop === "NAIA" ? { bg: "rgba(34,197,94,0.1)", text: "#22C55E" } :
                          { bg: "rgba(234,179,8,0.1)", text: "#EAB308" };
                        return (
                          <tr key={i} style={{ borderBottom: "1px solid rgba(255,107,0,0.07)", background: i % 2 === 0 ? "rgba(255,107,0,0.02)" : "transparent" }}>
                            <td style={{ padding: "11px 12px", fontWeight: 600, fontSize: 13, maxWidth: 200, lineHeight: 1.3 }}>{c.school}</td>
                            <td style={{ padding: "11px 12px", whiteSpace: "nowrap" }}>
                              <span style={{ background: divColor.bg, color: divColor.text, padding: "3px 8px", fontSize: 10, fontWeight: 700, letterSpacing: 1, fontFamily: "'Oswald', sans-serif" }}>{divTop}</span>
                            </td>
                            <td style={{ padding: "11px 12px", fontSize: 13, color: "rgba(245,240,232,0.8)", maxWidth: 180, lineHeight: 1.3 }}>{c.campName}</td>
                            <td style={{ padding: "11px 12px", fontSize: 13, color: "#FF6B00", whiteSpace: "nowrap", fontWeight: 600 }}>{c.dates}</td>
                            <td style={{ padding: "11px 12px", fontSize: 12, color: "rgba(245,240,232,0.5)", maxWidth: 160, lineHeight: 1.3 }}>{c.details}</td>
                            <td style={{ padding: "11px 12px", fontSize: 12, whiteSpace: "nowrap" }}>
                              {c.cost ? <span style={{ color: "#EAB308", fontWeight: 600 }}>{c.cost}</span> : <span style={{ color: "rgba(34,197,94,0.7)", fontSize: 11, fontWeight: 600 }}>FREE/TBD</span>}
                            </td>
                            <td style={{ padding: "11px 12px", fontSize: 12, color: "rgba(245,240,232,0.5)", maxWidth: 160, lineHeight: 1.3 }}>{c.registration}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {filtered.length === 0 && (
                  <div style={{ textAlign: "center", padding: "60px 0", fontFamily: "'Source Sans 3', sans-serif", color: "rgba(245,240,232,0.3)" }}>
                    No camps found. Try a different search or filter.
                  </div>
                )}
                <Pagination page={safeCampPage} totalPages={campTotalPages} onPage={setCampPage} />
              </>
            );
          })()}

          <div style={{ marginTop: 32, background: "rgba(255,107,0,0.08)", border: "1px solid rgba(255,107,0,0.2)", padding: "20px 28px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 24 }}>📍</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, letterSpacing: 1 }}>CAMP CHECKLIST</div>
              <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, color: "rgba(245,240,232,0.6)", marginTop: 4, lineHeight: 1.6 }}>Bring: cleats, gloves, completed questionnaire, printed schedule, water, positive attitude. Register online BEFORE attending. Walk-ups are usually not accepted.</div>
            </div>
          </div>
        </div>
      </section>


      {/* FOLLOW SECTION */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.08) 0%, rgba(255,107,0,0.03) 100%)", border: "1px solid rgba(255,107,0,0.2)", padding: "60px 48px", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #FF6B00, #FF9A40, #FF6B00)" }} />
          <div style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", fontSize: 280, fontWeight: 900, color: "rgba(255,107,0,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none", fontFamily: "'Oswald', sans-serif" }}>𝕏</div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,107,0,0.12)", border: "1px solid rgba(255,107,0,0.3)", padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: 3, color: "#FF6B00" }}>STAY CONNECTED</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, margin: "0 0 16px 0", letterSpacing: -1, lineHeight: 1.1 }}>
              FOLLOW US ON <span style={{ color: "#FF6B00" }}>X</span>
            </h2>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 17, color: "rgba(245,240,232,0.65)", maxWidth: 560, lineHeight: 1.7, margin: "0 auto 40px auto" }}>
              Get real-time exposure, recruiting tips, camp announcements, and connections with college coaches. Following <strong style={{ color: "#F5F0E8" }}>@DHSRecruiting</strong> puts Dunbar athletes directly in front of programs across the country.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 40 }}>
              {[
                { icon: "📣", label: "Exposure to college coaches" },
                { icon: "🏕️", label: "Camp & event announcements" },
                { icon: "🤝", label: "Recruiting connections" },
                { icon: "📊", label: "Tips & strategy updates" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,107,0,0.06)", border: "1px solid rgba(255,107,0,0.12)", padding: "10px 18px" }}>
                  <span style={{ fontSize: 16 }}>{item.icon}</span>
                  <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.7)", fontWeight: 600 }}>{item.label}</span>
                </div>
              ))}
            </div>
            <a
              href="https://x.com/DHSRecruiting"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "#FF6B00",
                color: "#0A0A0A",
                padding: "16px 36px",
                fontFamily: "'Oswald', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 2,
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              FOLLOW @DHSRECRUITING
            </a>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.3)", marginTop: 16, letterSpacing: 1 }}>x.com/DHSRecruiting</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "2px solid #FF6B00", background: "rgba(255,107,0,0.02)", padding: "60px 24px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <img src="data:image/jpeg;base64,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" alt="Dunbar Tigers" style={{ width: 56, height: 46, objectFit: "contain" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: 1 }}>DUNBAR TIGERS</div>
                <div style={{ fontSize: 11, letterSpacing: 3, color: "#FF6B00" }}>RECRUITING HQ</div>
              </div>
            </div>
            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, color: "rgba(245,240,232,0.4)", lineHeight: 1.6 }}>Dunbar High School<br />3800 Edison Avenue<br />Fort Myers, FL 33916</div>
          </div>
          <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: "rgba(245,240,232,0.3)", alignSelf: "flex-end" }}>© 2026 Dunbar Tigers Football. Built for student-athletes.</div>
        </div>
      </footer>
    </div>
  );
}
