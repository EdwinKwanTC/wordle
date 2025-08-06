import { isAsciiChar } from './isAsciiChar'

describe('Testing truthy values for isAsciiCar function', () => {
    it('Testing value for single char a', () => {
        const result = isAsciiChar('a')
        expect(result).toBe(true)
    })

    it('Testing value for single char c', () => {
        const result = isAsciiChar('c')
        expect(result).toBe(true)
    })
})

describe('Testing falsy values for isAsciiCar function', () => {
    it('Testing value for word apple', () => {
        const result = isAsciiChar('apple')
        expect(result).toBe(false)
    })

    it('Testing value for non char !', () => {
        const result = isAsciiChar('!')
        expect(result).toBe(false)
    })
})
