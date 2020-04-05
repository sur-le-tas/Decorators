import 'reflect-metadata'
import colors from 'colors'
colors.enable()

global['log'] = console.log
declare global {
	const log: typeof console.log
}

import { ClassSimple, PropertySimple, MethodSimple, ParameterSimple, GenericSimple } from './decorators/simple'

@GenericSimple()
@ClassSimple()
class Demo {
	@PropertySimple()
	name: 'Jeremy' | 'Arthur'

	@PropertySimple()
	age?: number

	constructor(name = 'Arthur' as const) {
		this.name = name
	}

	@MethodSimple()
	greet(@ParameterSimple() greeting: string = 'Hello'): boolean {
		log(`${greeting} ${this.name}`)
		return true
	}
}

const demo = new Demo()

log('Reflect.ownKeys', Reflect.ownKeys(demo))

// La sérialisation et l'émission des types est basique :
// http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-4#3-basic-type-serialization_1

log('name:', 'design:type'.magenta, Reflect.getMetadata('design:type', demo, 'name'))
log("age: (n'existe pas au runtime)", 'design:type'.magenta, Reflect.getMetadata('design:type', demo, 'age'))

log('greet:', 'design:type'.magenta, Reflect.getMetadata('design:type', demo, 'greet'))
log('greet:', 'design:returntype'.magenta, Reflect.getMetadata('design:returntype', demo, 'greet'))
log('greet:', 'design:paramtype'.magenta, Reflect.getMetadata('design:paramtypes', demo, 'greet'))

log('name:', 'Reflect.get', Reflect.get(demo, 'name'))
log('greet:', 'Reflect.has', Reflect.has(demo, 'greet'))

// Reflect.deleteProperty(demo, 'name')
