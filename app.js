    let calculo = (prompt('quiere entradas 2d o 3d?' ))
switch(calculo){
    case '3d':
        let entradas3d = parseInt(prompt('ingrese cantidad entradas 3d ($550)'))
        document.write('El precio total cine 3d es $'+(entradas3d * 550))
        break;
        case '2d':
            let entradas2d = parseInt(prompt('ingrese cantidad entradas 2d($330)'))
            document.write('el precio total cine 2d es $'+(entradas2d * 330))
            break;
            default:
                document.write('no se puede')
}
