
$(document).ready(function () {

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/audio/Volume Alpha - 03 - Subwoofer Lullaby.mp3');
    audioElement.load();

    var audioElementB = document.createElement('audio');
    audioElementB.setAttribute('src', 'assets/audio/pop.mp3');
    audioElementB.load();

    var images = ["assets/images/Lapizs_lazuli_dye.png",
        "assets/images/Emerald.png",
        "assets/images/Minecraft_diamond_ore.png",
        "assets/images/Ender_Pearl-1-.png"];
    var randomNum = "";
    var wins = 0;
    var losses = 0;
    var counter = 0;

    // var winAnimate = document.createElement('video');
    // winAnimate.setAttribute('src', 'assets/images/steve.mp4');
    // winAnimate.load();

    // var loseAnimate = document.createElement('video');
    // loseAnimate.setAttribute('src', 'assets/images/steveTryAgain.png');
    // loseAnimate.load();

    function randomNumber() {
        randomNum = Math.floor(Math.random() * 120) + 60;
    }

    function setCrystals() {
        for (i = 0; i < images.length; i++) {
            var newCrystal = $("<img>");
            newCrystal.addClass("crystal");
            newCrystal.attr("src", images[i]);
            newCrystal.attr("value", (Math.floor(Math.random() * 12) + 1));
            // newCrystal.attr("height", "200px");
            $("#crystalImages").append(newCrystal);
        }
    }

    function resetG() {
        $("#crystalImages").empty();
        setCrystals();
        randomNumber();
        counter = 0;
        $("#rGn").html("<p id='orderedWeightText'>" + "Weight Ordered: " + "</p>" + "<p id='orderedWeight'>" + randomNum + " lbs" + "</p>");
        $("#winLose").html("<p id='winTotal'>" + "Wins: " + wins + "</p>" + "<p id='lossTotal'>" + "Losses: " + losses + "</p>");
        $("#playerTotalNum").html("<p id='playerWeightText'>" + "You've collected: " + "</p>" + "<p id='playerWeight'>" + counter + " lbs" + "</p>");
        $(".crystal").hover(function () {
            $(this).css("opacity", "0.6");
            }, function () {
                $(this).css("opacity", "1");
            });
    }

    resetG();

    $("#btnWrap").on("click", ".btn", function() {
        $("#instructions").toggle();
    });

    $("#crystalImages").on("click", ".crystal", function() {
        $("#animate").html("");
        $("#animateText").html("");
        counter += parseInt($(this).attr("value"));
        audioElement.play();
        audioElementB.play();
        $("#playerTotalNum").html("<p id='playerWeightText'>" + "You've collected: " + "</p>" + "<p id='playerWeight'>" + counter + " lbs" + "</p>");
        if (counter == randomNum) {
            $("#animate").html("<img src='assets/images/dance.gif' height='150px'>");
            $("#animateText").html("<p id='anTextPosition'>" + " " + "You Win! Please Play Again" + "</p>");
            wins++;
            resetG();
        } else if (counter > randomNum) {
            $("#animate").html("<img src='assets/images/steveTryAgain.png' height='150px'>");
            $("#animateText").html("<p id='anTextPosition'>" + " " + "Sorry. Try Again!" + "</p>");
            losses++;
            resetG();
        };
    });
 });