import {describe, it, expect} from "vitest"
function add(x,y){
    return x + y
}
describe("addition", () => {
    it("adds two numbers", () => {
        
        expect(add(1, 2)).toBe(3)
    })
})