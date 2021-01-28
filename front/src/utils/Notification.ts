function browserTemSuporteNotificao(): boolean {
    return 'Notification' in window
}

function permitidoEnviarNotificacao(): boolean {
    let temSuporte: boolean = browserTemSuporteNotificao()
    if (temSuporte)
        return Notification.permission === 'granted'

    return false
}

function diferenteDeNegadoParaNotificacao(): boolean {
    let temSuporte: boolean = browserTemSuporteNotificao()
    if (temSuporte)
        return Notification.permission !== 'denied'

    return false
}

function permitidoEnviarNotificacaoParameter(e: any, mensagem: string): void {
    if (e.permission === 'granted')
        criarNotificacao(mensagem)
}

function pedirPermissao(mensagem: string) {
    Notification.requestPermission((e: any) => {
        permitidoEnviarNotificacaoParameter(e, mensagem)
    })
}

function criarNotificacao(mensagem: string) {
    new Notification(mensagem)
}

export function notificar(mensagem: string) {
    let temSuporte: boolean = browserTemSuporteNotificao()
    if (temSuporte) {
        let jaPermitido: boolean = permitidoEnviarNotificacao()
        if (jaPermitido)
            criarNotificacao(mensagem)
        else if (diferenteDeNegadoParaNotificacao())
            pedirPermissao(mensagem)
        else
            console.log('Negado para enviar notificação...')
    }
}