// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
	return new Proxy(target, {
		get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
	})
}

const position = withDefaultValue({
	x: 24,
	y: 42
}, 0)

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
	return new Proxy(target, {
		has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
		ownKeys: obj => Reflect.ownKeys(obj)
			.filter(p => !p.startsWith(prefix)),
		get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : undefined
	})
}

const data = withHiddenProps({
	name: 'Yevhen',
	age: 28,
	_uid: '51'
})

// Optimization
const IndexedArray = new Proxy(Array, {
	construct(target, [args]) {
		const index = {}
		args.forEach(item => index[item.id] = item)

		return new Proxy(new target(...args), {
			get(arr, prop) {
				switch (prop) {
					case 'push':
						return item => {
							index[item.id] = item
							arr[prop].call(arr, item)
						}
					case 'findById': return id => index[id]
					default:
						return arr[prop]
				}
			}
		})
	}
})

const users = new IndexedArray([
	{id: 1, name: 'Yevhen', job: 'Student', age: 28},
	{id: 2, name: 'Elena', job: 'Fullstack', age: 22},
	{id: 3, name: 'Victor', job: 'Backend', age: 23},
	{id: 4, name: 'Vasilisa', job: 'Teacher', age: 24}
])

