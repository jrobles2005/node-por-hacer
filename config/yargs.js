const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion dela tarea por hacer'
        },
    })
    .command('actualizar', 'Actualiza el estado de completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion dela tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('listar', 'Lista todas las tareas')
    .command('borrar', 'Elimina una tarea existente', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por borrar'
        },
    })
    .help()
    .argv;

module.exports = {
    argv
}