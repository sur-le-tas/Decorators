export function ClassSimple(arg: any = '') {
	console.log(`[Class] factory`, arg)

	return function decorator(constructor: new (...args: any[]) => any) {
		console.log(`[Class] "${constructor.name}"`)
	}
}

export function MethodSimple(arg: any = '') {
	console.log(`[Method] factory`)

	return function decorator(target: any, key: string | symbol, descriptor: PropertyDescriptor) {
		console.log(`[Method] transformation de "${key.toString()}", classe "${target.constructor.name}"`)
	}
}

export function ParameterSimple(arg: any = '') {
	console.log(`[Parameter] factory`, arg)

	return function decorator(target: any, key: string | symbol, parameterIndex: number) {
		console.log(`[Parameter] transformation de "${parameterIndex}", méthode "${key.toString()}", classe "${target.constructor.name}"`)
	}
}

export function PropertySimple(arg: any = '') {
	console.log(`[Property] factory`, arg)

	return function decorator(target: any, key: string | symbol) {
		console.log(`[Property] "${key.toString()}" from "${target.constructor.name}"`)
	}
}

export function GenericSimple(arg: any = '') {
	console.log(`[Generic] factory`, arg)

	return function decorator(...decoratorArgs: any[]) {
		switch (decoratorArgs.length) {
			case 1:
				console.log(`[Generic] Class`, decoratorArgs)
				break
			case 2:
				console.log(`[Generic] Property`, decoratorArgs)
				break
			case 3:
				if (typeof decoratorArgs[2] === 'number') {
					console.log(`[Generic] Parameter`, decoratorArgs)
				} else {
					console.log(`[Generic] Method`, decoratorArgs)
				}
				break
			default:
				throw Error('Not valid')
		}
	}
}
