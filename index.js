import { Words } from 'words';

$("#next").click(() => {
    let turn = parseInt($("#turn").html());
    if (turn == 8) {
        alert("No hay más turnos, el juego terminó");
    } else if (confirm("Seguro que desea avanzar de turno?")) {
        alert(words[0][0])
        $("#turn").html(turn + 1);
        $(".code").each(function () {
            let val = $(this).data("turn");
            if (val <= turn + 1) {
                $(this).addClass("show");
            }
        });
    }
});
$("#new").click(() => {
    window.location.href = "/new";
});
