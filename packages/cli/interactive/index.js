const prompts = require('prompts')
const { yellow, red } = require('kleur')
const { installAll } = require('../install')
const { cleanSession } = require('../clean')
const { copyBaseApp } = require('../create-app')
const { checkNodeVersion, checkOs } = require('../check')
const { jsonConfig } = require('../configuration')

const startInteractive = async () => {
    const questions = [
        {
            type: 'text',
            name: 'exampeOpt',
            message:
                '¿Quieres crear una app de ejemplo "example-app-example"? (Y/n)',
        },
        // {
        //     type: 'text',
        //     name: 'dependencies',
        //     message:
        //         '¿Quieres actualizar las librerías "whatsapp-web.js"? (Y/n)',
        // },
        {
            type: 'text',
            name: 'cleanTmp',
            message: '¿Quieres limpiar la sesión del bot? (Y/n)',
        },
        {
            type: 'multiselect',
            name: 'providerWs',
            message: '¿Cuál proveedor de whatsapp quieres utilizar?',
            choices: [
                { title: 'whatsapp-web.js', value: 'whatsapp-web.js' },
                { title: 'API Oficial (Meta)', value: 'meta', disabled: true },
                { title: 'Twilio', value: 'twilio', disabled: true },
            ],
            max: 1,
            hint: 'Espacio para seleccionar',
            instructions: '↑/↓',
        },
        {
            type: 'multiselect',
            name: 'providerDb',
            message: '¿Cuál base de datos quieres utilizar?',
            choices: [
                { title: 'JSONFile', value: 'json' },
                { title: 'MySQL', value: 'mysql', disabled: true },
                { title: 'Mongo', value: 'mongo', disabled: true },
            ],
            max: 1,
            hint: 'Espacio para seleccionar',
            instructions: '↑/↓',
        },
    ]

    console.clear()
    checkNodeVersion()
    checkOs()
    const onCancel = () => {
        console.log('¡Proceso cancelado!')
        return true
    }
    const response = await prompts(questions, { onCancel })
    const {
        dependencies = '',
        cleanTmp = '',
        exampeOpt = '',
        providerDb = [],
        providerWs = [],
    } = response
    /**
     * Question
     * @returns
     */
    const installOrUdpateDep = async () => {
        const answer = dependencies.toLowerCase() || 'n'
        if (answer.includes('n')) return true

        if (answer.includes('y')) {
            await installAll()
            return true
        }
    }

    /**
     * Question
     * @returns
     */
    const cleanAllSession = async () => {
        const answer = cleanTmp.toLowerCase() || 'n'
        if (answer.includes('n')) return true

        if (answer.includes('y')) {
            await cleanSession()
            return true
        }
    }

    const createApp = async () => {
        const answer = exampeOpt.toLowerCase() || 'n'
        if (answer.includes('n')) return true

        if (answer.includes('y')) {
            await copyBaseApp()
            return true
        }
    }

    const vendorProvider = async () => {
        if (!providerWs.length) {
            console.log(
                red(
                    `Debes seleccionar un proveedor de whatsapp. Tecla [Space] para seleccionar`
                )
            )
            process.exit(1)
        }
        console.log(yellow(`'Debería crear una carpeta en root/provider'`))
        return true
    }

    const dbProvider = async () => {
        const answer = providerDb
        if (!providerDb.length) {
            console.log(
                red(
                    `Debes seleccionar un proveedor de base de datos. Tecla [Space] para seleccionar`
                )
            )
            process.exit(1)
        }
        if (answer === 'json') {
            console.log('Debería crear una carpeta en root/data')
            return 1
        }
    }

    await createApp()
    await installOrUdpateDep()
    await cleanAllSession()
    await vendorProvider()
    await dbProvider()
    await jsonConfig()
}

module.exports = { startInteractive }
