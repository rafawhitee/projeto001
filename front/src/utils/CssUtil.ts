const getCssVar = (name: string): string | null => {
    if (name) {
        let styleComputed = getComputedStyle(document.documentElement)
        let propertyName: string | null = checkIfNameCssVarContainsInitial(name)
        if (propertyName) {
            let propertyValue = styleComputed.getPropertyValue(propertyName)
            return propertyValue.trim()
        }
    }
    return null
}

const checkIfNameCssVarContainsInitial = (name: string): string | null => {
    if (name && name.startsWith('--'))
        return name
    else if (name)
        return `--${name}`

    return null
}

export { getCssVar, checkIfNameCssVarContainsInitial }