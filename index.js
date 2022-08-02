function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setCode(team) {
    shuffleArray(Codes);
    let white = Codes[0];
    shuffleArray(Codes);
    let black = Codes[0];
    if (team === 'white') {
        $("#code").html(white);
    } else {
        $("#code").html(black);
    }
}

function setupGame(team) {
    let seed = $("input#seed").val();
    Math.seedrandom(seed);

    shuffleArray(Words);

    let words = [];

    if (team === 'white') {
        words = Words.slice(0,4).map((arr) => {shuffleArray(arr); return arr[0];} );
    } else {
        words = Words.slice(4,8).map((arr) => {shuffleArray(arr); return arr[0];} );
    }

    words.forEach((val, idx) => {
        $("#word"+idx).html(val);
    });
    setCode(team);
    $("#setup, #game").toggleClass('hide');
}
$("#white").click(() => {
    setupGame('white');
});
$("#black").click(() => {
    setupGame('black');
});
$("#next").click(() => {
    let turn = parseInt($("#turn").html());
    if (turn == 8) {
        alert("No hay más turnos, el juego terminó");
    } else if (confirm("Seguro que desea avanzar de turno?")) {
        $("#turn").html(turn + 1);
        $("#code").removeClass("show");
        setCode();
    }
});
$("#new").click(() => {
    window.location.reload();
});
$("#code-toggle").click(() => {
    $("#code").toggleClass("show");
});
$(() => {
    console.log("sever la eel euq le otuP ¿osoiruc sarim éuQ?")
});
