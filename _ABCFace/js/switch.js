$(function() {
  // When clicking the button, play the sound and switch pictures.
  $("#p").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/P_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/P1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/P2.jpg">');
    }, 200);
  });
  $("#b").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/B.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/B1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/B2.jpg">');
    }, 200);
  });
  $("#a").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/A_Short.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/A_Short.jpg">');
  });
  $("#ae").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/A_Long.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/A_Long.jpg">');
  });
  $("#t").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/T_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/T1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/T2.jpg">');
    }, 200);
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/T3.jpg">');
    }, 200);
  });
  $("#d").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/D_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/D1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/D2.jpg">');
    }, 200);
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/D3.jpg">');
    }, 200);
  });
  $("#e").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/E_Short.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/E_Short.jpg">');
  });
  $("#ee").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/E_Long.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/E_Long.jpg">');
  });
  $("#k").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/K_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/K1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/K2.jpg">');
    }, 200);
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/K3.jpg">');
    }, 200);
  });
  $("#g").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/G_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/G1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/G2.jpg">');
    }, 200);
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/G3.jpg">');
    }, 200);
  });
  $("#i").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/I_Short.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/I_Short.jpg">');
  });
  $("#ie").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/I_Long.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/I_Long1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/I_Long2.jpg">');
    }, 200);
  });
  $("#f").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/F_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/F1.jpg">');
  });
  $("#v").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/V_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/V1.jpg">');
  });
  $("#o").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/O_Short.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/O_Short.jpg">');
  });
  $("#oe").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/O_Long.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/O_Long1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/O_Long2.jpg">');
    }, 200);
  });
  $("#s").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/S_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/S1.jpg">');
  });
  $("#z").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/Z_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/Z1.jpg">');
  });
  $("#u").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/U_Short.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/U_Short.jpg">');
  });
  $("#ue").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/U_Long.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/UE1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/UE2.jpg">');
    }, 200);
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/UE3.jpg">');
    }, 200);
  });
  $("#sh").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/SH.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/SH1.jpg">');
  });
  $("#ou").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/OW.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/OU1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/OU2.jpg">');
    }, 200);
  });
  $("#ow").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/OW.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/OW1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/OW2.jpg">');
    }, 200);
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/OW3.jpg">');
    }, 200);
  });
  $("#ch").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/CH.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/Ch1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/Ch2.jpg">');
    }, 200);
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/Ch3.jpg">');
    }, 200);
  });
  $("#j").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/J_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/J1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/J2.jpg">');
    }, 200);
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/J3.jpg">');
    }, 200);
  });
  $("#oi").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/OY.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/OI1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/OI2.jpg">');
    }, 200);
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/OI3.jpg">');
    }, 200);
  });
  $("#oy").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/OY.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/OY1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/OY2.jpg">');
    }, 200);
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/OY3.jpg">');
    }, 200);
  });
  $("#th").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/THsoft.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/TH_Soft.jpg">');
  });
  $("#th2").on("click", function() {
    $(this).append(
      '<audio autoplay="autoplay" src="Audios/THhard.mp3"></audio>'
    );
    $("#select").replaceWith('<img id="select" src="Images/TH_Hard.jpg">');
  });
  $("#au").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/AW.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/AU.jpg">');
  });
  $("#aw").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/AW.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/AW.jpg">');
  });
  $("#l").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/L_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/L1.jpg">');
  });
  $("#r").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/R_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/R1.jpg">');
  });
  $("#h").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/H_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/H1.jpg">');
  });
  $("#w").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/W_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/W1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/W2.jpg">');
    }, 200);
  });
  $("#ar").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/AR.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/AR1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/AR2.jpg">');
    }, 200);
  });
  $("#or").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/OR.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/OR1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/OR2.jpg">');
    }, 200);
  });
  $("#m").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/M_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/M1.jpg">');
  });
  $("#n").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/N_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/N1.jpg">');
  });
  $("#ng").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/NG_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/NG1.jpg">');
    setTimeout(function() {
      $("#select").replaceWith('<img id="select" src="Images/NG2.jpg">');
    }, 200);
  });
  $("#ir").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/R_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/IR.jpg">');
  });
  $("#ur").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/R_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/UR.jpg">');
  });
  $("#er").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/R_.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/ER.jpg">');
  });
  $("#ooA").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/OO_A.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/OO_A_Food.jpg">');
  });
  $("#ooB").on("click", function() {
    $(this).append('<audio autoplay="autoplay" src="Audios/OO_B.mp3"></audio>');
    $("#select").replaceWith('<img id="select" src="Images/OO_B_Look.jpg">');
  });
});
