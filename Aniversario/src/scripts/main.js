AOS.init();


const contaOTempo = setInterval(function() {
    const dataAniversario = new Date("Aug 23, 2024 00:00:00");
    const dataAgora = new Date();
    const timeStampAniversario = dataAniversario.getTime();
    const timeStampAgora = dataAgora.getTime();

    const converteDias = 1000 * 60 * 60 * 24;
    const converteHoras = 1000 * 60 * 60;
    const converteMinutos = 1000 * 60;

    const diferencaTimeStamp = timeStampAniversario - timeStampAgora;

    const diaAniver = Math.floor(diferencaTimeStamp / converteDias + 1);
    const horasAniver = Math.floor(diferencaTimeStamp % converteDias / converteHoras + 1);
    const minutosAniver = Math.floor(diferencaTimeStamp % converteHoras / converteMinutos + 1)
    const segundosAniver = Math.floor(diferencaTimeStamp % converteMinutos / 1000 + 1)
    console.log(segundosAniver);

    document.getElementById('aniversario').innerHTML = `${diaAniver}d ${horasAniver}h ${minutosAniver}min e ${segundosAniver}s`;

    if (timeStampAniversario < 0) {
        clearInterval();
        document.getElementById('aniversario').innerHTML = `Vixi, ja foi fi`;
    }
}, 1000)