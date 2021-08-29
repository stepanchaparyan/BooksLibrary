const UpdateBook = require("./UpdateBook")
// @ponicode
describe("submitForm", () => {
    let inst

    beforeEach(() => {
        inst = new UpdateBook.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.submitForm(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.submitForm(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.submitForm(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.submitForm(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.submitForm(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.submitForm(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
